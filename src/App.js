// import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LoginSignup from "./Pages/LoginSignup"
import Home from "./Pages/Home"
import RecipePage from "./Pages/Recipe-page"
//import Navbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/LoginSignup" component={LoginSignup} />
                {/*<Route path="/Profile" component={Dashboard} />*/}
                <Route path="/RecipePage" component={RecipePage} />
            </Switch>
        </BrowserRouter>
  );
}

export default App;
