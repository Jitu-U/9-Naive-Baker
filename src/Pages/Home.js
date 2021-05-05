import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link, useHistory } from 'react-router-dom'
import Navbar from "../Components/Navbar/Navbar"
import Recipe from "../Components/RecipeCard/RecipeCard"
import "./Home.css"
import { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from '../Components/RecipeCard/RecipeCard';


export default function Home({ recipes }) {
  return (
    <>
      <Navbar className="Nav" isAuth={isAuth}/>
      {
        recipes.length !== 0 &&
        <div className="Home">
          <div className="Home-Body-container">
            {recipes.map(r => <RecipeCard r={r} />)}
          </div>
        </div>
      }
    </>
  );
}

