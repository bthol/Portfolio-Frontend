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
  return (
    <div className="App">
      <header className="app-header">
        <img src="" alt="Augium Icon" id="augium"></img>
        <h3>Blake Thollaug Portfolio</h3>
      </header>
      <nav className="app-nav">
        <h4>Navigation</h4>
        <div className="nav-links">
          <a href="">Page link1</a>
          <a href="">Page link2</a>
          <a href="">Page link3</a>
        </div>
      </nav>
      <span id="aside-main">
        <aside className="app-aside">
          <h4>Aside</h4>
          <Container1></Container1>
          <Container1></Container1>
        </aside>
        <main className="app-main">
          <section>
            <h4>Main</h4>
          </section>
          <section>
            <h4>Front End logic for CRUD testing</h4>
            <p>{JSON.stringify(data)}</p>
            <p id="num-display"></p>
            <button onClick={create}>increase numbers</button>
          </section>
          <section>
            <h4>Skills</h4>
            <ul>
              <li><p>li 1</p></li>
              <li><p>li 2</p></li>
            </ul>
          </section>
          <section>
            <h4>Projects</h4>
          </section>
        </main>
      </span>
      <footer className="app-footer">
        <ul>
          <li><h4>Footer</h4></li>
          <li><img src="" alt="Augium Icon" id="augium"></img></li>
        </ul>
        <ul className="social-links">
          <li><p>Media</p></li>
          <li><a href="https://www.linkedin.com/in/blake-thollaug/" target="_blank">LinkedIn</a></li>
          <li><a href="https://github.com/bthol" target="_blank">GitHub</a></li>
          <li><a href="" target="_blank">Bandcamp</a></li>
          <li><a href="https://soundcloud.com/augium" target="_blank">SoundCloud</a></li>
        </ul>
        <ul>
          <li><p>Legal</p></li>
          <li><a href="">Legal link1</a></li>
          <li><a href="">Legal link2</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default App;
