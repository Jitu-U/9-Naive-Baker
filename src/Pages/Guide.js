import Navbar from "../Components/Navbar/Navbar"


function Guide() {
    
    return (
      <>
        <Navbar/>
        <div className="container" style={{"padding":"20px", "width":"60vw","margin-left":"18%","margin-top":"5%"}}>
        <h1> User Guide</h1>
        <hr></hr>
        <h2>
        Login
        </h2>
        <p>
        Click on Join now on top left<br/>
        Enter your username and password<br/>
        Click on the ‘Submit’ button.
        </p>
        <h3>If user is not registered :</h3>
        <p>
          Click on register  the user will be directed to the ‘Register’ page.<br/>
          Enter necessary details.<br/>
          Click on the ‘Submit’ button.<br/>
        </p>
      <h2>
      Upload recipe (Login Required)
      </h2>
      <p>
        Click on upload button<br/>
        Enter details of recipe.<br/>
        Select or create ingredients<br/> 
        Enter a link to your recipes image<br/>
        Click on  the ‘Upload’ button.<br/>

        </p>
       </div>
      </>
    )
  }
  
  export default Guide;