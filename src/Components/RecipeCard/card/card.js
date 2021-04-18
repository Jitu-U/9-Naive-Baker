import React from 'react';
import Avatar from '../avatar/avatar';
import Classes from './card.module.css';




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
               
                    <div className={Classes.LeftTag}>
                        <p className={Classes.Tag}>{props.tags[i][0]}</p>
                    </div>
                
            );
        }
        else{
            displayTag.push(
                    <>
                    <div className={Classes.LeftTag}>
                        <p className={Classes.Tag}>{props.tags[i][0]}</p>
                    </div>
                    <div className={Classes.RightTag}>
                        <p className={Classes.Tag}>{props.tags[i][1]}</p>
                    </div>
                    </>
            );
        }
    }
    return (
        
        <div className={Classes.Card}>
            <div style={{display: "inline-block",width: "100%"}}>
               
                <div className={Classes.Title}>
                        <p>{props.title}</p>
                    <div>
                <       svg id="Veg-Nonveg-Logo" className={Classes.VegNonLogo} width="21" height="21" viewBox="0 0 21 21">
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
                </div>
            </div>
            <div className={Classes.pict}>
                <img src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg"></img>
            </div>

            <div style={{display: "flex"}}>
            {displayTag}
            </div>
            <div>
                <div className={Classes.LeftLike}>
                    <p className={Classes.Box}>Like</p>
                </div>
                <div className={Classes.MiddleLike}>
                    <p className={Classes.Box}>Comment</p>
                </div>
                <div className={Classes.RightLike}>
                    <p className={Classes.Box}>Share</p>
                </div>
            </div>
        </div>
    );
}

export default card;