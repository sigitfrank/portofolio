import { ReactElement } from 'react'
import { links } from '../namespace'
import { useActiveSection, useScrollProgress } from '../hooks/useMotion'

const ids = links.map((l) => l.value)

function Rail(): ReactElement {
  const active = useActiveSection(ids)
  const progressRef = useScrollProgress()

  return (
    <>
      <div className="progress" aria-hidden="true" ref={progressRef}>
        <div className="progress__bar" />
      </div>

      <nav className="rail" aria-label="Sections">
        <a className="rail__mark" href="#intro">
          STW<span>.</span>
        </a>

        <ul className="rail__index">
          {links.map((link, i) => (
            <li key={link.value}>
              <a
                href={`#${link.value}`}
                data-name={link.label}
                aria-label={link.label}
                aria-current={active === link.value ? 'true' : undefined}
                className={`rail__link ${active === link.value ? 'is-active' : ''}`}
              >
                {String(i + 1).padStart(2, '0')}
              </a>
            </li>
          ))}
        </ul>

        <span className="rail__foot">Jakarta · ID</span>
      </nav>
    </>
  )
}

export default Rail
