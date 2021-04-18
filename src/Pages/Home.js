<<<<<<< HEAD
// Home page  default and explore page -  by - Jitesh
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
// Home page  default and explore page -  by - Jitesh & Meet
=======
// Home page  default and explore page 
>>>>>>> Stashed changes
=======
// Home page  default and explore page -  by - Jitesh
>>>>>>> e84e5f3b1cf50b041182fe063cc9a999138d05e9
>>>>>>> devmain
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
