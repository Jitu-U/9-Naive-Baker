import React from 'react';
import Avatar from '../avatar/avatar';
import Classes from './card.module.css';
import {FcLikePlaceholder,FcLike} from 'react-icons/fc'
import {MdPlaylistAdd,MdPlaylistAddCheck,MdShare} from 'react-icons/md'
import avatar from '../avatar/avatar';




const card = (props) => {

    let VegStatus = false;
    let vegi = "#03550f"; // Veg or Nonveg tag
  if(!VegStatus){
    vegi = "#930000";
  }

    let displayTag = [];
    for(let i=0;i<props.tags.length;i++){
        if(i+1 === props.tags.length){
            displayTag.push(
                        <p className={Classes.Tag}>{props.tags[i][0]}</p>
                    
                
            );
        }
        else{
            displayTag.push(
                    <>
                        <p className={Classes.Tag}>{props.tags[i][0]}</p>
                        <p className={Classes.Tag}>{props.tags[i][1]}</p>
                    </>
            );
        }
    }
    return (
        
        <div className={Classes.Card}>
            <div style={{display: "inline-block",width: "100%"}}>
               
                <div className={Classes.Title}>
                        
                    <div>
                        <svg id="Veg-Nonveg-Logo" className={Classes.VegNonLogo} width="20" height="20" viewBox="0 0 21 21">
                            <g id="Rectangle_3" data-name="Rectangle 3" fill="none" stroke={vegi} stroke-width="2.1">
                                <rect width="21" height="21" rx="3" stroke="none"/>
                                <rect x="1.05" y="1.05" width="18.9" height="18.9" rx="1.95" fill="none"/>
                            </g>
                            <g id="Ellipse_2" data-name="Ellipse 2" transform="translate(4 4)" fill={vegi} stroke={vegi} stroke-width="1">
                                <circle cx="6.5" cy="6.5" r="6.5" stroke="none"/>
                                <circle cx="6.5" cy="6.5" r="6" fill="none"/>
                            </g>
                        </svg>
                    </div>
                    <p>{props.title}</p>
                </div>
            </div>
            <div  className={Classes.info}>
            <div className={Classes.pict}>
                <img src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg"></img>
                <div lassName={Classes.infoBox}><div style={{display: "inline-block"}}>
                    <Avatar/>
            {displayTag}
            </div>
            <div className={Classes.actions}>
                <div className={Classes.Button}>
                    <FcLikePlaceholder size={30}/>
                </div>
                <div className={Classes.Button}>
                    <MdPlaylistAdd size={30}/> 
                </div>
                <div className={Classes.Button}>
                    <MdShare size={30}/> 
                </div>
            </div>
            </div>
            </div>

            
            
            </div>
        </div>
    );
}

export default card;