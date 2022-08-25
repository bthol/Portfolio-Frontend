import './App.css';
import React, { useState } from 'react';
import { Header } from "./Header/Header";
import { Aside } from './Aside/Aside';
import { Section1 } from './Content/Section1';
import { Section2 } from './Content/Section2';
import { Section3 } from './Content/Section3';
import { Section4 } from './Content/Section4';
import { Footer } from './Footer/Footer';
import Idle from './IdleTimer/IdleTimer';

function App() {
  
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

  const featureAlert = (e) => {
    e.preventDefault();
    alert("Feature still in development");
  };

  return (
    <div id="root-react" className={`App color ${theme}`}>
      {/* <Idle></Idle> */}
      <Header />
      <span className="aside-main">
          <aside className="app-aside shadow-behind">
            <Aside
              btnText={btnText}
              btnClass={btnClass}
              toggleTheme={toggleTheme}
              featureAlert={featureAlert}
            />
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