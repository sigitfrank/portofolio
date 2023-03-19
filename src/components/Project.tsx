import { useContext, ReactElement } from 'react'
import { AppContext } from '../context/AppContext'
import '../css/project.css'
import { projects } from '../namespace'
import { AiOutlineProject, AiOutlineOrderedList } from 'react-icons/ai'
import { BsArrowDown } from 'react-icons/bs'
function Project(): ReactElement {

  const { company } = useContext(AppContext)

  return (<>
    <svg xmlns="http://www.w3.org/2000/svg" id="project" viewBox="0 0 1440 320"><path fill="rgba(0, 0, 0, 0.55)" fillOpacity="1" d="M0,256L60,218.7C120,181,240,107,360,85.3C480,64,600,96,720,128C840,160,960,192,1080,181.3C1200,171,1320,117,1380,90.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
    <div className='section project'>
      <div className="container">
        <h1><span>What I have built and done for {company.getCompany.label}</span> <img src={company.getCompany.img} alt="project" /></h1>
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