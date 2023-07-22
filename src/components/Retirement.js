import React, { useState } from 'react'

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
    <div>
      <div className="bg-[#fafafa]">
        <h1>Retirement Strategy</h1>
        <>
          <h2>Employee Contribution</h2>
          <input type="range" min={1} max={100} value={range.range1} onChange={(e) => { changeHandler(e) }} name='range1' />
          <span>{range.range1}</span>
        </>
        <>
          <h2>Retirement Age</h2>
          <input type="range" min={1} max={100} onChange={(e) => { changeHandler(e) }} name='range2' />
          <span>{range.range2}</span>
        </>
        <hr className='h-1 border-solid border-t-2 border-[#f5f5f5] p-2 ' />
        <h2>Employee Contribution</h2>
        <span>8.4%</span>
        <h2>Intrest Rate</h2>
        <span>5%</span>
        <button className='bg-[#4935ff] text-[#ebe8ff] w-1/2 py-2 rounded-md'>I want to ▼</button>
      </div>
      <div>
        <h1>Are you Considering a</h1>
        <h1>Housing Advance?</h1>
        <p>
          Limited time reduced intrest.
        </p>
        <p>
          Learn More
        </p>
      </div>
    </div>
  )
}

export default Retirement
