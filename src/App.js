import './App.css';
import React, { useState } from 'react';

import { IIdleTimer } from 'react-idle-timer';
import { IIdleTimerProps } from 'react-idle-timer';

import { Header } from "./Header/Header";
import { Aside } from './Aside/Aside';
import { Section1 } from './Content/Section1';
import { Section2 } from './Content/Section2';
import { Section3 } from './Content/Section3';
import { Section4 } from './Content/Section4';
import { Footer } from './Footer/Footer';

function App() {

  const [btnText, setBtnText] = useState("Night Theme");
  const [btnClass, setBtnClass] = useState("buttons");
  const [theme, setTheme] = useState("color-theme-light");

  const setThemeDark = () => {
    setBtnText("Day Theme")
    setTheme("color-theme-dark")
    setBtnClass("buttons dark-button");
  };

  const setThemeLight = () => {
    setBtnText("Night Theme")
    setTheme("color-theme-light")
    setBtnClass("buttons")
  };

  const [togTheme, setTogTheme] = useState(true);
  const toggleTheme = () => {
    setTogTheme(!togTheme)
    if (togTheme) {
      setThemeLight();
    } else {
      setThemeDark();
    }
  };

  const featureAlert = (e) => {
    e.preventDefault();
    alert("Feature still in development");
  };

  return (
    <div id="root-react" className={`App color + ${theme}`}>
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