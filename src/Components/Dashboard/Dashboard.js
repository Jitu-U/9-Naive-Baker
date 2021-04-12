import "./Profile.css";
import { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import SettingsIcon from "@material-ui/icons/Settings";
function Profile(props) {
  return (
    <div className="profile">
      <div className="bio">
        <div className="photobox">
          <Avatar
            className="photo"
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
        </div>
        <div className="bionibaju">
          <h1>User1</h1>
          <div className="dummy">
          <div className="bioicon">
              <a href="#"><Button variant="contained" color='primary'>113 followers</Button></a>
            </div>
            <div className="bioicon">
              <a href="#"><Button variant="contained" color='primary'>123 following</Button></a>
            </div>
          </div>
          <Button variant="outlined" style={{ "margin-left": "95px" }}>
            <SettingsIcon style={{ "margin-right": "8px" }} /> Edit Profile
          </Button>
        </div>
        <div>
          {/* ahi lakhjo */}
         </div>
      </div>
      {/* bio ahiya pate che */}
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
  );
}

export default Profile;