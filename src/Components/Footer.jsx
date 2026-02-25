import React from 'react'
import { Navs } from '../Constants/Navs'
import { Link } from 'react-router-dom'
import { SvgFooter } from '../Constants/Navs'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='container mx-auto bg-blue-950 py-6 px-5 text-white'>
        <div className='flex flex-col gap-y-3 md:flex-row md:flex  md:gap-x-3 justify-between max-w-full mx-auto'>
            <div>
                <h1>HawkinsJobs</h1>
            </div>
            
            <div>
                {Navs.map((nav, index)=>(
                    <ul key={index}>
                        <Link to={nav.href}><li>{nav.label}</li></Link>
                    </ul>
                ))}
            </div>
            <div className='flex gap-x-2'>
                <div><FaFacebook/></div>
                <div><FaGithub/></div>
                <div><FaInstagram/></div>
                <div><FaTwitter/></div>
            </div>
        </div>
    </div>
  )
}

export default Footer