import './App.css';
import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LoginSignup from "./Pages/LoginSignup"
import Home from "./Pages/Home"
import RecipePage from "./Pages/Recipe-page"
import Dashboard from "./Pages/Dashboard"
import PublicProfile from './Pages/PublicProfile';
import UploadRecipe from './Pages/UploadRecipe';
import ForgetPassword from './Pages/ForgetPassword';
import SearchPage from './Pages/SearchPage';

function App() {

  const [recipes, setRecipes] = useState([]);
  const [isAuth, setisAuth] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {

    const fetch = () => {

      setIsError(false);

      axios
        .get(`https://naivebakerr.herokuapp.com/recipe/all`)
        .then(({ data }) => {
          if (data.ok === true) {
            setRecipes(data.data.recipe);
            setIsError(false);
          } else {
            setIsError(true);
          }
        }
        )
        .catch(err => {
          setIsError(true);
        })
    }

    fetch();

    const auth = localStorage.getItem('auth-token');
    if (auth !== undefined) {
      setisAuth(true);
    }
  }, [])

  return (
    <>
      {isError && <div>Something went wrong ...</div>}

      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home recipes={recipes}/>
          </Route>
          <Route path="/LoginSignup" component={LoginSignup} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/RecipePage" component={RecipePage} />
          <Route path="/PublicProfile" component={PublicProfile} />
          <Route path="/Upload">
            <UploadRecipe setRecipes={setRecipes}/>
          </Route>
          <Route path="/ResetPassword" component={ForgetPassword} />
          <Route path="/SearchPage" component={SearchPage} />
          <Route path="/ForgetPassword" component={ForgetPassword} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
