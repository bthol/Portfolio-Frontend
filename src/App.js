import React, { useState, useEffect } from 'react';
import './App.css';
import { Notify } from './Modals/Notify';
import { Header } from './Template/Header';
import { Footer } from './Template/Footer';
import { GenericPage } from './Pages/GenericPage';
import { HomePage } from './Pages/HomePage';
import { ArtPage } from './Pages/ArtPage';
import { Comp8 } from './RenderComp/Comp8';

function App() {

  // GLOBAL VARIABLES
  let winHeight, trackLength, docheight;
  const [cdCache, setCDCache] = useState({});

  // BOOLEAN STATE FOR MOBILE ENVIRONMENT
  const [mobile, setMobile] = useState(true); // defaults to mobile environment
  const [mobileFirst, setMobileFirst] = useState(true);
  if (mobileFirst && window.innerWidth > 768) {
    setMobileFirst(false); // prevent retest
    setMobile(false); // change environment
  };
  
  // NOTIFICATION STATE
  const [featureNotify, setFeatureNotify] = useState(false);
  const notifyFeature = (e, bool) => {
    e.preventDefault();
    setFeatureNotify(bool);
  };
  
  const [internetConnectNotify, setInternetConnectNotify] = useState(false);
  const notifyInternetConnect = (e, bool) => {
    setInternetConnectNotify(bool);
  };
  
  const [idleNotify, setIdleNotify] = useState(false);
  const notifyIdle = (e, bool) => {
    // displays idle notification for a bool argument of true
    setIdleNotify(bool);
  };
  
  // IDLE NOTIFICATION
  const secondsIdle = 300; // 300 seconds = 5 minutes // number of seconds idle before notify
  const [idleVar, setIdleVar] = useState({});

  const active = () => {
    // runs for all user activity
    // debounces for secondsIdle number of seconds to display idle notification
    if (!idleNotify) {
      clearTimeout(idleVar);
      setIdleVar(
        setTimeout((e) => {
          notifyIdle(e, true);
          clearTimeout(idleVar);
        }, secondsIdle * 1000)
      )
    }
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
    let scrollTop = (document.documentElement || document.body.parentNode || document.body).scrollTop;
    let pctScrolled = Math.floor(scrollTop / trackLength * 100);
    if (pctScrolled >= 0) {
        setDocScroll(pctScrolled);
    }
  };
  
  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      window.addEventListener("resize", () => {
        active();
        getInfo();
        scrollAmmount();
        
      }, { passive: true });
      
      window.addEventListener("scroll", () => {
        active();
        getInfo();
        scrollAmmount();
      }, { passive: true });
    }
    return () => {ignore = true};
  }, []);

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
    setTogTheme(!togTheme);
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
    let ignore = false;
    if (!ignore) {
      // sets user default theme on load
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme("color-theme-dark");
        setTogTheme(false);
        setBtnTheme("theme-btn-dark");
      }
    }
    return () => { ignore = true };
  }, []);
  
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
              setPortfolioLikes(`: ${data.data[0].portfolioLikes}`);
              
              // if new to page
              if (localStorage.getItem("viewed") === null) {
                setPortfolioViews(`: ${data.data[0].portfolioViews + 1}`);
                fetch(`https://bthol-portfolio-backend.herokuapp.com/subjective/${ID}`, {
                  method: 'PATCH',
                  headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                  },
                  body: JSON.stringify({
                    portfolioViews: data.data[0].portfolioViews + 1,
                  })
                });
                localStorage.setItem("viewed", true);
              }
            } else {
              setPortfolioViews(`: ${data.data[0].portfolioViews}`);
            }
          })
        },
        
        () => {
          // onRejected
          // Notify if offline
          if (!window.navigator.onLine) {
            setInternetConnectNotify(true);
          }
          // Display message in place of resources to avoid the appearance of infinite loading
          setPortfolioLikes("failed to load");
          setPortfolioViews("failed to load");
          
          // trigger 1 minute countdown for connection retry
          const secondsCD = 60; // seconds before
          let cd = 0; // count
          clearInterval(cdCache);
          setCDCache(setInterval(() => {
              if (cd === 60) {
                cd = 0;
                getResources();
              } else {
                cd += 1;
              }
          }, secondsCD * 1000));
        }
      )
    };
    if (!ignore) {
      // run first and only once
      getResources();
    }
    return () => { ignore = true }
  }, []);

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
  };
    
  // PAGE NAVIGATION LOGIC
  const [page, setPage] = useState(1); // sets default page
  const goPage = (p) => { // function for page navigation
    setPage(p);
    window.scrollTo(0,0);
  };
  
  return (
    <div id="root-react" className={`App color ${theme}`} onTouchMove={active} onMouseMove={active} onClick={active} onKeyDown={active} >
      
      <Header
        docScroll={docScroll}
        btnTheme={btnTheme}
        toggleTheme={toggleTheme}
        notifyFeature={notifyFeature}
        goPage={goPage}
      ></Header>

      {
        page === 0 &&
        <GenericPage
          mobile={mobile}
          notifyFeature={notifyFeature}
        />
      }

      {
        page === 1 &&
        <HomePage
          theme={theme}
          portfolioViews={portfolioViews}
          portfolioLikes={portfolioLikes}
          mobile={mobile}
          enter={enter}
          notifyFeature={notifyFeature}
          likePortfolio={likePortfolio}
          updateLikeBtn={updateLikeBtn}
        />
      }

      {
        page === 2 &&
        <ArtPage
          mobile={mobile}
          notifyFeature={notifyFeature}
          enter={enter}
        />
      }

      <div className="flex-center">
        <div className="flex-center top-link-style button-hover" onClick={ () => {window.scrollTo(0,0)} } >back to top</div>
      </div>

      <Footer />

      {featureNotify && <Notify setDisplay={notifyFeature} enter={enter} title={"Feature Unavailable"} message={"You will be unable to use that feature until it becomes available."} closeBtnText={"close"} />}
      {internetConnectNotify && <Notify setDisplay={notifyInternetConnect} enter={enter} title={"No Internet Connection"} message={"The user is not connected to the internet. Please connect to the internet for a fully featured experience."} closeBtnText={"close"} />}
      {idleNotify && <Notify setDisplay={notifyIdle} enter={enter} title={"Session Timeout"} message={"Are you still there?"} closeBtnText={"Yes"} />}

    </div>
  )
};

export default App;