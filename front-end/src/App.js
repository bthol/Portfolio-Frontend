import './App.css';
import React, { useState } from 'react';
import { Container1 } from "./Container1/Container1";

function App() {
  const [data, setData] = useState([])
  const create = () => {
    setData([
      ...data,
      data.push(data[data.length - 1] + 1)
    ])
  }
  const update = (arg1, arg2) => {
    setData(
      data.splice(arg1, arg2)
    )
  }
  const destroy = () => {
    setData([])
  }
  const [tog1, setTog1] = useState(false)
  const toggle = () => {
    setTog1(!tog1)
  }
  return (
    <div className="App">
      <header className="app-header">
        <img src="" alt="Augium Icon" id="augium"></img>
        <h3>Blake Thollaug Portfolio</h3>
      </header>
      {/* <nav className="app-nav">
        <div className="nav-links">
          <a href="" className="link1">Page link1</a>
          <a href="" className="link2">Page link2</a>
          <a href="" className="link3">Page link3</a>
        </div>
      </nav> */}
      <span id="aside-main">
        <aside className="app-aside">
          <img src="" alt="Profile Photo" id="profile-photo"></img>
          <p><strong>About Me: </strong>I am a full stack developer searching for a position to apply and grow my talents.</p>
        </aside>
        <main className="app-main">
          {/* <section>
            <h4>Front End logic for CRUD testing</h4>
            <p>front end data: {JSON.stringify(data)}</p>
            <p id="num-display"></p>
            <button onClick={create}>create</button>
            {
              tog1
            ?
              <form onSubmit={update}>
                <label></label><input type="number" min="0" max={data.length -1} required></input>
                <label></label><input type="number" min="0" max={data.length -1} required></input>
                <button type="submit">submit</button>
                <button type="button" onClick={toggle}>cancel</button>
              </form>
            : 
              <button onClick={toggle}>update</button>
            }
            <button onClick={destroy}>destroy</button>
          </section> */}
          <section className="section-lists">
            <h3>Skills</h3>
            <div>
              <p>Programming Languages</p>
              <ul>
                <li>JavaScript (Libraries: Node.js | Frameworks: Express.js, React.js)</li>
                <li>HTML5</li>
                <li>CSS3 (Modules: Flexbox, CSS Grid | Frameworks: Bootstrap)</li>
              </ul>
            </div>
            <div>
              <p>Audio Engineering</p>
              <ul>
                <li>Composed 400+ songs at 25+ hours in multiple genres (~12.5% songs published; only the very best)</li>
                <li>Produces all phases of music production (i.e. music concept and sound design, composition, performance and recording, mix engineering, and mastering)</li>
                <li>General Mastering ensures that the audio playback is consistent on a variety of playback systems.</li>
                <li>Create audio synthesizer patches using various digital methods of audio synthesis (additive, subtractive, FM, AM, PWM, wavetable, parametric physical modelling, re-synthesis, spectral, granular)</li>
              </ul>
            </div>
          </section>
          <section>
            <h3>Projects</h3>
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
            <h3>Experience</h3>
            <p>Canyon Ranch Woodside</p>
            <p><i>Ketchen Steward</i> Jan 2020 - Oct 2020</p>
            <ul>
              <li>Organized and maintained kitchen equipment for convenient and sustainable usage.</li>
              <li>Managed a food inventory, where I consolidated food resources to optimize use of storage area, and processed incoming shipments by testing for quality and allocating the shipment contents into appropriate storage areas in compliance with company and legal standards.</li>
              <li>Received preliminary training in food preparation to further assist the kitchen staff after receiving food handlers certification.</li>
            </ul>
          </section>
        </main>
      </span>
      <hr></hr>
      <footer className="app-footer">
        <ul>
          <li><img src="" alt="Augium Icon" id="augium"></img></li>
        </ul>
        <ul className="social-links">
          <li><strong><p>Media</p></strong></li>
          <li><a href="https://www.linkedin.com/in/blake-thollaug/" target="_blank">LinkedIn</a></li>
          <li><a href="https://github.com/bthol" target="_blank">GitHub</a></li>
          <li><a href="https://augium.bandcamp.com/" target="_blank">Bandcamp</a></li>
          <li><a href="https://soundcloud.com/augium" target="_blank">SoundCloud</a></li>
        </ul>
        <ul>
        <li><strong><p>Legal</p></strong></li>
          <li><a href="">Legal link1</a></li>
          <li><a href="">Legal link2</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default App;
