import React from 'react';
// import { useState } from 'react';
import { Display1 } from './Display1';
import { Display2 } from './Display2';

const Footer = () => {
    return(
        <footer className="app-footer">
            <ul>
                <li><img src="" alt="Augium Icon" id="augium"></img></li>
            </ul>
            <ul className="social-links">
                <li><strong><p>Media</p></strong></li>
                <li><a href="https://www.linkedin.com/in/blake-thollaug/" target="_blank">LinkedIn</a></li>
                <li><a href="https://github.com/bthol" target="_blank">GitHub</a></li>
                <li><a href="https://augium.bandcamp.com/" target="_blank">Bandcamp</a></li>
                <li><a href="https://soundcloud.com/augium" target="_blank">SoundCloud</a></li>
            </ul>
            <ul>
                <li><strong><p>Legal</p></strong></li>
                <li><a href="">Legal link1</a></li>
                <li><a href="">Legal link2</a></li>
            </ul>
      </footer>
    )
};

export { Footer };