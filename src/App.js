import './App.css';
import React, { useState, useEffect } from 'react';
import { NavButton } from './NavButton/NavButton';
import { Section1 } from './Content/Section1';
import { Section2 } from './Content/Section2';
import { Section3 } from './Content/Section3';
import { Section4 } from './Content/Section4';
import { AugiumIcon } from './Images/AugiumIcon';
import { ProfilePhoto } from './Images/ProfilePhoto';

function App() {

  // SCREEN AREA
  if (navigator.userAgent.indexOf('MSIE') > - 1 || navigator.userAgent.indexOf('Trident') > - 1) {
    // Internet Explorer
    document.body.style.height = document.documentElement.clientHeight;
  } else {
    // All other browsers
    document.body.style.height = window.innerHeight;
  }
  
  // BOOLEAN STATE FOR MOBILE ENVIRONMENT
  const [mobile, setMobile] = useState(false);
  const [mobBool, setMobBool] = useState(true);
  if (window.innerWidth < 768 && mobBool) {
    setMobBool(false);
    setMobile(true);
  }

  // ERROR ALERTS
  const featureAlert = (e) => {
    e.preventDefault();
    alert("Feature still in development");
  };

  // IDLE MODAL
  const [modal, setModal] = useState("closed");
  useEffect(() => {
    let seconds = 0;
    // listners reset the count
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

  // THEME LOGIC
  const [btnText, setBtnText] = useState("Night Theme");
  const [btnClass, setBtnClass] = useState("buttons");
  const [theme, setTheme] = useState("color-theme-day");
  
  const setThemeNight = () => {
    setBtnText("Day Theme");
    setTheme("color-theme-night");
    setBtnClass("buttons dark-button");
  };
  
  const setThemeDay = () => {
    setBtnText("Night Theme");
    setTheme("color-theme-day");
    setBtnClass("buttons");
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
  
  // SHOW MORE/LESS (for mobile especially)
  const [showMSG, setShowMSG] = useState("show more");
  const [show, setShow] = useState("show-n");
  const [shown, setShown] = useState("down-arrow");
  const [togshow, setTogshow] = useState(false);
  const toggleShown = () => {
    setTogshow(!togshow);
    if (!togshow) {
      setShow("show-y");
      setShowMSG("show less");
      setShown("up-arrow");
    } else {
      setShow("show-n");
      setShowMSG("show more");
      setShown("down-arrow");
    }
  }

  // PROJECT CAROUSEL (for tablet and larger)
  const [carPos, setCarPos] = useState(0);
  const [carBtn0, setCarBtn0] = useState("carPos0");
  const [carBtn1, setCarBtn1] = useState("");
  const [carBtn2, setCarBtn2] = useState("");

  const resetCarBtn = () => {
    setCarBtn0("");
    setCarBtn1("");
    setCarBtn2("");
  }

  // NAV LOGIC
  // 1
  const [drop1, setDrop1] = useState("menu-close");
  const [navState1, setNavState1] = useState(false);
  const toggleNavState1 = () => {
    setNavState1(!navState1);
    menuDisplay1();
  }
  const menuDisplay1 = () => {
    if (!navState1) {
      setDrop1("menu-open");
    } else {
      setDrop1("menu-close");
    }
  }
  // 2
  const [drop2, setDrop2] = useState("menu-close");
  const [navState2, setNavState2] = useState(false);
  const toggleNavState2 = () => {
    setNavState2(!navState2);
    menuDisplay2();
  }
  const menuDisplay2 = () => {
    if (!navState2) {
      setDrop2("menu-open");
    } else {
      setDrop2("menu-close");
    }
  }
  
  const initNav = () => {
    setNavState1(false);
    setDrop1("menu-close");
    setNavState2(false);
    setDrop2("menu-close");
  }

  // NAV PROPS
  const navData = [
    {
      name: "Utility Apps",
      links: <div className="nav-menu-style">
        <a onClick={(e) => {
            featureAlert(e);
          }} href="" target="_blank" className="link-desat">Calculo</a>
      </div>,
    },
    {
      name: "Game Apps",
      links: <div className="nav-menu-style">
        <a href="https://bthol.github.io/Space-Battle/" target="_blank" className="link-desat">Space Battle</a>
        <a href="https://bthol.github.io/Magic-8-Ball/" target="_blank" className="link-desat">Magic 8 Ball</a>
        <a href="https://bthol.github.io/Retro-Toe/" target="_blank" className="link-desat">Retro Toe</a>
      </div>,
    },
  ];

  // CONTENT PROPS //

  const contentProps = {
    skills: [
      {
        id: "section1-1",
        title: "Full Stack Web and App Development",
        list: <ul className="remove-bullet-list border-left">
          <li className="text-large" tabIndex={0}>JavaScript</li>
          <ul>
              <li tabIndex={0}>Libraries: Node.js</li>
              <li tabIndex={0}>Frameworks: Express.js, React</li>
              <li tabIndex={0}>Debugging: ESLint</li>
          </ul>
          <p></p>
          <li className="text-large" tabIndex={0}>Python</li>
          <ul>
              <li tabIndex={0}>Libraries: Pip</li>
              <li tabIndex={0}>Frameworks: Django</li>
              <li tabIndex={0}>Debugging: Pylint, Pyflakes</li>
          </ul>
          <p></p>
          <li className="text-large" tabIndex={0}>CSS3</li>
          <ul>
              <li tabIndex={0}>Modules: Flexbox, CSS Grid</li>
              <li tabIndex={0}>Frameworks: Bootstrap</li>
          </ul>
          <p></p>
          <li className="text-large" tabIndex={0}>HTML5</li>
              <ul>
                  <li tabIndex={0}>markdown content</li>
                  <li tabIndex={0}>modals and forms</li>
                  <li tabIndex={0}>Audio and player controls</li>
                  <li tabIndex={0}>raster images & vector graphics</li>
              </ul>
          <p></p>
        </ul>,
      },
      {
        id: "section1-2",
        title: "Graphic Design",
        list: <ul className="remove-bullet-list border-left">
          <li className="text-large" tabIndex={0}>User Experience (UX) and User Interface (UI) Design</li>
          <ul>
              <li tabIndex={0}>Responsive Design: useful for compatability with various device viewport dimensions and necessary for the growing number of devices on the technology market.</li>
              <li tabIndex={0}>Interactive Design: provides user feedback for a more intuitive and compelling user experience to prevent change blindness, so user features don't go unnoticed.</li>
              <li tabIndex={0}>Mobile First Design: a design practice where the interface layout is first created on mobile viewports and then adapted to desktop and larger, since users most often use mobile devices to browse the internet.</li>
              <li tabIndex={0}>WAI ARIA Acessibility standard: provides interoperability with assistive technologies to enable user accessibility.</li>
          </ul>
          <p></p>
          <li className="text-large" tabIndex={0}>Digital Graphic Technologies</li>
          <ul>
              <li tabIndex={0}>Affinity Photo</li>
              <li tabIndex={0}>Affinity Designer</li>
              <li tabIndex={0}>Paint.net</li>
              <li tabIndex={0}>MS Paint</li>
          </ul>
          <p></p>
        </ul>,
      },
      {
        id: "section1-3",
        title: "Music Production",
        list: <ul className="remove-bullet-list border-left">
          <li className="text-large" tabIndex={0}>Audio Engineering</li>
          <ul>
              <li tabIndex={0}>Self taught</li>
              <li tabIndex={0}>Engineered 25+ hours of audio</li>
              <li tabIndex={0}>Deep understanding of signal processing</li>
          </ul>
          <p></p>
          <li className="text-large" tabIndex={0}>Audio Processors</li>
          <ul>
              <li tabIndex={0}>Equalzers (parameteric, stereographic, linear phase and adaptive)</li>
              <li tabIndex={0}>Compressors (tube, analog emulation, graphical, Automatic Gain Consideration(AGC))</li>
              <li tabIndex={0}>Limiters (0dB Peak, brickwall, soft clip)</li>
              <li tabIndex={0}>Stereo Processors (limit, spread, merge, position, and modulate)</li>
              <li tabIndex={0}>Reverberation (Plate, Room, Hall, Shimmer, Low gravity, reflectionless Pitch tracking)</li>
              <li tabIndex={0}>Phasers (monophazer, biphaser, tempo syncable)</li>
              <li tabIndex={0}>Transient Processors (ASDR, Graphical Envelope Mapping, Evelope Following)</li>
              <li tabIndex={0}>Chorus/flanger Effect</li>
              <li tabIndex={0}>Saturation/Distortion</li>
          </ul>
          <p></p>
          <li className="text-large" tabIndex={0}>Audio Synthesis</li>
          <ul>
              <li tabIndex={0}>Additive (noise and/or Digitally Controlled Oscillator(DCO) generate signals combined to form one sound through the unison psychoaccoustic effect)</li>
              <li tabIndex={0}>Subtractive (hipass, lopass, bandpass, and shelf filters modulated with ASDR, ASD, AD, and graphical envelopes)</li>
              <li tabIndex={0}>Frequency Modulation (FM), Amplitude Modulation(AM), Ring Modulation(RM), Pulse Width Modulation(PWM) (properties of a modulator signal acts on properties of a carrier signal)</li>
              <li tabIndex={0}>Granular (audio sample spliced into parts looped at high frequency to generate tones)</li>
              <li tabIndex={0}>Pitch Mapping (tones are generated relative to a map visually characterizing changes in frequency and amplitude accross time)</li>
              <li tabIndex={0}>Spectral (audible frequency spectrum is divided into separately manipulated sections)</li>
          </ul>
          <p></p>
        </ul>,
      }
    ],
    projects: [
      {
        title: "Space Battle",
        text: <div>
          <p><b>Technologies</b>: JavaScript, HTML, CSS, JQuery, Express.js, EJS templates, MongoDB Atlas, Mongoose Object Document Modelling, Heroku Cloud Service Provider</p>
          <p><b>Description</b>: Fight off the alien horde for a new high score in this arcade-style battle game!</p>
        </div>,
        list: <ul>
          <li><a href="https://bthol.github.io/Space-Battle/" className="link-desat" target="_blank">Live Link</a></li>
          <li><a href="https://github.com/bthol/Space-Battle" className="link-desat" target="_blank" rel="noreferrer">GitHub Page</a></li>
          <li>Connected a custom RESTful API linked to a cloud database that allows game scores to be stored between sessions, so that the top 10 scores of all time can be displayed on the scoreboard page.</li>
          <li>Organized state variables, data structures, and Document Object Model (DOM) selections into respective JS modules for best code manageability practices.</li>
          <li>Displayed pages by calling functions that mutate the DOM and tracked pages with a global variable that updates when a page's function is run.</li>
        </ul>,
      },
      {
        title: "Magic 8 Ball",
        text: <div>
          <p><b>Technologies</b>: JavaScript, HTML, CSS</p>
          <p><b>Description</b>: Discover your destiny with the mystical guidance of the Magic 8 Ball.</p>
        </div>,
        list: <ul>
          <li><a href="https://bthol.github.io/Magic-8-Ball/" className="link-desat" target="_blank">Live Link</a></li>
          <li><a href="https://github.com/bthol/Magic-8-Ball" className="link-desat" target="_blank" rel="noreferrer">GitHub Page</a></li>
          <li>Created a breathing glow effect for the magic eight ball using asynchronous JavaScript functions to animate style.</li>
          <li>Wrote a CSS keyframe animation that runs once for its full duration on image click before the image is updated with the answer.</li>
          <li>Implemented a polychromatic animated background gradient.</li>
        </ul>,
      },
      {
        title: "Retro Toe",
        carousel: <img src="" alt="project carousel"></img>,
        text: <div>
          <p><b>Technologies</b>: JavaScript, HTML, CSS</p>
          <p><b>Description</b>: Tic Tac Toe. Retro style.</p>
        </div>,
        list: <ul>
          <li><a href="https://bthol.github.io/Retro-Toe/" className="link-desat" target="_blank">Live Link</a></li>
          <li><a href="https://github.com/bthol/Tic-Tac-Toe" className="link-desat" target="_blank" rel="noreferrer">GitHub Page</a></li>
          <li>Coded algorithms for game logic from scratch using a mere 100 lines of code.</li>
          <li>Made a mobile-friendly UI layout by utilizing relative units, and the CSS Flex and Grid modules for maximal responsivity across device viewports.</li>
          <li>Deployed the application using GitHub Pages.</li>
        </ul>,
      },
      {
        title: "Calculo",
        text: <div>
          <p><b>Technologies</b>: Python, Django, JavaScript, HTML, CSS</p>
          <p><b>Description</b>: Calculo is a fully functional calculator application.</p>
        </div>,
        list: <ul>
          <li><a href="" className="link-desat" target="_blank">Live Link</a></li>
          <li><a href="https://github.com/bthol/Calculo" className="link-desat" target="_blank" rel="noreferrer">GitHub Page</a></li>
          <li>Statement about what makes this project a highlight</li>
        </ul>,
      },
    ],
    experience: [
      {
        jobTitle: "General Assistant",
        employer: "Albany Saunas",
        workPeriod: "Aug 2022 - Present",
        list: <div className="exp-list">
          <p>Accomplishments</p>
          <ul>
            <li tabIndex={0}>Troubleshot video surveillance system problems with software and hardware</li>
            <li tabIndex={0}>Setup and managed account information using the relevant applications with secured login credentials</li>
            <li tabIndex={0}>Granted remote access to the system on desired cellular devices</li>
            <li tabIndex={0}>Navigated system interface to display appropriate layout for the system</li>
            <li tabIndex={0}>Mathematically modelled sweeping process for generating time optimized algorithms for more effective and efficient sweeping practices</li>
          </ul>
          <p>Responsibilities</p>
          <ul tabIndex={0}>
            <li>Preparing massage rooms per the needs of the message therapist on schedule</li>
            <li>Setting up hot tubs and saunas before customer use and cleaning afterwards</li>
            <li>Sanitizing and wiping down bins for safe customer use</li>
            <li>Reading and recording the temperature when turning on/off the furnace for the saunas</li>
            <li>Measuring and recording the hot tub chemistry using machine values and chemistry kit</li>
            <li>Collecting, sorting, cleaning, drying, folding and putting away laundry as time permits</li>
          </ul>
        </div>
      },
      {
        jobTitle: "Music Composer/Audio Engineer",
        employer: "Augium Productions",
        workPeriod: "Jan 2012 - Present",
        list: <ul className="exp-list">
          <li tabIndex={0}>Composed 400+ songs at 25+ hours using a variety of digital audio workstations(DAWs) accross multiple genres</li>
          <li tabIndex={0}>Involved in all phases of music production (i.e. music concept, theory, and sound design, composition, performance and recording, mix engineering, and mastering)</li>
          <li tabIndex={0}>General mastering ensures that the audio playback is consistent on a variety of playback systems (e.g. headphone, car stereo, laptop, professional studio monitors, et cetera).</li>
          <li tabIndex={0}>Created audio synthesizer patches using various digital methods of audio synthesis (additive, subtractive, FM, AM, PWM, wavetable, parametric physical modelling, re-synthesis, spectral, granular)</li>
        </ul>,
      },
      {
        jobTitle: "Kitchen Steward",
        employer: "Canyon Ranch Woodside",
        workPeriod: "Jan 2020 - Oct 2020",
        list: <ul className="exp-list">
          <li tabIndex={0}>Organized and maintained kitchen equipment for convenient and sustainable usage.</li>
          <li tabIndex={0}>Managed a food inventory, where I consolidated food resources to optimize use of storage area, and processed incoming shipments by testing for quality and allocating the shipment contents into appropriate storage areas in compliance with company and legal standards.</li>
          <li tabIndex={0}>Received preliminary training in food preparation to further assist the kitchen staff after receiving food handlers certification.</li>
        </ul>,
      },
    ],
    education: [
      {
        name: "BitWise Industries",
        period: "May 2022 - June 2022",
        description: "BitWise industry has courses on computer programming and web development, offering a learning community to support its members in their journey toward learning how to code.",
      },
      {
        name: "General Assembly",
        period: "Dec 2021 - March 2022",
        description: "General Assembly is a full-stack software engineering coding bootcamp, which places students in an intensive, twelve-week course requiring 400+ hours of hands on experience with product development fundamentals, e.g. object-oriented programming, simple algorithms, front-end styling and layout technologies, responsive and interactive design, the MVC development model, the MERN stack, test-based development, web-application deployment, and team collaboration strategies.",
      },
      {
        name: "Diablo Valley College, Berkeley City College",
        period: "June 2015 - Dec 2021",
        description: "Studied biological sciences",
      },
    ],
  };

  return (
    <div id="root-react" className={`App color ${theme}`}>
      <div className={`modal modal-container-${modal} flex-center`}>
        <div className={`modal modal-content-${modal} shadow-behind`}>
          <h2>Inactive</h2>
          <hr />
          <p>Are you still there?</p>
          <div>
            <button onClick={() => {setModal("closed")}} className="buttons modal-button">Yes</button>
          </div>
        </div>
      </div>
      <header className="app-header">
        <div className="no-select">
          <AugiumIcon></AugiumIcon>
          <h3 id="website-title" title="Blake Thollaug's Portfolio Website" tabIndex={0}>Blake Thollaug's Portfolio Website</h3>
        </div>
        <nav className="app-nav flex-around">
          <NavButton
            name={navData[0].name}
            links={navData[0].links}
            navState={navState1}
            drop={drop1}
            toggleNavState={toggleNavState1}
            initNav={initNav}
            ></NavButton>
          <NavButton
            name={navData[1].name}
            links={navData[1].links}
            navState={navState2}
            drop={drop2}
            toggleNavState={toggleNavState2}
            initNav={initNav}
          ></NavButton>
        </nav>
      </header>
      <span className="aside-main">
          <aside className="app-aside shadow-behind">
            <ProfilePhoto></ProfilePhoto>
            <div className="flex-around">
                <button className={btnClass}><a href="mailto:bthollaug@gmail.com" target="_blank">Send Email</a></button>
                <button className={btnClass} onClick={toggleTheme}>{btnText}</button>
            </div>
            <p tabIndex={0}><b>About Me</b>: I am a Full Stack Web and App Developer searching for a position to utilize and further grow my creative and technological skillset.</p>
            <br />
          </aside>
          <main className="app-main">
            <section className={`main-section-style shadow-behind`}>
              <h3 className="title-line text-x-large" tabIndex={0}>Skills and Knowledge</h3>
              <div className={`section-lists ${show}`}>
                <Section1
                  skillsTitle={contentProps.skills[0].title}
                  skillsList={contentProps.skills[0].list}
                  id={contentProps.skills[0].id}
                  ></Section1>
                <br />
                <Section1
                  skillsTitle={contentProps.skills[1].title}
                  skillsList={contentProps.skills[1].list}
                  id={contentProps.skills[1].id}
                  ></Section1>
                <br />
                <Section1
                  skillsTitle={contentProps.skills[2].title}
                  skillsList={contentProps.skills[2].list}
                  id={contentProps.skills[2].id}
                  ></Section1>
              </div>
              <div onClick={toggleShown} className="flex-center"><p className="cursor-pointer">{showMSG}</p><p className={`nav-arrow ${shown}`}></p></div>
            </section>
            <section className="main-section-style">
              <h3 className="title-line text-x-large" tabIndex={0}>Project Highlights</h3>
              {mobile
                ? <div>
                  <Section2
                    projectTitle={contentProps.projects[0].title}
                    projectText={contentProps.projects[0].text}
                    projectList={contentProps.projects[0].list}
                  ></Section2>
                  <Section2
                    projectTitle={contentProps.projects[1].title}
                    projectText={contentProps.projects[1].text}
                    projectList={contentProps.projects[1].list}
                  ></Section2>
                  <Section2
                    projectTitle={contentProps.projects[2].title}
                    projectText={contentProps.projects[2].text}
                    projectList={contentProps.projects[2].list}
                  ></Section2>
                </div>
                : <div className="carousel-container">
                  <div className={`projects-carousel carPos${carPos}`}>
                    <Section2
                      projectTitle={contentProps.projects[0].title}
                      projectText={contentProps.projects[0].text}
                      projectList={contentProps.projects[0].list}
                    ></Section2>
                    <br />
                    <Section2
                      projectTitle={contentProps.projects[1].title}
                      projectText={contentProps.projects[1].text}
                      projectList={contentProps.projects[1].list}
                    ></Section2>
                    <br />
                    <Section2
                      projectTitle={contentProps.projects[2].title}
                      projectText={contentProps.projects[2].text}
                      projectList={contentProps.projects[2].list}
                    ></Section2>
                    <br />
                  </div>
                  <div className="carButs flex-center">
                    <button onClick={() => {
                      resetCarBtn();
                      setCarPos(0);
                      setCarBtn0("carPos0");
                    }} className={`cursor-pointer ${carBtn0}`}></button>
                    <button onClick={() => {
                      resetCarBtn();
                      setCarPos(1);
                      setCarBtn1("carPos1");
                    }} className={`cursor-pointer ${carBtn1}`}></button>
                    <button onClick={() => {
                      resetCarBtn();
                      setCarPos(2);
                      setCarBtn2("carPos2");
                    }} className={`cursor-pointer ${carBtn2}`}></button>
                  </div>
                </div>
              }
            </section>
            <section className="main-section-style">
              <h3 className="title-line text-x-large" tabIndex={0}>Work Experience</h3>
              <Section3
                jobTitle={contentProps.experience[0].jobTitle}
                employer={contentProps.experience[0].employer}
                workPeriod={contentProps.experience[0].workPeriod}
                list={contentProps.experience[0].list}
              ></Section3>
              <br />
              <Section3
                jobTitle={contentProps.experience[1].jobTitle}
                employer={contentProps.experience[1].employer}
                workPeriod={contentProps.experience[1].workPeriod}
                list={contentProps.experience[1].list}
              ></Section3>
              <br />
              <Section3
                jobTitle={contentProps.experience[2].jobTitle}
                employer={contentProps.experience[2].employer}
                workPeriod={contentProps.experience[2].workPeriod}
                list={contentProps.experience[2].list}
              ></Section3>
              <br />
            </section>
            <section className="main-section-style" id="main-section-style-last">
              <h3 className="title-line text-x-large" tabIndex={0}>Education</h3>
              <Section4
                school={contentProps.education[0].name}
                schoolPeriod={contentProps.education[0].period}
                schoolDescription={contentProps.education[0].description}
              ></Section4>
              <br />
              <Section4
                school={contentProps.education[1].name}
                schoolPeriod={contentProps.education[1].period}
                schoolDescription={contentProps.education[1].description}
              ></Section4>
              <br />
              <Section4
                school={contentProps.education[2].name}
                schoolPeriod={contentProps.education[2].period}
                schoolDescription={contentProps.education[2].description}
              ></Section4>
              <br />
            </section>
          </main>
      </span>
      <div className="flex-center">
        <a href="#" className="flex-center top-link-style shadow-behind">back to top</a>
      </div>
      <footer className="app-footer">
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
            <div>
              <div>
                <p tabIndex={0} className="flex-center">Made with JavaScript, Node, React, HTML and CSS.</p>
              </div>
            </div>
            <small className="flex-around" tabIndex={0}>&copy; 2022, Blake Thollaug. All rights reserved.</small>
            <br />
      </footer>
    </div>
  );
};

export default App;