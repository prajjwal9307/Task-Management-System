import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
// import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'

const App = () => {
 

  const [user, setUser] = useState(null)
  const [loggedInuserData, setloggedInuserData] = useState(null)
  const [userData,setUserData]=useContext(AuthContext)

  // console.log(Authdata.employees )
  
  useEffect(() => {
    const loggedInUser=localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData=JSON.parse(loggedInUser)
      setUser(userData.role)
      setloggedInuserData(userData.role)
    }
  },[])
  

  const handleLogin=(email,password)=>{
    if(email=='admin@me.com' && password=='123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(userData){
      const employee=userData.find((e)=>email==e.email && password==e.password)
      if(employee){
        setUser('employee')
        setloggedInuserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee', data:'employee'}))
      }
      

    }else{
      alert("Invalid Credencials")
    }
  }
  
  
  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> :''}
    {user === 'admin' ? (
  <AdminDashboard changeUser={setUser}/>
) : user === 'employee' ? (
  <EmployeeDashboard changeUser={setUser} data={loggedInuserData} />
) : null}




    {/* <EmployeeDashboard/> */}
   {/* <AdminDashboard/> */}
    </>
  )
}

export default App