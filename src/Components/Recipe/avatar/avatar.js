import React from 'react';
import Classes from './avatar.module.css';

const avatar = (props) => {
    return(
        <div>
            <img className={Classes.Image} src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"></img>
        </div>
    );
}

export default avatar;