import React from 'react';
import { AugiumIcon } from '../Images/AugiumIcon'
import { Nav } from '../Nav/Nav';

const Header = () => {
    return(
        <header className="app-header">
            <div>
                <div>
                    <AugiumIcon></AugiumIcon>
                </div>
                <div>
                    <h3 id="website-title">Blake Thollaug's Portfolio Website</h3>
                </div>
                <div>
                    <a href="" rel="noreferrer" className="link-highlight" onClick={() => {alert("Feature still in development")}}>Contact</a>
                </div>
            </div>
            <Nav></Nav>
        </header>
    )
};

export { Header };