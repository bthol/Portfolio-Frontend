import './App.css';
import React, { useState } from 'react';
import { NavButton } from './NavButton/NavButton';
import { Section1 } from './Content/Section1';
import { Section2 } from './Content/Section2';
import { Section3 } from './Content/Section3';
import { Section4 } from './Content/Section4';
import { Footer } from './Footer/Footer';

import { AugiumIcon } from './Images/AugiumIcon';
import { ProfilePhoto } from './Images/ProfilePhoto';
// import Idle from './IdleTimer/IdleTimer';

function App() {
  
  // ALERTS
  const featureAlert = (e) => {
    e.preventDefault();
    alert("Feature still in development");
  };

  // THEME LOGIC
  const [btnText, setBtnText] = useState("Night Theme");
  const [btnClass, setBtnClass] = useState("buttons");
  const [theme, setTheme] = useState("color-theme-day");
  
  const setThemeNight = () => {
    setBtnText("Day Theme")
    setTheme("color-theme-night")
    setBtnClass("buttons dark-button");
  };
  
  const setThemeDay = () => {
    setBtnText("Night Theme")
    setTheme("color-theme-day")
    setBtnClass("buttons")
  };
  
  const [togTheme, setTogTheme] = useState(false);
  const toggleTheme = () => {
    setTogTheme(!togTheme)
    if (togTheme) {
      setThemeDay();
    } else {
      setThemeNight();
    }
  };

  // NAV PROPS
  // 1
  const rootName1 = "Utility Apps";
  const rootLinks1 = <div className="nav-menu-style">
    <a href="https://github.com/bthol/Calculo/" target="_blank" rel="noreferrer" className="link-desat">Calculo</a>
  </div>;
  // 2
  const rootName2 = "Game Apps";
  const rootLinks2 = <div className="nav-menu-style">
    <a href="https://bthol.github.io/Space-Battle/" target="_blank" rel="noreferrer" className="link-desat">Space Battle</a> 
    <a href="https://bthol.github.io/Magic-8-Ball/" target="_blank" rel="noreferrer" className="link-desat">Magic 8 Ball</a>
    <a href="https://bthol.github.io/Retro-Toe/" target="_blank" rel="noreferrer" className="link-desat">Retro Toe</a>
  </div>;

  return (
    <div id="root-react" className={`App color ${theme}`}>
      {/* <Idle></Idle> */}
      <header className="app-header">
        <div className="no-select">
          <AugiumIcon></AugiumIcon>
          <h3 id="website-title" title="Blake Thollaug's Portfolio Website" tabIndex={0}>Blake Thollaug's Portfolio Website</h3>
        </div>
        <nav className="app-nav flex-around">
          <NavButton
            rootName={rootName1}
            rootLinks={rootLinks1}
          ></NavButton>
          <NavButton
            rootName={rootName2}
            rootLinks={rootLinks2}
          ></NavButton>
        </nav>
      </header>
      <span className="aside-main">
          <aside className="app-aside shadow-behind">
            <ProfilePhoto></ProfilePhoto>
            <div className="flex-around">
                <button className={btnClass} onClick={featureAlert}>Contact Me</button>
                <button className={btnClass} onClick={toggleTheme}>{btnText}</button>
            </div>
            <p tabIndex={0}><b>About Me</b>: I am a Full Stack Web and App Developer searching for a position to utilize and further grow my creative and technological skillset.</p>
            <br />
          </aside>
          <main className="app-main">
              <Section1></Section1>
              <Section2></Section2>
              <Section3></Section3>
              <Section4></Section4>
          </main>
      </span>
      <div className="flex-center">
        <a href="#" className="flex-center top-link-style shadow-behind">back to top</a>
      </div>
      <Footer />
    </div>
  );
};

export default App;