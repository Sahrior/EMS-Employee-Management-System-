import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex flex-wrap mt-10 justify-between gap-6 w-full px-6'>

      <div className='rounded-2xl w-full sm:w-[48%] lg:w-[23%] p-6 bg-red-400 shadow-md hover:scale-105 transition-all duration-300'>
        <h2 className='text-4xl font-bold text-white'>0</h2>
        <h3 className='text-lg font-medium text-white mt-2'>New Task</h3>
      </div>

      <div className='rounded-2xl w-full sm:w-[48%] lg:w-[23%] p-6 bg-blue-400 shadow-md hover:scale-105 transition-all duration-300'>
        <h2 className='text-4xl font-bold text-white'>0</h2>
        <h3 className='text-lg font-medium text-white mt-2'>New Task</h3>
      </div>

      <div className='rounded-2xl w-full sm:w-[48%] lg:w-[23%] p-6 bg-yellow-400 shadow-md hover:scale-105 transition-all duration-300'>
        <h2 className='text-4xl font-bold text-white'>0</h2>
        <h3 className='text-lg font-medium text-white mt-2'>New Task</h3>
      </div>

      <div className='rounded-2xl w-full sm:w-[48%] lg:w-[23%] p-6 bg-green-400 shadow-md hover:scale-105 transition-all duration-300'>
        <h2 className='text-4xl font-bold text-white'>0</h2>
        <h3 className='text-lg font-medium text-white mt-2'>New Task</h3>
      </div>

    </div>
  )
}

export default TaskListNumber