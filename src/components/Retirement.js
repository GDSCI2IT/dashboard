import React, { useState } from 'react'
import SliderComponent from './SliderComponent';
const Retirement = () => {

  const [range, setRange] = useState({
    range1: 50,
    range2: 50,
  });

  const changeHandler = (event) => {
    const name = event.target.name
    setRange((prev) => {
      return ({ ...prev, [name]: event.target.value })
    })
  }


  return (
    <div className=' w-auto sm:p-10 sm:pt-14'>
      <div className="bg-[#fafafa] p-8 text-sm   rounded-3xl flex flex-col space-y-5">
        <h1 className='text-lg font-semibold'>Retirement Strategy</h1>
        <div className='space-y-2'>
          <h2 className='font-semibold'>Employee Contribution</h2>
          <div className='flex space-x-2 items-center'>
            <input className='w-60' type="range" min={1} max={100} onChange={(e) => { changeHandler(e) }} name='range1' />
            <span className='bg-[#ffffff] p-2 rounded-md'><b>{range.range1}%</b></span>
          </div>
        </div>
        <div>
          <h2 className='font-semibold' >Retirement Age</h2>
          <div className='flex space-x-2 items-center'>
            <input className='w-52' type="range" min={1} max={100} onChange={(e) => { changeHandler(e) }} name='range2' />
            <span className='bg-[#ffffff] p-2 rounded-md' ><b>{range.range2}</b></span>
          </div>
        </div>
        <hr className='h-1 border-solid border-t-2 border-[#f5f5f5] p-2 ' />
        <div className='font-semibold w-auto flex justify-between space-x-6'>
          <h2>Employee Contribution</h2>
          <span>8.4%</span>
        </div>
        <div className='font-semibold flex justify-between'>
          <h2>Intrest Rate</h2>
          <span>5%</span>
        </div>
        <button className='hidden sm:block bg-[#4935ff] m-auto text-[#ebe8ff] w-5/6 h-5/6 py-2 rounded-lg'>Update</button>
        <p className='text-sm hidden sm:block font-semibold text-[#6452fe] m-auto'>view help docs {">"}</p>
      </div>
      <button className=' sm:hidden relative z-20 bg-[#4935ff] m-auto text-[#ebe8ff] w-screen h-16 py-2 rounded-lg'>Update</button>
      <div className='hidden sm:block p-2 px-5 m-2 border-[#4935ff] border-l-2'>
        <h1 className='text[#4f4c4c]'>Are you Considering a</h1>
        <h1 className='font-bold'>Housing Advance?</h1>
        <p className='text-sm py-2 text-[#afafaf]'>
          Limited time reduced intrest.
        </p>
        <p className='text-sm font-bold text-[#6452fe]'>
          Learn More{" >"}
        </p>
      </div>
    </div>
  )
}

export default Retirement
