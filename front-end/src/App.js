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
          <section>
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
          </section>
          <section className="section-lists">
            <h3>Skills</h3>
            <div>
              <p>Programming Languages</p>
              <ul>
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
              </ul>
            </div>
            <div>
              <p>List name</p>
              <ul>
                <li>li 1</li>
                <li>li 2</li>
                <li>li 3</li>
              </ul>
            </div>
          </section>
          <section>
            <h3>Projects</h3>
            <div>
              <p><strong>Tic Tac Toe</strong></p>
              <p>Description: This is a web application that runs the game tic tac toe.</p>
              <ul>
                <li><a href="" target="_blank">Live Link</a></li>
                <li><a href="https://github.com/bthol/Tic-Tac-Toe" target="_blank">GitHub Page</a></li>
              </ul>
            </div>
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
