import React, { useState, useEffect } from 'react';
import { Header } from '../Template/Header';
import { Footer } from '../Template/Footer';
import { Timeout } from '../Modals/Timeout';
import { Section1 } from '../Template/Section1';
import { Section2 } from '../Template/Section2';
import { Section3 } from '../Template/Section3';
import { Section4 } from '../Template/Section4';
import { ContentProps as contentProps} from '../PropsModule/ContentProps';
import { ProfilePhoto } from '../Images/ProfilePhoto';

const HomePage = (props) => {
    
    // IDLE MODAL
    const [modal, setModal] = useState("closed");
    useEffect(() => {
        let seconds = 0;
        // listners reset the count
        document.addEventListener("touchmove", () => {seconds = 0});
        document.addEventListener("mousemove", () => {seconds = 0});
        document.addEventListener("keydown", () => {seconds = 0});
        const counter = setInterval(() => {
        seconds += 1;
        if (seconds === 300) {
            // display modal
            setModal("open")
            seconds = 0;
        }
        }, 1000);
        return () => clearInterval(counter);
    }, []);

    const setModalFunct = (str) => {
        setModal(str)
    };

    // BOOLEAN STATE FOR MOBILE ENVIRONMENT
    const [mobile, setMobile] = useState(false);
    const [mobBool, setMobBool] = useState(true);
    if (window.innerWidth < 768 && mobBool) {
        setMobBool(false);
        setMobile(true);
    }
    
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
        <div id="root-react" className={`App color ${props.theme}`}>
            <Timeout modal={modal} setModal={setModalFunct}></Timeout>
            <Header featureAlertFunct={props.featureAlertFunct}></Header>
            <span className="aside-main">
            <aside className="app-aside shadow-behind">
                <div className="flex-center">
                <ProfilePhoto></ProfilePhoto>
                </div>
                <div className="flex-around">
                    <a href="mailto:bthollaug@gmail.com" target="_blank"><button className="buttons">Send Email</button></a>
                    <button className="buttons" onClick={props.toggleTheme}>{props.btnText}</button>
                </div>
                <p tabIndex={0}><b>About Me</b>: I am a Full Stack Web and App Developer searching for a position to utilize and further grow my creative and technological skillset.</p>
                <br />
            </aside>
            <main className="app-main">
                <section className="main-section-style shadow-behind">
                <h3 className="title-line text-x-large" tabIndex={0}>Skills and Knowledge</h3>
                <div className={`section-lists`}>
                    <Section1
                        skillsTitle={contentProps.skills[0].title}
                        skillsList={contentProps.skills[0].list}
                        id={contentProps.skills[0].id}
                    ></Section1>
                </div>
                {
                    show &&
                    <div className={`section-lists`}>
                    <br />
                    <Section1
                        skillsTitle={contentProps.skills[1].title}
                        skillsList={contentProps.skills[1].list}
                        id={contentProps.skills[1].id}
                    ></Section1>
                    <br />
                    <Section1
                        skillsTitle={contentProps.skills[2].title}
                        skillsList={contentProps.skills[2].list}
                        id={contentProps.skills[2].id}
                    ></Section1>
                    </div>
                }
                <div onClick={toggleShown} className="flex-center"><p className="cursor-pointer">{showMSG}</p><p className={`nav-arrow ${shown}`}></p></div>
                </section>
                <section className="main-section-style">
                <h3 className="title-line text-x-large" tabIndex={0}>Project Highlights</h3>
                {mobile
                    ? <div>
                    <Section2
                        projectTitle={contentProps.projects[0].title}
                        projectText={contentProps.projects[0].text}
                        projectList={contentProps.projects[0].list}
                    ></Section2>
                    <br />
                    <Section2
                        projectTitle={contentProps.projects[1].title}
                        projectText={contentProps.projects[1].text}
                        projectList={contentProps.projects[1].list}
                    ></Section2>
                    <br />
                    <Section2
                        projectTitle={contentProps.projects[2].title}
                        projectText={contentProps.projects[2].text}
                        projectList={contentProps.projects[2].list}
                    ></Section2>
                    <br />
                    </div>
                    : <div className="carousel-container">
                    <div className={`projects-carousel carPos${carPos}`}>
                        <Section2
                            projectTitle={contentProps.projects[0].title}
                            projectText={contentProps.projects[0].text}
                            projectList={contentProps.projects[0].list}
                        ></Section2>
                        <br />
                        <Section2
                            projectTitle={contentProps.projects[1].title}
                            projectText={contentProps.projects[1].text}
                            projectList={contentProps.projects[1].list}
                        ></Section2>
                        <br />
                        <Section2
                            projectTitle={contentProps.projects[2].title}
                            projectText={contentProps.projects[2].text}
                            projectList={contentProps.projects[2].list}
                        ></Section2>
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
                </section>
                <section className="main-section-style">
                <h3 className="title-line text-x-large" tabIndex={0}>Work Experience</h3>
                <Section3
                    jobTitle={contentProps.experience[0].jobTitle}
                    employer={contentProps.experience[0].employer}
                    workPeriod={contentProps.experience[0].workPeriod}
                    list={contentProps.experience[0].list}
                ></Section3>
                <br />
                <Section3
                    jobTitle={contentProps.experience[1].jobTitle}
                    employer={contentProps.experience[1].employer}
                    workPeriod={contentProps.experience[1].workPeriod}
                    list={contentProps.experience[1].list}
                ></Section3>
                <br />
                <Section3
                    jobTitle={contentProps.experience[2].jobTitle}
                    employer={contentProps.experience[2].employer}
                    workPeriod={contentProps.experience[2].workPeriod}
                    list={contentProps.experience[2].list}
                ></Section3>
                <br />
                </section>
                <section className="main-section-style" id="main-section-style-last">
                <h3 className="title-line text-x-large" tabIndex={0}>Education</h3>
                <Section4
                    school={contentProps.education[0].name}
                    schoolPeriod={contentProps.education[0].period}
                    schoolDescription={contentProps.education[0].description}
                ></Section4>
                <br />
                <Section4
                    school={contentProps.education[1].name}
                    schoolPeriod={contentProps.education[1].period}
                    schoolDescription={contentProps.education[1].description}
                ></Section4>
                <br />
                <Section4
                    school={contentProps.education[2].name}
                    schoolPeriod={contentProps.education[2].period}
                    schoolDescription={contentProps.education[2].description}
                ></Section4>
                <br />
                </section>
            </main>
            </span>
            <div className="flex-center">
                <a href="#" className="flex-center top-link-style">back to top</a>
            </div>
            <Footer />
        </div>
    )
}

export { HomePage };