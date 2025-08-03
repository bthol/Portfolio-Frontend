import React, { useState, useEffect } from 'react';
import { Comp1 } from '../Components/Comp1';
import { Comp2 } from '../Components/Comp2';
import { Comp3 } from '../Components/Comp3';
import { Comp4 } from '../Components/Comp4';
import { Comp9 } from '../Components/Comp9';
import { Verify } from '../Modals/Verify';
import { ProfilePhoto } from '../Images/ProfilePhoto';
import { HomePageContent as Content } from '../ContentModules/HomePageContent';

// import icons for scrolling icon list

// pick top ten technologies

// 1
// import { JavaScript } from '../Images/icons/javascript-icon.png';

// 2
// import { HTML } from '../Images/icons/html-icon.png';

// 3
// import { CSS } from '../Images/icons/css-icon.png';

// 4
// import { Node } from '../Images/icons/node-icon.png';

// 5
// import { Express } from '../Images/icons/express-icon.png';

// 6
// import { React } from '../Images/icons/react-icon.png';

// 7
// import { MongoDB } from '../Images/icons/mongodb-icon.png';

// 8
// import { Python } from '../Images/icons/python-icon.png';

// 9
// import { Pip } from '../Images/icons/pip-icon.png';

// 10
// import { Django } from '../Images/icons/django-icon.png';


