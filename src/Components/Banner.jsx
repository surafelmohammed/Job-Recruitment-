import {FiMapPin, FiSearch} from 'react-icons/fi'

const Banner = ({qurey,handleInputChange}) => {
  return (
    <div className='searchDiv grid gap-10 bg-[#f1f4f8] rounded-[10px] p-[3rem]'> 
    {/* bg-[#f1f4f8] */}
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-6 py-2'>
        <h1 className='text-5xl text-primary font-bold mb-3'> Land your <span className='text-blue'>first job</span> today </h1>
        <p className='text-lg text-black/70 mb-8 '>Thousands of jobs in All streams including computer science, engineering and Medical science are waiting for you here.</p>
        <form action="">
            <div className='flex justify-start md:flex-row flex-col md:gap-0 gap-4'>
                <div className='flex md:rounded-sm rounded shadow-sm ring-1 ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-2/3 w-full'>
                    <input type="text" name='title' id='title' placeholder='What position are you looking for?' className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-800 placeholder:text-gray-400 focus:right-0 sm:leading-6'
                    onChange={handleInputChange}
                    value={qurey}/>
                    <FiSearch className=' absolute mt-2.5 ml-2 text-gray-400'/>
                </div>
                <button type='submit' className='bg-blue text-white md:rounded-s-none rounded px-8 py-2'>Search</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Banner