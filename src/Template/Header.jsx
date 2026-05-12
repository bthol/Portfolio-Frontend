import React from 'react';
import { useState } from 'react';
import { AugiumIcon } from '../Images/AugiumIcon';
import { NavButton } from './NavButton';

const Header = (props) => {

    // NAV LOGIC
    // 1
    const [drop1, setDrop1] = useState("menu-close");
    const [navState1, setNavState1] = useState(false);
    const [navTabIdx1, setNavTabIdx1] = useState(-1);
    const toggleNavState1 = () => {
        setNavState1(!navState1);
        if (!navState1) { setNavTabIdx1(0) } else { setNavTabIdx1(-1) }
        menuDisplay1();
    }
    const menuDisplay1 = () => {
        if (!navState1) {
            setDrop1("menu-open");
        } else {
            setDrop1("menu-close");
        }
    }
    // 2
    const [drop2, setDrop2] = useState("menu-close");
    const [navState2, setNavState2] = useState(false);
    const [navTabIdx2, setNavTabIdx2] = useState(-1);
    const toggleNavState2 = () => {
        setNavState2(!navState2);
        if (!navState2) { setNavTabIdx2(0) } else { setNavTabIdx2(-1) }
        menuDisplay2();
    }
    const menuDisplay2 = () => {
        if (!navState2) {
            setDrop2("menu-open");
        } else {
            setDrop2("menu-close");
        }
    }

    const initNav = () => {
        setNavState1(false);
        setDrop1("menu-close");
        setNavTabIdx1(-1)
        setNavState2(false);
        setDrop2("menu-close");
        setNavTabIdx2(-1)
        document.body.querySelectorAll('.nav-menu-list').forEach((item) => { item.scrollTo(0, 0) });
    }

    const navData = [
        {
            name: "Projects",
            links: <div className="nav-menu-list">

                <p className="cursor-default"><u>Utility</u></p>
                
                <div onClick={(e) => {
                    e.preventDefault();
                    props.goPage(2);
                }} className="link-desat" tabIndex={navTabIdx1}>Software</div>

                <p className="cursor-default"><u>Entertainment</u></p>

                <div onClick={(e) => {
                    e.preventDefault();
                    props.goPage(3);
                }} className="link-desat" tabIndex={navTabIdx1}>Games</div>
                
            </div>,
        },
        {
            name: "Media",
            links: <div className="nav-menu-list">

                {/* <p className="cursor-default"><u>Eyes</u></p> */}

                <div onClick={(e) => {
                    e.preventDefault();
                    props.goPage(4);
                }} className="link-desat" tabIndex={navTabIdx2}>Gallery</div>
                
                {/* <div onClick={(e) => {
                    e.preventDefault();
                    props.goPage(5);
                }} className="link-desat" tabIndex={navTabIdx2}>Origami</div> */}

                {/* <p className="cursor-default"><u>Ears</u></p> */}

                {/* <div onClick={(e) => {
                    e.preventDefault();
                    props.goPage(6);
                }} className="link-desat" tabIndex={navTabIdx2}>Music</div> */}
                
            </div>,
        },
    ];

    return (
        <header className="app-header">
            <div className="no-select">
                <AugiumIcon></AugiumIcon>
                <h3 id="website-title" title="Blake Thollaug's Portfolio Website">Blake Thollaug's Portfolio Website</h3>
            </div>
            <nav className="app-nav">
                <div className="flex-between flex-gap-1">
                    <div className="flex-around flex-gap-1">

                        {/* home button */}
                        <div className="home-button-container">
                            <div rel="scrollPosition"><button className="nav-buttons link-desat" onClick={() => {
                                props.goPage(1);
                                initNav();
                            }}>Home</button></div>
                        </div>

                        {/* pages */}
                        <NavButton
                            id={0}
                            name={navData[0].name}
                            links={navData[0].links}
                            navState={navState1}
                            drop={drop1}
                            toggleNavState={toggleNavState1}
                            initNav={initNav}
                        ></NavButton>

                        {/* projects */}
                        <NavButton
                            id={1}
                            name={navData[1].name}
                            links={navData[1].links}
                            navState={navState2}
                            drop={drop2}
                            toggleNavState={toggleNavState2}
                            initNav={initNav}
                        ></NavButton>

                    </div>

                    {/* theme slider */}
                    <div className="theme-button-container">
                        <div className="no-select">L</div>
                        <button className={`theme-btn ${props.btnTheme}`} onClick={props.toggleTheme}>
                            <div className="theme-btn-slider"></div>
                        </button>
                        <div className="no-select">D</div>
                    </div>
                </div>
                <div className="scroll-track-bar" style={{ width: `${props.docScroll}%` }}></div>
            </nav>
        </header>
    )
};

export { Header }