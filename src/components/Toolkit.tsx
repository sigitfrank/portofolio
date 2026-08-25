import { ReactElement } from 'react'
import { experienceList, profileDescription, shippedCount, skillGroups, yearsOfExperience } from '../namespace'
import { useReveal } from '../hooks/useMotion'

function Toolkit(): ReactElement {
  const ref = useReveal<HTMLDivElement>()

  const stats = [
    { value: `${yearsOfExperience}+`, label: 'Years building for the web' },
    { value: String(experienceList.length), label: 'Companies shipped for' },
    { value: String(shippedCount), label: 'Features & products delivered' },
    { value: '3.81', label: 'GPA, Computer Science' },
  ]

  return (
    <section className="section" id="toolkit" ref={ref}>
      <div className="wrap">
        <div className="masthead">
          <span className="masthead__index">02</span>
          <h2 className="masthead__title">Toolkit</h2>
          <span className="masthead__rule" />
        </div>

        <p className="prose reveal" style={{ marginBottom: '3rem' }}>
          {profileDescription}
        </p>

        <div className="stats reveal" style={{ marginBottom: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat__value">{s.value}</div>
              <div className="stat__label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="skills">
          {skillGroups.map((group) => (
            <div className="skillgroup reveal" key={group.name}>
              <div>
                <div className="skillgroup__head">
                  <h3 className="skillgroup__name">{group.name}</h3>
                  <span className="skillgroup__count">{String(group.items.length).padStart(2, '0')}</span>
                </div>
                <p className="label" style={{ letterSpacing: '0.08em', textTransform: 'none' }}>
                  {group.note}
                </p>
              </div>

              <ul className="chips">
                {group.items.map((item) => (
                  <li key={item.label + group.name}>
                    <a className="chip" href={item.link} target="_blank" rel="noreferrer">
                      {item.icon}
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Toolkit
