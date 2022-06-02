import React from 'react';
// import { useState } from 'react';
import { Aside } from './Aside';
import { Section1 } from './Section1';
import { Section2 } from './Section2';
import { Section3 } from './Section3';

const MainDisplay = () => {
    return(
        <span id="aside-main">
            <Aside></Aside>
            <main className="app-main">
            <Section1></Section1>
            <Section2></Section2>
            <Section3></Section3>
            </main>
        </span>
    )
};
export { MainDisplay };