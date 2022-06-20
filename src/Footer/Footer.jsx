import React from 'react';
import { AugiumIcon } from '../Images/AugiumIcon';

const Footer = () => {
    return(
        <footer className="app-footer">
            <AugiumIcon></AugiumIcon>
            <div className="app-footer-link-grid flex-around">
                <ul id="footer-coding-links">
                    <li><strong><p>Coding</p></strong></li>
                    <li><a href="https://github.com/bthol" target="_blank" rel="noreferrer">GitHub</a></li>
                    <li><a href="https://codepen.io/Bthol/pens/public" target="_blank" rel="noreferrer">CodePen</a></li>
                    <li><a href="https://replit.com/@BlakeThollaug" target="_blank" rel="noreferrer">Replit</a></li>
                </ul>
                <ul id="footer-music-links">
                    <li><strong><p>Music</p></strong></li>
                    <li><a href="https://augium.bandcamp.com/" target="_blank" rel="noreferrer">Bandcamp</a></li>
                    <li><a href="https://soundcloud.com/augium" target="_blank" rel="noreferrer">SoundCloud</a></li>
                </ul>
                <ul id="footer-social-links">
                    <li><strong><p>Follow</p></strong></li>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/blake-thollaug/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                    </ul>
                </ul>
            </div>
            <p>Copyright © Blake Thollaug, 2022. All rights reserved.</p>
      </footer>
    )
};

export { Footer };