import React from 'react'
import ColChart from "./C-chart";
import Donut from './DonutChart'
const Chart = () => {
    return (
        <div>
            <h1 className='text-lg font-semibold mx-5 sm:mx-0 py-4 pt-7'>Contribution Overtime</h1>
            <ColChart />
            <div>
                <h1 className='text-lg font-semibold'>How do I compare to my peers?</h1>
                <p className='text-[#a7a7a7] text-sm'>These numbers represent current goal achievement</p>
                <div className='flex flex-col pt-7 space-x-0 sm:flex-row sm:space-x-16'>
                    <div>
                        <div>
                            <p className='pb-2'><b>Age:</b> Under 30</p>
                            <hr className='h-1 border-solid border-t-2 border-[#f5f5f5] p-2 ' />
                        </div>
                        <div>
                            <p className='pb-2'><b>Salary:</b> K 20 - K 30</p>
                            <hr className='h-1 border-solid border-t-2 border-[#f5f5f5] p-2 ' />
                        </div>
                        <div>
                            <p className='pb-2'><b>Gender:</b> Male</p>
                            <hr className='h-1 border-solid border-t-2 border-[#f5f5f5] p-2 ' />
                        </div>
                    </div>
                    <div className='ml-5 flex sm:pt-3 gap-4 sm:gap-10'>
                        <div className='flex flex-col items-center'>
                            <Donut data={[78, 22]} />
                            <span>Average</span>
                        </div >
                        <div className='flex flex-col items-center'>
                            <Donut data={[95, 5]} />
                            <p>Top</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <Donut data={[59, 41]} />
                            <p>Me</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chart
