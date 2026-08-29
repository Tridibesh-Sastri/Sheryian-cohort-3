import React from 'react'
import { Outlet } from 'react-router'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
const Layout = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Nav/>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
