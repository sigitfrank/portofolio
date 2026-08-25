import { ReactElement, useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { projects } from '../namespace'
import { useReveal } from '../hooks/useMotion'

function Work(): ReactElement {
  const { company } = useContext(AppContext)
  const ref = useReveal<HTMLDivElement>()

  const project = projects.find((p) => p.label === company.getCompany.label) ?? projects[0]

  return (
    <section className="section" id="work" ref={ref}>
      <div className="wrap">
        <div className="masthead">
          <span className="masthead__index">04</span>
          <h2 className="masthead__title">Work</h2>
          <span className="masthead__rule" />
        </div>

        {/* keyed on the label so the panel re-animates when the role changes */}
        <article className="dossier dossier--enter" key={project.label}>
          <div className="dossier__bar">
            <h3 className="dossier__title">
              <img src={project.img} alt="" />
              {project.label}
            </h3>
            <span className="label label--brass">Record {String(projects.indexOf(project) + 1).padStart(2, '0')}</span>
          </div>

          <div className="dossier__body">
            <div className="dossier__col">
              <div className="dossier__colhead">
                <span className="label">What I did</span>
              </div>
              <p className="prose" style={{ marginBottom: '1.5rem' }}>
                {project.summary}
              </p>
              <ul className="duties">
                {project.jobdesc.map((duty) => (
                  <li key={duty}>
                    <span>{duty}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="dossier__col">
              <div className="dossier__colhead">
                <span className="label">Shipped</span>
                <span className="label label--brass">{String(project.list.length).padStart(2, '0')} total</span>
              </div>
              <ul className="shipped">
                {project.list.map((item) => (
                  <li key={item}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Work
