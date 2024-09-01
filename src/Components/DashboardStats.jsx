import React, { useEffect, useState } from 'react'
import {IoBagHandle} from 'react-icons/io5'
import { FiThumbsUp } from "react-icons/fi";
import { TfiLayoutListPost } from "react-icons/tfi";

const DashboardStats = ({jobs}) => {
    var [sum,setSum] = useState(0)
    var [count,setCount] = useState(0)

    useEffect(()=>{
        let a = 0
        let b = 0
        jobs.map(item=>{
            a=a+item.applicants.length
            if(item.applicants.length===0){
                b++
            }
          })
          setSum(a)
          setCount(b)
    },[jobs])

  return (
    <div className='flex flex-wrap gap-4 w-full pt-5 mr-5 ml-5'>
        <BoxWrapper>
            <div className='rounded-full h-12 w-12 flex items-center justify-center bg-blue '>
                <TfiLayoutListPost className='text-2xl text-white'/>
            </div>
            <div className='pl-4 '>
                <span className='text-xl text-gray-500 font-bold'>Posted Jobs</span>
                <div className='flex items-center'>
                    <strong className='text-lg text-gray-700 font-light'>{jobs.length}</strong>
                </div>
            </div>
        </BoxWrapper>
        <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-green-500 '>
                <FiThumbsUp className='text-2xl text-white'/>
            </div>
            <div className='pl-4'>
                <span className='text-xl text-gray-500 font-bold'>Applicants</span>
                <div className='flex items-center'>
                    <strong className='text-lg text-gray-700 font-light'>{`${sum} applicants`}</strong>
                </div>
            </div>
        </BoxWrapper>
        
        <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500 '>
                <IoBagHandle className='text-2xl text-white'/>
            </div>
            <div className='pl-4'>
                <span className='text-xl text-gray-500 font-bold'>Jobs with no Applicants</span>
                <div className='flex items-center'>
                    <strong className='text-lg text-gray-700 font-semibold'>{count}</strong>
                    <span className='text-sm text-green-500 pl-2'>out of {jobs.length} jobs</span>
                </div>
            </div>
        </BoxWrapper>

    </div>
  )
}

export default DashboardStats

function BoxWrapper({children}){
    return <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center'>{children}</div>
}