

// Home page  default and explore page 

import { BrowserRouter, Route, Switch, Redirect, Link, useHistory } from 'react-router-dom'
import Navbar from "../Components/Navbar/Navbar"
import Recipe from "../Components/RecipeCard/RecipeCard"
import "./Home.css"


function Home() {
  let history = useHistory();

  const recipe = () => {
    history.push('/RecipePage')
  }

    return (
      <>
      <div className="Home">
      <div className="Home-header">
        <Navbar className="navbar"/>
      </div>
      <div className="Home-Body-container">
       <div className="Grid-Row">
          <Recipe title="Nil" src="Nil"  onClick={recipe}/>
          <Recipe/>
          <Recipe/>
        </div>
        <div className="Grid-Row">
          <Recipe title="Nil" src="Nil" />
          <Recipe/>
          <Recipe/>
        </div>
        <div className="Grid-Row">
          <Recipe title="Nil" src="Nil" />
          <Recipe/>
          <Recipe/>
        </div>
      </div>
      </div>
      </>
    );
  }

  export default Home;
