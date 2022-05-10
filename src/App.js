import './App.css';
import React, { useState } from 'react';
import DocumentMeta from "react-document-meta";
import { Header } from "./Header/Header";
import { Aside_main } from './Aside_main/Aside_main';
import { Footer } from './Footer/Footer';

const meta = {
  title: "Blake Thollaug Portfolio",
  description: "I am a description, and I can create multiple tags",
  canonical: "http://blakethollaugportfolio.com/",
  meta: {
    charset: "utf-8",
    name: {
      keywords: "react,meta,document,html,tags"
    }
  }
};

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
      <div>
        <DocumentMeta {...meta} />
      </div>
      <Header></Header>
      <Aside_main></Aside_main>
      <hr></hr>
      <Footer></Footer>
      <section>
          <h4>CRUD testing</h4>
          <p>front end data: {JSON.stringify(data)}</p>
          <p id="num-display"></p>
          <button onClick={create}>create</button>
          {
            tog1
          ?
            <form onSubmit={update}>
              <label>arg1</label><input type="number" min="0" max={data.length -1} required></input>
              <label>arg2</label><input type="number" min="0" max={data.length -1} required></input>
              <button type="submit">submit</button>
              <button type="button" onClick={toggle}>cancel</button>
            </form>
          : 
            <button onClick={toggle}>update</button>
          }
          <button onClick={destroy}>delete</button>
      </section>
    </div>
  );
};

export default App;
