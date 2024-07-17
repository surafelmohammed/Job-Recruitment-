import React from 'react'
import WorkExperience from './WorkExperience'
import EmploymentType from './EmploymentType'

const Sidebar = ({handleChange,handleClick}) => {
  return (
    <div className='space-y-5'>
        <h3 className='text-lg font-bold mb-3'>Filters</h3>
        <WorkExperience handleChange={handleChange}/>
        <EmploymentType handleChange={handleChange}/>
    </div>
  )
}

export default Sidebar