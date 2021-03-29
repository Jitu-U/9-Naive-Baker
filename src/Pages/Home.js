// Home page  default and explore page -  by - Jitesh & Meet
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
function Home() {
    return (
      <div className="Home">
        <Switch>
            <Route exact path="/">
              <Link to="/LoginSignup">
              Login
              </Link>
            </Route>
          </Switch>
      </div>
    );
  }
  
  export default Home;
  