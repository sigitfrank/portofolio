import { useContext, ReactElement } from 'react'
import { AppContext } from '../context/AppContext'
import '../css/project.css'
import { projects } from '../namespace'
import { AiOutlineProject, AiOutlineOrderedList } from 'react-icons/ai'
import { BsArrowDown } from 'react-icons/bs'
function Project(): ReactElement {

  const { company } = useContext(AppContext)

  return (<>
    <div className='section project scroll-animate'>
      <div className="container">
        <div className='company-logo'>
          <img src={company.getCompany.img} alt="project" />
        </div>
        <h1 className='fw-bold'><span>What I have done for {company.getCompany.label}</span></h1>
        <div className="gallery">
          {projects.map((project, i) => project.label === company.getCompany.label && <div className="card" key={i}>
            <div className="card-body">
              <div className="jobdesc">
                <h3><AiOutlineOrderedList /> Job Description :</h3>
                <BsArrowDown />
                <ul>
                  {project.jobdesc.map((l, j) => {
                    return <li key={j}>{l}</li>
                  })}
                </ul>
              </div>

              <div className="project-list">
                <div className="header">
                  <h3><AiOutlineProject /> Projects :</h3>
                  <h3>Total: {project.list.length}</h3>
                </div>
                <BsArrowDown />
                <ul>
                  {project.list.map((l, j) => {
                    return <li key={j}>{l}</li>
                  })}
                </ul>
              </div>
            </div>
          </div>)}
        </div>
      </div>
    </div>
  </>)
}

export default Project