const HomePage = (props) => {
    // LIKE BUTTON
    useEffect(() => {
        // update style on theme change
        props.updateLikeBtn();
    }, [props.theme]);

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
    if (carBool && window.innerWidth > 768) { // 583
        setCarBool(false);
        setCarousel(true);
    }

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) { // 583
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
    };

    let carouselData = [
        {
            id: "projects-1",
            title: <b><h2 tabIndex={slideTabIdx0} className="flex-center-align underline project-highlight-margin">GoodEval</h2></b>,
            links: <div className="flex-center">
                <div className="carousel-link-layout">
                    <div className="inline-divider"></div>
                    <a href="https://goodeval-1d265775b25d.herokuapp.com/" className="link-color link-desat" target="_blank" rel="noreferrer" tabIndex={slideTabIdx0}>Live Link</a>
                    <div className="inline-divider"></div>
                    <a href="https://github.com/bthol/GoodEval" className="link-color link-desat" target="_blank" rel="noreferrer" tabIndex={slideTabIdx0}>GitHub Page</a>
                    <div className="inline-divider"></div>
                </div>
            </div>,
            text: <div>
                <p><b>Project Description:</b> GoodEval is a multi-page web app computational package composed of the GoodEval Calulator, its more advanced counterpart the GoodEval Evaluator powered by the Eval API, as well as a variety of form interfaces making use of the Eval API or dedicated scripts.</p>
                <p><b>Tech Stack:</b> Python, Pip, Django, Flask, JavaScript, HTML, CSS, Heroku Cloud Service Provider (CSP)</p>
            </div>,
            list: <ul>
                <li>The Eval API evaluates string data in place of basic numeral processing to access the advantage of a whole array of key functions.</li>
                <li>Calculator features a cursor mode that allows for problem editing to avoid the inconvenience of re-entering the problem after a global clear is performed.</li>
                <li>Pre-validation and post-validation exist in the Calculator to prevent invalid user input into logic while accounting for validation differences in cursor mode.</li>
            </ul>,
        },
        {
            id: "projects-2",
            title: <b><h2 tabIndex={slideTabIdx1} className="flex-center underline project-highlight-margin">Space Battle</h2></b>,
            links: <div className="flex-center">
                <div className="carousel-link-layout">
                    <div className="inline-divider"></div>
                    <a href="https://bthol.github.io/Space-Battle/" className="link-color link-desat" target="_blank" rel="noreferrer" tabIndex={slideTabIdx1}>Live Link</a>
                    <div className="inline-divider"></div>
                    <a href="https://github.com/bthol/Space-Battle" className="link-color link-desat" target="_blank" rel="noreferrer" tabIndex={slideTabIdx1}>GitHub Page</a>
                    <div className="inline-divider"></div>
                </div>
            </div>,
            text: <div>
                <p><b>Project Description:</b> Fight off the alien horde for a new high score in this arcade-style battle game!</p>
                <p><b>Tech Stack:</b> JavaScript, HTML, CSS, JQuery, Express.js, EJS templates, JS Modules, MongoDB Atlas, Mongoose Object Document Modelling (ODM), Heroku Cloud Service Provider (CSP)</p>
            </div>,
            list: <ul>
                <li>Custom RESTful API linked to a cloud database that allows game scores to be stored between sessions, so that the top 10 scores of all time can be displayed on the scoreboard page.</li>
                <li>State variables, data structures, and Document Object Model (DOM) selections are organized into respective JS modules for best code manageability practices.</li>
                <li>Pages are displayed by calling functions that mutate the DOM and tracked pages with a global variable that updates when a page's function is run.</li>
                <li>All music and sound FX made from scratch by use of audio synthesis.</li>
            </ul>,
        },
        {
            id: "projects-3",
            title: <b><h2 tabIndex={slideTabIdx2} className="flex-center underline project-highlight-margin">Retro Toe</h2></b>,
            links: <div className="flex-center">
                <div className="carousel-link-layout">
                    <div className="inline-divider"></div>
                    <a href="https://bthol.github.io/Retro-Toe/" className="link-color link-desat" target="_blank" rel="noreferrer" tabIndex={slideTabIdx2}>Live Link</a>
                    <div className="inline-divider"></div>
                    <a href="https://github.com/bthol/Tic-Tac-Toe" className="link-color link-desat" target="_blank" rel="noreferrer" tabIndex={slideTabIdx2}>GitHub Page</a>
                    <div className="inline-divider"></div>
                </div>
            </div>,
            carousel: <img src="" alt="project carousel"></img>,
            text: <div>
                <p><b>Project Description:</b> Tic Tac Toe. Retro style.</p>
                <p><b>Tech Stack:</b> JavaScript, HTML, CSS</p>
            </div>,
            list: <ul>
                <li>Algorithms for game logic are written from scratch using a mere 100 lines of code.</li>
                <li>Mobile-friendly UI layout utilizes relative units, and the CSS Flex and Grid modules for maximal responsivity across device viewports.</li>
                <li>Deployment of application uses GitHub Pages.</li>
            </ul>,
        },
    ];

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
                    <Comp9 title={"About Me"} text={Content.about} enter={props.enter} mobile={props.mobile} />
                </div>
                <br />
            </div>
            <div id="homepage-mid-1" className="content-container shadow-behind">
                <div className="flex-center-vert">
                    <div className="carousel-container">
                        <div className={`projects-carousel carPos${carPos}`}>
                            <Comp2
                                projectTitle={carouselData[0].title}
                                projectText={carouselData[0].text}
                                projectLinks={carouselData[0].links}
                                projectList={carouselData[0].list}
                                ></Comp2>
                            <br />
                            <Comp2
                                projectTitle={carouselData[1].title}
                                projectText={carouselData[1].text}
                                projectLinks={carouselData[1].links}
                                projectList={carouselData[1].list}
                                ></Comp2>
                            <br />
                            <Comp2
                                projectTitle={carouselData[2].title}
                                projectText={carouselData[2].text}
                                projectLinks={carouselData[2].links}
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
               
            </div>

            {/* <div id="homepage-mid-2">
            
            // put in a scrolling icon list with faded edges

                <div className="content-container"></div>
            </div> */}

            <div id="homepage-mid-3" className="content-container shadow-behind">
                <h3 className="underline text-x-large" tabIndex={0}>{Content.skills[0].sectionTitle}</h3>
                <Comp1
                    skillsTitle={Content.skills[1].title}
                    skillsList={Content.skills[1].list}
                    id={Content.skills[1].id}
                    mobile={props.mobile}
                ></Comp1>
                <Comp1
                    skillsTitle={Content.skills[2].title}
                    skillsList={Content.skills[2].list}
                    id={Content.skills[2].id}
                    mobile={props.mobile}
                ></Comp1>
                <Comp1
                    skillsTitle={Content.skills[3].title}
                    skillsList={Content.skills[3].list}
                    id={Content.skills[3].id}
                    mobile={props.mobile}
                ></Comp1>
                <Comp1
                    skillsTitle={Content.skills[4].title}
                    skillsList={Content.skills[4].list}
                    id={Content.skills[4].id}
                    mobile={props.mobile}
                ></Comp1>
            </div>

            <div id="homepage-mid-4" className="content-container shadow-behind">
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

            <div id="homepage-mid-5" className="content-container shadow-behind container-last">
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