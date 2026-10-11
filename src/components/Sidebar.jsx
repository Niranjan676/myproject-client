import React from 'react'
import { Link } from 'react-router-dom'
import dashboardIcon from '../assets/images/icons/dashboard.svg'
import master from '../assets/images/icons/master.svg'

function Sidebar() {
  return (
    <div className="bg-[#BA024C] text-white p-6 flex items-start flex-col gap-4">

      {/* Logo */}
      <div className='w-full flex justify-center'>
        <h1 className='text-2xl'>LOGO HERE</h1>
      </div>

      {/* Dashboard */}
      <Link to="/" className="w-full flex items-center gap-3">
        <img src={dashboardIcon} alt="" className='w-5 h-5'/>
        <span>Dashboard</span>
      </Link>
      
      {/* Master */}
      <Link to="/suppliermaster" className="w-full flex items-center gap-3">
        <img src={master} alt="" className='w-5 h-5'/>
        <span>Master</span>
      </Link>
    </div>
  )
}

export default Sidebar
