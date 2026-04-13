import React from 'react'
import AceptTask from './AceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto  flex items-center justify-star gap-5 flex-nowrap w-95% py-5 mt-10 m-6  ' >

      <AceptTask/>

      <NewTask/>

      <CompleteTask/>

      <FailedTask/>


    </div>
  )
}

export default TaskList
