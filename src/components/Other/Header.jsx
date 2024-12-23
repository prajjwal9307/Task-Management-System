import React, { useState } from 'react'

const Header = (props) => {
  
  const logOutUser=()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
   
    // window.location.reload()
  }
  return (
    <div className='flex items-end justify-between'> 
    <h1  className='text-2xl font-semibold'>Hello <br /> <span className='text-3xl font-semibold'>username 👋</span> </h1>
    <button onClick={logOutUser} className='bg-red-600 text-lg px-5 py-2 font-medium'>Log Out</button>

    </div>
  )
}

export default Header

