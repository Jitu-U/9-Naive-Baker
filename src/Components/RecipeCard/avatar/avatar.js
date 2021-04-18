import React from 'react';
import Classes from './avatar.module.css';

const avatar = (props) => {
    return(
        <div>

            Jitesh Gamit<img className={Classes.Image} src="https://lh3.googleusercontent.com/ogw/ADGmqu_zu--WffN4JlWGzZ0pulY4v67ZMm7FTfhJIYJhiTA=s64-c-mo"></img>

        </div>
    );
}

export default avatar;