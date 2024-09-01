import React, { useEffect, useState } from 'react'
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts'



const TransactionChart = ({jobs}) => {
    const [numbers, setNumbers] = useState([]);

    const data = [
        {
            Accepted: numbers[0],
        },
        {
            Accepted: numbers[1],
        },
        {
            Accepted: numbers[2],
        },
        {
            Accepted: numbers[3],
        },
        {
            Accepted: numbers[4],
        },
        {
            Accepted: numbers[5],
        },
        {
            Accepted: numbers[6],
        },
        {
            Accepted: numbers[7],
        },
        {
            Accepted: numbers[8],
        }
    
    ]

    useEffect(()=>{
        let a = []
        jobs.map((job)=>{
            a = [...a,job.applicants.length]
            })
            a.reverse()
            setNumbers(a)
            console.log(numbers)
        

    },[jobs])

    
  return (
    <div className='h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1'>
        <strong className='text-gray-700 font-medium'>Recent Posted Job Applicants</strong>
    <div className='w-full mt-3 flex-1 text-xs'>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={150} height={40} data={data}>
                <Bar dataKey="Accepted" fill="#0000FF" />
                </BarChart>
            </ResponsiveContainer>
    </div>
    </div>
  )
}

export default TransactionChart