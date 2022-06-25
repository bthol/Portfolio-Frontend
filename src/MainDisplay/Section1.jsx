import React from "react";
// import { useState } from "react";

const Section1 = () => {
    return (
        <section className="section-lists">
            <h3 className="title-line">Skills</h3>
            <div>
                <p>Full Stack Web and App Development</p>
                <ul className="remove-bullet-list">
                    <li>JavaScript (Libraries: Node.js | Frameworks: Express.js, React.js)</li>
                    <p></p>
                    <li>Python (Frameworks: Django)</li>
                    <p></p>
                    <li>CSS3 (Modules: Flexbox, CSS Grid | Frameworks: Bootstrap)</li>
                    <p></p>
                    <li>HTML5 (markdown content, modals and forms, images, vector graphics)</li>
                    <p></p>
                </ul>
            </div>
            <div>
                <p>Music Production</p>
                <ul className="remove-bullet-list">
                    <li>Digital Audio Workstations (DAWs): FL Studio, Studio One, GarageBand</li>
                    <p></p>
                    <li>Seven years of Mix Engineering on over twenty-five hours of audio</li>
                    <p></p>
                    <li>Prolific Multi-genre composer (Dubstep, DnB, House, Ambient, Jazz, Rock, Metal, Funk, HipHop, Hybrid Orchestral, Western Classical, Avant-garde)</li>
                    <p></p>
                    <li>Audio Recording, Audio Repair and Audio Editing</li>
                    <p></p>
                </ul>
            </div>
            <div>
                <p>Graphic Design</p>
                <ul className="remove-bullet-list">
                    <li>Technologies: Affinity Photo, Affinity Designer, Paint.net, MS Paint</li>
                    <p></p>
                    <li>Gestalt principles of design</li>
                    <p></p>
                    <li>Proficiency with a wide variety of color palletes and themes</li>
                    <p></p>
                    <li>Years of experience hand and mouse drawing</li>
                    <p></p>
                </ul>
            </div>
        </section>
    )
};

export { Section1 };