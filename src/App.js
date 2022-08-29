import './App.css';
import React, { useState } from 'react';
import { NavButton } from './NavButton/NavButton';
import { Section1 } from './Content/Section1';
import { Section2 } from './Content/Section2';
import { Section3 } from './Content/Section3';
import { Section4 } from './Content/Section4';
import { AugiumIcon } from './Images/AugiumIcon';
import { ProfilePhoto } from './Images/ProfilePhoto';
// import Idle from './IdleTimer/IdleTimer';

function App() {
  
  // ALERTS
  const featureAlert = (e) => {
    e.preventDefault();
    alert("Feature still in development");
  };

  // THEME LOGIC
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

  // NAV LOGIC

  // 1
  const [navState1, setNavState1] = useState(false);
  const toggleNavState1 = () => {
    setNavState1(!navState1);
  }
  const rootName1 = "Utility Apps";
  const rootLinks1 = <div className="nav-menu-style">
    <a href="https://github.com/bthol/Calculo/" target="_blank" rel="noreferrer" className="link-desat">Calculo</a>
  </div>;

  // 2
  const [navState2, setNavState2] = useState(false);
  const toggleNavState2 = () => {
    setNavState2(!navState2);
  }
  const rootName2 = "Game Apps";
  const rootLinks2 = <div className="nav-menu-style">
    <a href="https://bthol.github.io/Space-Battle/" target="_blank" rel="noreferrer" className="link-desat">Space Battle</a> 
    <a href="https://bthol.github.io/Magic-8-Ball/" target="_blank" rel="noreferrer" className="link-desat">Magic 8 Ball</a>
    <a href="https://bthol.github.io/Retro-Toe/" target="_blank" rel="noreferrer" className="link-desat">Retro Toe</a>
  </div>;

  const closeNav = () => {
    setNavState1(false);
    setNavState2(false);
  }

  // SKILLS CONTENT PROPS

  const skillsTitle1 = "Full Stack Web and App Development";
  const skillsList1 = <ul className="remove-bullet-list border-left">
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
        <li tabIndex={0}>Debugging: Pylint</li>
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
            <li tabIndex={0}>raster images & vector graphics</li>
        </ul>
    <p></p>
  </ul>;

  const skillsTitle2 = "Graphic Design";
  const skillsList2 = <ul className="remove-bullet-list border-left">
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
  </ul>;

  const skillsTitle3 = "Music Production";
  const skillsList3 = <ul className="remove-bullet-list border-left">
    <li className="text-large" tabIndex={0}>Audio Engineering</li>
    <ul>
        <li tabIndex={0}>Self taught</li>
        <li tabIndex={0}>Engineered 25+ hours of audio</li>
        <li tabIndex={0}>Deep understanding of signal processing</li>
    </ul>
    <p></p>
    <li className="text-large" tabIndex={0}>Audio Processors</li>
    <ul>
        <li tabIndex={0}>Equilzers (parameteric, stereographic, linear phase and adaptive)</li>
        <li tabIndex={0}>Compressors (tube, analog emulation, graphical, Automatic Gain Consideration(AGC))</li>
        <li tabIndex={0}>Limiters (0dB Peak, brickwall, soft clip)</li>
        <li tabIndex={0}>Stereo Processors (limit, spread, merge, position, and modulate)</li>
        <li tabIndex={0}>Reverberation (Plate, Room, Hall, Shimmer, Low gravity, reflectionless Pitch tracking)</li>
        <li tabIndex={0}>Phasers (monophazer, biphaser, tempo syncable)</li>
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
  </ul>;

  // PROJECTS CONTENT PROPS

  // 1
  const projectTitle1 = "Space Battle";
  const projectCarousel1 = <img src="" alt="project screenshot"></img>;
  const projectText1 = <div>
    <p tabIndex={0}><b>Technologies</b>: JavaScript, JQuery, Express.js, MongoDB Atlas, Mongoose ODM, HTML, CSS</p>
    <p tabIndex={0}><b>Description</b>: Fight off the alien horde for a new high score in this arcade-style battle game!</p>
  </div>;
  const projectList1 = <ul>
    <li><a href="https://bthol.github.io/Space-Battle/" className="link-desat" target="_blank" rel="noreferrer">Live Link</a></li>
    <li><a href="https://github.com/bthol/Space-Battle" className="link-desat" target="_blank" rel="noreferrer">GitHub Page</a></li>
    <li tabIndex={0}>Connected a custom RESTful API linked to a cloud database that allows game scores to be stored between sessions, so that the top 10 scores of all time can be displayed on the scoreboard page.</li>
    <li tabIndex={0}>Organized state variables, data structures, and Document Object Model (DOM) selections into respective JS modules for best code manageability practices.</li>
    <li tabIndex={0}>Displayed pages by calling functions that mutate the DOM and tracked pages with a global variable that updates when a page's function is run.</li>
  </ul>;

  // 2
  const projectTitle2 = "Magic 8 Ball";
  const projectCarousel2 = <img src="" alt="project screenshot"></img>;
  const projectText2 = <div>
    <p tabIndex={0}><b>Technologies</b>: JavaScript, HTML, CSS</p>
    <p tabIndex={0}><b>Description</b>: Discover your destiny with the mystical guidance of the Magic 8 Ball.</p>
  </div>;
  const projectList2 = <ul>
    <li><a href="https://bthol.github.io/Magic-8-Ball/" className="link-desat" target="_blank" rel="noreferrer">Live Link</a></li>
    <li><a href="https://github.com/bthol/Magic-8-Ball" className="link-desat" target="_blank" rel="noreferrer">GitHub Page</a></li>
    <li tabIndex={0}>Created a breathing glow effect for the magic eight ball using asynchronous JavaScript functions to animate style.</li>
    <li tabIndex={0}>Wrote a CSS keyframe animation that runs once for its full duration on image click before the image is updated with the answer.</li>
    <li tabIndex={0}>Implemented a polychromatic animated background gradient.</li>
  </ul>;

  // 3
  const projectTitle3 = "Retro Toe";
  const projectCarousel3 = <img src="" alt="project screenshot"></img>;
  const projectText3 = <div>
    <p tabIndex={0}><b>Technologies</b>: JavaScript, HTML, CSS</p>
    <p tabIndex={0}><b>Description</b>: Tic Tac Toe. Retro style.</p>
  </div>;
  const projectList3 = <ul>
    <li><a href="https://bthol.github.io/Retro-Toe/" className="link-desat" target="_blank" rel="noreferrer">Live Link</a></li>
    <li><a href="https://github.com/bthol/Tic-Tac-Toe" className="link-desat" target="_blank" rel="noreferrer">GitHub Page</a></li>
    <li tabIndex={0}>Coded algorithms for game logic from scratch using a mere 100 lines of code.</li>
    <li tabIndex={0}>Made a mobile-friendly UI layout by utilizing relative units, and the CSS Flex and Grid modules for maximal responsivity across device viewports.</li>
    <li tabIndex={0}>Deployed the application using GitHub Pages.</li>
  </ul>;

  // EXPERIENCE CONTENT PROPS

  // 1
  const jobTitle1 = "Music Composer/Audio Engineer";
  const employer1 = "Augium Productions";
  const workPeriod1 = "Jan 2012 - Present";
  const xpList1 = <ul className="exp-list">
    <li tabIndex={0}>Composed 400+ songs at 25+ hours using a variety of digital audio workstations(DAWs) accross multiple genres</li>
    <li tabIndex={0}>Involved in all phases of music production (i.e. music concept and sound design, composition, performance and recording, mix engineering, and mastering)</li>
    <li tabIndex={0}>General mastering ensures that the audio playback is consistent on a variety of playback systems (e.g. headphone, car stereo, laptop, professional studio monitors, et cetera).</li>
    <li tabIndex={0}>Created audio synthesizer patches using various digital methods of audio synthesis (additive, subtractive, FM, AM, PWM, wavetable, parametric physical modelling, re-synthesis, spectral, granular)</li>
  </ul>;
  
  // 2
  const jobTitle2 = "Kitchen Steward";
  const employer2 = "Canyon Ranch Woodside";
  const workPeriod2 = "Jan 2020 - Oct 2020";
  const xpList2 = <ul className="exp-list">
    <li tabIndex={0}>Organized and maintained kitchen equipment for convenient and sustainable usage.</li>
    <li tabIndex={0}>Managed a food inventory, where I consolidated food resources to optimize use of storage area, and processed incoming shipments by testing for quality and allocating the shipment contents into appropriate storage areas in compliance with company and legal standards.</li>
    <li tabIndex={0}>Received preliminary training in food preparation to further assist the kitchen staff after receiving food handlers certification.</li>
  </ul>;

  // EDUCATION CONTENT PROPS

  // 1
  const school1 = "BitWise Industries";
  const schoolPeriod1 = "May 2022 - June 2022";
  const schoolDescription1 = "BitWise industry has courses on computer programming and web development, offering a learning community to support its members in their journey to learning to code.";

  // 2
  const school2 = "General Assembly";
  const schoolPeriod2 = "December 2021 - March 2022";
  const schoolDescription2 = "General Assembly is a full-stack software engineering coding bootcamp, which places students in an intensive, twelve-week course requiring 400+ hours of hands on experience with product development fundamentals, e.g. object-oriented programming, simple algorithms, front-end styling and layout technologies, responsive and interactive design, the MVC development model, the MERN stack, test-based development, web-application deployment, and team collaboration strategies.";

  // 3
  const school3 = "Berkeley City College";
  const schoolPeriod3 = "March 2021 - December 2021";
  const schoolDescription3 = "Studied biological sciences";

  // 4
  const school4 = "Diablo Valley College";
  const schoolPeriod4 = "June 2015 - May 2016";
  const schoolDescription4 = "Studied biological sciences";

  return (
    <div id="root-react" className={`App color ${theme}`}>
      {/* <Idle></Idle> */}
      <header className="app-header">
        <div className="no-select">
          <AugiumIcon></AugiumIcon>
          <h3 id="website-title" title="Blake Thollaug's Portfolio Website" tabIndex={0}>Blake Thollaug's Portfolio Website</h3>
        </div>
        <nav className="app-nav flex-around">
          <NavButton
            rootName={rootName1}
            rootLinks={rootLinks1}
            navState={navState1}
            toggleNavState={toggleNavState1}
            closeNav={closeNav}
          ></NavButton>
          <NavButton
            rootName={rootName2}
            rootLinks={rootLinks2}
            navState={navState2}
            toggleNavState={toggleNavState2}
            closeNav={closeNav}
          ></NavButton>
        </nav>
      </header>
      <span className="aside-main">
          <aside className="app-aside shadow-behind">
            <ProfilePhoto></ProfilePhoto>
            <div className="flex-around">
                <button className={btnClass} onClick={featureAlert}>Contact Me</button>
                <button className={btnClass} onClick={toggleTheme}>{btnText}</button>
            </div>
            <p tabIndex={0}><b>About Me</b>: I am a Full Stack Web and App Developer searching for a position to utilize and further grow my creative and technological skillset.</p>
            <br />
          </aside>
          <main className="app-main">
            <section className="section-lists main-section-style shadow-behind">
              <h3 className="title-line text-x-large" tabIndex={0}>Skills and Knowledge</h3>
                <Section1
                  skillsTitle={skillsTitle1}
                  skillsList={skillsList1}
                ></Section1>
                <br />
                <Section1
                  skillsTitle={skillsTitle2}
                  skillsList={skillsList2}
                ></Section1>
                <br />
                <Section1
                  skillsTitle={skillsTitle3}
                  skillsList={skillsList3}
                ></Section1>
                <br />
            </section>
            <section className="main-section-style">
              <h3 className="title-line text-x-large" tabIndex={0}>Project Highlights</h3>
              <Section2
                projectTitle={projectTitle1}
                projectCarousel={projectCarousel1}
                projectText={projectText1}
                projectList={projectList1}
              ></Section2>
              <br />
              <Section2
                projectTitle={projectTitle2}
                projectCarousel={projectCarousel2}
                projectText={projectText2}
                projectList={projectList2}
              ></Section2>
              <br />
              <Section2
                projectTitle={projectTitle3}
                projectCarousel={projectCarousel3}
                projectText={projectText3}
                projectList={projectList3}
              ></Section2>
              <br />
            </section>
            <section className="main-section-style">
              <h3 className="title-line text-x-large" tabIndex={0}>Work Experience</h3>
              <Section3
                jobTitle={jobTitle1}
                employer={employer1}
                workPeriod={workPeriod1}
                xpList={xpList1}
              ></Section3>
              <br />
              <Section3
                jobTitle={jobTitle2}
                employer={employer2}
                workPeriod={workPeriod2}
                xpList={xpList2}
              ></Section3>
              <br />
            </section>
            <section className="main-section-style" id="main-section-style-last">
              <h3 className="title-line text-x-large" tabIndex={0}>Education</h3>
              <Section4
                school={school1}
                schoolPeriod={schoolPeriod1}
                schoolDescription={schoolDescription1}
              ></Section4>
              <br />
              <Section4
                school={school2}
                schoolPeriod={schoolPeriod2}
                schoolDescription={schoolDescription2}
              ></Section4>
              <br />
              <Section4
                school={school3}
                schoolPeriod={schoolPeriod3}
                schoolDescription={schoolDescription3}
              ></Section4>
              <br />
              <Section4
                school={school4}
                schoolPeriod={schoolPeriod4}
                schoolDescription={schoolDescription4}
              ></Section4>
              <br />
            </section>
          </main>
      </span>
      <div className="flex-center">
        <a href="#" className="flex-center top-link-style shadow-behind">back to top</a>
      </div>
      <footer className="app-footer">
            <AugiumIcon></AugiumIcon>
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
            <small className="flex-around" tabIndex={0}>&copy; 2022, Blake Thollaug. All rights reserved.</small>
            <br />
      </footer>
    </div>
  );
};

export default App;