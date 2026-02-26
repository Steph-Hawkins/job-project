import { useParams, useLoaderData, Link, useNavigate } from "react-router-dom"
import { db } from "../Firebase/Firebase"
import { getDoc, doc, deleteDoc } from "firebase/firestore"
import Button from "../Components/Button"
import { FaArrowLeft } from "react-icons/fa"
import { FaMapMarker } from "react-icons/fa"
import { toast } from "react-toastify"


const Jobdetails = () => {
    const job = useLoaderData()
    const {id} = useParams()
    const navigate = useNavigate()
  

    const handleDelete = ()=>{
      const deleteJob = async ()=>{
      const docRef = doc(db, `jobs/${id}`)
      const res = await deleteDoc(docRef)

      console.log(res)

        return res
      }

      deleteJob().then(()=>{
        toast.success('Job deleted successfully')
        navigate('/')
      })
    }
    
    
  return (
    <div>
    
      <section className="container h-screen mt-20 mb-10 relative">
         <Link to="/jobs"><div className="absolute top-0 left-4 -mt-3 font-bold text-indigo-500"><FaArrowLeft/></div></Link> 
        {/* Grid span-3 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-2 max-w-6xl mx-auto pt-3">
        <div className="col-span-3 flex flex-col gap-y-2">
          <div className="bg-white py-3 px-5 rounded flex flex-col gap-y-4">
            <p>{job.type}</p>
            <h1 className="font-bold text-2xl">{job.title}</h1>
            <div className=" flex gap-x-2 items-center text-red-500"><FaMapMarker/> <h2>{job.location}</h2></div>
          </div>
          <div className="bg-white py-2 px-4 rounded">
           <div className="mb-4"><p className=" text-indigo-500 font-bold">{job.Description}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum possimus veritatis eos enim reiciendis iste qui sint voluptatum aliquam quibusdam 
            sed dolore suscipit nulla, natus illum perspiciatis aut repudiandae ea!</p></div> 
            <div>
              <h1 className=" text-indigo-500 font-bold">Salary</h1>
          <p>{job.salary}</p>
            </div>
          
          </div>
        </div>
        {/* Grid span-1 */}
        <div className="rounded">
          <div className="flex flex-col gap-y-3">
            <div className="bg-white p-2 rounded">
              <h1 className="mb-5 font-bold">Company Info</h1>
              <h1 className="font-bold mb-5">{job.companyName}</h1>
              <p className="">{job.companyDescription}</p>

                 <hr className="mt-2 text-gray-400" />
                 
                {/* Contact Form */}
                <div className="mt-2">
                  <div>
                    <h1>Contact Email:</h1>
                    <p className="bg-blue-300 p-2 font-bold">{job.companyEmail}</p>
                  </div>
                  <div>
                    <h1>Contact Phone:</h1>
                    <p className="bg-blue-300 p-2 font-bold">{job.companyContact}</p>
                  </div>
                </div>
               
            </div>
            <div className="bg-white p-3 flex flex-col gap-y-3 rounded">
              <p className="font-bold">Manage Job</p>
              <Link to={`/jobs-edit/${job.id}`}><div ><Button width = "w-full" bg="bg-indigo-500" text="text-white" hover="hover:bg-indigo-300">
                Edit Job
              </Button></div></Link>
              <div onClick ={handleDelete}>
                 <Button width = "w-full" bg="bg-red-500" text="text-white" hover="hover:bg-red-300">
                Delete Job
              </Button>
              </div>
             
            </div>
          </div>
        </div>
      </div>
       
      </section>
      
    </div>
  )
}

const fetchDetails = async ({params})=>{
    const {id} = params
    const docRef = doc(db, `jobs/${id}`)
    const res = await getDoc(docRef)
    const data ={...res.data(), id:res.id}
    // console.log(data)
    return data

}

export {Jobdetails as default, fetchDetails}