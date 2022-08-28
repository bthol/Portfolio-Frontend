import './App.css';
import React, { useState } from 'react';
import { NavButton } from './NavButton/NavButton';
import { Section1 } from './Content/Section1';
import { Section2 } from './Content/Section2';
import { Section3 } from './Content/Section3';
import { Section4 } from './Content/Section4';
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

  // NAV LOGIC

  // 1
  const [navState1, setNavState1] = useState(false);
  const toggleNavState1 = () => {
    setNavState1(!navState1);
  }
  const rootName1 = "Utility Apps";
  const rootLinks1 = <div className="nav-menu-style">
    <a href="https://github.com/bthol/Calculo/" target="_blank" rel="noreferrer" className="link-desat">Calculo</a>
  </div>;

  // 2
  const [navState2, setNavState2] = useState(false);
  const toggleNavState2 = () => {
    setNavState2(!navState2);
  }
  const rootName2 = "Game Apps";
  const rootLinks2 = <div className="nav-menu-style">
    <a href="https://bthol.github.io/Space-Battle/" target="_blank" rel="noreferrer" className="link-desat">Space Battle</a> 
    <a href="https://bthol.github.io/Magic-8-Ball/" target="_blank" rel="noreferrer" className="link-desat">Magic 8 Ball</a>
    <a href="https://bthol.github.io/Retro-Toe/" target="_blank" rel="noreferrer" className="link-desat">Retro Toe</a>
  </div>;

  const closeNav = () => {
    setNavState1(false);
    setNavState2(false);
  }

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
            navState={navState1}
            toggleNavState={toggleNavState1}
            closeNav={closeNav}
          ></NavButton>
          <NavButton
            rootName={rootName2}
            rootLinks={rootLinks2}
            navState={navState2}
            toggleNavState={toggleNavState2}
            closeNav={closeNav}
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
      <footer className="app-footer">
            <AugiumIcon></AugiumIcon>
            <div className="app-footer-link-grid flex-around">
                <ul>
                    <li tabIndex={0}><p><b>Coding</b></p></li>
                    <li><a href="https://github.com/bthol" target="_blank" rel="noreferrer" className="link-highlight">GitHub</a></li>
                    <li><a href="https://replit.com/@BlakeThollaug" target="_blank" rel="noreferrer" className="link-highlight">Replit</a></li>
                    <li><a href="https://codepen.io/Bthol/pens/public" target="_blank" rel="noreferrer" className="link-highlight">CodePen</a></li>
                </ul>
                <ul>
                    <li tabIndex={0}><p><b>Music</b></p></li>
                    <li><a href="https://augium.bandcamp.com/" target="_blank" rel="noreferrer" className="link-highlight">Bandcamp</a></li>
                    <li><a href="https://soundcloud.com/augium" target="_blank" rel="noreferrer" className="link-highlight">SoundCloud</a></li>
                </ul>
                <ul>
                    <li tabIndex={0}><p><b>Follow</b></p></li>
                    <li><a href="https://www.linkedin.com/in/blake-thollaug/" target="_blank" rel="noreferrer" className="link-highlight">LinkedIn</a></li>
                </ul>
            </div>
            <small className="flex-around" tabIndex={0}>&copy; 2022, Blake Thollaug. All rights reserved.</small>
            <br />
      </footer>
    </div>
  );
};

export default App;