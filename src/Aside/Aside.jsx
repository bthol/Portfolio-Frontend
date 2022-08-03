import React from 'react';
import { ProfilePhoto } from '../Images/ProfilePhoto';

const Aside = (props) => {
    return(
        <div>
            <ProfilePhoto></ProfilePhoto>
            <div className="flex-between">
                <a href="" rel="noreferrer" className="link-desat header-padd-right" onClick={() => {alert("Feature still in development")}}>Contact</a>
                <a href="" className="link-desat" onClick={() => {alert("You wanted an error message?")}}>error message</a>
            </div>
            <p><b>About Me</b>: I am a Full Stack Web and App Developer searching for a position to utilize and further grow my creative and technological skillset.</p>
            <br />
            <div className="flex-between">
                <button id="btn-theme-normal" className="buttons" onClick={props.setThemeNormal}>Normal Theme</button>
                <button id="btn-theme-dark" className="buttons dark-button" onClick={props.setThemeDark}>Dark Theme</button>
            </div>
        </div>
    )
}

export { Aside }