import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/admin">Product</Link>
        </li>
        <li>
          <Link to="add">Add</Link>
        </li>
      </ul>
    </nav>

  </>
  )
}

export default AdminNavbar