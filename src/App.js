import './App.css';
// import React, { useState } from 'react';
import { Header } from "./Header/Header";
import { Section1 } from './Content/Section1';
import { Section2 } from './Content/Section2';
import { Section3 } from './Content/Section3';
import { Footer } from './Footer/Footer';
import { ProfilePhoto } from './Images/ProfilePhoto';

function App() {
  return (
    <div className="App">
      <a name="top"></a>
      <Header />
      <span id="aside-main">
          <aside className="app-aside">
            <ProfilePhoto></ProfilePhoto>
            <div className="flex-between">
              <a href="" rel="noreferrer" className="link-desat header-padd-right" onClick={() => {alert("Feature still in development")}}>Contact</a>
              <a href="" className="link-desat" onClick={() => {alert("You wanted an error message?")}}>error message</a>
            </div>
            <p><b>About Me</b>: I am a Full Stack Web and App Developer searching for a position to utilize and further develop my creative and technological skillset.</p>
          </aside>
          <main className="app-main">
            <Section1></Section1>
            <Section2></Section2>
            <Section3></Section3>
          </main>
      </span>
      <Footer />
    </div>
  );
};

export default App;