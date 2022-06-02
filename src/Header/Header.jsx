import React from 'react';
// import { useState } from 'react';

const Header = () => {
    return(
        <header className="app-header">
            <div>
            <img src="" alt="Augium Icon" id="augium"></img>
            <h3 id="website-title">Blake Thollaug's Portfolio Website</h3>
            </div>
            <nav className="app-nav">
            <a href="">link1</a> 
            <a href="">link2</a> 
            <a href="">link3</a> 
            <a href="">link4</a> 
            <a href="">link5</a>
            </nav>
        </header>
    )
};

export { Header };