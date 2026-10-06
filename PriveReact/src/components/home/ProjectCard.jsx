import React from 'react'
import projects from "../../data/projects";
function ProjectCard() {
  return (
    <div>
        <div className="my-4">
            <div className="cardscontainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((item)=>(
                <div className='group rounded-md shadow-sm hover:cursor-pointer'>
                    <div >
                        <img className='group-hover:bg-black/40 w-full' src={item.img} alt={item.title} />
                        <div className='group p-1.5'>
                            <div className='flex justify-between'>
                                <h3 className='group-hover:text-orange-500  text-2xl font-bold'>{item.title}</h3>
                                <span className='text-orange-500 opacity-0 group-hover:opacity-100'>↗️</span>
                            </div>
            
                          <p className='group-hover:text-gray-700'>{item.detail}</p>  
                        </div>

                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ProjectCard
