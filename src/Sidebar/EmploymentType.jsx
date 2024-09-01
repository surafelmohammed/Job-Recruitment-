import React from 'react'
import InputField from '../Components/InputField'

const EmploymentType = ({handleChange}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Employment Type</h4>

            <div>
                <InputField handleChange={handleChange} value="" title="Any" name="test" />
                <InputField handleChange={handleChange} value="Temporary" title="Temporary" name="test" />
                <InputField handleChange={handleChange} value="Part-time" title="Part-time" name="test" />
                <InputField handleChange={handleChange} value="Full-time" title="Full-time" name="test" />
            </div>
    </div>
  )
}

export default EmploymentType