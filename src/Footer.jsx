import React from 'react';
import logo from './img/logo.png';
import { HiPhone, HiEnvelope } from 'react-icons/hi2';

const Footer = () => {
  return (
    <div className='max-w-[2000px] p-6 mx-auto lg:px-[60px] lg:py-[80px]'>
        {/* Footer Container */}
        <div className='flex flex-col justify-between gap-8 lg:flex-row'>
            {/* Footer Logo */}
            <div className='md:max-w-[700px]'>
                <a href="#"><img src={logo} alt="Suxz Logo" className='w-[100px] md:w-[120px]'/></a>
                <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aliquid iure excepturi delectus repudiandae nulla, ea provident expedita animi ullam.</p>
            </div>
            {/* Footer Links grid */}
            <div className='grid col-span-1 gap-8 md:grid-cols-3'>
                <div>
                    <h3 className='mb-4 text-lg font-bold md:text-xl'>Company</h3>
                    <ul className='flex flex-col gap-4'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Portfolios</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className='mb-4 text-lg font-bold md:text-xl'>Links</h3>
                    <ul className='flex flex-col gap-4'>
                        <li><a href="#">Privacy & Policy</a></li>
                        <li><a href="#">GitHub</a></li>
                        <li><a href="#">Supports</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className='mb-4 text-lg font-bold md:text-xl'>Contact</h3>
                    <ul className='flex flex-col gap-4'>
                        <li className='flex items-center gap-2 text-main-purple'><HiPhone /> (0721) 312048182</li>
                        <li className='flex items-center gap-2 text-main-purple'><HiEnvelope /> irham@suxz.com</li>
                        <li>Jl. Narogong, Perum Cileungsi Blok A no.5 Jakarta selatan, 12240.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer