import React, { useState} from 'react';
import logo from '../img/logo.png';
import { HiBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const clickHandler = () => setNav(!nav);

  return (
    <div className='max-w-[2000px] py-6 mx-auto lg:px-[60px] lg:py-10'>
      {/* Desktop Navigation */}
      <div className='flex items-center justify-between px-4 font-semibold lg:text-base xl:text-lg'>
        {/* Navigation Left */}
        <div className='items-center justify-center gap-10 md:flex'>
          <div>
            <a href="#"><img src={logo} alt="Suxz Logo" className='w-[100px] md:w-[120px]'/></a>
          </div>
          <ul className='items-center justify-center hidden gap-16 lg:flex'>
            <li className='duration-200 ease-in-out hover:text-main-purple'><a href="#">Home</a></li>
            <li className='duration-200 ease-in-out hover:text-main-purple'><a href="#learnings">Learnings</a></li>
            <li className='duration-200 ease-in-out hover:text-main-purple'><a href="#about">About Us</a></li>
            <li className='duration-200 ease-in-out hover:text-main-purple'><a href="#testi">Testimonial</a></li>
          </ul>
        </div>
        {/* Navigation Right */}
        <div className='hidden lg:flex lg:gap-10'>
          <button className='duration-300 ease-in-out text-main-purple hover:text-main-purple/70'>Log In</button>
          <button className='px-8 py-3 text-white duration-300 ease-in-out rounded-lg bg-main-purple hover:bg-main-purple/70'>Sign Up</button>
        </div>
        {/* Hamburger Menu */}
        <div onClick={clickHandler} className='lg:hidden'>
          {!nav ? <HiBars3BottomRight size={30}/> : <HiOutlineXMark size={30}/>}
        </div>
      </div>
      {/* Mobile Navigation */}
      {nav &&  
      <div className='relative'>
        <div className='absolute left-0 w-full h-screen bg-white lg:hidden'>
          <div className='p-6'>
            <ul className='flex flex-col items-center gap-6'>
              <li className='duration-200 ease-in-out hover:text-main-purple'><a href="#">Home</a></li>
              <li className='duration-200 ease-in-out hover:text-main-purple'><a href="#">Learnings</a></li>
              <li className='duration-200 ease-in-out hover:text-main-purple'><a href="#">About Us</a></li>
              <li className='duration-200 ease-in-out hover:text-main-purple'><a href="#">Testimonial</a></li>
            </ul>
          </div>
          <div className='flex flex-col gap-6 mt-6'>
            <button className='duration-300 ease-in-out text-main-purple hover:text-main-purple/70'>Log In</button>
            <button className='px-8 py-3 mx-2 text-white duration-300 ease-in-out rounded-lg bg-main-purple hover:bg-main-purple/70'>Sign Up</button>
          </div>
        </div>
      </div>}
      </div>
  )
};

export default Navbar;