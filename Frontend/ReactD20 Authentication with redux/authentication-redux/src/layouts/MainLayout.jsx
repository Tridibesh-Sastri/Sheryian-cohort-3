import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import HomePage from '../pages/HomePage'
import { useSelector } from 'react-redux'

const MainLayout = () => {

  const {isAuthenticated} = useSelector((store) => store.auth)


  return (
    <div>
      <Navbar/>

      <Outlet />
    </div>
  )
}

export default MainLayout
