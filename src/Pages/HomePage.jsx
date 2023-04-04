import React, { useState} from 'react';
import { Comp1 } from '../RenderComp/Comp1';
import { Comp2 } from '../RenderComp/Comp2';
import { Comp3 } from '../RenderComp/Comp3';
import { Comp4 } from '../RenderComp/Comp4';
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
    const [carBut0, setCarBut0] = useState("highlight-carBut");
    const [carBut1, setCarBut1] = useState("");
    const [carBut2, setCarBut2] = useState("");

    const highlightButton = (pos) => {
        setCarBut0("");
        setCarBut1("");
        setCarBut2("");
        if (pos === 0) {
            setCarBut0("highlight-carBut")
        } else if (pos === 1) {
            setCarBut1("highlight-carBut")
        } else if (pos === 2) {
            setCarBut2("highlight-carBut")
        }
    }

    return (
        <div id="homepage" className="page-content">
            <div id="hometop" className="content-container shadow-behind container-first">
                <div className="flex-center">
                    <ProfilePhoto></ProfilePhoto>
                </div>
                <div className="flex-around">
                    <div className="dashboard-container">
                        <div className="flex-around">
                            <div>
                                <div>views : {props.portfolioViews}</div>
                            </div>
                            <div>
                                <div><button className="like-btn" onClick={props.likePortfolio}>Likes</button> : {props.portfolioLikes}</div>
                            </div>
                        </div>
                        <hr />
                        <div className="flex-around">
                            <a href="https://www.linkedin.com/in/blake-thollaug/" target="_blank"><button type="button" className="buttons" tabIndex={-1}>LinkedIn</button></a>
                            |
                            <a href="https://github.com/bthol" target="_blank"><button type="button" className="buttons" tabIndex={-1}>GitHub</button></a>
                            |
                            <a href="mailto:bthollaug@gmail.com" target="_blank"><button type="button" className="buttons" tabIndex={-1}>Gmail</button></a>
                        </div>
                    </div>
                </div>
                <br />
                <div className="flex-center content-highlight" tabIndex={0}>
                    <div><b>About</b>: I am a Full Stack Developer searching for a position to utilize and develop my creative and technological skillset.</div>
                </div>
                <br />
            </div>
            <div id="homepage-mid-1" className="content-container shadow-behind">
                <div className="flex-center">
                    <h3 className="text-x-large underline" tabIndex={0}>Project Highlights</h3>
                </div>
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
                                    setCarPos(0);
                                    highlightButton(0);
                            }} className={`cursor-pointer ${carBut0}`}></button>
                                <button onClick={() => {
                                    setCarPos(1);
                                    highlightButton(1);
                                }} className={`cursor-pointer ${carBut1}`}></button>
                                <button onClick={() => {
                                    setCarPos(2);
                                    highlightButton(2);
                                }} className={`cursor-pointer ${carBut2}`}></button>
                            </div>
                        </div>
                }
            </div>
            <div id="homepage-mid-2" className="content-container shadow-behind">
                <h3 className="underline text-x-large" tabIndex={0}>Skills and Knowledge</h3>
                {
                    props.mobile
                    ? <div className="section-lists">
                        <Comp1
                            skillsTitle={Content.skills[0].title}
                            skillsList={Content.skills[0].list}
                            id={Content.skills[0].id}
                        ></Comp1>
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
                    : <div className="section-lists">
                        <Comp1
                            skillsTitle={Content.skills[0].title}
                            skillsList={Content.skills[0].list}
                            id={Content.skills[0].id}
                        ></Comp1>
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
                        <br />
                    </div>
                }
            </div>
            <div id="homepage-mid-3" className="content-container shadow-behind">
                <h3 className="underline text-x-large" tabIndex={0}>Work Experience</h3>
                <Comp3
                    jobTitle={Content.experience[0].jobTitle}
                    employer={Content.experience[0].employer}
                    workPeriod={Content.experience[0].workPeriod}
                    list={Content.experience[0].list}
                ></Comp3>
                {
                    show &&
                    <div>
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
                }
                <div onClick={toggleShown} className="flex-center"><p className="cursor-pointer">{showMSG}</p><p className={`nav-arrow ${shown}`}></p></div>
            </div>
            <div id="homepage-mid-4" className="content-container shadow-behind container-last">
                <h3 className="underline text-x-large" tabIndex={0}>Education</h3>
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