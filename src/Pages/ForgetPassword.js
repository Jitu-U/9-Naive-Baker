import React from 'react';
import Navbar from "../Components/Navbar/Navbar"
import ResetPassword from "../Components/ResetPassword/ResetPassword"

function ForgetPassword({isAuth}) {
      return(
        <>
        <Navbar isAuth={isAuth}/>
        <ResetPassword/>
        </>
      )
}


export default ForgetPassword;