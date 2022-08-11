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
            <div className="flex-between">
                <button className={props.btnClass} onClick={props.featureAlert}>Contact</button>
                <button className={props.btnClass} onClick={toggle}>{props.btnText}</button>
            </div>
            <p><b>About Me</b>: I am a Full Stack Web and App Developer searching for a position to utilize and further grow my creative and technological skillset.</p>
            <br />
        </div>
    )
}

export { Aside }