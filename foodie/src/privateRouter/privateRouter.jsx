import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider';
import LoadingSpinner from '../components/LoadingSpinner';
import { Navigate, useLocation } from 'react-router-dom';

const privateRouter = () => {
    const {user,loading}=useContext(AuthContext);
    const location =useLocation();
    if(loading){
        return (<LoadingSpinner/>)
    }
    if(user){
        return children
    }
  return (
    <Navigate to="/signUp" state={{ from: location }} replace />)
}

export default privateRouter