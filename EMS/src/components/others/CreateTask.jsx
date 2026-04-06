import React from 'react'

const CreateTask = () => {
  return (
          <div className='mt-10 bg-gray-800 rounded-2xl shadow-lg p-8'>
        
        <h2 className='text-2xl font-semibold mb-6'>Create New Task</h2>

        <form className='grid grid-cols-1 md:grid-cols-2 gap-6'>

          {/* Task Title */}
          <div className='flex flex-col gap-2'>
            <label className='text-sm text-gray-400'>Task Title</label>
            <input 
              type="text" 
              placeholder='Make a UI design'
              className='bg-gray-700 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-500'
            />
          </div>

          {/* Assign To */}
          <div className='flex flex-col gap-2'>
            <label className='text-sm text-gray-400'>Assign To</label>
            <input 
              type="text" 
              placeholder='Employee name'
              className='bg-gray-700 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-500'
            />
          </div>

          {/* Date */}
          <div className='flex flex-col gap-2'>
            <label className='text-sm text-gray-400'>Date</label>
            <input 
              type="date" 
              className='bg-gray-700 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-500'
            />
          </div>

          {/* Category */}
          <div className='flex flex-col gap-2'>
            <label className='text-sm text-gray-400'>Category</label>
            <input 
              type="text" 
              placeholder='Design, Dev, etc'
              className='bg-gray-700 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-500'
            />
          </div>

          {/* Description (full width) */}
          <div className='md:col-span-2 flex flex-col gap-2'>
            <label className='text-sm text-gray-400'>Description</label>
            <textarea 
              rows="5"
              placeholder='Write task details...'
              className='bg-gray-700 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-500 resize-none'
            ></textarea>
          </div>

          {/* Button */}
          <div className='md:col-span-2 flex justify-end'>
            <button 
              className='bg-emerald-500 hover:bg-emerald-600 transition-all px-6 py-2 rounded-lg font-medium shadow-md'
            >
              Create Task
            </button>
          </div>

        </form>

      </div>
  )
}

export default CreateTask
