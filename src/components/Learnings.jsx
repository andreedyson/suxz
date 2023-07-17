import React from 'react';
import starter from '../img/starter.png';
import premium from '../img/premium.png';
import superstar from '../img/superstar.png';
import bootcamp from '../img/bootcamp.png';

const Learnings = () => {
  return (
    <div id='learnings' className='max-w-[2000px] bg-[#f8f8ff] p-6 mx-auto lg:px-[60px] lg:py-[80px]'>
        {/* Learnings Container */}
        <div>
            {/* Learning Description */}
            <div className='flex flex-col items-center gap-4 mb-12 text-center lg:items-start lg:text-start'>
                <span className='font-bold uppercase md:text-lg text-main-purple'>Learnings</span>
                <h2 className='max-w-[550px] text-2xl font-bold md:text-3xl lg:text-4xl'>Online Learning Platform International Curriculum</h2>
                <p className='max-w-[400px] md:max-w-[300px] text-sm md:text-base'>Study and understand the material class is more relaxed without time limit.</p>
            </div>
            {/* Learnings Grid */}
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
                <div className='p-5 duration-300 ease-in-out bg-white shadow-lg cursor-pointer rounded-xl md:p-7 hover:bg-main-purple hover:scale-[1.02] hover:text-white'>
                    <div className='mb-6'>
                        <img src={starter} alt="" />
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='mb-2 text-lg font-bold md:text-xl'>Starter</h3>
                        <p className='mb-8 md:max-w-[200px]'>Free class access for that who started learning to code and design</p>
                        <button className='py-2 font-bold text-white rounded-lg bg-button-aqua'>See Class</button>
                    </div>
                </div>
                <div className='p-5 duration-300 ease-in-out bg-white shadow-lg cursor-pointer rounded-xl md:p-7 hover:bg-main-purple hover:scale-[1.02] hover:text-white'>
                    <div className='mb-6'>
                        <img src={premium} alt="" />
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='mb-2 text-lg font-bold md:text-xl'>Premium</h3>
                        <p className='mb-8 md:max-w-[200px]'>Advanced materials from the starter & learn to build projects</p>
                        <button className='py-2 font-bold text-white rounded-lg bg-button-aqua'>See Class</button>
                    </div>
                </div>
                <div className='p-5 duration-300 ease-in-out bg-white shadow-lg cursor-pointer rounded-xl md:p-7 hover:bg-main-purple hover:scale-[1.02] hover:text-white'>
                    <div className='mb-6'>
                        <img src={superstar} alt="" />
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='mb-2 text-lg font-bold md:text-xl'>Superstar</h3>
                        <p className='mb-8 md:max-w-[200px]'>Materials for experts who have completed the premium package</p>
                        <button className='py-2 font-bold text-white rounded-lg bg-button-aqua'>See Class</button>
                    </div>
                </div>
                <div className='p-5 duration-300 ease-in-out bg-white shadow-lg cursor-pointer rounded-xl md:p-7 hover:bg-main-purple hover:scale-[1.02] hover:text-white'>
                    <div className='mb-6'>
                        <img src={bootcamp} alt="" />
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='mb-2 text-lg font-bold md:text-xl'>Bootcamp</h3>
                        <p className='mb-8 md:max-w-[200px]'>Informatics science training program with the latest material</p>
                        <button className='py-2 font-bold text-white rounded-lg bg-button-aqua'>See Class</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Learnings;