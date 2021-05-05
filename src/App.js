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
    if (auth !== null) {
      setisAuth(true);
    }
  }, [])

  return (
    <>
      {isError && <div>Something went wrong ...</div>}

      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home recipes={recipes} isAuth={isAuth} setisAuth={setisAuth}/>
          </Route>
          <Route path="/LoginSignup">
            <LoginSignup isAuth={isAuth} setisAuth={setisAuth}/>
          </Route>
          <Route path="/Dashboard">
            <Dashboard isAuth={isAuth} setisAuth={setisAuth}/>
          </Route>
          <Route path="/RecipePage">
            <RecipePage isAuth={isAuth} setisAuth={setisAuth}/>
          </Route>
          <Route path="/PublicProfile">
            <PublicProfile isAuth={isAuth} setisAuth={setisAuth}/>
          </Route>
          <Route path="/Upload">
            <UploadRecipe setRecipes={setRecipes}/>
          </Route>
          <Route path="/ResetPassword">
            <ForgetPassword isAuth={isAuth} setisAuth={setisAuth}/>
          </Route>
          <Route path="/SearchPage">
            <SearchPage isAuth={isAuth} setisAuth={setisAuth}/>
          </Route>
          <Route path="/ForgetPassword">
            <ForgetPassword isAuth={isAuth} setisAuth={setisAuth}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
