import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'

const Header = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className='flex justify-between px-5 py-4 bg-primary fixed top-0 left-0 right-0 z-20'>
        <a href="/" className='font-bold text-2xl text-black'>Kowthaman</a>
        <nav className='hidden md:block'>
            <ul className='flex text-white'>
                <li> <a href="/">Home</a></li>
                <li> <a href="#about">About</a></li>
                <li> <a href="#projects">Projects</a></li>
                <li> <a href="#resume">Resume</a></li>
                <li> <a href="#contact">Contact</a></li>
            </ul>
        </nav> 
        {toggleMenu && <nav className='block md:hidden z-10'>
            <ul onClick={() => setToggleMenu(!toggleMenu)} className='flex flex-col text-white mobile-nav'>
                <li> <a href="/">Home</a></li>
                <li> <a href="#about">About</a></li>
                <li> <a href="#projects">Projects</a></li>
                <li> <a href="#resume">Resume</a></li>
                <li> <a href="#contact">Contact</a></li>
            </ul>
        </nav> }
        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'>
            <Bars3Icon className='text-white h-5'/>
        </button> 
    </header>
  )
}

export default Header