import './App.css';
// import React, { useState } from 'react';
import { Header } from "./Header/Header";
import { Section1 } from './Content/Section1';
import { Section2 } from './Content/Section2';
import { Section3 } from './Content/Section3';
import { Footer } from './Footer/Footer';
import { ProfilePhoto } from './Images/ProfilePhoto';

//use event handlers to create interactive links for compatability with touch screens (pseudo classes don't work)
// const desat = document.querySelectorAll(`.isActive-link`);
// desat.addEventListener("click", (e) => {
//   e.target.style.color = "hsl(0, 0%, 100%)";
// });


function App() {
  return (
    <div className="App">
      <a name="top"></a>
      <Header />
      <span id="aside-main">
          <aside className="app-aside">
              <ProfilePhoto></ProfilePhoto>
              <p><strong>About Me: </strong>I am a Full Stack Web and App Developer searching for a position to utilize and further develop my creative and technological skillset.</p>
              <br />
              <a href="" className="link-desat" onClick={() => {alert("You wanted an error message?")}}>click for error message</a>
              {/* <Form1></Form1> */}
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