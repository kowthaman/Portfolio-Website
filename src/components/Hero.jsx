import React from 'react'
import HeroImg from '../assets/hero_img.png'
import { AiFillLinkedin, AiOutlineGithub  } from "react-icons/ai";

const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row px-5 bg-secondary justify-center'>
        <div className='md:w-1/2 pt-10'>
            <h1 className='font-hero-text text-white text-6xl py-10'>
                Hi, <br /> I am Kowthaman
                <p className='text-3xl mt-4'>Fullstack Developer</p>
            </h1>
            <div className='flex gap-5 mt-4'>
                <a className='hover:text-white' href="https://www.linkedin.com/in/kanthasamy-kowthaman-21957220a/"><AiFillLinkedin size={40}/></a>
                <a className='hover:text-white' href="https://github.com/kowthaman"><AiOutlineGithub size={40}/></a>
            </div>
        </div>
        <img className='md:w-1/3' src={HeroImg} alt="hero_image" />
    </section>
  )
}

export default Hero