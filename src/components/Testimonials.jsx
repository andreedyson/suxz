import React from 'react';
import testi1 from '../img/testi1.png';
import testi2 from '../img/testi2.png';
import testi3 from '../img/testi3.png';
import testi4 from '../img/testi4.png';

const Testimonials = () => {
  return (
    <div id='testi' className='max-w-[2000px] p-6 mx-auto lg:px-[60px] lg:py-[80px]'>
        {/* Testimonials Container */}
        <div>
            {/* Testimonials Text */}
            <div className='flex flex-col items-center gap-4 mb-16'>
                <span className='font-bold uppercase md:text-lg text-main-purple'>Testimonial</span>
                <h2 className='text-2xl font-bold md:text-3xl lg:text-4xl'>What Our Alumni Say?</h2>
                <p className='text-lg font-medium md:text-xl'>These are the words of people who have taken our class</p>
            </div>
            {/* Testimonials Grid */}
            <div className='grid grid-cols-1 gap-y-16 md:gap-12 md:grid-cols-2 lg:grid-cols-4'>
                <div className='flex flex-col items-center p-5 text-center border-2 rounded-xl border-main-purple md:px-6 md:py-8'>
                    <img src={testi1} alt="" className='mb-8 mt-[-70px] border-4 border-main-purple rounded-full'/>
                    <div className='mb-6'>
                        <h3 className='text-lg font-bold md:text-xl'>Jason todd</h3>
                        <p className='text=sm text-gray-400 md:text-base'>Enterpreneur</p>
                    </div>
                    <p>"The mentor is very cool, how to convey each material is also detailed and easy to undertsand.."</p>
                </div>
                <div className='flex flex-col items-center p-5 text-center border-2 rounded-xl border-main-purple md:px-6 md:py-8'>
                    <img src={testi2} alt="" className='mb-8 mt-[-70px] border-4 border-main-purple rounded-full'/>
                    <div className='mb-6'>
                        <h3 className='text-lg font-bold md:text-xl'>Cassandra K.</h3>
                        <p className='text=sm text-gray-400 md:text-base'>Web Developer</p>
                    </div>
                    <p>"The mentor is very cool, how to convey each material is also detailed and easy to undertsand.."</p>
                </div>
                <div className='flex flex-col items-center p-5 text-center border-2 rounded-xl border-main-purple md:px-6 md:py-8'>
                    <img src={testi3} alt="" className='mb-8 mt-[-70px] border-4 border-main-purple rounded-full'/>
                    <div className='mb-6'>
                        <h3 className='text-lg font-bold md:text-xl'>Peter Parker</h3>
                        <p className='text=sm text-gray-400 md:text-base'>PHP Developer</p>
                    </div>
                    <p>"The mentor is very cool, how to convey each material is also detailed and easy to undertsand.."</p>
                </div>
                <div className='flex flex-col items-center p-5 text-center border-2 rounded-xl border-main-purple md:px-6 md:py-8'>
                    <img src={testi4} alt="" className='mb-8 mt-[-70px] border-4 border-main-purple rounded-full'/>
                    <div className='mb-6'>
                        <h3 className='text-lg font-bold md:text-xl'>Jean Gray</h3>
                        <p className='text=sm text-gray-400 md:text-base'>Web Designer</p>
                    </div>
                    <p>"The mentor is very cool, how to convey each material is also detailed and easy to undertsand.."</p>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Testimonials;