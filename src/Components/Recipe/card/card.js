import React from 'react';
import Avatar from '../avatar/avatar';
import Classes from './card.module.css';

const card = (props) => {
    let displayTag = [];
    for(let i=0;i<props.tags.length;i++){
        if(i+1 === props.tags.length){
            displayTag.push(
                <div style={{display: "flex"}}>
                    <div className={Classes.LeftTag}>
                        <p className={Classes.Tag}>{props.tags[i][0]}</p>
                    </div>
                </div>
            );
        }
        else{
            displayTag.push(
                <div style={{display: "flex"}}>
                    <div className={Classes.LeftTag}>
                        <p className={Classes.Tag}>{props.tags[i][0]}</p>
                    </div>
                    <div className={Classes.RightTag}>
                        <p className={Classes.Tag}>{props.tags[i][1]}</p>
                    </div>
                </div>
            );
        }
    }
    return (
        <div className={Classes.Card}>
            <div style={{display: "flex",width: "100%"}}>
                <div className={Classes.Left}>
                    <Avatar></Avatar>
                </div>
                <div className={Classes.Right}>
                <p>{"Dish Name: " + props.title}</p>
                </div>
            </div>
            <hr></hr>
            <div>
                <img style={{width: "300px",height: "140px"}} src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg"></img>
            </div>
            <hr></hr>
            {displayTag}
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