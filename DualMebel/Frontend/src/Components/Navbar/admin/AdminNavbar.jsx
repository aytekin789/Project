import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Maincontext from '../../../context/mainContext'
import "./AdminNavbar.css"
 
const AdminNavbar = () => {
  const {handlerSearch,handlerSort}=useContext(Maincontext)
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
        <input type="text" placeholder="Axtar..."  onChange={(e)=>{
          handlerSearch(e.target.value.toLocaleLowerCase().trim())
        }} />

<select name="sort" id="sort" onChange={handlerSort}>
    <option value="df">Default</option>
    <option value="az">A-dan Z-yə</option>
    <option value="za">Z-dən A-ya</option>
    <option value="09">Qiymət: azdan çoxa</option>
    <option value="90">Qiymət: çoxdan aza</option>
  </select>

      </ul>
    </nav>

  </>
  )
}

export default AdminNavbar