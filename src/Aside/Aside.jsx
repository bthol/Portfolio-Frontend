import React from 'react';
import { useState } from 'react';
import { ProfilePhoto } from '../Images/ProfilePhoto';

const Aside = (props) => {
    const [tog, setTog] = useState(true);
    const toggle = () => {
        setTog(!tog)
    }
    if (tog) {
        props.setThemeLight();
    } else {
        props.setThemeDark();
    }
    return(
        <div>
            <ProfilePhoto></ProfilePhoto>
            <div className="flex-around">
                <a href="" rel="noreferrer" className="link-desat header-padd-right" onClick={props.featureAlert}>Contact</a>
            </div>
            <p><b>About Me</b>: I am a Full Stack Web and App Developer searching for a position to utilize and further grow my creative and technological skillset.</p>
            <br />
            <div className="flex-around">
                <button id="btn-theme" className="buttons dark-button" onClick={toggle}>Dark Theme</button>
            </div>
        </div>
    )
}

export { Aside }