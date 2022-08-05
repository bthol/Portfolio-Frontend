import React from "react";

const Section1 = () => {
    return (
        <section>
            <h3 className="title-line text-x-large">Skills and Knowledge</h3>
            <div>
                <p className="text-large">Full Stack Web and App Development</p>
                <ul className="remove-bullet-list">
                    <li className="text-large">JavaScript</li>
                    <ul>
                        <li>Libraries: Node.js</li>
                        <li>Frameworks: Express.js, React</li>
                        <li>Debugging: ESLint</li>
                    </ul>
                    <p></p>
                    <li className="text-large">Python</li>
                    <ul>
                        <li>Libraries: Pip</li>
                        <li>Frameworks: Django</li>
                        <li>Debugging: Pylint</li>
                    </ul>
                    <p></p>
                    <li className="text-large">CSS3</li>
                    <ul>
                        <li>Modules: Flexbox, CSS Grid</li>
                        <li>Frameworks: Bootstrap</li>
                    </ul>
                    <p></p>
                    <li className="text-large">HTML5</li>
                        <ul>
                            <li>markdown content</li>
                            <li>modals and forms</li>
                            <li>raster images</li>
                            <li>vector graphics</li>
                        </ul>
                    <p></p>
                </ul>
            </div>
            <br />
            <div>
                <p className="text-large">Graphic Design</p>
                <ul className="remove-bullet-list">
                    <li className="text-large">User Experience (UX) and User Interface (UI) Design</li>
                    <ul>
                        <li>Interactive Design: provides user feedback for a more intuitive and compelling user experience to prevent change blindness, so user features don't go unnoticed.</li>
                        <li>Responsive Design: useful for compatability with various device viewport dimensions and necessary for the growing number of devices on the market.</li>
                        <li>Mobile First Design: a design practice where the layout is first created on mobile viewports and then adapted to desktop, which is motivated by the widespread user preference for mobile over desktop platforms.</li>
                    </ul>
                    <p></p>
                    <li className="text-large">Gestalt Psycholgical Principles of Design</li>
                    <ul>
                        <li>Similarity: like figures are seen as related.</li>
                        <li>Continuity: figures can be discerned from the arrangement of smaller figures.</li>
                        <li>Closure: a figure may be accesible without its full realism.</li>
                        <li>Proximity: where figures near to one another are seen as related.</li>
                        <li>Figure/Ground: the space between figures is its own figure</li>
                        <li>Symmetry: the tendency to interpret the arrangement of figures in the simplest order</li>
                        <li>Common Fate: figures moving as one are seen as one.</li>
                    </ul>
                    <p></p>
                    <li className="text-large">Digital Graphic Technologies</li>
                    <ul>
                        <li>Affinity Photo</li>
                        <li>Affinity Designer</li>
                        <li>Paint.net</li>
                        <li>MS Paint</li>
                    </ul>
                    <p></p>
                </ul>
            </div>
            <br />
            <div>
                <p className="text-large">Music Production</p>
                <ul className="remove-bullet-list">
                    <li className="text-large">Audio Engineering</li>
                    <ul>
                        <li>Self taught</li>
                        <li>Engineered 25+ hours of audio</li>
                        <li>Deep understanding of signal processing</li>
                    </ul>
                    <p></p>
                    <li className="text-large">Audio Processors</li>
                    <ul>
                        <li>Equilzers (parameteric, stereographic, linear phase and adaptive)</li>
                        <li>Compressors (tube, analog emulation, graphical, Automatic Gain Consideration(AGC))</li>
                        <li>Limiters (0dB Peak, brickwall, soft clip)</li>
                        <li>Stereo Processors (limit, spread, merge, position, and modulate)</li>
                        <li>Reverberation (Plate, Room, Hall, Shimmer, Low gravity, reflectionless Pitch tracking)</li>
                        <li>Phasers (monophazer, biphaser, tempo syncable)</li>
                        <li>Chorus/flanger Effect</li>
                        <li>Saturation/Distortion</li>
                    </ul>
                    <p></p>
                    <li className="text-large">Audio Synthesis</li>
                    <ul>
                        <li>Additive (noise and/or Digitally Controlled Oscillator(DCO) generate signals combined to form one sound through the unison psychoaccoustic effect)</li>
                        <li>Subtractive (hipass, lopass, bandpass, and shelf filters modulated with ASDR, ASD, AD, and graphical envelopes)</li>
                        <li>Frequency Modulation (FM), Amplitude Modulation(AM), Ring Modulation(RM), Pulse Width Modulation(PWM) (properties of a modulator signal acts on properties of a carrier signal)</li>
                        <li>Granular (audio sample spliced into parts looped at high frequency to generate tones)</li>
                        <li>Pitch Mapping (tones are generated relative to a map visually characterizing changes in frequency and amplitude accross time)</li>
                        <li>Spectral (audible frequency spectrum is divided into separately manipulated sections)</li>
                    </ul>
                    <p></p>
                </ul>
            </div>
            <br />
        </section>
    )
};

export { Section1 };