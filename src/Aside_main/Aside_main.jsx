import React from 'react';
// import { useState } from 'react';
import { Display1 } from './Display1';
import { Aside } from './Aside';

const Aside_main = () => {
    return(
        <span id="aside-main">
            <Aside></Aside>
            <main className="app-main">
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
                        <p>Audio Engineering</p>
                        <ul className="remove-bullet-list">
                            <li>Digital Audio Workstations: FL Studio, Studio One, GarageBand</li>
                            <p></p>
                            <li>Audio Editing: Audacity</li>
                            <p></p>
                            <li>Audio Repair: iZotope RX Bundle</li>
                        </ul>
                    </div>
                    <div>
                        <p>Graphic Design</p>
                        <ul className="remove-bullet-list">
                            <li>Technologies: Affinity Photo, Affinity Designer</li>
                            <p></p>
                            <li></li>
                        </ul>
                    </div>
                </section>
                <section>
                    <h3 className="title-line">Projects</h3>
                    <div>
                        <p><strong>Project name</strong></p>
                        <img src="" alt="project screenshot"></img>
                        <p>Description: lorem ipsum.</p>
                        <ul>
                            <li><a href="" target="_blank">Live Link</a></li>
                            <li><a href="" target="_blank">GitHub Page</a></li>
                        </ul>
                    </div>
                    <div>
                        <p><strong>Project name</strong></p>
                        <img src="" alt="project screenshot"></img>
                        <p>Description: lorem ipsum.</p>
                        <ul>
                            <li><a href="" target="_blank">Live Link</a></li>
                            <li><a href="" target="_blank">GitHub Page</a></li>
                        </ul>
                    </div>
                    <div>
                        <p><strong>Tic Tac Toe</strong></p>
                        <img src="" alt="project screenshot"></img>
                        <p>Description: This is a web application that runs the game tic tac toe.</p>
                        <ul>
                            <li><a href="" target="_blank">Live Link</a></li>
                            <li><a href="https://github.com/bthol/Tic-Tac-Toe" target="_blank">GitHub Page</a></li>
                        </ul>
                    </div>
                </section>
                <section>
                    <h3 className="title-line">Experience</h3>
                    <div>
                        <p>Augium Productions</p>
                        <p className="flex-between"><i>Producer/Composer/Engineer</i> Jan 2012 - Present</p>
                        <ul className="exp-list">
                            <li>Composed 400+ songs at 25+ hours in multiple genres (~12.5% songs published; only the very best)</li>
                            <li>Produces all phases of music production (i.e. music concept and sound design, composition, performance and recording, mix engineering, and mastering)</li>
                            <li>General Mastering ensures that the audio playback is consistent on a variety of playback systems (e.g. headphone, car sereo, laptop, professional studio monitors).</li>
                            <li>Create audio synthesizer patches using various digital methods of audio synthesis (additive, subtractive, FM, AM, PWM, wavetable, parametric physical modelling, re-synthesis, spectral, granular)</li>
                        </ul>
                    </div>
                    <div>
                        <p>Canyon Ranch Woodside</p>
                        <p className="flex-between"><i>Ketchen Steward</i> Jan 2020 - Oct 2020</p>
                        <ul className="exp-list">
                            <li>Organized and maintained kitchen equipment for convenient and sustainable usage.</li>
                            <li>Managed a food inventory, where I consolidated food resources to optimize use of storage area, and processed incoming shipments by testing for quality and allocating the shipment contents into appropriate storage areas in compliance with company and legal standards.</li>
                            <li>Received preliminary training in food preparation to further assist the kitchen staff after receiving food handlers certification.</li>
                        </ul>
                    </div>
                </section>
            </main>
        </span>
    )
};

export { Aside_main };