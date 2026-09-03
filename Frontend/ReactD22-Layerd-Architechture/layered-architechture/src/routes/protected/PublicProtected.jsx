import React from 'react'
import { Outlet, Navigate } from 'react-router'
import { useSelector } from 'react-redux';

const PublicProtected = () => {
  const { isAuthenticated} = useSelector((store) => store.auth);
  // let navigate = useNavigate();
  if(isAuthenticated){

    return <Navigate to = "/main"/>;
  }
  return <Outlet />
}

export default PublicProtected
