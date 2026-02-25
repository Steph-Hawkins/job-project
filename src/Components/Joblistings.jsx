import { FaMapMarker } from "react-icons/fa"
import { Link } from "react-router-dom"
import Button from "./Button"


const Joblistings = ({jobs, title, isHome=false}) => {
     const newJob = jobs.slice(0,4)
  return (
    <>
    <div className="bg-blue-200 pb-7">
        <h1 className="text-white text-5xl text-center">{title}</h1>
        <div className="mx-auto max-w-5xl grid grid-cols-1 gap-y-4 md:grid-cols-4 md:gap-x-4 pt-2">{newJob.map((job)=>(
    <ul key={job.id}>
        <li className="px-3 py-4 bg-white shadow-lg shadow-lg/20 text-black rounded flex flex-col gap-y-1.5">
            <div className="text-gray-500"><p>{job.type}</p></div> 
            <div className="font-bold"><h1>{job.title}</h1></div>
            <div className="text-indigo-500"><h2>{job.salary}</h2></div>
            <hr className="mt-2 text-gray-300" />
            <div className="flex gap-x-2 items-center bg-e"> <div className="text-red-500"><FaMapMarker/></div> <h1>{job.location}</h1></div>
            <Link className="text-sm text-blue-900 font-bold" to={`/jobs/${job.id}`}><p>More Details</p></Link>
        </li>
    </ul>
   ))}</div>
    </div>
    
    </>
  )
}

export default Joblistings