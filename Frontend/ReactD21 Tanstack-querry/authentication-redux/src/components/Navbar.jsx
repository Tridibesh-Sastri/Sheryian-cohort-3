import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router'
import { removeUser } from '../features/authSlice'
import { LogOut, ShoppingBag } from 'lucide-react';

const Navbar = () => {

  const dispatch = useDispatch()
  const {user, isAuthenticated} = useSelector((store) => store.auth)

  //-----------------------------------------------------------------------/
  //****************** Middle Part of Navbar while Logged In ***************/
  //-----------------------------------------------------------------------/

  const middleNav = ()=>{
    return(
      <div className="flex gap-12 justify-around items-center">
        <NavLink to="/main" className={({isActive})=> isActive ? "nav-link active text-yellow-500" : "nav-link text-white "} end>
          Home
        </NavLink>
        <NavLink to="/main/about" className={({isActive})=> isActive ? "nav-link active text-yellow-500" : "nav-link text-white "}>
          About
        </NavLink>
        <NavLink to="/main/shop" className={({isActive})=> isActive ? "nav-link active text-yellow-500" : "nav-link text-white "}>
          Shop
        </NavLink>
      </div>
    )
  }
  //-----------------------------------------------------------------------/
  //******************Right Part of Navbar while Logged Out ***************/
  //-----------------------------------------------------------------------/

  const loggedOutNavRight = ()=>{
    return(
      <div className="flex gap-5">
          <button className="btn btn-outline-success" type="submit">Login</button>

          <button className="btn btn-outline-success" type="submit">Register</button>
        </div>
    )
  }

  //-----------------------------------------------------------------------/
  //******************Right Part of Navbar while Logged In ***************/
  //-----------------------------------------------------------------------/

  const loggedInNavRight = ()=>{
    return(
      <div className="flex gap-5">
        {user && <span className="text-white">Hi! {<strong className="text-yellow-500">{user.name}</strong>}</span>}
        <ShoppingBag className="text-white cursor-pointer hover:text-yellow-500 transition-colors duration-500" />
        <button 
        onClick={()=>{
          localStorage.removeItem("user");
          dispatch(removeUser());
          // window.location.reload();
        }}
        className="btn btn-outline-success cursor-pointer hover:text-yellow-500 transition-colors duration-500" 
        >
          <LogOut />
          {/* Logout */}
        </button>

      </div>
    )
  }

  return (
    <div>
      <nav className="flex justify-between items-center  w-screen h-12 bg-black text-white flex items-center p-4 ">
        <div className ="w-1/5 flex justify-center items-center">
          <a className="navbar-brand font-bold text-lg text-yellow-500 flex" href="#">SkyDart</a>
        </div>
        <div className="w-3/5 flex justify-center items-center">
          {middleNav()}
        </div>
        <div className="w-1/5 flex justify-center items-center">
          {isAuthenticated ? loggedInNavRight() : loggedOutNavRight()}
        </div>
      </nav>

    </div>
  )
}

export default Navbar
