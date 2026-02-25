import { useEffect } from "react"
import Navbar from "../Components/Navbar"
import {db} from "../Config/Firebase"
import firebase from "firebase/compat/app"
import { getDocs, collection, onSnapshot } from "firebase/firestore"
import { useState } from "react"

const Jobs = () => {
    const[lists, setLists] = useState([])

    useEffect(()=>{
        
        const movie = ()=>{
             const JobsCollectionRef = collection (db, "Jobs")
        onSnapshot(JobsCollectionRef, (snapshot) =>{
             const res = (snapshot.docs.map((doc)=>({...doc.data(), id:doc.id})))
            setLists(res)
            console.log

            })
        }
       
        movie()    
    },[])
  return (
    <>
    <div>
        <div>{lists.map((list)=>(
            <ul key={list.id}>
                <li>{list.title}</li>
            </ul>
        ))}</div>
    </div>
    </>
  )
}

export default Jobs