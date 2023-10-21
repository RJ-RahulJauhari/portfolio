import React from 'react'
import "./Project.css"
import ProjectCard from './ProjectCard'


const Project = () => {
  return (
    <div className='project-container'>
      <div className='project-header'>
        <h1>Projects</h1>
        <h3>Have a look at my projects..</h3>
      </div>
      <div>
        <ProjectCard></ProjectCard>
      </div>
    </div>
  )
}

export default Project
