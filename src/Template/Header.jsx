import React from 'react';
import { useState } from 'react';
import { AugiumIcon } from '../Images/AugiumIcon';
import { NavButton } from '../NavButton/NavButton';

const Header = (props) => {
    // TRACKLENGTH BAR LOGIC
    const [docScroll, setDocScroll] = useState(0);
    
    let winHeight, trackLength;
    
    const getHeight = () => {
        return Math.max(
        document.body.clientHeight,
        document.documentElement.clientHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.scrollHeight,
        document.documentElement.scrollHeight
        )
        };
        
        let docheight = getHeight();
        
        const getInfo = () => {
        winHeight= window.innerHeight || (document.documentElement || document.body).clientHeight;
        docheight = getHeight();
        trackLength = docheight - winHeight;
    };
    getInfo();
    
    const scrollAmmount = () => {
        let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
        let pctScrolled = Math.floor(scrollTop/trackLength * 100);
        if (pctScrolled > 0) {
        setDocScroll(pctScrolled)
        }
    };
    
    window.addEventListener("resize", function(){
        getInfo();
    }, false)
    
    window.addEventListener("scroll", function(){
        scrollAmmount();
    }, false)

    // NAV LOGIC
    // 1
    const [drop1, setDrop1] = useState("menu-close");
    const [navState1, setNavState1] = useState(false);
    const toggleNavState1 = () => {
        setNavState1(!navState1);
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
    const toggleNavState2 = () => {
        setNavState2(!navState2);
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
        setNavState2(false);
        setDrop2("menu-close");
    }

    // NAV PROPS
    const navData = [
        {
        name: "Utility Apps",
        links: <div className="nav-menu-style">
            <a onClick={(e) => {
                props.featureAlertFunct(e);
            }} href="" target="_blank" className="link-desat">Calculo</a>
        </div>,
        },
        {
        name: "Game Apps",
        links: <div className="nav-menu-style">
            <a href="https://bthol.github.io/Space-Battle/" target="_blank" className="link-desat">Space Battle</a>
            <a href="https://bthol.github.io/Magic-8-Ball/" target="_blank" className="link-desat">Magic 8 Ball</a>
            <a href="https://bthol.github.io/Retro-Toe/" target="_blank" className="link-desat">Retro Toe</a>
        </div>,
        },
    ];

    return (
        <header className="app-header">
            <div className="no-select">
            <AugiumIcon></AugiumIcon>
            <h3 id="website-title" title="Blake Thollaug's Portfolio Website" tabIndex={0}>Blake Thollaug's Portfolio Website</h3>
            </div>
            <nav className="app-nav">
            <div className="flex-around">
                <NavButton
                name={navData[0].name}
                links={navData[0].links}
                navState={navState1}
                drop={drop1}
                toggleNavState={toggleNavState1}
                initNav={initNav}
                ></NavButton>
                <NavButton
                name={navData[1].name}
                links={navData[1].links}
                navState={navState2}
                drop={drop2}
                toggleNavState={toggleNavState2}
                initNav={initNav}
                ></NavButton>
            </div>
            <div className="scroll-track-bar" style={{width: `${docScroll}%`}}></div>
            </nav>
        </header>
    )
};

export { Header }