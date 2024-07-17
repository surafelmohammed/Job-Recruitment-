import React from 'react'

const   Jobs = ({result}) => {
  return (
    <>
    <div>
      <h3 className='text-lg font-bold mb-1'>{result.length} Jobs</h3>
    </div>
    <section className='grid grid-cols-1 md:pl-14 md:grid-cols-2 xl:pl-5 xl:grid-cols-3 justify-center items-center'>{result}</section>
    </>
  )
}

export default Jobs