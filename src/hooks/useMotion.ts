import { useEffect, useRef, useState } from 'react'

/**
 * Adds `.is-in` to any `.reveal` element inside the returned ref once it
 * scrolls into view, with an optional stagger between siblings.
 * Elements are only revealed once — nothing re-hides on scroll up.
 */
export function useReveal<T extends HTMLElement>(stagger = 90) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const targets = Array.from(root.querySelectorAll<HTMLElement>('.reveal'))
    if (!targets.length) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      targets.forEach((el) => el.classList.add('is-in'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          const group = targets.filter((t) => t.parentElement === el.parentElement)
          const index = Math.max(0, group.indexOf(el))
          el.style.setProperty('--reveal-delay', `${index * stagger}ms`)
          el.classList.add('is-in')
          observer.unobserve(el)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [stagger])

  return ref
}

/** Tracks which section is currently in view, for the rail index. */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { threshold: [0.2, 0.5], rootMargin: '-20% 0px -40% 0px' }
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids.join('|')])

  return active
}

/** Reading progress, 0 → 1, written straight to a CSS custom property. */
export function useScrollProgress() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const el = ref.current
      if (!el) return
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? window.scrollY / max : 0
      el.style.setProperty('--p', String(Math.min(1, Math.max(0, progress))))
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return ref
}
