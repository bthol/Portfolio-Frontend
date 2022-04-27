import './App.css';
import React, { useState } from 'react';


function App() {
  const [data, setData] = useState([])
  const printData = () => {
    data.forEach((i) => {
      document.getElementById("num-display").append(`${i}`)
    })
  }
  const addIncr = () => {
    setData([
      ...data,
      data.push(data.length + 2)
    ])
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>Header</p>
      </header>
      <nav className="App-nav">
        <p>Navigation</p>
      </nav>
      <aside className="App-aside">
        <p>Aside</p>
      </aside>
      <main className="App-main">
        <p>Main</p>
        <p>{JSON.stringify(data)}</p>
        <p id="num-display"></p>
        <button onClick={printData}>show numbers</button>
        <button onClick={addIncr}>add numbers</button>
      </main>
      <footer className="App-footer">
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;
