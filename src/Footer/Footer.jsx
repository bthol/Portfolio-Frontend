import React from 'react';
import { AugiumIcon } from '../Images/AugiumIcon';

const Footer = () => {
    return(
        <footer className="app-footer">
            <AugiumIcon></AugiumIcon>
            <div className="app-footer-link-grid flex-around">
                <ul id="footer-coding-links">
                    <li tabIndex={0}><p><b>Coding</b></p></li>
                    <li><a href="https://github.com/bthol" target="_blank" rel="noreferrer" className="link-highlight">GitHub</a></li>
                    <li><a href="https://replit.com/@BlakeThollaug" target="_blank" rel="noreferrer" className="link-highlight">Replit</a></li>
                    <li><a href="https://codepen.io/Bthol/pens/public" target="_blank" rel="noreferrer" className="link-highlight">CodePen</a></li>
                </ul>
                <ul id="footer-music-links">
                    <li tabIndex={0}><p><b>Music</b></p></li>
                    <li><a href="https://augium.bandcamp.com/" target="_blank" rel="noreferrer" className="link-highlight">Bandcamp</a></li>
                    <li><a href="https://soundcloud.com/augium" target="_blank" rel="noreferrer" className="link-highlight">SoundCloud</a></li>
                </ul>
                <ul id="footer-social-links">
                    <li tabIndex={0}><p><b>Follow</b></p></li>
                    <li><a href="https://www.linkedin.com/in/blake-thollaug/" target="_blank" rel="noreferrer" className="link-highlight">LinkedIn</a></li>
                </ul>
            </div>
            <small className="flex-around" tabIndex={0}>&copy; 2022, Blake Thollaug</small>
            <br />
      </footer>
    )
};

export { Footer };