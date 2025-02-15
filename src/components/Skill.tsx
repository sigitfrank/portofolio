import { ReactElement } from 'react'
import '../css/skill.css'
import { reactTiltOptions, skillList } from '../namespace'
import { Tilt } from 'react-tilt'


function Skill(): ReactElement {
  return (
    <>
      <div className='section skill scroll-animate'>
        <div className="container">
          <h1 className='fw-bold'>Mostly What I can do</h1>
          <div className="gallery">
            {skillList.map((skill, i) => <Tilt options={reactTiltOptions} className="card on_hover card__reveal" key={i}>
              <div className="card-header">{skill.icon}</div>
              <div className="card-body">
                <a href={skill.link} rel="noreferrer" target={'_blank'}>{skill.label}</a>
              </div>
            </Tilt>)}
          </div>
        </div>
      </div>
    </>
  )
}

export default Skill