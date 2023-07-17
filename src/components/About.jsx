import React from 'react';
import about from '../img/about.png';
import check from '../img/check.svg';
import { HiCheck } from 'react-icons/hi2';

const About = () => {
  return (
    <div id='about' className='max-w-[2000px] p-6 mx-auto lg:px-[60px] lg:py-[80px]'>
        {/* About Container */}
        <div className='flex flex-col justify-around lg:flex-row'>
            {/* About Image */}
            <div className='xl:ml-[-100px] lg:max-xl:mr-8'>
                <img src={about} alt="AboutImage" className='w-full'/>
            </div>
            {/* About Text */}
            <div>
                <div className='flex flex-col items-center gap-4 mb-12 text-center lg:items-start lg:text-start'>
                    <span className='font-bold uppercase md:text-lg text-main-purple'>About Us</span>
                    <h2 className='max-w-[380px] text-3xl font-bold md:text-3xl lg:text-4xl'>We Help Improve Your Work Experience</h2>
                    <p className='max-w-[400px] md:max-w-[300px] text-sm md:text-base'>We help you to increase self-confidence and train yourself in a direction</p>
                </div>
                {/* About Checkmark */}
                <div className='flex flex-col gap-8 font-medium max-xl:items-center'>
                    <div className='flex items-center gap-4'>
                        <img src={check} alt=""/>
                        <p className='w-[300px]'>Study and produce creation to get a job</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <img src={check} alt="" />
                        <p className='w-[300px]'>Up to date material and created by expert creators</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <img src={check} alt="" />
                        <p className='w-[300px]'>Complete classes and projects and get a certificate from <us></us></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default About;