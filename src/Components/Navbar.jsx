import { Link, NavLink } from "react-router-dom"
import { Navs } from "../Constants/Navs"
import { Menu, X} from "lucide-react"
import { useState} from "react"


const Navbar = () => {

    const links = ({isActive})=>isActive ? "border-b-2 border-black" : " hover:bg-blue-400 py-1 px-2 rounded"
    const smallLinks = ({isActive})=> isActive ? "text-blue-600":""
    

    const [isMenuOpen, setisMenuOpen] = useState(false)

        const handleClick = ()=>{
            setisMenuOpen((prev)=>!prev)
        }
  return (
    <section className="container bg-blue-800 py-4 text-white fixed top-0 z-20">
         <div className=" flex justify-between max-w-6xl mx-auto" >
       <Link to="/"><h1> <span className="inline-block text-black font-extrabold text-3xl">Hawkins</span> Jobs</h1></Link> 
        <div className=" hidden md:flex gap-x-4 justify-center items-center">
             {Navs.map((nav, index)=>(
            <ul className ="flex" key={index}>
                <NavLink className = {links} to={nav.href}><li>{nav.label}</li></NavLink>
            </ul>  
        ))} 
        </div>
        <button className="md:hidden fixed top-5 right-0 pr-4" onClick={handleClick}>{isMenuOpen? <X/>:<Menu/> }</button>
        {isMenuOpen &&(<div className = "flex flex-col gap-y-4 h-1/8 items-start pt-7 pr-7 justify-center" >
            {Navs.map((nav, index)=>(
            <ul key={index}>
                <Link className={smallLinks} to={nav.href}><li>{nav.label}</li></Link>
            </ul>
        ))}
       </div>)}
    </div>
    </section>
   
  )
}

export default Navbar