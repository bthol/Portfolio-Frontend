import React from "react";
// import { useState } from "react";

const Section2 = () => {
    return (
            <section>
                <h3 className="title-line">Project Highlights</h3>
                <div>
                    <p><strong>Space Battle</strong></p>
                    <img src="" alt="project screenshot"></img>
                    <p>Description: Fight off the Alien ships for a new high score!</p>
                    <ul>
                        <li><a href="https://bthol.github.io/Space-Battle/" target="_blank" rel="noreferrer">Live Link</a></li>
                        <li><a href="https://github.com/bthol/Space-Battle" target="_blank" rel="noreferrer">GitHub Page</a></li>
                    </ul>
                </div>
                <div>
                    <p><strong>Retro Toe</strong></p>
                    <img src="" alt="project screenshot"></img>
                    <p>Description: This is a web application that runs the game tic tac toe.</p>
                    <ul>
                        <li><a href="https://bthol.github.io/Retro-Toe/" target="_blank" rel="noreferrer">Live Link</a></li>
                        <li><a href="https://github.com/bthol/Tic-Tac-Toe" target="_blank" rel="noreferrer">GitHub Page</a></li>
                    </ul>
                </div>
            </section>
    )
};

export { Section2 };