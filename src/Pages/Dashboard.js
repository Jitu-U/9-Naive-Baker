import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DashboardProfile from "../Components/Dashboard/DashboardProfile"
import Navbar from "../Components/Navbar/Navbar"

export default function Dashboard() {

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {

    const fetch = () => {

      setIsError(false);
      setLoading(true);

      axios.get(`https://naivebakerr.herokuapp.com/user/detail`,
        {
          headers: {
            'auth-token': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDc2ZDBjYzM5ODM2MDk4NjRjZWYyNGMiLCJpYXQiOjE2MTk5ODA1NTV9.UYBB7r4IvoQF4-WqlVQaN9MeGNnXoH3cy_HlMWr8khQ`
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
      <Navbar />
      {isError && <div>Something went wrong ...</div>}
      {loading === false && <DashboardProfile data={data}/>}
    </>
  )
}



