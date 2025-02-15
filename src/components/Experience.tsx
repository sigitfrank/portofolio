import { ReactElement } from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import '../css/experience.css'
import { experienceList } from '../namespace'

function Experience(): ReactElement {
  const { company } = useContext(AppContext)
  return (<>
    <div className='section experience scroll-animate'>
      <div className="container">

        <h1 className='fw-bold'>Professional Experiences</h1>
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