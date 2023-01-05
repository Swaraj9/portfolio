import React from 'react'
import '../styles/projects.css'
import Slider from './Slider'

const Project = () => {
    return (
        <div className='project'></div>
    )
}

const Projects = () => {
  return (
    <div className='projects'>
        <div className='projectsMain'>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
        </div>
        <Slider title="Projects" variant="secondary"/>
    </div>
  )
}

export default Projects