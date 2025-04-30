import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from '../Components/Navbar/admin/AdminNavbar'

const Admin = () => {
  return (
    <>
      
    <AdminNavbar/>
    <Outlet />
  </>
  )
}

export default Admin