import React from 'react'

import profile from "../icons/profile.jpeg";

const Head = () => {
  return (
    <div className=' flex flex-col space-y-7'>
      <div className='flex space-x-4 h-fit'>
        <img src={profile} className="w-20 rounded-full shadow-lg" alt="profile" />
        <div className='m-auto'>
          <h1 className='font-bold text-2xl'>Hi Sahil,</h1>
          <p className='text-sm text-[#101010]'>welcome back</p>
        </div>
      </div>
      <div className='space-y-4'>
        <h1 className='font-bold text-[#434343]'>Today</h1>
        <div>
          <span className='font-bold text-2xl'>$19,892</span>
          <p className='text-sm text-[#757575]'>Account Balance</p>
        </div>
        <div>
          <span className='font-bold text-md'>$4,000</span>
          <p className='text-sm text-[#a7a7a7]'>Year-to-Date Contributions</p>
        </div>
        <div>
          <span className='font-bold text-md'>$1888</span>
          <p className='text-sm text-[#a7a7a7]'>Total Intrest</p>
        </div>
        <button className='bg-[#4935ff] text-[#ebe8ff] w-1/2 py-2 rounded-md'>I want to ▼</button>
      </div>
      
    </div>
  )
}

export default Head;