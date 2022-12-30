import React, { useState } from 'react';
import './App.css';
import { HomePage } from './Pages/HomePage';

function App() {

  // ERROR ALERTS
  const featureAlert = (e) => {
    e.preventDefault();
    alert("Feature still in development");
  };

  const featureAlertFunct = (e) => {
    featureAlert(e);
  }

  // THEME LOGIC
  const [theme, setTheme] = useState("color-theme-day");
  const [togTheme, setTogTheme] = useState(false);
  const toggleTheme = () => {
    setTogTheme(!togTheme)
    if (togTheme) {
      setTheme("color-theme-day");
    } else {
      setTheme("color-theme-night");
    }
  };

  
  const pageInfo = [
    "HomePage",
    "TemplatePage",
  ];
  
  const [page, setPage] = useState(1);
  
  if (page == 1) { return (<HomePage
    featureAlertFunct={featureAlertFunct}
    theme={theme}
    toggleTheme={toggleTheme}
  />)}

  // if (TemplatePage) { return (<TemplatePage />)}

};

export default App;