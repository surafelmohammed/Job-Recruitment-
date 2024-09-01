import React from 'react'

const InputField = ({handleChange,value,title,name}) => {
  return (
    
        <label className='sidebar-label-container'>
            <input 
            onChange={handleChange} 
            value={value}
            name={name} 
            type="radio"    
            />
            <span className='checkmark'></span>{title}
        </label>
  )
}

export default InputField