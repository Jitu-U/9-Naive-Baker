import React from 'react';
import Avatar from '../avatar/avatar';
import Classes from './card.module.css';
import { FcLikePlaceholder, FcLike } from 'react-icons/fc'
import { MdPlaylistAdd, MdPlaylistAddCheck, MdShare, MdOpenInNew } from 'react-icons/md'
import { Redirect, Link, useHistory } from 'react-router-dom';


export default function Card({ r }) {
    const history = useHistory();

    const handlecardclick = (event) => {
        event.preventDefault();
        history.push({ pathname: '/RecipePage', state: r });
    };

    let VegStatus = (r.category === "Veg") ? true : false;
    let vegi = "#03550f"; // Veg or Nonveg tag
    if (!VegStatus) {
        vegi = "#930000";
    }

    return (

        <div className={Classes.Card}>
            <div style={{ display: "inline-block", width: "100%" }}>
                <div className={Classes.Title}>
                    <div>
                        <svg id="Veg-Nonveg-Logo" className={Classes.VegNonLogo} width="20" height="20" viewBox="0 0 21 21">
                            <g id="Rectangle_3" data-name="Rectangle 3" fill="none" stroke={vegi} stroke-width="2.1">
                                <rect width="21" height="21" rx="3" stroke="none" />
                                <rect x="1.05" y="1.05" width="18.9" height="18.9" rx="1.95" fill="none" />
                            </g>
                            <g id="Ellipse_2" data-name="Ellipse 2" transform="translate(4 4)" fill={vegi} stroke={vegi} stroke-width="1">
                                <circle cx="6.5" cy="6.5" r="6.5" stroke="none" />
                                <circle cx="6.5" cy="6.5" r="6" fill="none" />
                            </g>
                        </svg>
                    </div>
                    <p>{r.title}</p>
                </div>
            </div>
            <div className={Classes.info}>
                <div className={Classes.pict}>
                    <img src={r.picURL}></img>
                    <div lassName={Classes.infoBox}>
                        <div style={{ display: "inline-block" }}>
                            <Avatar r={r}/>
                            <p className={Classes.Tag}>{r.mealType}</p>
                            <br/>
                            <p className={Classes.Tag}>{r.cuisine}</p>
                            <br/>
                            <p className={Classes.Tag}>{r.ingredients[0].ingname}</p>
                        </div>
                        <div className={Classes.actions}>
                            <div className={Classes.Button}>
                                <FcLikePlaceholder size={30} />
                            </div>
                            <div className={Classes.Button}>
                                <MdPlaylistAdd size={30} />
                            </div>
                            <div className={Classes.Button} onClick={handlecardclick} >
                                <MdOpenInNew size={30} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
