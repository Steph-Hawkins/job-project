import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify"


const MainLayOut = () => {
  return (
    <>
    <header> <Navbar/></header>
    <main><Outlet/></main>
    <ToastContainer/>
    <footer></footer>
    </>
  )
}

export default MainLayOut