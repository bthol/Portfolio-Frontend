// module containing static data
// dynamic data is in jsx page (project carousel data)
const HomePageContent = {
  about: <div>I am a creative technologist and complex problem solver that adapts to dynamic work requirements with my team to get the job done right the first time, all while upholding company standards in an efficient and effective manner. I seek to utilize and further grow my creative and technological skill set in order to make a valuable contribution to my team, the business, and the world at large.</div>,
  skills: [
    {
      sectionTitle: "Skills and Knowledge"
    },
    {
      id: "skills-1",
      title: "High-Tech Manufacturing",
      list: <ul className="skills-list remove-bullet-list border-left">
        <li className="text-large">Materials Processed</li>
        <ul>
          <p>Metals</p>

          <ul>
            <li>6061-T6 and 7075-T651 Aluminum alloy grades</li>
            <li>303, 304 and 316 Austenitic Stainless Steel alloy grades</li>
            <li>1075 High Speed Steel alloy grade</li>
          </ul>

          <p>Plastics</p>

          <ul>
            <li>Teflon ( Polytetrafluoroethylene, Synthetic Thermoplastic Flouropolymer with the lowest coefficient of friction for known solids)</li>
            <li>Polyimide ( heat-resistant high-performance plastic polymer )</li>
            <li>Ultem ( Polyetherimide, cost efficient Thermoplastic )</li>
            <li>Rexolite 1422 ( thermoset cross-linked polystyrene copolymer with high dielectric strength )</li>
          </ul>

        </ul>

        <li className="text-large">Metrology Instruments</li>

        <ul>
          <p>Calipers</p>
          <ul>
            <li>Vernier</li>
            <li>Dial</li>
            <li>Digital</li>
          </ul>

          <p>Micrometers</p>
          <ul>
            <li>Vernier</li>
            <li>Digital</li>
            <li>Depth Micrometer</li>
            <li>3-point Internal Micrometer</li>
          </ul>

          <p>Gauges</p>
          <ul>
            <li>Height Gauge</li>
            <li>Plug Gauge</li>
            <li>Telescopic Bore Gauge</li>
            <li>Chamfer Gauge</li>
          </ul>

          <p>Shadow Imaging</p>
          <ul>
            <li>Optical Comparitor</li>
          </ul>
          
          <p>Chemical Concentration</p>
          <ul>
            <li>Analog Hand-held Refractometer (Testing Coolant Concentration)</li>
          </ul>
        </ul>
        
        <li className="text-large">Subtractive Manufacturing</li>
        
        <ul>
          <p>Overview</p>
          <ul>
            <li>Print Reading (ISO, ANSI and ASME standards)</li>
            <li>Machine Setup and Operation</li>
            <li>Work measurement and tolerance holding</li>
            <li>Safe and effective work handling</li>
            <li>Clean and organized production environment</li>
          </ul>
        </ul>

        <ul>
          <p>Computer Numerical Control (CNC) Machine Tools</p>
          <ul>
            <li>Haas VF Series Mills (3SSYT, 2SSYT and 5SS)</li>
            <li>Fanuc Robodrills: Alpha-D21LiB5 ADV Plus, Alpha-T21IFA</li>
            <li>Okuma OSP-P300LA Lathe</li>
            <li>Haas ST 20 Lathe</li>
          </ul>

          <p>CNC Techniques</p>
          <ul>
            <li>Manual Data Input (MDI) commands</li>
            <li>Zero-ing to test work coordinate system matches work datum</li>
            <li>Locator Pin indication for work positioning</li>
            <li>Edgefinder indication for work offset</li>
            <li>Indicator Probe for work offset</li>
            <li>Manual indication with dial indicator for work offset</li>
            <li>Clocking with dowel pins for precise work-holding rotational orientation</li>
          </ul>

          <p>Manual Machine Tools</p>
          <ul>
            <li>Manual Mill (Bridgeport machine)</li>
            <li>Manual Lathe (LeBlond RKL-1340G)</li>
          </ul>

          <p>Manual Machine Techniques</p>

          <ul>
            <li>Pilot a bore by pecking a stub drill</li>
            <li>Square a vise to a machine axis</li>
            <li>Zero on datum using edge finder</li>
            <li>chuck cleaning and installation</li>
          </ul>
          
          <p></p>

        </ul>

      </ul>,
    },
    {
      id: "skills-2",
      title: "Software Development",
      list: <ul className="skills-list remove-bullet-list border-left">

        <li className="text-large">Software Details</li>
        <ul>
          <p>Operating Systems</p>
          <ul>
            <li>Windows</li>
            <li>MacOS</li>
          </ul>
        </ul>

        <ul>
          <p>Platforms</p>
          <ul>
            <li>Website (Online)</li>
            <li>Desktop (Offline)</li>
            <li>Browser Extension</li>
          </ul>
        </ul>
        <p></p>

        <li className="text-large">Programming Languages</li>
        <p></p>
        <ul>
          <p>Python</p>
          <ul>
            <li>Library Management: Pip</li>
            <li>Frameworks: Django</li>
            <li>API: Flask, FastAPI</li>
            <li>Environments: venv, pipenv, virtualenv</li>
            <li>Packages: Numpy, Cmath, Decimal, Matplotlib, Pydantic</li>
          </ul>
          <p></p>

          <p>JavaScript</p>
          <ul>
            <li>Library Management: Node.js</li>
            <li>Supersets: Typescript</li>
            <li>Frameworks: React, Electron</li>
            <li>Server: Express.js</li>
            <li>Packages: Mongoose ODM, EJS Templating, Mathjax, Decimal.js</li>
            <li>Web API Interfaces: Web Storage API, Web Worker API, Web Audio API, Abort API</li>
          </ul>
          <p></p>

          <p>C/C++</p>
          <ul>
            <li>Compiler: Clang, GCC</li>
            <li>Debugging: clangd, Microsoft C/C++ VS Code Extension</li>
            <li>Resources: MSYS environment, pacman package handling</li>
          </ul>
          <p></p>

          <p>HTML</p>
          <ul>
            <li>markdown content</li>
            <li>modals and forms</li>
            <li>Audio and player controls</li>
            <li>raster images & vector graphics</li>
            <li>Language Specification</li>
            <li>Viewport Unit Scale</li>
            <li>Content Security Policy</li>
          </ul>
          <p></p>

          <p>CSS</p>
          <ul>
            <li>Modules: Flexbox, CSS Grid</li>
            <li>Preprocessor: Sass</li>
            <li>Frameworks: Bootstrap</li>
          </ul>
          <p></p>

        </ul>
      </ul>,
    },
    {
      id: "skills-3",
      title: "Graphic Design",
      list: <ul className="skills-list remove-bullet-list border-left">
        <li className="text-large">Subjects</li>
        <ul>
          <li>Website</li>
          <li>Business Card</li>
          <li>Album Cover</li>
        </ul>
        <p></p>
        <li className="text-large">Digital Graphics Software</li>
        <ul>
          <li>Affinity Photo</li>
          <li>Affinity Designer</li>
          <li>Canva</li>
          <li>Paint.net</li>
        </ul>
        <p></p>
        <li className="text-large">User Experience (UX) and User Interface (UI) Design Principles</li>
        <ul>
          <li>Responsive Design: useful for compatibility with various device viewport dimensions and necessary for the growing number of devices on the technology market.</li>
          <li>Interactive Design: provides user feedback for a more intuitive and compelling user experience to prevent change blindness, so new user features don't go unnoticed.</li>
          <li>Mobile First Design: a design practice where the interface layout is first created on mobile viewports and then adapted to desktop and larger, since users most often use mobile devices to browse the internet.</li>
        </ul>
        <p></p>
      </ul>,
    },
    {
      id: "skills-4",
      title: "Music Production",
      list: <ul className="skills-list remove-bullet-list border-left">
        <li className="text-large">Audio Engineering</li>
        <ul>
          <li>autodidact: committed to self-directed knowledge acquisition spanning years</li>
          <li>Produced and engineered 25+ hours of audio</li>
          <li>Deep understanding of digital signal processing (DSP)</li>
        </ul>
        <p></p>
        <li className="text-large">Audio Processors</li>
        <ul>
          <li>Equalizers (parametric, stereographic, linear phase and adaptive)</li>
          <li>Compressors (tube, analog emulation, graphical, Automatic Gain Consideration(AGC))</li>
          <li>Limiters (0dB Peak, brickwall, soft clip)</li>
          <li>Stereo Processors (limit, spread, merge, position, generate, and modulate)</li>
          <li>Reverberation (Plate, Room, Hall, Shimmer, Low gravity, reflectionless Pitch tracking)</li>
          <li>Phasers (monophazer, biphaser, tempo syncable)</li>
          <li>Transient Processors (Attack Release (AR), Attack Sustain Decay Release (ASDR), Graphical Envelope Mapping, Envelope Followers)</li>
          <li>Chorus/flanger Effects (utilizing the unison psychoaccoustic effect)</li>
          <li>Saturation/Distortion</li>
        </ul>
        <p></p>
        <li className="text-large">Audio Synthesis Methods</li>
        <ul>
          <li>Additive (noise and/or Digitally Controlled Oscillator(DCO) generate signals combined to form one sound through the unison psychoacoustic effect)</li>
          <li>Subtractive (hipass, lopass, bandpass, and shelf filters modulated with ASDR, ASD, AD, and graphical envelopes)</li>
          <li>Frequency Modulation (FM), Amplitude Modulation (AM), Ring Modulation (RM), Pulse Width Modulation (PWM) (properties of a modulator signal acts on properties of a carrier signal)</li>
          <li>Granular (audio samples are spliced into parts and looped at high frequency to generate "dirty" tones)</li>
          <li>Pitch Mapping (tones are generated relative to a map visually characterizing changes in frequency and amplitude across time)</li>
          <li>Spectral (audible frequency spectrum is divided into separately manipulated sections)</li>
        </ul>
        <p></p>
      </ul>,
    }
  ],
  experience: [
    {
      sectionTitle: "Career Background"
    },
    {
      jobTitle: "Apprentice Machinist",
      employer: "FM Industries Inc. of NGK group",
      workPeriod: "Sept 2026 - Present",
      list: <div className="exp-list">
        <div>Description</div>
        <ul className="remove-bullet-list">
          <li>The Apprentice Machinist title is given to particpipants of the FMI Apprenticeship program. Participants are practically trained to operate on a whole variety of machines throughout the production floor in addition to relevant college coursework to bolster skill with knowledge.</li>
        </ul>
        <br />
        <div>Highlights</div>
        <ul>
          <li>Recognized for strong work ethic and value of part quality</li>
          <li>Provided the opportunity to gain comprehensive machine tool knowledge from both a theoretical and practical perspective</li>
        </ul>
      </div>
    },
    {
      jobTitle: "CNC Mill Machinist 1",
      employer: "FM Industries Inc. of NGK group",
      workPeriod: "Nov 2025 - Sept 2026",
      list: <div className="exp-list">
        <div>Description</div>
        <ul className="remove-bullet-list">
          <li>My commitment to FMI under the machine operator role involves safe and efficient machine operation, part quality assurance by taking strategic precision measurements to confirm dimensions are within tolerances indicated by print or else by making corrective machine adjustments, as well as accurate and timely entry of work data into appropriate workplace documention.</li>
        </ul>
        <br />
        <div>Highlights</div>
        <ul>
          <li>Gained hands-on experience operating multiple different kinds of CNC machines for both mills and lathes</li>
          <li>Upskilled handling and usage of manual equipment for non-destructive measurement and for common work-holding and tool-holding solutions</li>
          <li>Familiarized Haas, Fanuc, and Okuma controls for running, stopping, and resetting program as well as common Manual Data Input (MDI) commands such as tool changing and zero-ing to test work coordinate systems</li>
          <li>Sustained best chip management and preventative maintenance practices for all operated machines</li>
        </ul>
      </div>
    },
    {
      jobTitle: "Music Composer/Audio Engineer",
      employer: "Augium Productions (Self Employment)",
      workPeriod: "Jan 2012 - Present",
      list: <div className="exp-list">
        <div>Description</div>
        <ul className="remove-bullet-list">
          <li >I compose music in my own studio under the artist name Augium. Augium is a constructed word intended to mean "element of increment."<br /><br /><a href="https://augium.bandcamp.com/" className="link-color link-desat" target="_blank" rel="noreferrer">See my music page</a></li>
        </ul>
        <br />
        <div>Highlights</div>
        <ul>
          <li >Singlehandedly sound designed, composed, and engineered 400+ songs measuring 25+ hours in duration across multiple musical genres using a variety of digital audio workstations and related technologies</li>
          <li >Involved in all phases of music production (i.e. music concept and theory, sound design, composition, performance and recording, mix engineering and mastering)</li>
          <li >General mastering ensures that the audio playback is consistent on a variety of playback systems (e.g. headphone, car stereo, laptop, professional studio monitors, et cetera).</li>
          <li >Created countless audio synthesizer patches using various digital methods of audio synthesis (additive, subtractive, FM, AM, PWM, wavetable, parametric physical modelling, re-synthesis, spectral, pitch mapping, granular)</li>
        </ul>
      </div>,
    },
  ],
  education: [
    {
      sectionTitle: "Education"
    },
    {
      name: "CNC Operator Program",
      period: "July 2025 - Sept 2025",
      description: "The Computer Numerically Controlled (CNC) operator program, offered through the facilities at De Anza College, train students to be workplace-ready for CNC operator positions and more. Over the course of eleven weeks, students are trained in the theory and practice of the fundamentals of manual machining and given hands on experience with CNC machines through detailed lecture on theory and project-based learning.",
    },
    {
      name: "General Assembly",
      period: "Dec 2021 - March 2022",
      description: "General Assembly is a full-stack software engineering coding bootcamp, which places students in an intensive, twelve-week course supplying 400+ hours of experience with software development fundamentals, e.g. object-oriented programming, simple algorithms, front-end styling and layout technologies, responsive and interactive design, the MVC development model, the MERN stack, test-based development, web-application deployment, and team collaboration strategies.",
    },
    {
      name: "Diablo Valley College, Berkeley City College",
      period: "June 2015 - Dec 2021",
      description: "I studied general education with a focus on biological sciences intermittently between and occasionally in tandem with real-world work experience in the culinary, hospitality and retail industries. Initially, my intention was to obtain the Neurobiology, Physiology, and Behavior (NPB) major from the program of the same name at UC Davis following a transfer from a public university to mitigate educational costs and altogether prevent infamous student loan debt; as I would come to discover, however, there was little in the way of suitable career opportunities in my field of interest, so I decided against the degree to pursue a more technological career.",
    },
  ],
};

export { HomePageContent };