import { db } from "../Firebase/Firebase"
import { onSnapshot, collection } from "firebase/firestore"
import { useState, useEffect } from "react"
import Joblistings from "../Components/Joblistings"
import HeroSection from "../Sections/HeroSection"
import Footer from "../Components/Footer"
import CTA from "../Sections/CTA"

const Home = () => {
    const [jobs, setJobs] = useState([])

 


    useEffect(()=>{
        const jobsCollectionRef = collection(db, "jobs")
        onSnapshot(jobsCollectionRef, (snapshot)=>{
          const res = snapshot.docs.map((doc)=>(
                {...doc.data(), id:doc.id}
            ))

           setJobs(res)
        }) 
    })
  return (
    
    <section>
     <HeroSection/>
    <Joblistings jobs={jobs} title='BROWSE JOBS' isHome ={true}/>
    <CTA/>
    <Footer/>
    </section>
  
    
  )
}

export default Home