import './App.css';
import React, { useState } from 'react';
import { Header } from "./Header/Header";
import { Aside } from './Aside/Aside';
import { Section1 } from './Content/Section1';
import { Section2 } from './Content/Section2';
import { Section3 } from './Content/Section3';
import { Section4 } from './Content/Section4';
import { Footer } from './Footer/Footer';

function App() {
  const [theme, setTheme] = useState("color-theme-normal");
  const setThemeDark = () => {
    setTheme("color-theme-dark")
  }
  const setThemeNormal = () => {
    setTheme("color-theme-normal")
  }
  return (
    <div id="root-react" className={`App color + ${theme}`}>
      <a name="top"></a>
      <Header />
      <span id="aside-main">
          <aside className="app-aside">
            <Aside setThemeNormal={setThemeNormal} setThemeDark={setThemeDark}/>
          </aside>
          <main className="app-main">
            <div className="section-lists">
              <Section1></Section1>
            </div>
              <Section2></Section2>
              <Section3></Section3>
              <Section4></Section4>
          </main>
      </span>
      <a href="#top" className="flex-center top-link-style">back to top</a>
      <Footer />
    </div>
  );
};

export default App;