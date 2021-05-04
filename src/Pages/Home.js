import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link, useHistory } from 'react-router-dom'
import Navbar from "../Components/Navbar/Navbar"
import Recipe from "../Components/RecipeCard/RecipeCard"
import "./Home.css"
import { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from '../Components/RecipeCard/RecipeCard';


export default function Home() {

  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {

    const fetch = () => {

      setIsError(false);
      setLoading(true);

      axios
        .get(`https://naivebakerr.herokuapp.com/recipe/all`)
        .then(({ data }) => {
          setRecipes(data.data.recipe);
          setIsError(false);
          setLoading(false);
        }
        )
        .catch(err => {
          setIsError(true);
          console.log(err);
        })
    }

    fetch();
  }, [])

  return (
    <>
      {isError && <div>Something went wrong ...</div>}
      <Navbar />
      {
        loading === false &&
          <div className="Home">
            <div className="Home-Body-container">
              {
                recipes !== undefined && recipes.map(r => <RecipeCard r={r} />)
              }
            </div>
          </div>
      }
    </>
  );
}

