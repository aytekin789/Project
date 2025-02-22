import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import MainNavbar from '../Components/Navbar/main/MainNavbar'


const MainLayout = () => {
  return (
   <>
   
   <MainNavbar/>
   <Outlet/>
   <Footer/>

   </>
  )
}

export default MainLayout