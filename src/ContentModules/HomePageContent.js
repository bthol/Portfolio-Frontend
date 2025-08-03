// module containing static data
// dynamic data is in jsx page (project carousel data)
const HomePageContent = {
  about: <div>I am a web app developer that can collaborate with the team to utilize backend technologies, craft intuitive and responsive interface designs, and independently engineer full stack features. I am searching for a position to utilize and further grow my creative and technological skillset in order to make a valuable contribution to my team, the business, and the world at large.</div>,
  skills: [
    {
      sectionTitle: "Skills and Knowledge"
    },
    {
      id: "skills-1",
      title: "High-Tech Manufacturing",
      list: <ul className="skills-list remove-bullet-list border-left">
        <li className="text-large">Subtractive Machining</li>
        <ul>
          <li>Print Reading (ISO and ANSI standards)</li>
          <li>Work Measurement and Tolerance Holding</li>
          <li>Machine Setup and Operation</li>
          <li>Computer Numerical Controlled (CNC) Machining</li>
          <ul>
            <li>Tools: CNC Mill (horizontal and vertical), CNC Lathe (horizontal and vertical)</li>
            <li>Techniques: G-Code Programming, Automatic Tool Changer (ATC)</li>
          </ul>
          <li>Manual Machining</li>
          <ul>
            <li>Tools: Manual Mill (Bridgeport machine), Manual Lathe (LeBlond RKL-1340G)</li>
            <li>Techniques: Zero on datum using edge finder, , chuck cleaning and installation, efficient manual tool swapping</li>
          </ul>
        </ul>
        <li className="text-large"></li>
        <ul>
        </ul>
        <p></p>
        <li className="text-large">Precision Measurement Instruments</li>
        <ul>
          <li>Calipers (interior and exterior): Vernier, Dial, and Digital</li>
          <li>Micrometers: Vernier, Digital, Depth Micrometer</li>
          <li>Surface Gauges: Height Gauage</li>
          <li>Bore Gauges: Telescopic Bore Gauage, Plug Gauges, Small-hole Gauage</li>
        </ul>
        <p></p>
      </ul>,
    },
    {
      id: "skills-2",
      title: "Computer Programming",
      list: <ul className="skills-list remove-bullet-list border-left">
        <li className="text-large">Python</li>
        <ul>
          <li>Library Management: Pip</li>
          <li>Frameworks: Django</li>
          <li>API: Flask</li>
          <li>Environments: venv, pipenv, virtualenv</li>
          <li>Packages: Numpy, Matplotlib</li>
        </ul>
        <p></p>
        <li className="text-large">JavaScript</li>
        <ul>
          <li>Library Management: Node.js</li>
          <li>Frameworks: React</li>
          <li>API: Express.js</li>
          <li>Packages: Mongoose, Dotenv, Mathjax</li>
        </ul>
        <p></p>
        <li className="text-large">HTML</li>
        <ul>
          <li>markdown content</li>
          <li>modals and forms</li>
          <li>Audio and player controls</li>
          <li>raster images & vector graphics</li>
        </ul>
        <p></p>
        <li className="text-large">CSS</li>
        <ul>
          <li>Modules: Flexbox, CSS Grid</li>
          <li>Frameworks: Bootstrap</li>
          <li>Preprocesor: Sass</li>
        </ul>
        <p></p>
        <li className="text-large">C++</li>
        <ul>
          <li>Compiler: Clang, GCC</li>
          <li>Debugging: clangd, Microsoft C/C++ VS Code Extension</li>
          <li>Resources: MSYS environment, pacman package handling</li>
        </ul>
        <p></p>
        <li className="text-large">R</li>
        <ul>
          <li>Used for statistical programming</li>
          <li>Excellent for small-scale science applications</li>
        </ul>
        <p></p>
      </ul>,
    },
    {
      id: "skills-3",
      title: "Graphic Design",
      list: <ul className="skills-list remove-bullet-list border-left">
        <li className="text-large">Web Application User Experience (UX) and User Interface (UI) Design</li>
        <ul>
          <li>Responsive Design: useful for compatibility with various device viewport dimensions and necessary for the growing number of devices on the technology market.</li>
          <li>Interactive Design: provides user feedback for a more intuitive and compelling user experience to prevent change blindness, so new user features don't go unnoticed.</li>
          <li>Mobile First Design: a design practice where the interface layout is first created on mobile viewports and then adapted to desktop and larger, since users most often use mobile devices to browse the internet.</li>
          <li>WAI ARIA Acessibility standard: provides interoperability with assistive technologies to enable user accessibility.</li>
        </ul>
        <p></p>
        <li className="text-large">Digital Graphic Software</li>
        <ul>
          <li>Affinity Photo</li>
          <li>Affinity Designer</li>
          <li>Canva</li>
          <li>Paint.net</li>
          <li>MS Paint</li>
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
          <li>autodidact: committed to self-directed knowledge aquisition spanning years</li>
          <li>Produced and engineered 25+ hours of audio</li>
          <li>Deep understanding of digital signal processing (DSP)</li>
        </ul>
        <p></p>
        <li className="text-large">Audio Processors</li>
        <ul>
          <li>Equalzers (parameteric, stereographic, linear phase and adaptive)</li>
          <li>Compressors (tube, analog emulation, graphical, Automatic Gain Consideration(AGC))</li>
          <li>Limiters (0dB Peak, brickwall, soft clip)</li>
          <li>Stereo Processors (limit, spread, merge, position, generate, and modulate)</li>
          <li>Reverberation (Plate, Room, Hall, Shimmer, Low gravity, reflectionless Pitch tracking)</li>
          <li>Phasers (monophazer, biphaser, tempo syncable)</li>
          <li>Transient Processors (Attack Release (AR), Attack Sustain Decay Release (ASDR), Graphical Envelope Mapping, Evelope Followers)</li>
          <li>Chorus/flanger Effects (utilizing the unison psychoaccoustic effect)</li>
          <li>Saturation/Distortion</li>
        </ul>
        <p></p>
        <li className="text-large">Audio Synthesis</li>
        <ul>
          <li>Additive (noise and/or Digitally Controlled Oscillator(DCO) generate signals combined to form one sound through the unison psychoaccoustic effect)</li>
          <li>Subtractive (hipass, lopass, bandpass, and shelf filters modulated with ASDR, ASD, AD, and graphical envelopes)</li>
          <li>Frequency Modulation (FM), Amplitude Modulation (AM), Ring Modulation (RM), Pulse Width Modulation (PWM) (properties of a modulator signal acts on properties of a carrier signal)</li>
          <li>Granular (audio sample spliced into parts looped at high frequency to generate tones)</li>
          <li>Pitch Mapping (tones are generated relative to a map visually characterizing changes in frequency and amplitude accross time)</li>
          <li>Spectral (audible frequency spectrum is divided into separately manipulated sections)</li>
        </ul>
        <p></p>
      </ul>,
    }
  ],
  experience: [
    {
      sectionTitle: "Work Experience Highlights"
    },
    {
      jobTitle: "General Assistant",
      employer: "Albany Saunas",
      workPeriod: "2022 - 2023",
      list: <div className="exp-list">
        <div>Description</div>
        <ul className="remove-bullet-list">
          <li>In essence, I performed whichever tasks that were requisite to the best of my ability, which typically included setting up and breaking down massage rooms, measuring and correcting hot tub water conditions, washing sauanas as needed, as well as maintaining a clean and orderly store and storefront.</li>
        </ul>
        <br />
        <div>Highlights</div>
        <ul>
          <li>Adapting to changes in work tasks and approaches to task completion</li>
          <li>Troubleshooting software and hardware problems with video surveillance system and other workplace technologies to identify and implement technical solutions</li>
          <li>Updating customer data in prototype software database to account for customer and business needs</li>
          <li>Measuring furnace temperature using the AOPUTTRIVER AP-2732 non-contact infrared thermometer</li>
          <li>Testing and correcting water ph and chlorine levels to be within accepted ranges</li>
        </ul>
      </div>
    },
    {
      jobTitle: "Music Composer/Audio Engineer",
      employer: "Augium Productions",
      workPeriod: "2012 - Present",
      list: <div className="exp-list">
        <div>Description</div>
        <ul className="remove-bullet-list">
          <li >I compose music in my own studio under the artist name Augium. Augium is a constructed word intended to mean "element of incriment."<br /><br /><a href="https://augium.bandcamp.com/" className="link-color link-desat" target="_blank" rel="noreferrer">See my music page</a></li>
        </ul>
        <br />
        <div>Highlights</div>
        <ul>
          <li >Singlehandedly sound designed, composed, and engineered 400+ songs measuring 25+ hours in duration accross multiple musical genres using a variety of digital audio workstations and related technologies</li>
          <li >Involved in all phases of music production (i.e. music concept and theory, sound design, composition, performance and recording, mix engineering, and mastering)</li>
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
      description: "The Computer Numerically Controlled (CNC) operator job placement program offered through the facilities at De Anza College train participants to be workplace-ready for CNC operator positions and more. Over the course of twelve weeks, particiapants are trainined in the theory and practice of the fundamentals of manual machining and given extensive hands on experience with CNC machines through independent project-based learning.",
    },
    {
      name: "General Assembly",
      period: "Dec 2021 - March 2022",
      description: "General Assembly is a full-stack software engineering coding bootcamp, which places students in an intensive, twelve-week course supplying 400+ hours of experience with software development fundamentals, e.g. object-oriented programming, simple algorithms, front-end styling and layout technologies, responsive and interactive design, the MVC development model, the MERN stack, test-based development, web-application deployment, and team collaboration strategies.",
    },
    {
      name: "Diablo Valley College, Berkeley City College",
      period: "June 2015 - Dec 2021",
      description: "I studied general education with a focus on biological sciences intermittently between and occasionally in tandem with real-world work experience in the culinary, hospitality and retail industries. Initially, my intention was to obtain the Neruobiology, Phisiology, and Behavior (NPB) major from the program of the same name at UC Davis following a transfer from a pubic university to mitigate educational costs and altogether prevent the infamous student loans; as I would come to discover, however, there was little in the way of suitable career opportunities in my field of interest, so I decided against the degree to pursue a more technological career.",
    },
  ],
};

export { HomePageContent };