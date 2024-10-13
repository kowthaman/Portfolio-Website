import React from 'react'
import Project_1 from '../assets/project_1.jpg'
import Project_2 from '../assets/project_2.png'

const Projects = () => {
  return (
    <section id='projects' className='flex flex-col px-5 py-5 bg-secondary'>
        <div className='w-full pb-5'>
            <div className='flex flex-col px-10 text-white'>
                <h1 className='text-4xl mt-4 mb-4'>Projects</h1>
                <p>These are my projects please click to view the projects on github</p>
            </div>
        </div>
        <div className='w-full px-10'>
            <div className='flex flex-col md:flex-row gap-10'>
                <a href='https://github.com/kowthaman/E-Commerce-App'>
                    <div className='relative text-white'>
                        <img src={Project_1} alt="Project_1" className='h-[220px] w-[300px]'/>
                        <div className='project-div-style'>
                            <p className='text-center px-5 py-24'>E-Commerce Website</p>
                        </div>
                    </div>
                </a>
                <a href='https://github.com/kowthaman/DoctorBooking'>
                    <div className='relative text-white'>
                        <img src={Project_2} alt="Project_2" className='h-[220px] w-[300px]'/>
                        <div className='project-div-style'>
                            <p className='text-center px-5 py-24'>Doctor Booking Website</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Projects