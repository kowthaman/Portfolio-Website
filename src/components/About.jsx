import React from 'react'
import AboutImg from '../assets/about_img.png'

const About = () => {
  return (
    <section id='about' className='flex flex-col md:flex-row bg-primary px-5'>
        <div className='md:w-1/2'>
            <img src={AboutImg} alt="About_image" />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl text-white mt-4 mb-4'>About Me</h1>
                <p className='text-2xl text-white pb-4'>
                I am a passionate Computer Science undergraduate with hands-on experience in full-stack development. I have successfully 
                worked on various projects, including multi-service apps, e-commerce platforms, and family management systems. 
                My expertise spans designing and developing RESTful APIs, building dynamic user interfaces, and managing databases. 
                I am eager to apply my technical skills to solve real-world challenges and contribute to impactful projects.
                </p>
                <p className='text-2xl text-white pb-4'>
                I have experience working with React, Redux, Tailwind CSS, Node.js, Express.js, MongoDB, and MySQL, enabling me to build 
                full-stack applications with modern front-end frameworks, state management, responsive designs, and efficient back-end services.
                </p>
            </div>
        </div>
    </section>
  )
}

export default About