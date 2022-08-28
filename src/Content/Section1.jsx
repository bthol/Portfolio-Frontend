import React from "react";

const Section1 = () => {
    return (
        <section className="section-lists main-section-style shadow-behind">
            <h3 className="title-line text-x-large" tabIndex={0}>Skills and Knowledge</h3>
            <div>
                <p className="text-large" tabIndex={0}>Full Stack Web and App Development</p>
                <ul className="remove-bullet-list border-left">
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
                </ul>
            </div>
            <br />
            <div>
                <p className="text-large" tabIndex={0}>Graphic Design</p>
                <ul className="remove-bullet-list border-left">
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
                </ul>
            </div>
            <br />
            <div>
                <p className="text-large" tabIndex={0}>Music Production</p>
                <ul className="remove-bullet-list border-left">
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
                </ul>
            </div>
            <br />
        </section>
    )
};

export { Section1 };