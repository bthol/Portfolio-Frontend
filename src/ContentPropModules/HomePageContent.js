const HomePageContent = {
  skills: [
    {
      id: "skills-1",
      title: "Computer Programming",
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
            <li tabIndex={0}>Preprocesor: Sass</li>
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
        <li className="text-large" tabIndex={0}>C++</li>
        <ul>
            <li tabIndex={0}>Compiler: Clang, GCC</li>
            <li tabIndex={0}>Debugging: clangd, Microsoft C/C++ VS Code Extension</li>
        </ul>
        <p></p>
        <li className="text-large" tabIndex={0}>R</li>
        <ul>
          <li tabIndex={0}>Used for statistical programming</li>
          <li tabIndex={0}>Excellent for science applications</li>
        </ul>
        <p></p>
      </ul>,
    },
    {
      id: "skills-2",
      title: "Graphic Design",
      list: <ul className="remove-bullet-list border-left">
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
      jobTitle: "General Assistant",
      employer: "Albany Saunas",
      workPeriod: "Aug 2022 - Jan 2023",
      list: <div className="exp-list">
        <ul>
          <li tabIndex={0}>Updating store website to reflect the most current scheduling information for customers</li>
          <li tabIndex={0}>Troubleshooting software and hardware problems with video surveillance system and other workplace technologies to identify and implement technical solutions</li>
          <li tabIndex={0}>Programatically modelled floor sweeping process for generating time optimized algorithms for more efficient sweeping practices (developed on my own time for use during working hours)</li>
          <li tabIndex={0}>Reading and recording the furnace temperature using the AOPUTTRIVER AP-2732 non-contact infrared thermometer when turning on/off the sauna furnace</li>
          <li tabIndex={0}>Measuring, recording, and restoring hot tub chemistry using machine and chemistry kit</li>
          <li tabIndex={0}>Taking inventory, restocking shelves and refrigerator</li>
          <li tabIndex={0}>Setting up hot tub and sauna rooms before customer use and cleaning afterwards</li>
          <li tabIndex={0}>Preparing massage rooms per the needs of the message therapist on schedule</li>
          <li tabIndex={0}>Sanitizing and wiping down bins for safe customer use</li>
          <li tabIndex={0}>Maintaining clean floors throughout the premises</li>
          <li tabIndex={0}>Collecting, sorting, cleaning, drying, folding and putting away laundry as time permits</li>
        </ul>
      </div>
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