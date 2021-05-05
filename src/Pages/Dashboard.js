import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DashboardProfile from "../Components/Dashboard/DashboardProfile"
import Navbar from "../Components/Navbar/Navbar"

export default function Dashboard({isAuth}) {

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {

    const fetch = () => {

      setIsError(false);
      setLoading(true);
      const token = localStorage.getItem('auth-token');

      axios.get(`https://naivebakerr.herokuapp.com/user/detail`,
        {
          headers: {
            'auth-token': token
          }
        })
        .then(({ data }) => {
          console.log(data.data);
          setData(data.data);
          setIsError(false);
          setLoading(false);
        })
        .catch((e) => {
          console.log(e);
            setIsError(true);
        })
    }

    fetch();
  }, []);

  return (
    <>
      <Navbar isAuth={isAuth} />
      {isError && <div>Something went wrong ...</div>}
      {loading === false && <DashboardProfile data={data}/>}
    </>
  )
}



