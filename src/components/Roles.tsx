import { ReactElement, useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { experienceList } from '../namespace'
import { useReveal } from '../hooks/useMotion'

function Roles(): ReactElement {
  const { company } = useContext(AppContext)
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="section" id="roles" ref={ref}>
      <div className="wrap">
        <div className="masthead">
          <span className="masthead__index">03</span>
          <h2 className="masthead__title">Roles</h2>
          <span className="masthead__rule" />
        </div>

        <p className="prose reveal" style={{ marginBottom: '2.5rem' }}>
          Pick a role to open its record below.
        </p>

        <div className="roles">
          {experienceList.map((exp) => {
            const active = exp.label === company.getCompany.label
            return (
              <div className="role-cell reveal" key={exp.label}>
                <button
                  type="button"
                  aria-pressed={active}
                  onClick={() => company.setCompany(exp)}
                  className={`role ${active ? 'is-active' : ''}`}
                >
                  <span className="role__top">
                    <img className="role__logo" src={exp.img} alt="" />
                    <span className="role__marker">{exp.marker}</span>
                  </span>

                  <span className="role__name">{exp.label}</span>

                  <span className="role__meta">
                    <span className="position">
                      {exp.position} · {exp.status}
                    </span>
                    <span>{exp.duration}</span>
                  </span>
                </button>

                <a className="role__site" href={exp.link} target="_blank" rel="noreferrer">
                  Visit site ↗
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Roles
