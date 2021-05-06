import React,{useContext} from 'react';
import Navbar from "../Components/Navbar/Navbar"
import RecipeCard from '../Components/RecipeCard/RecipeCard';
import {RecipeContext} from '../Contexts/context';
import "./Home.css"


export default function Home() {

  const {recipes} = useContext(RecipeContext);

  return (
    <>
      {console.log("home")}
      <Navbar className="Nav"/>
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

