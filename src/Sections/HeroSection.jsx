import React from 'react'
import Hero1 from "../assets/Hero-section one.svg"

const HeroSection = () => {
  return (
    <section className=' container min-h-full bg-blue-300 mx-auto pt-20 px-7'>
        <div className='text-center pt-6'><h1 className='text-4xl text-blue-500 font-bold'>Welcome to Hawkins Jobs <br /> find your favorite <span className='text-blue-950'>JOBS</span></h1></div>
         <div className='flex items-center justify-center'><img src={Hero1} alt="" /></div>
    </section>
   
  )
}

export default HeroSection