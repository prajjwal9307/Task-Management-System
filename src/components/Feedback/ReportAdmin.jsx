import React from 'react'
import { getReportStorage } from '../../utils/Reportstorage'

const ReportAdmin = () => {
    const getexitingreport=getReportStorage()


  return (
    <div className='bg-[#1c1c1c] p-5 rounded-lg mt-5 shadow-lg'>
        <h1 className='text-lg font-medium w-1/5 mb-3'>Project Report</h1>
        <div className='bg-[#ff4c4c] py-3 px-4 flex justify-between rounded-lg mb-4 text-white'>
            <h1 className='text-lg font-medium w-1/5'>Employee ID</h1>
            <h1 className='text-lg font-medium w-1/5'>Project Title</h1>
            <h1 className='text-lg font-medium w-1/5'>Description</h1>
            <h1 className='text-lg font-medium w-1/5'>Report Document</h1>
        </div>
        <div className="h-64 overflow-y-auto bg-[#1c1c1c] p-4 rounded-lg">
         {getexitingreport.map(function(elem,idx){
            return <div key={idx} className='border-2 border-emerald-500 py-2 px-4 flex justify-between rounded mb-2  '>
            <h1 className='text-lg font-medium w-1/5'>{elem.reportemail}</h1>
            <h1 className='text-lg font-medium w-1/5'>{elem.reportTitle}</h1>
            <h1 className='text-lg font-medium w-1/5'>{elem.reportDescription}</h1>
            <h1 className='text-lg font-medium w-1/5'>
            {elem.reportFile ? (
                                <a
                                href={elem.reportFile}
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                className="underline hover:text-emerald-300"
                            >
                                Open in New Tab
                            </a>
                            ) : (
                                'No File'
                            )}
            </h1>
            </div>
         })}
        </div>

    </div>
  )
}

export default ReportAdmin