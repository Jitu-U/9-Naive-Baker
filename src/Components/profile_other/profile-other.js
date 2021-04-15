import { render } from "react-dom";
import './profile-other.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './temp';

function ProfileOther() {
  return (
  <>  

<div class="bio-container">
  <img src="https://res.cloudinary.com/jorpdesigns/image/upload/v1533122246/profile-picture.jpg" alr="profile picture" />
  <div>
    <span class="username">deval_sonani_31</span>
    <span class="display-name">Deval Sonani</span>
    
  </div>
  <div class="bio">
    <p>Web Designer / Marvel Fan / Cricketer</p>
    <button class="follow">Follow</button>
  </div>  
</div>  

<div class="account-stats">
  <div>
    <span class="account-stats-figure">45</span><span class="account-stats-category">posts</span>
  </div>  
  <div>
    <span class="account-stats-figure">948</span><span class="account-stats-category">followers</span>
  </div> 
  <div>
    <span class="account-stats-figure">150</span><span class="account-stats-category">following</span>
  </div>     
</div>  

<div class="posts-type-row">
  <div>
    <span class="my-posts">Upoaded Reciepies</span>
  </div>
</div>  

<div class="instagram-post-grid">
  <img src="https://res.cloudinary.com/jorpdesigns/image/upload/v1532848922/samples/food/spices.jpg" alt="instagram-post" />
  <img src="https://res.cloudinary.com/jorpdesigns/image/upload/v1532848922/samples/food/spices.jpg" alt="instagram-post" /> 
  <img src="https://res.cloudinary.com/jorpdesigns/image/upload/v1532848922/samples/food/spices.jpg" alt="instagram-post" /> 
  <img src="https://res.cloudinary.com/jorpdesigns/image/upload/v1532848922/samples/food/spices.jpg" alt="instagram-post" /> 
  <img src="https://res.cloudinary.com/jorpdesigns/image/upload/v1532848922/samples/food/spices.jpg" alt="instagram-post" /> 
  <img src="https://res.cloudinary.com/jorpdesigns/image/upload/v1532848922/samples/food/spices.jpg" alt="instagram-post" /> 
  <img src="https://res.cloudinary.com/jorpdesigns/image/upload/v1532848922/samples/food/spices.jpg" alt="instagram-post" /> 
  <img src="https://res.cloudinary.com/jorpdesigns/image/upload/v1532848922/samples/food/spices.jpg" alt="instagram-post" /> 
  <img src="https://res.cloudinary.com/jorpdesigns/image/upload/v1532848922/samples/food/spices.jpg" alt="instagram-post" /> 
</div>  
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
</>
  );
}

export default ProfileOther;
