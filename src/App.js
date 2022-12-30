import React, { useState, useEffect } from 'react';
import './App.css';
import { Header } from './Templates/Header';
import { Footer } from './Templates/Footer';
import { HomePage } from './Pages/HomePage';
import { TemplatePage } from './Pages/TemplatePage';
import { Timeout } from './Modals/Timeout';

function App() {

  // ERROR ALERTS
  const featureAlert = (e) => {
    e.preventDefault();
    alert("Feature still in development");
  };

  const featureAlertFunct = (e) => {
    featureAlert(e);
  }

  // IDLE MODAL
  const [modal, setModal] = useState("closed");
  useEffect(() => {
    let seconds = 0;
    // listners reset the count
    document.addEventListener("touchmove", () => {seconds = 0});
    document.addEventListener("mousemove", () => {seconds = 0});
    document.addEventListener("keydown", () => {seconds = 0});
    const counter = setInterval(() => {
    seconds += 1;
    if (seconds === 300) {
        // display modal
        setModal("open")
        seconds = 0;
    }
    }, 1000);
    return () => clearInterval(counter);
  }, []);

  const setModalFunct = (str) => {
    setModal(str)
  };

  // THEME LOGIC
  const [theme, setTheme] = useState("color-theme-day");
  const [togTheme, setTogTheme] = useState(false);
  const [btnText, setBtnText] = useState("Night Theme");
  const toggleTheme = () => {
    setTogTheme(!togTheme)
    if (togTheme) {
      setTheme("color-theme-day");
      setBtnText("Night Theme");
    } else {
      setTheme("color-theme-night");
      setBtnText("Day Theme");
    }
  };
  
  // PAGE LOGIC
  const [page, setPage] = useState(0);
  const goPage = (p) => {
    setPage(p)
  }
  return (
    <div id="root-react" className={`App color ${theme}`}>
      <Timeout modal={modal} setModal={setModalFunct}></Timeout>

      <Header
          btnText={btnText}
          toggleTheme={toggleTheme}
          featureAlertFunct={featureAlertFunct}
          goPage={goPage}
      ></Header>

      {page === 0 && <HomePage
        featureAlertFunct={featureAlertFunct}
      />}
        
      {page === 1 && <TemplatePage
        featureAlertFunct={featureAlertFunct}
      />}

      <div className="flex-center">
        <a href="#" className="flex-center top-link-style">back to top</a>
      </div>

      <Footer />
    </div>
  )
};

export default App;