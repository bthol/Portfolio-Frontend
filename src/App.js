import React, { useState, useEffect } from 'react';
import './App.css';
import { Modal } from './Modals/Modal';
import { Header } from './Templates/Header';
import { Footer } from './Templates/Footer';
import { GenericPage } from './Pages/GenericPage';
import { HomePage } from './Pages/HomePage';
import { ArtPage } from './Pages/ArtPage';
import { Comp8 } from './RenderComp/Comp8';

function App() {

  // ERROR ALERTS
  const featureAlert = (e) => {
    e.preventDefault();
    alert("Feature still in development");
  };
  const featureAlertFunct = (e) => {
    featureAlert(e);
  };
  
  // IDLE MODAL
  // 5 min = 300 secs
  let idleDelay = 300;
  let idleCounter;
  let idleCount = 0;
  const [modal, setModal] = useState(false);
  
  const setModalFunct = (bool) => {
    setModal(bool)
    if (bool === false) {
      count();
    }
  };
  
  const count = () => {
    idleCounter = setInterval(() => {
      if (idleCount === idleDelay) {
        setModalFunct(true);
        clearInterval(idleCounter);
      } else {
        idleCount += 1;
      }
    }, 1000)
  };
  
  useEffect(() => {
    // callback starts the count
    count();
    // listner restarts count
    document.addEventListener("mousemove", () => {
      // console.log("mousemove");
      idleCount = 0;
    });
    document.addEventListener("keydown", () => {
      // console.log("keydown");
      idleCount = 0;
    });
    document.addEventListener("touchmove", () => {
      // console.log("touchmove");
      idleCount = 0;
    });

    const onVisibilityChange = () => {
      // stop count on nav away
      if (document.visibilityState === "hidden") {
        clearInterval(idleCounter);
        idleCount = 0;
      }
      // restart count on nav back
      if (document.visibilityState === "visible") {
        clearInterval(idleCounter);
        count()
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => clearTimeout(idleCounter);
  }, []);

  // BOOLEAN STATE FOR MOBILE ENVIRONMENT
  const [mobile, setMobile] = useState(false);
  const [mobBool, setMobBool] = useState(true);
  if (window.innerWidth < 768 && mobBool) {
    setMobBool(false);
    setMobile(true);
  };

  // KEYSTROKE TESTING
  const enter = (e) => {
    if (e.key === 'Enter') {
      return true;
    } else {
      return false;
    }
  };

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
    winHeight = window.innerHeight || (document.documentElement || document.body).clientHeight;
    docheight = getHeight();
    trackLength = docheight - winHeight;
  };
  getInfo();

  const scrollAmmount = () => {
    let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    let pctScrolled = Math.floor(scrollTop / trackLength * 100);
    if (pctScrolled >= 0) {
      setDocScroll(pctScrolled)
    }
  };

  window.addEventListener("resize", () => {
    getInfo();
  }, { passive: true });

  window.addEventListener("scroll", () => {
    scrollAmmount();
  }, { passive: true });


  // THEME LOGIC
  const [theme, setTheme] = useState("color-theme-light");
  const [togTheme, setTogTheme] = useState(true);
  const [btnTheme, setBtnTheme] = useState("theme-btn-light");
  const themeTransTime = 180;
  const updateLikeBtn = () => {
    // detects if liked and display accordingly
    if (localStorage.getItem("liked")) {
      const likeBtn = document.querySelector('.like-btn');
      const color = getComputedStyle(likeBtn).getPropertyValue('--like-btn-liked');
      likeBtn.style.backgroundColor = color;
      likeBtn.style.cursor = "default";
      likeBtn.innerText = "Liked";
      likeBtn.classList.remove('like-btn-animation');
    }
  };
  const toggleTheme = () => {
    setTogTheme(!togTheme)
    if (togTheme) {
      setBtnTheme("theme-btn-dark");
    } else {
      setBtnTheme("theme-btn-light");
    }
    setTimeout(() => {
      if (togTheme) {
        setTheme("color-theme-dark");
      } else {
        setTheme("color-theme-light");
      }
    }, themeTransTime)
  };

  useEffect(() => {
    // update style on theme change
    updateLikeBtn();
  }, [theme])
  
  // state for page properties
  const [back, setBack] = useState("max-height");
  const pageDisplay = () => {
    // function that adjusts layout by page properties
    if (document.body.clientHeight >= window.innerHeight) {
      setBack("max-content");
    } else {
      setBack("100vh");
    }
  }

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      // sets default theme on load
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme("color-theme-dark");
        setTogTheme(false);
        setBtnTheme("theme-btn-dark");
      }
    }
    return () => { ignore = true }
  }, [])
  
  // Page Data State
  const [portfolioViews, setPortfolioViews] = useState(<Comp8 />);
  const [portfolioLikes, setPortfolioLikes] = useState(<Comp8 />);
  
  // fetch data on load
  const ID = "64a90dfc4b3042dcaabdf1b4";
  useEffect(() => {
    let ignore = false;
    const getResources = () => {
      // Test for connection to backend
      fetch(`https://bthol-portfolio-backend.herokuapp.com/subjective/`).then(
        () => {
          // onFulfilled
          // Request resources and display them
          fetch(`https://bthol-portfolio-backend.herokuapp.com/subjective/`)
          .then(res => res.json())
          .then((data) => {
            if (!ignore) {
              setPortfolioLikes(`: ${data.data[0].portfolioLikes}`)
              
              // if new to page
              if (localStorage.getItem("viewed") === null) {
                setPortfolioViews(`: ${data.data[0].portfolioViews + 1}`)
                fetch(`https://bthol-portfolio-backend.herokuapp.com/subjective/${ID}`, {
                  method: 'PATCH',
                  headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                  },
                  body: JSON.stringify({
                    portfolioViews: data.data[0].portfolioViews + 1,
                  })
                })
                localStorage.setItem("viewed", true);
              }
            } else {
              setPortfolioViews(`: ${data.data[0].portfolioViews}`)
            }
          })
        },
        () => {
          // onRejected
          // Notify if offline
          if (!window.navigator.onLine) {
            alert("The user is not connected to the internet. Please connect to the internet for a fully featured experience.")
          }
          // Display message in place of resources to avoid the appearance of infinite loading
          setPortfolioLikes("failed to load")
          setPortfolioViews("failed to load")
          
          // trigger 10 second countdown for connection retry
          let cd = 0;
          const cdCache = setInterval(() => {
            if (cd === 10) {
              cd = 0;
              clearInterval(cdCache);
              getResources();
            } else {
              cd += 1;
            }
          }, 1000)
        }
      )
    };
    getResources();
    return () => { ignore = true }
  }, [])

  // Like Button
  const likePortfolio = () => {
    // if not liked already (using localStorage)
    if (localStorage.getItem("liked") === null) {
      setPortfolioLikes(`: ${Number(portfolioLikes.slice(1, portfolioLikes.length)) + 1}`);
      try {
        fetch(`https://bthol-portfolio-backend.herokuapp.com/subjective/`)
        .then(res => res.json())
        .then((data) => {
          fetch(`https://bthol-portfolio-backend.herokuapp.com/subjective/${ID}`, {
            method: 'PATCH',
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
              portfolioLikes: data.data[0].portfolioLikes + 1,
            })
          })
        })
        localStorage.setItem("liked", true);
        updateLikeBtn();
      } catch (err) {
        console.error(err);
      }
    }
  }
    
  // PAGE NAVIGATION LOGIC
  const [page, setPage] = useState(1); // sets default page
  const goPage = (p) => { // function for page navigation
    setPage(p);
    setTimeout(() => { pageDisplay() }, 10)
  }
  
  return (
    <div id="root-react" className={`App color ${theme}`} style={{ height: back }}>
      <Header
        toggleTheme={toggleTheme}
        docScroll={docScroll}
        featureAlertFunct={featureAlertFunct}
        goPage={goPage}
        btnTheme={btnTheme}
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
          enter={enter}
        />
      }

      {
        page === 2 &&
        <ArtPage
          featureAlertFunct={featureAlertFunct}
          mobile={mobile}
          enter={enter}
        />
      }

      <div className="flex-center">
        <div className="flex-center top-link-style button-hover" onClick={() => { window.scrollTo(0, 0) }}>back to top</div>
      </div>

      {
        modal &&
        <Modal setModal={setModalFunct} title={"Session Timeout"} message={"Are you still there?"} closeBtnText={"Yes, I am still here"} />
      }
      <Footer />

    </div>
  )
};

export default App;