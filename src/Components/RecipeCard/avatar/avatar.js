import React from 'react';
import Classes from './avatar.module.css';

const Avatar = ({ r }) => {
    return (
        <div className={Classes.Avatar}>
            <div className={Classes.M1}>
                {r.chefname}
            </div>
            <img className={Classes.Image}
                src="https://www.flaticon.com/svg/vstatic/svg/1830/1830767.svg?token=exp=1620451018~hmac=51eabaa39f213e5882f6e3a454005096">
            </img>
        </div>
    );
}

export default Avatar;