import React from 'react';
import Navbar from "../Components/Navbar/Navbar"
import ProfileOther from '../Components/profile_other/profile-other';

function PublicProfile({isAuth}) {
      return(
        <>
        <Navbar isAuth={isAuth}/>
        <ProfileOther/>
        </>
      )
}


export default PublicProfile;