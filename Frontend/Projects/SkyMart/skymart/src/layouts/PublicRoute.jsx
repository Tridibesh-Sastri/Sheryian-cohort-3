import {React, useState} from 'react'
import {Outlet, Navigate } from 'react-router'
import { StoreContext } from '../context/StoreContext'
import { useContext } from 'react'

const PublicRoute = () => {
    const {isLogin} = useContext(StoreContext)





    // const [isLogin, setIsLogin] = useState(true)
    if(!isLogin){

        return <div>
            {/* {children} */}
            <Outlet/>
            </div>
    }
    
    return <Navigate to="/" replace />
}

export default PublicRoute
