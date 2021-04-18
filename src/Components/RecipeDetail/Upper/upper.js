import React,{useState} from 'react';
import Classes from './upper.module.css';
import {MdTimer} from 'react-icons/md'
import {FcLikePlaceholder,FcLike} from 'react-icons/fc'
import {MdPlaylistAdd,MdPlaylistAddCheck} from 'react-icons/md'




function Upper (props) {
  const NLikes = 0;//Number of Likes
  const VegStatus = true;
  const vegi = "#03550f"; // Veg or Nonveg tag
  if(!VegStatus){
    vegi = "#930000";
  }
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
    return (
        <div className={Classes.Background}>
            <div className={Classes.Left}>
                <p className={Classes.Display}>{props.dishName}</p>


                  <svg id="Veg-Nonveg-Logo" className={Classes.VegNonLogo} width="21" height="21" viewBox="0 0 21 21">
    <g id="Rectangle_3" data-name="Rectangle 3" fill="none" stroke={vegi} stroke-width="2.1">
      <rect width="21" height="21" rx="3" stroke="none"/>
      <rect x="1.05" y="1.05" width="18.9" height="18.9" rx="1.95" fill="none"/>
    </g>
    <g id="Ellipse_2" data-name="Ellipse 2" transform="translate(4 4)" fill={vegi} stroke={vegi} stroke-width="1">
      <circle cx="6.5" cy="6.5" r="6.5" stroke="none"/>
      <circle cx="6.5" cy="6.5" r="6" fill="none"/>
    </g>
  </svg>





                <p className={Classes.TimeCook}><MdTimer size={30}/> {props.timeCook}</p>
            </div>
            <div className={Classes.Middle}>
                <button className={Classes.Button}>{click ?  <MdPlaylistAddCheck/> : <MdPlaylistAdd/>}</button>
                <div onClick= {handleClick}>{click ?  <FcLike size={30}/> : <FcLikePlaceholder size={30}/> } {NLikes}</div>
            </div>
            <div className={Classes.PhotoContainer}>
                <img style={{width: "75%",height: "95%"}} src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg"></img>
            </div>
        </div>
    );
}

export default Upper;
