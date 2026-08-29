import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { useSelector } from 'react-redux'

const MainProtected = () => {

    const {isAuthenticated} = useSelector((store) => store.auth)
    if(!isAuthenticated){
        return <Navigate to="/" />
    }

  return <Outlet />
}

export default MainProtected
