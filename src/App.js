import React, { useState, useEffect, useRef, useCallback} from 'react';
import './App.css';
import { Notify } from './Modals/Notify';
import { Comp8 } from './Components/Comp8';
import { Header } from './Template/Header';
import { Footer } from './Template/Footer';
import { GenericPage } from './Pages/GenericPage';
import { HomePage } from './Pages/HomePage';
import { ArtPage } from './Pages/ArtPage';
import { MusicPage } from './Pages/MusicPage';

function App() {

  // STATE FOR ENVIRONMENT
  const [mobile, setMobile] = useState(true); // defaults to mobile environment
  const [initEnv, setInitEvn] = useState(true); // store bool for automatic env test
  // run env test on load
  if (initEnv) {
    // run env test
    if (window.innerWidth > 768) {
      setMobile(false); // change environment to desktop
    } else {
      setMobile(true); // change environment to mobile
    }
    // turn off automatic env test
    setInitEvn(false);
  }
  
  // NOTIFICATION STATES
  const [featureNotify, setFeatureNotify] = useState(false);
  const notifyFeature = useCallback((e, bool) => {
    e.preventDefault();
    setFeatureNotify(bool);
  }, []);
  
  const [internetConnectNotify, setInternetConnectNotify] = useState(false);
  const notifyInternetConnect = useCallback((e, bool) => {
    setInternetConnectNotify(bool);
  }, []);
  
  const [idleNotify, setIdleNotify] = useState(false);
  const notifyIdle = useCallback((e, bool) => {
    setIdleNotify(bool);
  }, []);
  
  // IDLE NOTIFICATION
  const secondsIdle = 600 * 1000; // 600 seconds = 10 minutes // number of seconds idle before notify
  const idleRef = useRef({});

  const active = (e) => {
    // runs for most common user activity
    if (!idleNotify) {
      // debounces timeout for idle on activity
      clearTimeout(idleRef.current);
      const id = setTimeout(() => {
        // displays idle notification
        clearTimeout(idleRef.current);
        notifyIdle(e, true);
      }, secondsIdle);
      idleRef.current = id;
    }
  };

  // KEYSTROKE TESTING
  const enter = useCallback((e) => {
    if (e.key === 'Enter') {
      return true;
    } else {
      return false;
    }
  }, []);

  // TRACKLENGTH BAR
  let winHeight, trackLength, docheight;
  const [docScroll, setDocScroll] = useState(0);

  const getInfo = () => {
    winHeight = window.innerHeight || (document.documentElement || document.body).clientHeight;
    docheight = Math.max(
      document.body.clientHeight,
      document.documentElement.clientHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );
    trackLength = docheight - winHeight;
  };
  getInfo();

  const scrollAmmount = () => {
    const scrollTop = (document.documentElement || document.body.parentNode || document.body).scrollTop;
    const pctScrolled = scrollTop / trackLength * 100;
    if (pctScrolled >= 0) {
      setDocScroll(pctScrolled);
    }
  };
  
  // LISTENERS
  // custom debounce for performance improvement
  const debounceFunctRef = useRef({});
  const debounceFunct = useCallback((funct, delay) => {
    clearTimeout(debounceFunctRef.current);
    const id = setTimeout(() => {
      clearTimeout(debounceFunctRef.current);
      funct();
    }, delay);
    debounceFunctRef.current = id;
  }, []);

  window.addEventListener("resize", () => {
    debounceFunct(getInfo, 5);
    debounceFunct(scrollAmmount, 10);
  });
  
  window.addEventListener("scroll", () => {
    debounceFunct(getInfo, 5);
    debounceFunct(scrollAmmount, 10);
  });

  // THEME LOGIC
  const [theme, setTheme] = useState("color-theme-light");
  const [initTheme, setInitTheme] = useState(true);
  const [togTheme, setTogTheme] = useState(true);
  const [btnTheme, setBtnTheme] = useState("theme-btn-light");
  const themeTransTime = 180;

  const updateLikeBtn = useCallback(() => {
    // detects if liked and display accordingly
    if (localStorage.getItem("liked")) {
      const likeBtn = document.querySelector('.like-btn');
      const color = getComputedStyle(likeBtn).getPropertyValue('--like-btn-liked');
      likeBtn.style.backgroundColor = color;
      likeBtn.style.cursor = "default";
      likeBtn.innerText = "Liked";
      likeBtn.classList.remove('like-btn-animation');
    }
  }, []);

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

  // sets user default theme on load
  if (initTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme("color-theme-dark");
    setTogTheme(false);
    setBtnTheme("theme-btn-dark");
    setInitTheme(false); // turn off default theme test after 1 run
  }
  
  // Page Data State
  const [portfolioViews, setPortfolioViews] = useState(<Comp8 />);
  const [portfolioLikes, setPortfolioLikes] = useState(<Comp8 />);
  
  // fetch data on load
  const ID = "64a90dfc4b3042dcaabdf1b4";
  useEffect(() => {
    let ignore = false;
    const getResources = () => {
      try {
        // onFulfilled
        // Request resources and display them
        fetch(`https://bthol-portfolio-backend.herokuapp.com/subjective/`)
        .then(res => res.json())
        .then((json) => {
          // update likes
          setPortfolioLikes(`: ${json.data[0].portfolioLikes}`);
          // if new to page
          if (localStorage.getItem("viewed") === null) {
            // update views display
            setPortfolioViews(`: ${json.data[0].portfolioViews + 1}`);
            // update views in database
            try {
              fetch(`https://bthol-portfolio-backend.herokuapp.com/subjective/${ID}`, {
                method: 'PATCH',
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({
                  portfolioViews: json.data[0].portfolioViews + 1,
                })
              });
              // update view variable in localStorage
              localStorage.setItem("viewed", true);

            } catch (error) {
              console.error(error);
            }

          } else {
            setPortfolioViews(`: ${json.data[0].portfolioViews}`);
          }
        })
      } catch (error) {
        // onRejected
        console.error(error);
        // Notify if offline
        if (!window.navigator.onLine) {
          setInternetConnectNotify(true);
        }
        // Display message in place of resources to avoid the appearance of infinite loading
        setPortfolioLikes("failed to load");
        setPortfolioViews("failed to load");
        // trigger countdown for connection retry
        // const secondsCD = 30; // seconds before retry
        // clearTimeout(cdCache.current);
        // cdCache = setTimeout(() => {
        //   clearTimeout(cdCache.current);
        //   getResources();
        // }, secondsCD * 1000);
      }
    };
    if (!ignore) {
      // call on load but not re-render
      getResources();
    }
    return () => {ignore = true};
  });

  // Like Button
  const likePortfolio = useCallback(() => {
    // if not liked already (using localStorage)
    if (localStorage.getItem("liked") === null) {
      setPortfolioLikes(`: ${Number(portfolioLikes.slice(1, portfolioLikes.length)) + 1}`);
      try {
        fetch(`https://bthol-portfolio-backend.herokuapp.com/subjective/`)
        .then(res => res.json())
        .then((data) => {
          try {
            fetch(`https://bthol-portfolio-backend.herokuapp.com/subjective/${ID}`, {
              method: 'PATCH',
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
              body: JSON.stringify({
                portfolioLikes: data.data[0].portfolioLikes + 1,
              })
            })
          } catch (error) {
            console.error(error);
          }
        })
        localStorage.setItem("liked", true);
        updateLikeBtn();
      } catch (error) {
        console.error(error);
      }
    }
  }, [portfolioLikes, updateLikeBtn]);
    
  // PAGE NAVIGATION
  const [page, setPage] = useState(1); // sets default page
  const goPage = useCallback((p) => { // function for page navigation
    setPage(p);
    window.scrollTo(0,0);
  }, []);
  
  return (
    <div id="root-react" className={`App color ${theme}`} onTouchMove={active} onMouseMove={active} onClick={active} onKeyDown={active} onScroll={active}>
      
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
      
      {
        page === 3 &&
        <MusicPage
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
