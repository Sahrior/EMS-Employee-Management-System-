import React from 'react'

const Header = ({data}) => {
  return (
    <div className='flex items-end justify-between' >
      <h1 className='text-2xl font-medium ' >Hello <br /> <span className='text-3xl font-bold ' >{data.firstName} 👋</span> </h1>
      <button className='bg-red-500 text-white px-5 py-2 rounded' >Log out</button>
    </div>
  )
}

export default Header
