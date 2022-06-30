import React from 'react';
import { AugiumIcon } from '../Images/AugiumIcon';

const Footer = () => {
    return(
        <footer className="app-footer">
            <AugiumIcon></AugiumIcon>
            <div className="app-footer-link-grid flex-around">
                <ul id="footer-coding-links">
                    <li><p><b>Coding</b></p></li>
                    <li><a href="https://github.com/bthol" target="_blank" rel="noreferrer" className="footer-link">GitHub</a></li>
                    <li><a href="https://codepen.io/Bthol/pens/public" target="_blank" rel="noreferrer" className="footer-link">CodePen</a></li>
                    <li><a href="https://replit.com/@BlakeThollaug" target="_blank" rel="noreferrer" className="footer-link">Replit</a></li>
                </ul>
                <ul id="footer-music-links">
                    <li><p><b>Music</b></p></li>
                    <li><a href="https://augium.bandcamp.com/" target="_blank" rel="noreferrer" className="footer-link">Bandcamp</a></li>
                    <li><a href="https://soundcloud.com/augium" target="_blank" rel="noreferrer" className="footer-link">SoundCloud</a></li>
                </ul>
                <ul id="footer-social-links">
                    <li><p><b>Follow</b></p></li>
                    <li><a href="https://www.linkedin.com/in/blake-thollaug/" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a></li>
                </ul>
            </div>
            <p className="flex-around">© Blake Thollaug, 2022.</p>
      </footer>
    )
};

export { Footer };