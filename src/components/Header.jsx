import React from 'react'
import avatar from "../assets/images/icons/avatar.svg"

function Header() {
  return (
    <div className='w-full h-14 bg-[#F0EBED] flex justify-end items-center gap-2 p-6'>
        <img className="w-12 h-12" src={avatar} alt="avatar" />
        <h1 className='text-xl font-bold uppercase'>Niranjan</h1>
    </div>
  )
}

export default Header
