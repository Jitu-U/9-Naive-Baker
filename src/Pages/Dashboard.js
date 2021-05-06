import React from 'react';
import { useContext} from 'react';
import DashboardProfile from "../Components/Dashboard/DashboardProfile"
import Navbar from "../Components/Navbar/Navbar"
import {UserContext} from '../Contexts/context';

export default function Dashboard() {

  const {user} = useContext(UserContext);
  return (
    <>
      <Navbar/>
      {console.log(user)};
      {user !== undefined && <DashboardProfile user={user}/>}
    </>
  )
}



