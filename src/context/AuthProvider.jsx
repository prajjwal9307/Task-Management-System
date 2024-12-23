import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'
export const AuthContext=createContext()
const AuthProvider = ({children}) => {
  // localStorage.clear()
    const [userdata, setUserdata] = useState(null)
    useEffect(() => {
        setLocalStorage()
      const {employees}=getLocalStorage()
      setUserdata(employees)
    }, [])
    
  return (
    <div>
        <AuthContext.Provider value={[userdata,setUserdata]}>
          {children}
        </AuthContext.Provider>
        </div>
  )
}

export default AuthProvider