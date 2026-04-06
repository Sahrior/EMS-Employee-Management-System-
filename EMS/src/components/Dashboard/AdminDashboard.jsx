import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = () => {
  return (
    <div className='min-h-screen w-full bg-gray-900 text-white p-8'>

      <Header />
      <CreateTask/>
      <AllTask/>

    </div>
  )
}

export default AdminDashboard