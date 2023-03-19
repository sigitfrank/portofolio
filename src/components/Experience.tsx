import { ReactElement } from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import '../css/experience.css'
import { experienceList } from '../namespace'

function Experience(): ReactElement {
  const { company } = useContext(AppContext)
  return (<>
    <svg style={{ rotate: '180deg' }} id="experience" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(0, 0, 0, 0.55)" fillOpacity="1" d="M0,256L60,218.7C120,181,240,107,360,85.3C480,64,600,96,720,128C840,160,960,192,1080,181.3C1200,171,1320,117,1380,90.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
    <div className='section experience'>
      <div className="container">

        <h1>Professional Experiences</h1>
        <div className="gallery">
          {experienceList.map((experience, i) => <div className={`card on_hover ${experience.label === company.getCompany.label ? 'active' : ''}`} onClick={() => company.setCompany(experience)} key={i}>
            <div className="card-header">
              <img src={experience.img} alt="exp" />
            </div>
            <div className="card-body">
              <a href={experience.link} rel="noreferrer" target={'_blank'}>{experience.label}</a>
              <div className="experience-detail">
                <p>{experience.position}</p>
                <p>{experience.status}</p>
                <p>{experience.duration}</p>
              </div>
            </div>
          </div>)}
        </div>
      </div>
    </div >
  </>)
}

export default Experience