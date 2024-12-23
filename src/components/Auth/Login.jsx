import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const submitHandler=(e)=>{
        e.preventDefault()
        handleLogin(email, password)
        setemail("")
        setpassword("")
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl '>
            <form 
            onSubmit={(e)=>{
                submitHandler(e);
            }}
            className='flex flex-col items-center justify-center'>
                <input 
                value={email}
                onChange={(e)=>{
                    setemail(e.target.value);
                }}
                required className=' outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400' type="email" placeholder='Enter Email' />
                <input
                value={password}
                onChange={(e)=>{
                    setpassword(e.target.value)
                }}
                 required className=' outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400 mt-3' type="password" placeholder='Enter password' />
                <button className='text-white outline-none bg-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-white mt-3'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login




