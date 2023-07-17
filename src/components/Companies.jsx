import React from 'react';
import gh from '../img/Github.png';
import ms from '../img/Microsoft.png';
import rds from '../img/Redis.png';
import am from '../img/Amazon.png';
import pp from '../img/Paypal.png';
import li from '../img/Linkedin.png';
import rdt from '../img/Reddit.png';
import md from '../img/Medium.png';

const Companies = () => {
  return (
    <div className='max-w-[2000px] bg-[#F8F8FF] p-6 mx-auto lg:px-[60px] lg:py-[80px]'>
        {/* Companies Container */}
        <div>
            {/* Companies text */}
            <div className='flex flex-col items-center gap-4 mb-6'>
                <h2 className='text-3xl font-bold md:text-3xl lg:text-4xl'>Companies That Recruit Our Graduates</h2>
                <p className='text-lg md:text-2xl'>Our graduates have worked in more than 400 companies around the world</p>
            </div>
            {/* Companies Logo */}
            <div className='grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 place-items-center'>
                <img src={gh} alt="" className='aspect-[3/2] object-contain'/>
                <img src={ms} alt="" className='aspect-[3/2] object-contain'/>
                <img src={rds} alt="" className='aspect-[3/2] object-contain'/>
                <img src={am} alt="" className='aspect-[3/2] object-contain'/>
                <img src={pp} alt="" className='aspect-[3/2] object-contain'/>
                <img src={li} alt="" className='aspect-[3/2] object-contain'/>
                <img src={rdt} alt="" className='aspect-[3/2] object-contain'/>
                <img src={md} alt="" className='aspect-[3/2] object-contain'/>
            </div>
        </div>
    </div>
  )
};

export default Companies;