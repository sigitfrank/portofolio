import { ReactElement } from 'react'
import { awards, education, email, organizations, socials } from '../namespace'
import { useReveal } from '../hooks/useMotion'

function Contact(): ReactElement {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="section" id="contact" ref={ref}>
      <div className="wrap">
        <div className="masthead">
          <span className="masthead__index">05</span>
          <h2 className="masthead__title">Contact</h2>
          <span className="masthead__rule" />
        </div>

        <div className="contact reveal">
          <div>
            <h3 className="contact__title">
              Got something
              <br />
              worth building?
            </h3>
            <a className="contact__mail" href={`mailto:${email}?subject=Hi Sigit`}>
              {email}
            </a>
          </div>

          <ul className="socials">
            {socials.map((s) => (
              <li key={s.label}>
                <a className="social" href={s.link} target="_blank" rel="noreferrer">
                  <span className="social__left">
                    {s.icon}
                    {s.label}
                  </span>
                  <span>{s.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="stats reveal" style={{ marginTop: 'clamp(2rem, 5vw, 3.5rem)' }}>
          <div className="stat">
            <span className="label label--brass">Education</span>
            <p style={{ marginTop: '0.75rem' }}>{education.school}</p>
            <p className="prose">{education.degree}</p>
            <p className="prose">{education.detail}</p>
          </div>

          <div className="stat">
            <span className="label label--brass">Recognition</span>
            <ul style={{ marginTop: '0.75rem' }}>
              {awards.map((a) => (
                <li className="prose" key={a} style={{ marginBottom: '0.4rem' }}>
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <div className="stat">
            <span className="label label--brass">Organizations</span>
            <ul style={{ marginTop: '0.75rem' }}>
              {organizations.map((o) => (
                <li className="prose" key={o} style={{ marginBottom: '0.4rem' }}>
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
