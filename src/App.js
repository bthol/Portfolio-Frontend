import React, { useState, useEffect } from 'react';
import './App.css';
import { Timeout } from './Modals/Timeout';
import { Header } from './Templates/Header';
import { Footer } from './Templates/Footer';
import { GenericPage } from './Pages/GenericPage';
import { HomePage } from './Pages/HomePage';
import { ProjectsPage } from './Pages/ProjectsPage';

function App() {
  // TRACKLENGTH BAR LOGIC
  const [docScroll, setDocScroll] = useState(0);
  
  let winHeight, trackLength, docheight;
  
  const getHeight = () => {
    return Math.max(
      document.body.clientHeight,
      document.documentElement.clientHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    )
  };
    
  const getInfo = () => {
    winHeight= window.innerHeight || (document.documentElement || document.body).clientHeight;
    docheight = getHeight();
    trackLength = docheight - winHeight;
  };
  getInfo();
    
  const scrollAmmount = () => {
    let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    let pctScrolled = Math.floor(scrollTop/trackLength * 100);
    if (pctScrolled > 0) {
      setDocScroll(pctScrolled)
    }
  };
  
  window.addEventListener("resize", () => {
    getInfo();
  }, false)
  
  window.addEventListener("scroll", () => {
    scrollAmmount();
  }, false)
  
  // ERROR ALERTS
  const featureAlert = (e) => {
    e.preventDefault();
    alert("Feature still in development");
  };
  
  const featureAlertFunct = (e) => {
    featureAlert(e);
  }
  
  // BOOLEAN STATE FOR MOBILE ENVIRONMENT
  const [mobile, setMobile] = useState(false);
  const [mobBool, setMobBool] = useState(true);
  if (window.innerWidth < 768 && mobBool) {
    setMobBool(false);
    setMobile(true);
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
  const [btnText, setBtnText] = useState("Night");
  const toggleTheme = () => {
    setTogTheme(!togTheme)
    if (togTheme) {
      setTheme("color-theme-day");
      setBtnText("Night");
    } else {
      setTheme("color-theme-night");
      setBtnText("Day");
    }
  };
  
  // PAGE LOGIC
  const [page, setPage] = useState(1); // sets default page
  const goPage = (p) => { // function for page navigation
    setPage(p);
    setTimeout(() => {pageDisplay()}, 1)
  }

  // state for page properties
  const [back, setBack] = useState("max-height");
  // function that adjusts layout by page properties
  const pageDisplay = () => {
    if (document.body.clientHeight < (window.innerHeight || (document.documentElement || document.body).clientHeight)) {
      setBack("100vh");
    } else {
      setBack("max-content");
    }
  }
  
  // wrapper function for network diagnostic purposes
  const gotData = (promise) => {
    const gotData = new Promise((resolve) => {
      resolve(promise);
    })
    console.log(gotData);
  }

  // Page Data State
  const [portfolioViews, setPortfolioViews] = useState(0);
  const [portfolioLikes, setPortfolioLikes] = useState(0);
  
  // fetch on render
  useEffect(() => {
    let ignore = false;
    fetch(`https://bthol-portfolio-backend.herokuapp.com/subjective/`)
    .then(res => res.json())
    .then((data) => {
      if (!ignore) {
        setPortfolioViews(data.data[0].portfolioViews + 1)
        setPortfolioLikes(data.data[0].portfolioLikes)
      }
    })
    .catch(error => console.log(error))
    return () => {ignore = true};
  }, [])

  // Like Button
  const likePortfolio = () => {
    setPortfolioLikes(portfolioLikes + 1);
    try {
      fetch(`https://bthol-portfolio-backend.herokuapp.com/subjective/641a287287cc03f4312cd457`, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          portfolioLikes: portfolioLikes + 1
        })
      });
      console.log("pass");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div id="root-react" className={`App color ${theme}`} style={{height: back}}>
      <Header
          btnText={btnText}
          toggleTheme={toggleTheme}
          docScroll={docScroll}
          featureAlertFunct={featureAlertFunct}
          goPage={goPage}
      ></Header>

      {
        page === 0 &&
        <GenericPage
          featureAlertFunct={featureAlertFunct}
          mobile={mobile}
        />
      }

      {
        page === 1 && 
        <HomePage
          featureAlertFunct={featureAlertFunct}
          mobile={mobile}
          portfolioViews={portfolioViews}
          portfolioLikes={portfolioLikes}
          likePortfolio={likePortfolio}
        />
      }

      {
        page === 2 &&
        <ProjectsPage
          featureAlertFunct={featureAlertFunct}
          mobile={mobile}
        />
      }

      <div className="flex-center">
        <a href="#" className="flex-center top-link-style">back to top</a>
      </div>

      <Timeout modal={modal} setModal={setModalFunct}></Timeout>

      <Footer />

    </div>
  )
};

export default App;