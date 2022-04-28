import './App.css';
import React, { useState } from 'react';
import { Container1 } from "./Container1/Container1";

function App() {
  const [data, setData] = useState([])
  const printData = () => {
    data.forEach((i) => {
      document.getElementById("num-display").append(`${i}`)
    })
  }
  const increase = () => {
    setData([
      ...data,
      data.push(data[data.length - 1] + 1)
    ])
  }
  const decrease = () => {
    setData([
      ...data,
      data.push(data[data.length - 1] - 1)
    ])
  }
  return (
    <div className="App">
      <header className="app-header">
        <p><img src="" alt="logo"></img>Website Title</p>
        <div className="header-links">
          <a href="">link1</a>
          <a href="">link2</a>
          <a href="">link3</a>
        </div>
      </header>
      <nav className="app-nav">
        <p>Navigation</p>
      </nav>
      <aside className="app-aside">
        <p>Aside</p>
        <Container1></Container1>
      </aside>
      <main className="app-main">
        <p>Main</p>
        <p>{JSON.stringify(data)}</p>
        <p id="num-display"></p>
        <button onClick={printData}>append numbers</button>
        <button onClick={increase}>increase numbers</button>
        <button onClick={decrease}>decrease numbers</button>
      </main>
      <footer className="app-footer">
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default App;
