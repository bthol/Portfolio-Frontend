import React from 'react';
// import { useState } from 'react';
import { Section1 } from './Section1';
import { Section2 } from './Section2';
import { Section3 } from './Section3';
// import { Form1 } from '../Forms/Form1';
import { ProfilePhoto } from '../Images/ProfilePhoto';

const MainDisplay = () => {
    return(
        <span id="aside-main">
            <aside className="app-aside">
                <ProfilePhoto></ProfilePhoto>
                <p><strong>About Me: </strong>I am a Full Stack Web and App Developer searching for a position to utilize and further develop my creative and technological skillset.</p>
                <br />
                {/* <Form1></Form1> */}
            </aside>
            <main className="app-main">
            <Section1></Section1>
            <Section2></Section2>
            <Section3></Section3>
            </main>
        </span>
    )
};
export { MainDisplay };