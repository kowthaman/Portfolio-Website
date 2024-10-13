import React from 'react'
import ResumeImg from '../assets/resume_img.png'

const Resume = () => {
    const config = {
        resumeLink: 'https://kowthaman.tiiny.site'
    }
  return (
    <section id='resume' className='flex flex-col md:flex-row bg-primary px-5 py-5'>
        <div className='md:w-1/2 flex justify-center'>
            <img src={ResumeImg} alt="About_image" />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl text-white mt-4 mb-4'>Resume</h1>
                <p className='text-2xl text-white pb-4'>
                    You can view and download my resume.
                </p>
                <a href={config.resumeLink} ><button className='text-2xl text-white flex justify-start btn'>View</button></a>
            </div>
        </div>
    </section>
  )
}

export default Resume