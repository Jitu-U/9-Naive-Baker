import "./Dashboard.css";
import Button from "@material-ui/core/Button";

export default function DashboardProfile({ user }) {
  return (
    <div class="main_card">
      <div className="profile">
        <div className="bio">
          <div className="bionibaju">
            <div className="photobox">
              <img src="https://seventhqueen.com/themes/kleo/wp-content/uploads/rtMedia/users/44269/2020/07/dummy-profile.png"></img>
            </div>
            <h1>{user.user.name}</h1>
            <span className="bioicon">
              <a href="#"><Button variant="contained" color='primary'>113 followers</Button></a>
            </span>
            <span className="bioicon">
              <a href="#"><Button variant="contained" color='primary'>123 following</Button></a>
            </span>
          </div>
          <div>
          </div>
        </div>
        <div className="biobottom">
          <div className="data">
            <button className='profilebutton'>
              <a href="#">Saved Recipes</a>
            </button>
          </div>
          <div className="data">
            <button className='profilebutton'>
              <a href="#">Liked</a>
            </button>
          </div>
          <div className="data">
            <button className='profilebutton'>
              <a href="#">My recipes</a>
            </button>
          </div>
          <div className="data">
            <button className='profilebutton'>
              <a href="#">Upload recipe</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

