import React from 'react'

const Recents = () => {
  return (
    <div>
        <h1 className='font-bold text-md my-5'>Recent Transaction</h1>
        <div className='space-y-1'>
          <p className='text-sm text-[#a7a7a7]' >2020-08-07</p>
          <p className='text-sm pb-3'>Withdrawl Transfer to Bank-XXX11</p>
          <hr className='p-2 ' />
        </div>
        <div className='space-y-1'>
          <p className='text-sm text-[#a7a7a7]'>2020-07-21</p>
          <p className='text-sm pb-3'>Withdrawl Transfer to Bank-XXX11</p>
          <hr className='p-2 ' />
        </div>
        <div className='space-y-1'>
          <p className='text-sm text-[#a7a7a7]'>2020-07-16</p>
          <p className='text-sm pb-3'>Withdrawl Transfer to Bank-XXX11</p>
          <hr className='p-2 ' />
        </div>
      </div>
  )
}

export default Recents;