import React from 'react'
import { Outlet, Navigate } from 'react-router'
import { useSelector } from 'react-redux';
import Loading from '../../shared/ui/components/LoadingPage';


const MainProtected = () => {
  const { isAuthenticated, isLoading } = useSelector((store) => store.auth);
  // let navigate = useNavigate();

  if (isLoading) {
    return <Loading />; // Show a loading indicator while checking authentication
  }

  if(!isAuthenticated){

    return <Navigate to = "/"/>;
  }
  return <Outlet />
}

export default MainProtected
