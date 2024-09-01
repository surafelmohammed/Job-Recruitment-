import React from 'react'

const RecentJobStatus = ({jobs}) => {
  return (
    <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1 '>
        <strong className="font-semibold text-base text-blueGray-700">Recently Posted Jobs</strong>
        <div className='mt-3'>
            <table className="items-center bg-transparent w-full border-collapse ">
                <thead>
                    <tr>
                        <td className="px-4 bg-blueGray-50 text-blue align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Company Name</td>
                        <td className="px-4 bg-blueGray-50 text-blue align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">JobTitle</td>
                        <td className="px-4 bg-blueGray-50 text-blue align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Job Location</td>
                        <td className="px-4 bg-blueGray-50 text-blue align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Employment Type</td>
                        <td className="px-4 bg-blueGray-50 text-blue align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">No Applicants</td>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map((job)=>(
                        <tr >
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">{job.companyName}</td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">{job.jobTitle}</td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">{job.jobLocation}</td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">{job.employmentType}</td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-2 text-left text-green-700 font-bold">{job.applicants.length}</td>
                        </tr>
                        
                    ))}
                </tbody>
            </table>
        
        </div>
        
    </div>
  )
}

export default RecentJobStatus