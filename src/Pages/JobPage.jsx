import { db } from "../Firebase/Firebase"
import { useLoaderData } from "react-router-dom"
import { collection, onSnapshot, getDocs, doc, deleteDoc } from "firebase/firestore"
import Joblistings from "../Components/Joblistings"
import { FaMapMarker, FaArrowLeft } from "react-icons/fa"
import { Link } from "react-router-dom"


const Jobs = () => {

    const jobs = useLoaderData()
    
     

  return (
    <section className="container mt-20 relative">
       <Link to="/"><div className="absolute top-0 left-4 font-bold text-indigo-500"><FaArrowLeft/></div></Link> 
      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">{jobs.map((job)=>(
          <ul key={job.id}>
              <li className="px-3 py-4 bg-white shadow-lg shadow-lg/20 text-black rounded flex flex-col gap-y-1.5">
                  <div className="text-gray-500"><p>{job.type}</p></div> 
                  <div className="font-bold"><h1>{job.title}</h1></div>
                  <div className="text-indigo-500"><h2>{job.salary}</h2></div>
                  <hr className="mt-2 text-gray-300" />
                  <div className="flex gap-x-2 items-center bg-e"> <div className="text-red-500"><FaMapMarker/></div> <h1>{job.location}</h1></div>
                  <Link className="text-sm text-blue-800" to={`/jobs/${job.id}`}><p>More Details</p></Link>
              </li>
          </ul>
         ))}</div>
    </section>
    
  )
}

const fetchJobs = async()=>{
const jobsCollectionRef = collection (db, "jobs")
const res = await getDocs(jobsCollectionRef)
const data = res.docs.map((doc)=>({...doc.data(), id:doc.id}))

return data
    
}

export {Jobs as default, fetchJobs}