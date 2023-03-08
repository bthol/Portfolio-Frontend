import React, { useState} from 'react';
import { Comp1 } from '../ContentComp/Comp1';
import { Comp2 } from '../ContentComp/Comp2';
import { Comp3 } from '../ContentComp/Comp3';
import { Comp4 } from '../ContentComp/Comp4';
import { ProfilePhoto } from '../Images/ProfilePhoto';
import { HomePageContent as Content } from '../ContentPropModules/HomePageContent';

const HomePage = (props) => {
    
    // SHOW MORE/LESS
    const [showMSG, setShowMSG] = useState("show more");
    const [show, setShow] = useState(false);
    const [shown, setShown] = useState("down-arrow");
    const [togshow, setTogshow] = useState(false);
    const toggleShown = () => {
        setTogshow(!togshow);
        if (!togshow) {
        setShow(true);
        setShowMSG("show less");
        setShown("up-arrow");
        } else {
        setShow(false);
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

    return (
        <div className="page-content">
            <div className="content-container shadow-behind" id="container-first">
                <div className="flex-center">
                    <ProfilePhoto></ProfilePhoto>
                </div>
                <div className="flex-around">
                    <a href="https://www.linkedin.com/in/blake-thollaug/" target="_blank"><button type="button" className="buttons" tabIndex={0}>LinkedIn</button></a>
                    <a href="mailto:bthollaug@gmail.com" target="_blank"><button type="button" className="buttons" tabIndex={0}>Gmail</button></a>
                </div>
                <br />
                <div className="flex-center content-highlight">
                    <div tabIndex={0}><b>About</b>: I am a Full Stack Developer searching for a position to utilize and further grow my creative and technological skillset.</div>
                </div>
            </div>
            <div className="content-container shadow-behind">
                <h3 className="title-line text-x-large" tabIndex={0}>Project Highlights</h3>
                {
                    props.mobile
                    ? <div>
                        <Comp2
                            projectTitle={Content.projects[0].title}
                            projectText={Content.projects[0].text}
                            projectList={Content.projects[0].list}
                        ></Comp2>
                        <br />
                        <Comp2
                            projectTitle={Content.projects[1].title}
                            projectText={Content.projects[1].text}
                            projectList={Content.projects[1].list}
                        ></Comp2>
                        <br />
                        <Comp2
                            projectTitle={Content.projects[2].title}
                            projectText={Content.projects[2].text}
                            projectList={Content.projects[2].list}
                        ></Comp2>
                        <br />
                        </div>
                    : <div className="carousel-container">
                        <div className={`projects-carousel carPos${carPos}`}>
                            <Comp2
                                projectTitle={Content.projects[0].title}
                                projectText={Content.projects[0].text}
                                projectList={Content.projects[0].list}
                            ></Comp2>
                            <br />
                            <Comp2
                                projectTitle={Content.projects[1].title}
                                projectText={Content.projects[1].text}
                                projectList={Content.projects[1].list}
                            ></Comp2>
                            <br />
                            <Comp2
                                projectTitle={Content.projects[2].title}
                                projectText={Content.projects[2].text}
                                projectList={Content.projects[2].list}
                            ></Comp2>
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
            </div>
            <div className="content-container shadow-behind">
                <h3 className="title-line text-x-large" tabIndex={0}>Skills and Knowledge</h3>
                <div className={`section-lists`}>
                    <Comp1
                        skillsTitle={Content.skills[0].title}
                        skillsList={Content.skills[0].list}
                        id={Content.skills[0].id}
                    ></Comp1>
                </div>
                {
                    show &&
                    <div className={`section-lists`}>
                    <br />
                    <Comp1
                        skillsTitle={Content.skills[1].title}
                        skillsList={Content.skills[1].list}
                        id={Content.skills[1].id}
                    ></Comp1>
                    <br />
                    <Comp1
                        skillsTitle={Content.skills[2].title}
                        skillsList={Content.skills[2].list}
                        id={Content.skills[2].id}
                    ></Comp1>
                    </div>
                }
                <div onClick={toggleShown} className="flex-center"><p className="cursor-pointer">{showMSG}</p><p className={`nav-arrow ${shown}`}></p></div>
            </div>
            <div className="content-container shadow-behind">
                <h3 className="title-line text-x-large" tabIndex={0}>Work Experience</h3>
                <Comp3
                    jobTitle={Content.experience[0].jobTitle}
                    employer={Content.experience[0].employer}
                    workPeriod={Content.experience[0].workPeriod}
                    list={Content.experience[0].list}
                ></Comp3>
                <br />
                <Comp3
                    jobTitle={Content.experience[1].jobTitle}
                    employer={Content.experience[1].employer}
                    workPeriod={Content.experience[1].workPeriod}
                    list={Content.experience[1].list}
                ></Comp3>
                <br />
                <Comp3
                    jobTitle={Content.experience[2].jobTitle}
                    employer={Content.experience[2].employer}
                    workPeriod={Content.experience[2].workPeriod}
                    list={Content.experience[2].list}
                ></Comp3>
                <br />
            </div>
            <div className="content-container shadow-behind" id="container-last">
                <h3 className="title-line text-x-large" tabIndex={0}>Education</h3>
                <Comp4
                    school={Content.education[0].name}
                    schoolPeriod={Content.education[0].period}
                    schoolDescription={Content.education[0].description}
                ></Comp4>
                <br />
                <Comp4
                    school={Content.education[1].name}
                    schoolPeriod={Content.education[1].period}
                    schoolDescription={Content.education[1].description}
                ></Comp4>
                <br />
                <Comp4
                    school={Content.education[2].name}
                    schoolPeriod={Content.education[2].period}
                    schoolDescription={Content.education[2].description}
                ></Comp4>
                <br />
            </div>
        </div>
    )
}

export { HomePage };