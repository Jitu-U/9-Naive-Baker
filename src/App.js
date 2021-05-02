import './App.css';
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LoginSignup from "./Pages/LoginSignup"
import Home from "./Pages/Home"
import RecipePage from "./Pages/Recipe-page"
import Dashboard from "./Pages/Dashboard"
import PublicProfile from './Pages/PublicProfile';
import UploadRecipe from './Pages/UploadRecipe';
//import Navbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/LoginSignup" component={LoginSignup} />
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/RecipePage" component={RecipePage} />
        <Route path="/PublicProfile" component={PublicProfile} />
        <Route path="/Upload" component={UploadRecipe} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
