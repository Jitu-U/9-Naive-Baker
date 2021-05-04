// This is Navbar, defaul for all the pages, Except for sign up and login page
//by -Jitesh & Meet

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom"
import "./Navbar.css"
import SearchBox from "../search-box/Search-Box";
import {FcUpload} from "react-icons/fc"

function Navbar(){
  const [click, setClick] = useState(false);
  var loggedIN = false;


// Handling sign in is not set up


  var joinNow = () => {
    return(
      <div className="join-btn">
        <Link to="/LoginSignup">Join now</Link>
      </div>
    );
  }

  var ProfileMenu = () => {
    return(
      <>
        <div className="Profile-Button">
          <div className="Name">
            Jitesh Gamit
          </div>
        <img className="Profile-Pic" src="https://lh3.googleusercontent.com/ogw/ADGmqu_zu--WffN4JlWGzZ0pulY4v67ZMm7FTfhJIYJhiTA=s64-c-mo"></img>
      </div>
        </>
    );
  }

  const handleClick = () => setClick(!click);

    return(
    <>
  <nav className='Navbar'>
    <div className='navbar-container'>
      <Link to='/' className='navbar-logo' >
        Naive Baker
      </Link>

        <div className="Nav-Right-parent">
          <div className="Nav-Right">
          
          <Link className="upload-btn" to='/Upload'>
          <FcUpload/>
              Upload
          </Link>
          <SearchBox/>
          {ProfileMenu()}
        </div>
        </div>
    </div>
  </nav>
  </>
    )

}

export default Navbar;
