import React, { useState, useEffect, useRef, useCallback } from 'react'
import { experienceList, projects, skillGroups, awards, education, socials, email, fullName, role } from '../../namespace'
import '../../styles/tokens.css'
import '../../styles/base.css'
import '../../styles/dev.css'

interface Message {
    type: 'user' | 'system'
    text: string
    isTyping?: boolean
}

const COMMANDS = ['skills', 'roles', 'work', 'awards', 'education', 'contact', 'help', 'clear'] as const

const WELCOME = `${fullName} — ${role}
Type a command, or tap one below.

  skills      the stack, grouped by use
  roles       where I've worked
  work        what I shipped there
  awards      recognition
  education   the paper trail
  contact     how to reach me
  clear       wipe the screen
  help        show this again`

/* ---- responses built from the same data the site uses ---- */
const buildSkills = (): string =>
    skillGroups
        .map((g) => `${g.name.toUpperCase()}  — ${g.note}\n  ${g.items.map((i) => i.label).join(' · ')}`)
        .join('\n\n')

const buildRoles = (): string =>
    experienceList
        .map((e) => `${e.label}  [${e.marker}]\n  ${e.position} · ${e.status}\n  ${e.duration}\n  ${e.link}`)
        .join('\n\n')

const buildWork = (): string =>
    projects
        .map((p, i) => {
            const num = String(i + 1).padStart(2, '0')
            const duties = p.jobdesc.map((d) => `  - ${d}`).join('\n')
            const shipped = p.list.map((l) => `  · ${l}`).join('\n')
            return `${num}  ${p.label}\n  ${p.summary}\n\n${duties}\n\n  SHIPPED (${p.list.length}):\n${shipped}`
        })
        .join('\n\n')

const buildContact = (): string =>
    [`email    ${email}`, ...socials.filter((s) => s.label !== 'Email').map((s) => `${s.label.toLowerCase().padEnd(9)}${s.link}`)].join('\n')

const responses: Record<string, string> = {
    skills: buildSkills(),
    roles: buildRoles(),
    work: buildWork(),
    awards: awards.map((a) => `  · ${a}`).join('\n'),
    education: `  ${education.school}\n  ${education.degree}\n  ${education.detail}`,
    contact: buildContact(),
    help: WELCOME,
}

/** Types text out one character at a time, then reports completion. */
const TypingMessage: React.FC<{ text: string; onDone: () => void }> = ({ text, onDone }) => {
    const [shown, setShown] = useState('')

    useEffect(() => {
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (reduced) {
            setShown(text)
            onDone()
            return
        }

        let i = 0
        const step = Math.max(1, Math.round(text.length / 320))
        const timer = window.setInterval(() => {
            i += step
            setShown(text.slice(0, i))
            if (i >= text.length) {
                window.clearInterval(timer)
                onDone()
            }
        }, 12)

        return () => window.clearInterval(timer)
    }, [text])

    return <pre className="term__out">{shown}</pre>
}

interface DevModeProps {
    onExit?: () => void
}

const DevMode: React.FC<DevModeProps> = ({ onExit }) => {
    const [input, setInput] = useState('')
    const [busy, setBusy] = useState(false)
    const [history, setHistory] = useState<string[]>([])
    const [messages, setMessages] = useState<Message[]>([{ type: 'system', text: WELCOME }])
    const endRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }, [messages])

    const run = useCallback((raw: string) => {
        const cmd = raw.toLowerCase().trim()
        setMessages((prev) => [...prev, { type: 'user', text: raw }])
        setHistory((prev) => [raw, ...prev].slice(0, 20))

        if (cmd === 'clear') {
            window.setTimeout(() => setMessages([{ type: 'system', text: 'Screen cleared. Type help for commands.' }]), 200)
            return
        }

        const answer = responses[cmd]
        if (answer) {
            setBusy(true)
            setMessages((prev) => [...prev, { type: 'system', text: answer, isTyping: true }])
        } else {
            setMessages((prev) => [
                ...prev,
                { type: 'system', text: `${raw}: command not found. Type help to see what's available.` },
            ])
        }
    }, [])

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!input.trim() || busy) return
        run(input)
        setInput('')
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'ArrowUp' && history.length) {
            e.preventDefault()
            setInput(history[0])
        }
    }

    return (
        <div className="term">
            <div className="term__grid">
                {/* ---- identity card ---- */}
                <aside className="term__card">
                    <div className="term__portrait">
                        <img src="/assets/me-2.jpg" alt={fullName} />
                    </div>

                    <h1 className="term__name">{fullName}</h1>
                    <p className="term__role">{role}</p>

                    <a className="term__mail" href={`mailto:${email}`}>
                        {email}
                    </a>

                    <ul className="term__socials">
                        {socials
                            .filter((s) => s.label !== 'Email')
                            .map((s) => (
                                <li key={s.label}>
                                    <a href={s.link} target="_blank" rel="noreferrer" title={s.label} aria-label={s.label}>
                                        {s.icon}
                                    </a>
                                </li>
                            ))}
                    </ul>

                    <button
                        type="button"
                        className="term__exit"
                        onClick={() => (onExit ? onExit() : (window.location.href = '/'))}
                    >
                        ← Back to the full site
                    </button>
                </aside>

                {/* ---- terminal ---- */}
                <section className="term__panel">
                    <header className="term__bar">
                        <span className="term__dots" aria-hidden="true">
                            <i /><i /><i />
                        </span>
                        <span className="term__path">sigit@portfolio: ~</span>
                    </header>

                    <div className="term__feed">
                        {messages.map((m, i) =>
                            m.type === 'user' ? (
                                <p className="term__cmd" key={i}>
                                    <span className="term__prompt">$</span>
                                    {m.text}
                                </p>
                            ) : m.isTyping && i === messages.length - 1 ? (
                                <TypingMessage key={i} text={m.text} onDone={() => setBusy(false)} />
                            ) : (
                                <pre className="term__out" key={i}>
                                    {m.text}
                                </pre>
                            )
                        )}
                        <div ref={endRef} />
                    </div>

                    <div className="term__chips">
                        {COMMANDS.map((c) => (
                            <button key={c} type="button" className="term__chip" disabled={busy} onClick={() => run(c)}>
                                {c}
                            </button>
                        ))}
                    </div>

                    <form className="term__input" onSubmit={onSubmit}>
                        <span className="term__prompt">$</span>
                        <input
                            ref={inputRef}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={onKeyDown}
                            placeholder={busy ? 'working…' : 'type a command'}
                            aria-label="Terminal command"
                            autoFocus
                            disabled={busy}
                            spellCheck={false}
                            autoComplete="off"
                        />
                        <span className={`term__caret ${busy ? 'is-busy' : ''}`} aria-hidden="true" />
                    </form>
                </section>
            </div>
        </div>
    )
}

export default DevMode
