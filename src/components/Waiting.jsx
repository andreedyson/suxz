import React from 'react';
import waiting from '../img/waiting.png'

const Waiting = () => {
  return (
    <div className=' relative max-w-[2000px] w-full h-[382px] mx-auto bg-waiting bg-no-repeat bg-cover'>
        {/* Waiting Container */}
        <div className='flex flex-col items-center justify-center h-full gap-4 p-6 mb-6 text-center text-white'>
          <div className='absolute w-full h-full bg-black opacity-50'></div>
          <div className='z-10'>
            <div className='mb-6'>
              <h2 className='text-3xl font-bold md:text-3xl lg:text-4xl'>So, What Are You Waiting For?</h2>
              <p className='text-lg md:text-2xl'>It's time to build your career, study in a relaxed and purposeful manner</p>
            </div>
            <div className='font-bold'>
              <button className='px-8 py-2 mr-6 duration-300 ease-in-out bg-main-purple rounded-xl hover:bg-main-purple/70'>Get Started</button>
              <button className='px-8 py-2 duration-300 ease-in-out hover:text-main-purple'>Contact Us</button>
            </div>
          </div>
        </div>
    </div>
  )
};

export default Waiting;