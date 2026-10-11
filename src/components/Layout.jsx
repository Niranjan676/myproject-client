import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="bg-[#FFFFFF] min-h-screen grid grid-cols-[250px_1fr]">
      <Sidebar />
      <div className='flex flex-col'>
        <Header />
        <main className='p-6'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
