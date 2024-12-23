import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='h-full flex-shrink-0 w-[300px] bg-yellow-400 rounded-xl p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
                <h4>{data.taskDate}</h4>
            </div>
            <h2 className='text-2xl font-semibold mt-5'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription}</p>
            <div className='mt-5'>
                <button className='bg-green-500 py-1 px-2 text-sm '>Failed</button>
            </div>
        </div>
  )
}

export default FailedTask