import React from 'react';
import { PhilosophyContent as Content } from '../ContentPropModules/PhilosophyContent';

const PhilosophyPage = (props) => {

    return (
        <div className="page-content">
            <div className="content-container shadow-behind container-first">
                <h3 className="underline text-x-large">{Content.sections[0].sectionTitle}</h3>
                <div>
                    <p className="indent">{Content.sections[0].subject1.p2}</p>
                    <p className="indent">{Content.sections[0].subject1.p1}</p>
                </div>
            </div>
            {/* <div id="generic-section-3" className="content-container shadow-behind">
                <h3 className="underline text-x-large">{Content.sections[1].sectionTitle}</h3>
                <div>
                    <p><b>{Content.sections[1].subject1.title}</b></p>
                        <p className="indent">{Content.sections[1].subject1.p1}</p>
                    <p><b>{Content.sections[1].subject2.title}</b></p>
                        <p className="indent">{Content.sections[1].subject2.p1}</p>
                </div>
            </div> */}
        </div>
    )
}

export { PhilosophyPage }