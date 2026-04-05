import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {

        e.preventDefault()
        console.log(email);
        console.log(password)
        

    }


  return (
    <div className='flex h-screen w-screen items-center justify-center bg-black'>
      
      <div className='border border-emerald-600 rounded-2xl p-10 w-[350px] shadow-lg'>
        
        <h2 className='text-white text-2xl mb-6 text-center font-semibold'>
          Login
        </h2>

        <form onSubmit={(e)=>{
            submitHandler(e)
        }} className='flex flex-col gap-4'>
          
          <input required
            value = {email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            className='w-full text-white bg-transparent border border-emerald-600 rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-emerald-500 placeholder-gray-400'
            type="email" 
            placeholder='Enter your email' 
          />

          <input required
            value = {password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            className='w-full text-white bg-transparent border border-emerald-600 rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-emerald-500 placeholder-gray-400'
            type="password" 
            placeholder='Enter password' 
          />

          <button 
            className='w-full bg-emerald-600 text-white rounded-full py-3 mt-2 hover:bg-emerald-700 transition duration-200'
          >
            Login
          </button>

        </form>

      </div>

    </div>
  )
}

export default Login