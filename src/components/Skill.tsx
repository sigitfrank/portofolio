import { ReactElement } from 'react'
import '../css/skill.css'
import { skillList } from '../namespace'

function Skill(): ReactElement {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" id='skill' viewBox="0 0 1440 320"><path fill="rgba(0, 0, 0, 0.55)" fillOpacity="1" d="M0,224L48,224C96,224,192,224,288,192C384,160,480,96,576,85.3C672,75,768,117,864,149.3C960,181,1056,203,1152,224C1248,245,1344,267,1392,277.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      <div className='section skill'>
        <div className="container">
          <h1>Mostly What I can do</h1>
          <div className="gallery">
            {skillList.map((skill, i) => <div className="card on_hover card__reveal" key={i}>
              <div className="card-header">{skill.icon}</div>
              <div className="card-body">
                <a href={skill.link} rel="noreferrer" target={'_blank'}>{skill.label}</a>
              </div>
            </div>)}
          </div>
        </div>
      </div>
    </>
  )
}

export default Skill