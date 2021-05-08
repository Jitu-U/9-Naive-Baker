import Navbar from "../Components/Navbar/Navbar"
function About() {
    
    return (
      <>
        <Navbar/>
        <div className="container" style={{"padding":"20px", "width":"40vw","margin-left":"30%","margin-top":"10%"}}>
        <h1> About us</h1>
        <hr></hr>
        <p>Many people look for “what to cook ?” or “How to cook something?” on the internet, or they want to share his/hers findings with the world. This software will help all those people who want an answer to all those questions easily and Share their talents related to cooking with the world on the same platform. Here users can easily search for recipes with different search methods mentioned. Also If someone tries out new recipes at home and finds them too delicious, He or She can share them with the community so anyone around the world can cook the same thing: the local delicacy of the town over the seas. 
       </p>
       </div>
      </>
    )
  }
  
  export default About;