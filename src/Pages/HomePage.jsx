import React, { useState} from 'react';
import { Comp1 } from '../RenderComp/Comp1';
import { Comp2 } from '../RenderComp/Comp2';
import { Comp3 } from '../RenderComp/Comp3';
import { Comp4 } from '../RenderComp/Comp4';
import { ProfilePhoto } from '../Images/ProfilePhoto';
import { HomePageContent as Content } from '../ContentPropModules/HomePageContent';

const HomePage = (props) => {

    // PROJECT CAROUSEL (for tablet and larger)
    const [carPos, setCarPos] = useState(0);
    const [carBut0, setCarBut0] = useState("highlight-carBut");
    const [carBut1, setCarBut1] = useState("carBut-hover");
    const [carBut2, setCarBut2] = useState("carBut-hover");
    const [slideTabIdx0, setSlideTabIdx0] = useState(0);
    const [slideTabIdx1, setSlideTabIdx1] = useState(-1);
    const [slideTabIdx2, setSlideTabIdx2] = useState(-1);

    const highlightButton = (pos) => {
        setCarBut0("carBut-hover");
        setCarBut1("carBut-hover");
        setCarBut2("carBut-hover");
        if (pos === 0) {
            setSlideTabIdx0(0);
            setSlideTabIdx1(-1);
            setSlideTabIdx2(-1);
            setCarBut0("highlight-carBut")
        } else if (pos === 1) {
            setSlideTabIdx0(-1);
            setSlideTabIdx1(0);
            setSlideTabIdx2(-1);
            setCarBut1("highlight-carBut")
        } else if (pos === 2) {
            setSlideTabIdx0(-1);
            setSlideTabIdx1(-1);
            setSlideTabIdx2(0);
            setCarBut2("highlight-carBut")
        }
    }

    let carouselData = [
        {
          id: "projects-1",
          title: <b><div tabIndex={slideTabIdx0} className="text-large flex-center">Space Battle</div></b>,
          text: <div>
                <p tabIndex={slideTabIdx0}><b>Description:</b> Fight off the alien horde for a new high score in this arcade-style battle game!</p>
                <p tabIndex={slideTabIdx0}><b>Technologies:</b> JavaScript, HTML, CSS, JQuery, Express.js, EJS templates, MongoDB Atlas, Mongoose Object Document Modelling, Heroku Cloud Service Provider</p>
              </div>,
          list: <ul>
            <li><a href="https://bthol.github.io/Space-Battle/" className="link-desat" target="_blank" rel="noreferrer" tabIndex={slideTabIdx0}>Live Link</a></li>
            <li><a href="https://github.com/bthol/Space-Battle" className="link-desat" target="_blank" rel="noreferrer" tabIndex={slideTabIdx0}>GitHub Page</a></li>
            <li tabIndex={slideTabIdx0}>Connected a custom RESTful API linked to a cloud database that allows game scores to be stored between sessions, so that the top 10 scores of all time can be displayed on the scoreboard page.</li>
            <li tabIndex={slideTabIdx0}>Organized state variables, data structures, and Document Object Model (DOM) selections into respective JS modules for best code manageability practices.</li>
            <li tabIndex={slideTabIdx0}>Displayed pages by calling functions that mutate the DOM and tracked pages with a global variable that updates when a page's function is run.</li>
          </ul>,
        },
        {
          id: "projects-2",
          title: <b><div tabIndex={slideTabIdx1} className="text-large flex-center">Magic 8 Ball</div></b>,
          text: <div>
            <p tabIndex={slideTabIdx1}><b>Description:</b> Discover your destiny with the mystical guidance of the Magic 8 Ball.</p>
            <p tabIndex={slideTabIdx1}><b>Technologies:</b> JavaScript, HTML, CSS</p>
          </div>,
          list: <ul>
            <li><a href="https://bthol.github.io/Magic-8-Ball/" className="link-desat" target="_blank" rel="noreferrer" tabIndex={slideTabIdx1}>Live Link</a></li>
            <li><a href="https://github.com/bthol/Magic-8-Ball" className="link-desat" target="_blank" rel="noreferrer" tabIndex={slideTabIdx1}>GitHub Page</a></li>
            <li tabIndex={slideTabIdx1}>Created a breathing glow effect for the magic eight ball using asynchronous JavaScript functions to animate style.</li>
            <li tabIndex={slideTabIdx1}>Wrote a CSS keyframe animation that runs once for its full duration on image click before the image is updated with the answer.</li>
            <li tabIndex={slideTabIdx1}>Implemented a polychromatic animated background gradient.</li>
          </ul>,
        },
        {
          id: "projects-3",
          title: <b><div tabIndex={slideTabIdx2} className="text-large flex-center">Retro Toe</div></b>,
          carousel: <img src="" alt="project carousel"></img>,
          text: <div>
            <p tabIndex={slideTabIdx2}><b>Description:</b> Tic Tac Toe. Retro style.</p>
            <p tabIndex={slideTabIdx2}><b>Technologies:</b> JavaScript, HTML, CSS</p>
          </div>,
          list: <ul>
            <li><a href="https://bthol.github.io/Retro-Toe/" className="link-desat" target="_blank" rel="noreferrer" tabIndex={slideTabIdx2}>Live Link</a></li>
            <li><a href="https://github.com/bthol/Tic-Tac-Toe" className="link-desat" target="_blank" rel="noreferrer" tabIndex={slideTabIdx2}>GitHub Page</a></li>
            <li tabIndex={slideTabIdx2}>Coded algorithms for game logic from scratch using a mere 100 lines of code.</li>
            <li tabIndex={slideTabIdx2}>Made a mobile-friendly UI layout by utilizing relative units, and the CSS Flex and Grid modules for maximal responsivity across device viewports.</li>
            <li tabIndex={slideTabIdx2}>Deployed the application using GitHub Pages.</li>
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
                            <div>
                                <div className="flex-center-align">views {props.portfolioViews}</div>
                            </div>
                            <div>
                                <div className="flex-center-align"><button className="like-btn" onClick={props.likePortfolio}>Like</button>{props.portfolioLikes}</div>
                            </div>
                        </div>
                        <hr noshade="true" />
                        <div className="flex-around">
                            <a href="https://www.linkedin.com/in/blake-thollaug/" target="_blank" rel="noreferrer"><button type="button" className="buttons" tabIndex={-1}>LinkedIn</button></a>
                            |
                            <a href="https://github.com/bthol" target="_blank" rel="noreferrer"><button type="button" className="buttons" tabIndex={-1}>GitHub</button></a>
                            |
                            <a href="mailto:bthollaug@gmail.com" target="_blank" rel="noreferrer"><button type="button" className="buttons" tabIndex={-1}>Gmail</button></a>
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
                        props.mobile
                        ? <div></div>
                        : <div className="flex-center-vert">
                            <div className="carButs flex-center">
                                <button onClick={() => {
                                    setCarPos(0);
                                    highlightButton(0);
                                }} className={`cursor-pointer carBut ${carBut0}`}></button>
                                <button onClick={() => {
                                    setCarPos(1);
                                    highlightButton(1);
                                }} className={`cursor-pointer carBut ${carBut1}`}></button>
                                <button onClick={() => {
                                    setCarPos(2);
                                    highlightButton(2);
                                }} className={`cursor-pointer carBut ${carBut2}`}></button>
                            </div>
                        </div>
                    }
                    <br />
                </div>
            </div>
            <div id="homepage-mid-2" className="content-container shadow-behind">
                <h3 className="underline text-x-large" tabIndex={0}>Skills and Knowledge</h3>
                <div className="section-lists">
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
                {
                    props.mobile
                    ? <div></div>
                    : <div><br /></div>
                }
            </div>
            <div id="homepage-mid-3" className="content-container shadow-behind">
                <h3 className="underline text-x-large" tabIndex={0}>Work Experience Highlights</h3>
                <div className="content-highlight">
                    <Comp3
                        jobTitle={Content.experience[0].jobTitle}
                        employer={Content.experience[0].employer}
                        workPeriod={Content.experience[0].workPeriod}
                        list={Content.experience[0].list}
                        enter={props.enter}
                    ></Comp3>
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