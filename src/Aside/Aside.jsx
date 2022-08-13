import React from 'react';
import { ProfilePhoto } from '../Images/ProfilePhoto';

const Aside = (props) => {
    return(
        <div>
            <ProfilePhoto></ProfilePhoto>
            <div className="flex-around">
                <button className={props.btnClass} onClick={props.featureAlert}>Contact Me</button>
                <button className={props.btnClass} onClick={props.toggleTheme}>{props.btnText}</button>
            </div>
            <p tabIndex={0}><b>About Me</b>: I am a Full Stack Web and App Developer searching for a position to utilize and further grow my creative and technological skillset.</p>
            <br />
        </div>
    )
}

export { Aside }