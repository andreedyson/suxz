import React from 'react';
import hero from '../img/hero.png';

const Hero = () => {
  return (
    <div className='max-w-[2000px] p-6 mx-auto lg:px-[60px] lg:py-0'>
        {/* Hero Container */}
        <div className='flex flex-col text-center sm:max-lg:items-center lg:justify-between lg:flex-row lg:text-start'>
            {/* Hero Text*/}
            <div className='flex flex-col items-center order-2 gap-8 mt-6 lg:mt-20 lg:items-start lg:order-1'>
                <span className='font-bold md:text-lg text-main-purple'>S U X Z  M A K E  I T  E A S Y </span>
                <h1 className='text-4xl font-extrabold max-w-[280px] md:max-w-[420px] md:text-5xl lg:text-6xl'>Find Your Way Of Success</h1>
                <p className='text-base max-w-[420px] md:max-w-[520px] md:text-lg'>We help you to increase self-confidence and train yourself in a direction, and make you more creative in developing a work</p>
                <div className='flex gap-5 font-medium'>
                    <button className='px-6 py-3 text-white duration-300 ease-in-out rounded-lg bg-main-purple hover:bg-main-purple/70'>Get Started</button>
                    <button className='px-6 py-3 duration-200 ease-in-out bg-gray-100 rounded-lg hover:bg-gray-200'>Our Services</button>
                </div>
            </div>
            {/* Hero Image */}
            <div className='order-1 lg:order-2'>
                <img src={hero} alt="HeroImage" className='w-[450px] lg:w-[730px]'/>
            </div>
        </div>
    </div>
  )
};

export default Hero;