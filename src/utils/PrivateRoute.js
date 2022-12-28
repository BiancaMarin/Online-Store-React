import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext/AuthContext';

function PrivateRoutes({ redirectPath = '/' }) {
  const { auth } = useContext(AuthContext);
  if (!auth) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
}

export default PrivateRoutes;
