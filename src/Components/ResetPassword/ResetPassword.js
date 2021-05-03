import React from "react";
import { Link } from "react-router-dom";
import "./ResetPassword.css";

function ResetPassword() {

    return (
      <div>
        <div>
          <form /*onSubmit={handleSendCodeClick}*/ >
            
              <textarea >Email</textarea>
            
            <button
              block
              type="submit"
              bsSize="large"
            > Send Confirmation </button>
          </form>
        </div>
  
        <div>
          <form /*onSubmit={handleConfirmClick}*/ >
            
              <textarea >Confirmation Code</textarea>
            
            <hr />
          
            <textarea >New Password</textarea>
          
            <textarea >Confirm Password</textarea>
          
            <button
              block
              //type="submit"
              bsSize="large"
            >Confirm </button>
          </form>
        </div>
      
        <div>
            <p>Your password has been reset.</p>
          <p>
              <Link to="./Login/Login.js">
                Click here to login with your new credentials.
              </Link>
            </p> 
        </div>
      </div>
    );

}


export default ResetPassword;