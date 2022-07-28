import './App.css';
// import React, { useState } from 'react';
import { Header } from "./Header/Header";
import { Aside } from './Aside/Aside';
import { Section1 } from './Content/Section1';
import { Section2 } from './Content/Section2';
import { Section3 } from './Content/Section3';
import { Footer } from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <a name="top"></a>
      <Header />
      <span id="aside-main">
          <aside className="app-aside">
            <Aside />
          </aside>
          <main className="app-main">
            <div className="section-lists">
              <Section1></Section1>
            </div>
              <Section2></Section2>
              <Section3></Section3>
          </main>
      </span>
      <Footer />
    </div>
  );
};

export default App;