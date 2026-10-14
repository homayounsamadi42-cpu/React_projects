import React from 'react'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <div className='max-w-full mx-5 md:mx-20 my-5  lg:mx-100 lg:my-10 md:my-80'>
        <div className='flex justify-between my-4'>
            <h1 className='text-2xl font-bold'>Latest products</h1>
            <p >View all</p>
        </div>
        <hr className='text-yellow-500' />
        <ProjectCard/>
    </div>
  )
}

export default Projects;
