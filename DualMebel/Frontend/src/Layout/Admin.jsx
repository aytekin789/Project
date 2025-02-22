import React from 'react'
import AdminNavbar from '../Components/Navbar/AdminNavbar'
import { Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <>
      
    <AdminNavbar/>
    <Outlet />
  </>
  )
}

export default Admin