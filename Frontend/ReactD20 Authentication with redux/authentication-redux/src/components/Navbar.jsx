import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router'
import { removeUser } from '../features/authSlice'

const Navbar = () => {

  const dispatch = useDispatch()
  const {isAuthenticated} = useSelector((store) => store.auth)

  const logiBtn = ()=>{
    return(
      <div className="flex gap-5">
          <button className="btn btn-outline-success" type="submit">Login</button>

          <button className="btn btn-outline-success" type="submit">Register</button>
        </div>
    )
  }

  const logoutBtn = ()=>{
    return(
      <div className="flex gap-5">
          <button 
          onClick={()=>{
            localStorage.removeItem("user");
            dispatch(removeUser());
            // window.location.reload();

          }}
          className="btn btn-outline-success cursor-pointer" 
          >
            Logout
          </button>
        </div>
    )
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg flex justify-around items-center  w-screen bg-body-tertiary bg-blue-500 h-10" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand " href="#">Navbar</a>
        </div>
        {isAuthenticated ? logoutBtn() : logiBtn()}
      </nav>
    </div>
  )
}

export default Navbar
