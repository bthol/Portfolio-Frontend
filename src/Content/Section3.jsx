import React from "react";

const Section3 = () => {
    return (
        <section>
            <h3 className="title-line text-x-large">Work Experience</h3>
            <div>
                <p className="text-large">Augium Productions</p>
                <p className="flex-between"><i>Composer/Engineer</i> Jan 2012 - Present</p>
                <ul className="exp-list">
                    <li>Composed 400+ songs at 25+ hours using a variety of digital audio workstations(DAWs) accross multiple genres</li>
                    <li>Involved in all phases of music production (i.e. music concept and sound design, composition, performance and recording, mix engineering, and mastering)</li>
                    <li>General mastering ensures that the audio playback is consistent on a variety of playback systems (e.g. headphone, car stereo, laptop, professional studio monitors, et cetera).</li>
                    <li>Created audio synthesizer patches using various digital methods of audio synthesis (additive, subtractive, FM, AM, PWM, wavetable, parametric physical modelling, re-synthesis, spectral, granular)</li>
                </ul>
            </div>
            <br />
            <div>
                <p className="text-large">Canyon Ranch Woodside</p>
                <p className="flex-between"><i>Kitchen Steward</i> Jan 2020 - Oct 2020</p>
                <ul className="exp-list">
                    <li>Organized and maintained kitchen equipment for convenient and sustainable usage.</li>
                    <li>Managed a food inventory, where I consolidated food resources to optimize use of storage area, and processed incoming shipments by testing for quality and allocating the shipment contents into appropriate storage areas in compliance with company and legal standards.</li>
                    <li>Received preliminary training in food preparation to further assist the kitchen staff after receiving food handlers certification.</li>
                </ul>
            </div>
            <br />
            <a href="#top" className="flex-center top-link-style">back to top</a>
        </section>
    )
};

export { Section3 };