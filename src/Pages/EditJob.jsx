import React from 'react'
import Button from '../Components/Button'
import { useState,} from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { addDoc, collection, doc, getDoc, updateDoc} from 'firebase/firestore'
import { db } from '../Firebase/Firebase'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaArrowLeft} from 'react-icons/fa'
import { toast } from 'react-toastify'


const EditJob = () => {

    const job = useLoaderData()
    const {id} = useParams()

    const [newTitle, setNewTitle] = useState(job.title)
      const [newSalary, setNewSalary] = useState(job.salary)
      const [newLocation, setNewLocation] = useState(job.salary)
      const [newType, setNewType] = useState(job.type)
      const [newCompanyName, setNewCompanyName] = useState(job.companyName)
      const [newDescription, setNewDescription] = useState(job.newDescription)
      const [newCompanyEmail, setNewCompanyEmail] = useState(job.companyEmail)
      const [newCompanyDescription, setNewCompanyDescription] = useState(job.companyDescription)
      const[newCompanyContact, setNewCompanyContact] = useState (job.companyContact)
    
      const navigate = useNavigate()
    
      const handleSubmit = (e)=>{
        e.preventDefault()
    
        const submit = async ()=>{
          const formRef = doc(db, `jobs/${id}`)
    
          const res = await updateDoc(formRef, {
            title:newTitle,
            salary:newSalary,
            location:newLocation,
            type:newType,
            companyName:newCompanyName,
            description:newDescription,
            companyEmail:newCompanyEmail,
            companyDescription:newCompanyDescription,
            companyContact:newCompanyContact
          })
    
          return res
    
        }
        submit().then(()=>{
            toast.success('Job has been edited successfully')
          navigate('/')
        })
      }
    
  return (
    <div>
      <section  className='container h-min-screen mt-15 relative'>
        <Link to="/jobs"><div className="absolute top-0 left-4 -mt-3 font-bold text-indigo-500"><FaArrowLeft/></div></Link> 
        <div className='max-w-3xl mx-auto bg-white mb-10 p-3 mt-20 flex flex-col gap-4 rounded'>
          <form onSubmit={handleSubmit}>
          <div className='text-center font-bold'><p>Edit Job</p></div>
          <div>
            <div><label className='font-bold' htmlFor="type">Job Type</label> </div>
            <div><select className='border-0 ring-1 ring-gray-400 mt-2 rounded outline-0 w-full py-1 px-4' name="type" 
            id="type"
            onChange={(e)=>{setType(e.target.value)}} value={newType}>
              <option id="type" value="Full-Type">Full-Type</option>
              <option id="type" value="Part-Time">Part-Time</option>
              </select></div>
          </div>

          <div>
          <div><label className='font-bold' htmlFor="list">Job Listing Name</label></div>
          <div><input className='border-0 ring-1 ring-gray-400 mt-2 rounded outline-0 w-full py-1 px-4' 
          type="text" name="list" id="list" required onChange={(e)=>{setNewTitle(e.target.value)}} value={newTitle}/></div>
          </div>
          <div>

            <div><label className='font-bold' htmlFor="description">Description</label></div>
            <div><textarea className='border-0 ring-1 ring-gray-400 mt-2 rounded outline-0 w-full py-6 px-4' 
            name="" id="description" required onChange={(e)=>{setNewDescription(e.target.value)}} value={newDescription} ></textarea></div>
          </div>

          <div>
            <div><label className='font-bold' htmlFor="salary">Salary</label></div>
            <div>
               <select className='border-0 ring-1 ring-gray-400 mt-2 rounded outline-0 w-full type py-1 px-4' 
               name="" id="salary" onChange={(e)=>{setNewSalary(e.target.value)}} value={newSalary}>
              <option value="$50-$70k/Year">$50-$70k/Year</option>
              <option value="$30-$50k/Year">30-$50k/Year</option>
              <option value="$20-$40k/Year">20-$40k/Year</option>
              <option value="$10-$40k/Year">10-$40k/Year</option>
              <option value="$60-$80k/Year">60-$80k/Year</option>
              <option value="$90-$100k/Year">90-$100k/Year</option>
            </select>
            </div>
           
          </div>

          <div>
            <div><label className='font-bold' htmlFor="location"></label>Location</div>
            <div><input className='border-0 ring-1 ring-gray-400 mt-2 rounded outline-0 w-full type py-1 px-4' 
            type ="text" name="" id="loaction" required onChange={(e)=>{setNewLocation(e.target.value)}} value={newLocation} /></div>
          </div>

          <div>
            <div><label className='font-bold' htmlFor="companyName"></label>Company Name</div>
            <div><input className='border-0 ring-1 ring-gray-400 mt-2 rounded outline-0 w-full py-1 px-4' 
            type="text" name="" id="companyName" required onChange={(e)=>{setNewCompanyName(e.target.value)}}value={newCompanyName} /></div>
          </div>

          <div>
            <div><label className='font-bold' htmlFor="companydec">Company Description</label></div>
            <div><textarea className='border-0 ring-1 ring-gray-400 mt-2 rounded outline-0 w-full py-6 px-4' 
            name="" id="companydec" required onChange={(e)=>{setNewCompanyDescription(e.target.value)}} value={newCompanyDescription}></textarea></div>
          </div>

          <div>
            <div><label className='font-bold' htmlFor="email">Contact Email</label></div>
            <div><input className='border-0 ring-1 ring-gray-400 mt-2 rounded outline-0 w-full py-1 px-4'
             type="text" name="" id="email" required onChange={(e)=>{setNewCompanyEmail(e.target.value)}} value={newCompanyEmail} /></div>
          </div>

          <div>
            <div><label className='font-bold' htmlFor="phone">Contact Phone</label></div>
            <div><input className='border-0 ring-1 ring-gray-400 mt-2 rounded outline-0 w-full py-1 px-4' 
            type="number" name="" id="phone" required onChange={(e)=>{setNewCompanyContact(e.target.value)}} value={newCompanyContact} /></div>
          </div>
          {/* <div>
            <input type="submit" value="submit" onClick={handleSubmit} />
          </div> */}
          <div className='mt-4'><Button onClick = {handleSubmit} width='w-full' bg="bg-indigo-500" text="text-white" hover=" hover:bg-indigo-400">Edit Job</Button></div>

      </form>
        </div>
        
      </section>
      
      </div>

      
  )
}

const fetchEdit = async ({params})=>{
          const {id} = params
          const docRef = doc(db, `jobs/${id}`)
          const res = await getDoc(docRef)
          const data ={...res.data(), id:res.id}
          // console.log(data)
          return data
      
      }

export {EditJob as default, fetchEdit}