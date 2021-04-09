import React from 'react';
import Classes from './upper.module.css';

const upper = (props) => {
    return (
        <div className={Classes.Background}>
            <div className={Classes.Left}>
                <p className={Classes.Display}>{props.dishName}</p>
                <p className={Classes.TimeCook}>Time to Cook: {props.timeCook}</p>
            </div>
            <div className={Classes.Middle}>
                <button className={Classes.Button}>Add to Favourites</button>
            </div>
            <div className={Classes.Right}>
                <img style={{width: "75%",height: "95%"}} src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg"></img>
            </div>
        </div>
    );
}

export default upper;