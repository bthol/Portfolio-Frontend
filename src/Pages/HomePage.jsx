import React, { useState, useEffect } from 'react';
import { Comp1 } from '../RenderComp/Comp1';
import { Comp2 } from '../RenderComp/Comp2';
import { Comp3 } from '../RenderComp/Comp3';
import { Comp4 } from '../RenderComp/Comp4';
import { Comp9 } from '../RenderComp/Comp9';
import { Verify } from '../Modals/Verify';
import { ProfilePhoto } from '../Images/ProfilePhoto';
import { HomePageContent as Content } from '../ContentPropModules/HomePageContent';

const HomePage = (props) => {
    // LIKE BUTTON
    useEffect(() => {
        // update style on theme change
        props.updateLikeBtn();
    }, [props.theme])

    // SPAM PROTECTION FOR emailto html scheme
    const [modalShow, setModalShow] = useState(false);
    const setModalFunct = (bool) => {
        setModalShow(bool)
    };

    const emailSpamProtect = () => {
        setModalFunct(true);
        // e.target.setAttribute("href", `mailto:bthollaug@gmail.com?subject=Contact%20from%20Portfolio%20Website`);
    };

    // CAROUSEL (for tablet and larger)
    const [leftArrowShow, setLeftArrowShow] = useState(0);
    const [rightArrowShow, setRightArrowShow] = useState(1);
    const [carPos, setCarPos] = useState(0);
    const [carBut0, setCarBut0] = useState("highlight-carBut");
    const [carBut1, setCarBut1] = useState("carBut-hover");
    const [carBut2, setCarBut2] = useState("carBut-hover");
    const [slideTabIdx0, setSlideTabIdx0] = useState(0);
    const [slideTabIdx1, setSlideTabIdx1] = useState(-1);
    const [slideTabIdx2, setSlideTabIdx2] = useState(-1);

    const [carousel, setCarousel] = useState(false);
    const [carBool, setCarBool] = useState(true);
    if (carBool && window.innerWidth > 583) {
        setCarBool(false);
        setCarousel(true);
    }

    window.addEventListener("resize", () => {
        if (window.innerWidth > 583) {
            setCarousel(true);
        } else {
            setCarousel(false);
        }
    });

    const highlightButton = (pos) => {
        setCarBut0("carBut-hover");
        setCarBut1("carBut-hover");
        setCarBut2("carBut-hover");
        if (pos === 0) {
            setSlideTabIdx0(0);
            setSlideTabIdx1(-1);
            setSlideTabIdx2(-1);
            setCarBut0("highlight-carBut")
            setLeftArrowShow(0);
            setRightArrowShow(1);
        } else if (pos === 1) {
            setSlideTabIdx0(-1);
            setSlideTabIdx1(0);
            setSlideTabIdx2(-1);
            setCarBut1("highlight-carBut")
            setLeftArrowShow(1);
            setRightArrowShow(1);
        } else if (pos === 2) {
            setSlideTabIdx0(-1);
            setSlideTabIdx1(-1);
            setSlideTabIdx2(0);
            setCarBut2("highlight-carBut")
            setLeftArrowShow(1);
            setRightArrowShow(0);
        }
    }

    let carouselData = [
        {
            id: "projects-1",
            title: <b><div tabIndex={slideTabIdx0} className="text-large flex-center">Space Battle</div></b>,
            text: <div>
                <p><b>Description:</b> Fight off the alien horde for a new high score in this arcade-style battle game!</p>
                <p><b>Technologies:</b> JavaScript, HTML, CSS, JQuery, Express.js, EJS templates, MongoDB Atlas, Mongoose Object Document Modelling, Heroku Cloud Service Provider</p>
            </div>,
            list: <ul>
                <li><a href="https://bthol.github.io/Space-Battle/" className="link-color link-desat" target="_blank" rel="noreferrer" tabIndex={slideTabIdx0}>Live Link</a></li>
                <li><a href="https://github.com/bthol/Space-Battle" className="link-color link-desat" target="_blank" rel="noreferrer" tabIndex={slideTabIdx0}>GitHub Page</a></li>
                <li>Connected a custom RESTful API linked to a cloud database that allows game scores to be stored between sessions, so that the top 10 scores of all time can be displayed on the scoreboard page.</li>
                <li>Organized state variables, data structures, and Document Object Model (DOM) selections into respective JS modules for best code manageability practices.</li>
                <li>Displayed pages by calling functions that mutate the DOM and tracked pages with a global variable that updates when a page's function is run.</li>
            </ul>,
        },
        {
            id: "projects-2",
            title: <b><div tabIndex={slideTabIdx1} className="text-large flex-center">Retro Toe</div></b>,
            carousel: <img src="" alt="project carousel"></img>,
            text: <div>
                <p><b>Description:</b> Tic Tac Toe. Retro style.</p>
                <p><b>Technologies:</b> JavaScript, HTML, CSS</p>
            </div>,
            list: <ul>
                <li><a href="https://bthol.github.io/Retro-Toe/" className="link-color link-desat" target="_blank" rel="noreferrer" tabIndex={slideTabIdx1}>Live Link</a></li>
                <li><a href="https://github.com/bthol/Tic-Tac-Toe" className="link-color link-desat" target="_blank" rel="noreferrer" tabIndex={slideTabIdx1}>GitHub Page</a></li>
                <li>Coded algorithms for game logic from scratch using a mere 100 lines of code.</li>
                <li>Made a mobile-friendly UI layout by utilizing relative units, and the CSS Flex and Grid modules for maximal responsivity across device viewports.</li>
                <li>Deployed the application using GitHub Pages.</li>
            </ul>,
        },
        {
            id: "projects-3",
            title: <b><div tabIndex={slideTabIdx2} className="text-large flex-center">Magic 8 Ball</div></b>,
            text: <div>
                <p><b>Description:</b> Discover your destiny with the mystical guidance of the Magic 8 Ball.</p>
                <p><b>Technologies:</b> JavaScript, HTML, CSS</p>
            </div>,
            list: <ul>
                <li><a href="https://bthol.github.io/Magic-8-Ball/" className="link-color link-desat" target="_blank" rel="noreferrer" tabIndex={slideTabIdx2}>Live Link</a></li>
                <li><a href="https://github.com/bthol/Magic-8-Ball" className="link-color link-desat" target="_blank" rel="noreferrer" tabIndex={slideTabIdx2}>GitHub Page</a></li>
                <li>Created a breathing glow effect for the magic eight ball using asynchronous JavaScript functions to animate style.</li>
                <li>Wrote a CSS keyframe animation that runs once for its full duration on image click before the image is updated with the answer.</li>
                <li>Implemented a polychromatic animated background gradient.</li>
            </ul>,
        },
    ]

    return (
        <div id="homepage" className="page-content">
            <div id="hometop" className="content-container shadow-behind container-first">
                <div className="flex-center">
                    <ProfilePhoto></ProfilePhoto>
                </div>
                <div className="flex-around">
                    <div className="dashboard-container">
                        <div className="flex-around-align">
                            <div className="flex-center-align">
                                <div className="dashboard-margin">views</div>
                                {props.portfolioViews}
                            </div>
                            <div className="flex-center-align">
                                <button className="like-btn-animation like-btn dashboard-margin" onClick={props.likePortfolio}>Like</button>
                                {props.portfolioLikes}
                            </div>
                        </div>
                        <hr noshade="true" />
                        <div className="flex-around">
                            <a href="https://www.linkedin.com/in/blake-thollaug/" target="_blank" rel="noreferrer"><button type="button" className="buttons" tabIndex={-1}>LinkedIn</button></a>
                            <div className="inline-divider"></div>
                            <a href="https://github.com/bthol" target="_blank" rel="noreferrer"><button type="button" className="buttons" tabIndex={-1}>GitHub</button></a>
                            <div className="inline-divider"></div>
                            <button type="button" className="buttons" onClick={emailSpamProtect}>Email</button>
                        </div>
                    </div>
                </div>
                <br />
                <div>
                    <Comp9 title={"About Me"} text={Content.about} enter={props.enter} />
                </div>
                <br />
            </div>
            <div id="homepage-mid-1" className="content-container shadow-behind">
                <div className="flex-center">
                    <h3 className="text-x-large underline project-highlight-margin" tabIndex={0}>Project Highlights</h3>
                </div>
                <div className="carousel-container">
                    <div className={`projects-carousel carPos${carPos}`}>
                        <Comp2
                            projectTitle={carouselData[0].title}
                            projectText={carouselData[0].text}
                            projectList={carouselData[0].list}
                        ></Comp2>
                        <br />
                        <Comp2
                            projectTitle={carouselData[1].title}
                            projectText={carouselData[1].text}
                            projectList={carouselData[1].list}
                        ></Comp2>
                        <br />
                        <Comp2
                            projectTitle={carouselData[2].title}
                            projectText={carouselData[2].text}
                            projectList={carouselData[2].list}
                        ></Comp2>
                        <br />
                    </div>
                    {
                        !carousel
                        ? <div></div>
                        : <div className="carousel-control-panel">
                            <div className="carButs flex-center">
                                <div className="arrow left-arrow carousel-arrow" style={{"opacity":`${leftArrowShow}`}}></div>
                                <button onClick={() => {
                                    setCarPos(0);
                                    highlightButton(0);
                                }} className={`carBut ${carBut0} carBut`}></button>
                                <button onClick={() => {
                                    setCarPos(1);
                                    highlightButton(1);
                                }} className={`carBut ${carBut1}`}></button>
                                <button onClick={() => {
                                    setCarPos(2);
                                    highlightButton(2);
                                }} className={`carBut ${carBut2}`}></button>
                                <div className="arrow right-arrow carousel-arrow" style={{"opacity":`${rightArrowShow}`}}></div>
                            </div>
                        </div>
                    }
                </div>
            </div>

            <div id="homepage-mid-2" className="content-container shadow-behind">
                <h3 className="underline text-x-large" tabIndex={0}>{Content.skills[0].sectionTitle}</h3>
                <div className="section-lists">
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
                    <Comp1
                        skillsTitle={Content.skills[3].title}
                        skillsList={Content.skills[3].list}
                        id={Content.skills[3].id}
                    ></Comp1>
                </div>
                {
                    props.mobile
                        ? <div></div>
                        : <div><br /></div>
                }
            </div>

            <div id="homepage-mid-3" className="content-container shadow-behind">
                <h3 className="underline text-x-large" tabIndex={0}>{Content.experience[0].sectionTitle}</h3>
                <div className="content-highlight">
                    <Comp3
                        jobTitle={Content.experience[1].jobTitle}
                        employer={Content.experience[1].employer}
                        workPeriod={Content.experience[1].workPeriod}
                        list={Content.experience[1].list}
                        enter={props.enter}
                    ></Comp3>
                    <Comp3
                        jobTitle={Content.experience[2].jobTitle}
                        employer={Content.experience[2].employer}
                        workPeriod={Content.experience[2].workPeriod}
                        list={Content.experience[2].list}
                        enter={props.enter}
                    ></Comp3>
                </div>
                <br />
            </div>

            <div id="homepage-mid-4" className="content-container shadow-behind container-last">
                <h3 className="underline text-x-large" tabIndex={0}>{Content.education[0].sectionTitle}</h3>
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
                <Comp4
                    school={Content.education[3].name}
                    schoolPeriod={Content.education[3].period}
                    schoolDescription={Content.education[3].description}
                ></Comp4>
                <br />
            </div>

            {modalShow && <Verify setModal={setModalFunct} title={"Send Email"} message={"Are you sure you want to send an email?"} closeBtnText={"Cancel"} actionBtnText={"Continue"} link={true} href={"mailto:bthollaug@gmail.com?subject=Contact from Portfolio Website"}/>}
        
        </div>
    )
}

export { HomePage };