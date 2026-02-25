import React, { Children } from 'react'
import Button from '../Components/Button'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'




const CTA = () => {
  return (
    <div>
    <section className='container bg-blue-200 py-14'>
        <div className='md:max-w-5xl mx-auto py-20 px-8 bg-blue-700 rounded shadow-4xl shadow-xl/50 flex flex-col items-center gap-y-2 max-w-4xl'>
            <h1 className='md:text-5xl text-2xl font-bold'>Get Started Now</h1>
            
           <div className='md:flex md:flex-row md:gap-x-3 flex flex-col gap-y-2'>
             <Link to = "/addjob"> <div><Button> Add Job <div className='ml-2'><FaArrowRight/></div></Button></div></Link>

               <Link to = '/jobs'><div> <Button bg="bg-indigo-300" hover="hover:bg-indigo-500" hoverText="hover:text-white">
            <p>View Jobs</p> <div className='ml-2'><FaArrowRight/></div>
          </Button></div> </Link> 
         
            </div>
         
        </div>
    </section>
    </div>
  )
}

export default CTA