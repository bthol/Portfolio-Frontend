import React from "react";

const Section2 = () => {
    return (
        <section className="main-section-style">
            <h3 className="title-line text-x-large" tabIndex={0}>Project Highlights</h3>
            <div>
                <b><p className="text-large flex-center" tabIndex={0}>Space Battle</p></b>
                <img src="" alt="project screenshot"></img>
                <p tabIndex={0}><b>Technologies</b>: JavaScript, Express, HTML, CSS</p>
                <p tabIndex={0}><b>Description</b>: Fight off the alien hoarde for a new high score in this arcade-style battle game!</p>
                <ul>
                    <li><a href="https://bthol.github.io/Space-Battle/" className="link-desat" target="_blank" rel="noreferrer">Live Link</a></li>
                    <li><a href="https://github.com/bthol/Space-Battle" className="link-desat" target="_blank" rel="noreferrer">GitHub Page</a></li>
                    <li tabIndex={0}>Connected a custom RESTful API linked to a cloud database that allows game scores to be stored between sessions, so that the top 10 scores of all time can be displayed on the scoreboard page.</li>
                    <li tabIndex={0}>Displayed pages by mutating the DOM and tracked pages by using a global variable that updates on page change.</li>
                    <li tabIndex={0}>Organized all static variables and data structures into a JS module for best code manageability practices</li>
                </ul>
            </div>
            <br />
            <div>
                <b><p className="text-large flex-center" tabIndex={0}>Magic 8 Ball</p></b>
                <img src="" alt="project screenshot"></img>
                <p tabIndex={0}><b>Technologies</b>: JavaScript, HTML, CSS</p>
                <p tabIndex={0}><b>Description</b>: Discover your destiny with the mystical guidance of the Magic 8 Ball.</p>
                <ul>
                    <li><a href="https://bthol.github.io/Magic-8-Ball/" className="link-desat" target="_blank" rel="noreferrer">Live Link</a></li>
                    <li><a href="https://github.com/bthol/Magic-8-Ball" className="link-desat" target="_blank" rel="noreferrer">GitHub Page</a></li>
                    <li tabIndex={0}>Created a breathing glow effect for the magic eight ball using asynchronous JavaScript functions to dynamically update style.</li>
                    <li tabIndex={0}>Wrote a CSS keyframe animation that runs once for its full duration on image click before the image is updated with the answer.</li>
                    <li tabIndex={0}>Implemented a polychromatic animated background gradient.</li>
                </ul>
            </div>
            <br />
            <div>
                <b><p className="text-large flex-center" tabIndex={0}>Retro Toe</p></b>
                <img src="" alt="project screenshot"></img>
                <p tabIndex={0}><b>Technologies</b>: JavaScript, HTML, CSS</p>
                <p tabIndex={0}><b>Description</b>: Tic Tac Toe. Retro style.</p>
                <ul>
                    <li><a href="https://bthol.github.io/Retro-Toe/" className="link-desat" target="_blank" rel="noreferrer">Live Link</a></li>
                    <li><a href="https://github.com/bthol/Tic-Tac-Toe" className="link-desat" target="_blank" rel="noreferrer">GitHub Page</a></li>
                    <li tabIndex={0}>Coded algorithms for game logic from scratch using a mere 100 lines of code.</li>
                    <li tabIndex={0}>Made a mobile-friendly UI layout by utilizing relative units, and the CSS Flex and Grid modules for maximal responsivity across device viewports.</li>
                    <li tabIndex={0}>Deployed the application using GitHub Pages.</li>
                </ul>
            </div>
            <br />
        </section>
    )
};

export { Section2 };