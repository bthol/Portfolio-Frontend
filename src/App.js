import './App.css';
import React, { useState } from 'react';
import { Header } from "./Header/Header";
import { MainDisplay } from './MainDisplay/MainDisplay';
import { Footer } from './Footer/Footer';
import { Form1 } from './Forms/Form1';

function App() {
  const [data, setData] = useState([])
  const deleteData = () => {
    setData([])
  }
  const [tog1, setTog1] = useState(false)
  const toggle = () => {
    setTog1(!tog1)
  }
  return (
    <div className="App">
      <Header></Header>
      <MainDisplay></MainDisplay>
      <Footer></Footer>
      <section>
        <h4>Full Stack Form</h4>
        <p>front end data: {JSON.stringify(data)}</p>
        <p id="num-display"></p>
        {tog1 ? <Form1></Form1> : <button onClick={toggle}>create</button>}
        <button>update</button>
        <button onClick={deleteData}>delete</button>
      </section>
    </div>
  );
};

export default App;