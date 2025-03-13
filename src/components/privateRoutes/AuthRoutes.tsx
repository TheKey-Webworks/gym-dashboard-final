import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Navigate, Outlet } from 'react-router'

const AuthRoutes = () => {

  const { isAuthenticated } = useContext(AuthContext) as { isAuthenticated: boolean }

  return isAuthenticated ? <Outlet /> : <Navigate to={"/signin"} />
}

export default AuthRoutes