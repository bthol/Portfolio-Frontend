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
        if (!navState1) {setNavTabIdx1(0)} else {setNavTabIdx1(-1)}
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
        if (!navState2) {setNavTabIdx2(0)}else{setNavTabIdx2(-1)}
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
    }

    const navData = [
        {
            name: "Pages ",
            links: <div className="nav-menu-list">
                <a href="" onClick={(e) => {
                    e.preventDefault();
                    props.goPage(2);
                }} className="link-desat" tabIndex={navTabIdx1}>Art Gallery</a>
            </div>,
        },
        {
            name: "Projects ",
            links: <div className="nav-menu-list">
                <p className="cursor-default"><u>Games</u></p>
                <a href="https://bthol.github.io/Space-Battle/" target="_blank" className="link-desat" tabIndex={navTabIdx2}>Space Battle</a>
                <a href="https://bthol.github.io/Retro-Toe/" target="_blank" className="link-desat" tabIndex={navTabIdx2}>Retro Toe</a>
                <p className="cursor-default"><u>Mini</u></p>
                <a href="https://bthol.github.io/Magic-8-Ball/" target="_blank" className="link-desat" tabIndex={navTabIdx2}>Magic 8 Ball</a>
                <a href="https://bthol.github.io/holiday-tree/" target="_blank" className="link-desat" tabIndex={navTabIdx2}>Holiday Tree</a>
                <p className="cursor-default"><u>Utility</u></p>
                <a onClick={(e) => {
                    props.featureAlertFunct(e);
                }} href="" target="_blank" className="link-desat"  tabIndex={navTabIdx2}>Calculo</a>
                <a onClick={(e) => {
                    props.featureAlertFunct(e);
                }} href="" target="_blank" className="link-desat"  tabIndex={navTabIdx2}>Cryptos</a>
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
                <div className="flex-around">
                    <div className="home-button-container">
                        <button className="nav-buttons link-desat" onClick={(e) => {
                            props.goPage(1);
                            initNav();
                        }}>Home</button>
                    </div>
                    <NavButton
                        id={0}
                        name={navData[0].name}
                        links={navData[0].links}
                        navState={navState1}
                        drop={drop1}
                        toggleNavState={toggleNavState1}
                        initNav={initNav}
                        ></NavButton>
                    <NavButton
                        id={1}
                        name={navData[1].name}
                        links={navData[1].links}
                        navState={navState2}
                        drop={drop2}
                        toggleNavState={toggleNavState2}
                        initNav={initNav}
                    ></NavButton>
                    <div className="theme-button-container">
                        <div className="no-select">L</div>
                        <button className={`theme-btn ${props.btnTheme}`} onClick={() => {props.toggleTheme()}}>
                                <div className="theme-btn-slider"></div>
                        </button>                  
                        <div className="no-select">D</div>
                    </div>
                </div>
                <div className="scroll-track-bar" style={{width: `${props.docScroll}%`}}></div>
            </nav>
        </header>
    )
};

export { Header }