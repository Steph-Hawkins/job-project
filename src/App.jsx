import { Route, Link, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import MainLayOut from "./LayOuts/MainLayOut"
import Jobs, { fetchJobs } from "./Pages/JobPage"
import Home from "./Pages/Home"
import AddJob from "./Pages/AddJob"
import Jobdetails, {fetchDetails} from "./Pages/Jobdetails"
import EditJob, {fetchEdit}from "./Pages/EditJob"

function App() {
  
  const router = createBrowserRouter (
    createRoutesFromElements (
      <Route path="/" element={<MainLayOut/>}>
        <Route index element={<Home/>}/>
        <Route path="/jobs" element={<Jobs/>} loader={fetchJobs}/>
         <Route path="/jobs/:id" element={<Jobdetails/>} loader={fetchDetails}/>
         <Route path="/jobs-edit/:id" element={<EditJob/>} loader={fetchEdit}/>
        <Route path="/addjob" element ={<AddJob/>}/>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
