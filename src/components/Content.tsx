import React, { ReactElement } from 'react'
import '../css/content.css'
import Profile from './Profile'
import Skill from './Skill'
import Experience from './Experience'
import Project from './Project'
import Contact from './Contact'

function Content(): ReactElement {
  return (
    <div className='content'>
      <Profile />
      <Skill />
      <Experience />
      <Project />
      <Contact />
    </div>
  )
}

export default Content