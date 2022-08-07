import React from "react";

const Section2 = () => {
    return (
        <section>
            <h3 className="title-line text-x-large">Project Highlights</h3>
            <div>
                <img src="" alt="project screenshot"></img>
                <b><p className="text-large">Space Battle</p></b>
                <p>Technologies: JavaScript, Express, HTML, CSS</p>
                <p>Description: Fight off the alien hoarde for a new high score in this arcade-style battle game!</p>
                <ul>
                    <li><a href="https://bthol.github.io/Space-Battle/" className="link-desat" target="_blank" rel="noreferrer">Live Link</a></li>
                    <li><a href="https://github.com/bthol/Space-Battle" className="link-desat" target="_blank" rel="noreferrer">GitHub Page</a></li>
                    <li>Connected a custom RESTful API linked to a cloud database that allows game scores to be stored between sessions, so that the top 10 scores of all time can be displayed on the scoreboard page.</li>
                    <li>Displayed pages by mutating the DOM and tracked pages by using a global variable that updates on page change.</li>
                    <li>Organized all static variables and data structures into a JS module for best code manageability practices</li>
                    <li>Automatically updated button styles based on JavaScript state variables to provide user feedback about when moves are charged.</li>
                </ul>
            </div>
            <br />
            <div>
                <img src="" alt="project screenshot"></img>
                <b><p className="text-large">Magic 8 Ball</p></b>
                <p>Technologies: JavaScript, HTML, CSS</p>
                <p>Description: Discover your destiny with the mystical guidance of the Magic 8 Ball.</p>
                <ul>
                    <li><a href="https://bthol.github.io/Magic-8-Ball/" className="link-desat" target="_blank" rel="noreferrer">Live Link</a></li>
                    <li><a href="https://github.com/bthol/Magic-8-Ball" className="link-desat" target="_blank" rel="noreferrer">GitHub Page</a></li>
                    <li>Created a breathing glow effect for the magic eight ball using asynchronous JavaScript functions to dynamically update style.</li>
                    <li>Wrote a CSS keyframe animation that runs once for its full duration on image click before the image is updated with the answer.</li>
                    <li>Engages users with button interactivity by means of a CSS pseudoclass.</li>
                    <li>Implemented a polychromatic animated background gradient.</li>
                </ul>
            </div>
            <br />
            <div>
                <img src="" alt="project screenshot"></img>
                <b><p className="text-large">Retro Toe</p></b>
                <p>Technologies: JavaScript, HTML, CSS</p>
                <p>Description: Tic Tac Toe. Retro style.</p>
                <ul>
                    <li><a href="https://bthol.github.io/Retro-Toe/" className="link-desat" target="_blank" rel="noreferrer">Live Link</a></li>
                    <li><a href="https://github.com/bthol/Tic-Tac-Toe" className="link-desat" target="_blank" rel="noreferrer">GitHub Page</a></li>
                    <li>Coded algorithms for game logic from scratch using a mere 100 lines of code.</li>
                    <li>Made a mobile-friendly UI layout by utilizing relative units, and the CSS Flex and Grid modules for maximal responsivity across device viewports.</li>
                    <li>Deployed the application using GitHub Pages.</li>
                </ul>
            </div>
            <br />
        </section>
    )
};

export { Section2 };