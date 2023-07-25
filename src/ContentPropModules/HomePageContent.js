const HomePageContent = {
  skills: [
    {
      id: "skills-1",
      title: "Programming Langauges",
      list: <ul className="skills-list remove-bullet-list border-left">
        <li className="text-large" tabIndex={0}>JavaScript</li>
        <ul>
            <li tabIndex={0}>Libraries: Node.js</li>
            <li tabIndex={0}>Frameworks: Express.js for REST API, React component GUI</li>
            <li tabIndex={0}>Debugging: ESLint</li>
        </ul>
        <p></p>
        <li className="text-large" tabIndex={0}>HTML</li>
        <ul>
            <li tabIndex={0}>markdown content</li>
            <li tabIndex={0}>modals and forms</li>
            <li tabIndex={0}>Audio and player controls</li>
            <li tabIndex={0}>raster images & vector graphics</li>
        </ul>
        <p></p>
        <li className="text-large" tabIndex={0}>CSS</li>
        <ul>
            <li tabIndex={0}>Modules: Flexbox, CSS Grid</li>
            <li tabIndex={0}>Frameworks: Bootstrap</li>
            <li tabIndex={0}>Preprocesor: Sass</li>
        </ul>
        <p></p>
        <li className="text-large" tabIndex={0}>Java</li>
        <ul>
            <li tabIndex={0}>Libraries: Java Development Kit (JDK)</li>
            <li tabIndex={0}>Resources: Language Support for Java by Redhat</li>
        </ul>
        <p></p>
        <li className="text-large" tabIndex={0}>Python</li>
        <ul>
            <li tabIndex={0}>Libraries: Pip</li>
            <li tabIndex={0}>Frameworks: Django</li>
            <li tabIndex={0}>Debugging: Pylint, Pyflakes</li>
        </ul>
        <p></p>
        <li className="text-large" tabIndex={0}>C++</li>
        <ul>
            <li tabIndex={0}>Compiler: Clang, GCC</li>
            <li tabIndex={0}>Debugging: clangd, Microsoft C/C++ VS Code Extension</li>
        </ul>
        <p></p>
        <li className="text-large" tabIndex={0}>R</li>
        <ul>
          <li tabIndex={0}>Used for statistical programming</li>
          <li tabIndex={0}>Excellent for small-scale science applications</li>
        </ul>
        <p></p>
      </ul>,
    },
    {
      id: "skills-2",
      title: "Graphic Design",
      list: <ul className="skills-list remove-bullet-list border-left">
        <li className="text-large" tabIndex={0}>User Experience (UX) and User Interface (UI) Design</li>
        <ul>
            <li tabIndex={0}>Responsive Design: useful for compatability with various device viewport dimensions and necessary for the growing number of devices on the technology market.</li>
            <li tabIndex={0}>Interactive Design: provides user feedback for a more intuitive and compelling user experience to prevent change blindness, so new user features don't go unnoticed.</li>
            <li tabIndex={0}>Mobile First Design: a design practice where the interface layout is first created on mobile viewports and then adapted to desktop and larger, since users most often use mobile devices to browse the internet.</li>
            <li tabIndex={0}>WAI ARIA Acessibility standard: provides interoperability with assistive technologies to enable user accessibility.</li>
        </ul>
        <p></p>
        <li className="text-large" tabIndex={0}>Digital Graphic Technologies</li>
        <ul>
            <li tabIndex={0}>Affinity Photo</li>
            <li tabIndex={0}>Affinity Designer</li>
            <li tabIndex={0}>Canva</li>
            <li tabIndex={0}>Paint.net</li>
            <li tabIndex={0}>MS Paint</li>
        </ul>
        <p></p>
      </ul>,
    },
    {
      id: "skills-3",
      title: "Music Production",
      list: <ul className="skills-list remove-bullet-list border-left">
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
            <li tabIndex={0}>Stereo Processors (limit, spread, merge, position, generate, and modulate)</li>
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
  experience: [
    {
      jobTitle: "Deli Clerk",
      employer: "Andronicos",
      workPeriod: "May 2020 - Current",
      list: <div className="exp-list">
        <div>Description</div>
        <ul className="remove-bullet-list">
          <li tabIndex={0}>I collaborated with the team to prepare hand-made sandwiches, to cut, label and package meats, cheeses and vegetables, and to deliver an excellent customer experience.</li>
        </ul>
        <br />
        <div>Highlights</div>
        <ul>
          <li tabIndex={0}>Coordinating with the team to find solutions that work for the whole team</li>
          <li tabIndex={0}>Attending to customer needs and serving them with a friendly demeanor</li>
          <li tabIndex={0}>Managing time to fulfill various job responsibilities</li>
        </ul>
      </div>,
    },
    {
      jobTitle: "General Assistant",
      employer: "Albany Saunas",
      workPeriod: "Aug 2022 - Jan 2023",
      list: <div className="exp-list">
        <div>Description</div>
        <ul className="remove-bullet-list">
          <li tabIndex={0}>I essentially did whatever they needed me to do to the best of my ability, and that typically included setting up / breaking down rooms and maintaining a clean work environment.</li>
        </ul>
        <br />
        <div>Highlights</div>
        <ul>
          <li tabIndex={0}>Adapting to changes in work tasks and approaches to task completion</li>
          <li tabIndex={0}>Troubleshooting software and hardware problems with video surveillance system and other workplace technologies to identify and implement technical solutions</li>
          <li tabIndex={0}>Updating customer data in prototype software database to account for customer and business needs</li>
          <li tabIndex={0}>Measuring furnace temperature using the AOPUTTRIVER AP-2732 non-contact infrared thermometer</li>
          <li tabIndex={0}>Testing and correcting water ph and clorine levels to be within accepted ranges</li>
        </ul>
      </div>
    },
    {
      jobTitle: "Music Composer/Audio Engineer",
      employer: "Augium Productions",
      workPeriod: "Jan 2012 - Present",
      list: <div className="exp-list">
        <div>Description</div>
        <ul className="remove-bullet-list">
          <li tabIndex={0}>I create music in my own studio under the pseudonym Augium. Augium is a constructed word intended to mean "the element of incriment" or "the proclivity toward complexity."<br/><br/><a href="https://augium.bandcamp.com/" className="link-color link-desat" target="_blank" rel="noreferrer">See my music page</a></li>
        </ul>
        <br />
        <div>Highlights</div>
        <ul>
          <li tabIndex={0}>Composed 400+ songs at 25+ hours using a variety of digital audio workstations accross multiple genres</li>
          <li tabIndex={0}>Involved in all phases of music production (i.e. music concept and theory, sound design, composition, performance and recording, mix engineering, and mastering)</li>
          <li tabIndex={0}>General mastering ensures that the audio playback is consistent on a variety of playback systems (e.g. headphone, car stereo, laptop, professional studio monitors, et cetera).</li>
          <li tabIndex={0}>Created audio synthesizer patches using various digital methods of audio synthesis (additive, subtractive, FM, AM, PWM, wavetable, parametric physical modelling, re-synthesis, spectral, pitch mapping, granular)</li>
        </ul>
      </div>,
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

export { HomePageContent };