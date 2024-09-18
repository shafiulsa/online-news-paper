import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRout = ( {children} ) => {
   const {user,loading}=useContext(AuthContext);

   const loaction =useLocation();
   console.log(location);


   if(loading){
    return <span className="loading loading-ring loading-lg"></span>

   }

   if(user){
    return children;
   }

    return <Navigate state={loaction.pathname} to='/login'></Navigate> ;
};

export default PrivetRout;