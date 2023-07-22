import React from 'react'

const Income = () => {
  return (
    <div className='space-y-5'>
      <div>
        <h5 className='text-[#5441ff] font-semibold'>Retirement Income</h5>
        <h1 className='text-xl font-bold'>Starting Year 2056</h1>
      </div>
      <div className='grid grid-cols-3 space-x-4 '>
        <div className='flex flex-col'>
          <span className='text-xl font-bold'>$300,000</span>
          <span className='font-semibold text-[#b2b2b2] text-sm pb-3'>My Goal</span>
          <hr className='h-1 border-solid border-t-2 border-blue-800 p-2 ' />
        </div>
        <div className='flex flex-col'>
          <span className='text-xl font-bold'>59%</span>
          <span className='font-semibold text-[#b2b2b2] text-sm pb-3'>Goal Achieved</span>
          <hr className='h-1 border-solid border-t-2 border-blue-800 p-2 ' />
        </div>
        <div className='flex flex-col'>
          <span className='text-xl font-bold'>$300</span>
          <span className='font-semibold text-[#b2b2b2] text-sm pb-3'>Est.Monthly Income</span>
          <hr className='h-1 border-solid border-t-2 border-blue-800 p-2 ' />
        </div>
      </div>
    </div>
  )
}

export default Income
