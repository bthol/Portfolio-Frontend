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
  // const update = () => {
  //   setData(
      
  //   )
  // }
  // const destroy = () => {
  //   setData(

  //   )
  // }
  return (
    <div className="App">
      <header className="app-header">
        <img src="" alt="Augium Icon" id="augium"></img>
        <h3>Blake Thollaug Portfolio</h3>
      </header>
      <nav className="app-nav">
        <div className="nav-links">
          <a href="" className="link1">Page link1</a>
          <a href="" className="link2">Page link2</a>
          <a href="" className="link3">Page link3</a>
        </div>
      </nav>
      <span id="aside-main">
        <main className="app-main">
          <section>
            <h4>Main</h4>
          </section>
          <section>
            <h4>Front End logic for CRUD testing</h4>
            <p>front end data: {JSON.stringify(data)}</p>
            <p id="num-display"></p>
            <button onClick={create}>create</button>
            {/* <button onClick={update}>update</button> */}
            {/* <button onClick={destroy}>destroy</button> */}
          </section>
          <section>
            <h4>Skills</h4>
            <ul>
              <li><p>List name</p></li>
              <li>li 1</li>
              <li>li 2</li>
              <li>li 3</li>
            </ul>
            <ul>
              <li><p>List name</p></li>
              <li>li 1</li>
              <li>li 2</li>
              <li>li 3</li>
            </ul>
          </section>
          <section>
            <h4>Projects</h4>
            <p>Tic Tac Toe</p>
            <ul>
              <li></li>
              <li>bullet 2</li>
              <li>bullet 3</li>
            </ul>
              <p>project name</p>
            <ul>
              <li>bullet 1</li>
              <li>bullet 2</li>
              <li>bullet 3</li>
            </ul>
          </section>
        </main>
        <aside className="app-aside">
          <h4>Aside</h4>
          <Container1></Container1>
        </aside>
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
          <li><a href="" target="_blank">Bandcamp</a></li>
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
