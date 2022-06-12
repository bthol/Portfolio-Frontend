import React from 'react';
import { AugiumIcon } from '../Images/AugiumIcon'

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
            </div>
            <nav className="app-nav">
                <a href="https://bthol.github.io/Space-Battle/" target="_blank" rel="noreferrer">Space Battle</a> 
                <a href="https://bthol.github.io/Retro-Toe/" target="_blank" rel="noreferrer">Retro Toe</a>
            </nav>
        </header>
    )
};

export { Header };