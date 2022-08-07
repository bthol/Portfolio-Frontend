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
                    </ul>
                </div>
                <br />
            </section>
    )
};

export { Section2 };