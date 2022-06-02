import React from "react";
// import { useState } from "react";

const Section1 = () => {
    return (
        <section className="section-lists">
            <h3 className="title-line">Skills</h3>
            <div>
                <p>Programming Languages</p>
                <ul className="remove-bullet-list">
                    <li>JavaScript (Libraries: Node.js | Frameworks: Express.js, React.js)</li>
                    <p></p>
                    <li>CSS3 (Modules: Flexbox, CSS Grid | Frameworks: Bootstrap)</li>
                    <p></p>
                    <li>HTML5 (Hypertext Markdown language)</li>
                </ul>
            </div>
            <div>
                <p>Digital Graphic Design</p>
                <ul className="remove-bullet-list">
                    <li>Technologies: Affinity Photo, Affinity Designer, Paint.net</li>
                    <p></p>
                    <li>Familiarity with Gestalt psychological principles of artistic design</li>
                    <p></p>
                    <li>Profeciency with a wide variety of color palletes and themes</li>
                </ul>
            </div>
            <div>
                <p>Audio Production</p>
                <ul className="remove-bullet-list">
                    <li>Digital Audio Workstations: FL Studio, Studio One, GarageBand</li>
                    <p></p>
                    <li>Seven years of Mix Engineering on over twenty-five hours of audio</li>
                    <p></p>
                    <li>Audio Repair and Editing</li>
                    <p></p>
                </ul>
            </div>
        </section>
    )
};

export { Section1 };