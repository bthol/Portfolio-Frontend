import React from 'react';
import { useState } from 'react';
import { AugiumIcon } from '../Images/AugiumIcon'

const Header = () => {

    const [menuItem1, setMenuItem1] = useState(false);
    const toggleMenuItem1 = () => {
        setMenuItem1(!menuItem1);
    }

    const [menuItem2, setMenuItem2] = useState(false);
    const toggleMenuItem2 = () => {
        setMenuItem2(!menuItem2);
    }

    const closeMenus = () => {
        setMenuItem1(false);
        setMenuItem2(false);
    }

    return(
        <header className="app-header">
            <div className="no-select">
                <AugiumIcon></AugiumIcon>
                <h3 id="website-title" title="Blake Thollaug's Portfolio Website" tabIndex={0}>Blake Thollaug's Portfolio Website</h3>
            </div>
            <nav className="app-nav flex-around">
                <div>
                    <button className="link-desat nav-root-buttons no-select"
                        onClick={(e) => {
                            e.preventDefault();
                            closeMenus();
                            toggleMenuItem2();
                        }}
                        >Utility Apps
                    </button>
                    {menuItem2 &&
                        <div className="nav-menu-style">
                            <a href="https://github.com/bthol/Calculo/" target="_blank" rel="noreferrer" className="link-desat">Calculo</a>
                        </div>
                    }
                </div>
                <div>
                    <button className="link-desat nav-root-buttons no-select"
                        onClick={(e) => {
                            e.preventDefault();
                            closeMenus();
                            toggleMenuItem1();
                        }}
                        >Game Apps
                    </button>
                    {menuItem1 &&
                        <div className="nav-menu-style">
                            <a href="https://bthol.github.io/Space-Battle/" target="_blank" rel="noreferrer" className="link-desat">Space Battle</a> 
                            <a href="https://bthol.github.io/Magic-8-Ball/" target="_blank" rel="noreferrer" className="link-desat">Magic 8 Ball</a>
                            <a href="https://bthol.github.io/Retro-Toe/" target="_blank" rel="noreferrer" className="link-desat">Retro Toe</a>
                        </div>
                    }
                </div>
            </nav>
        </header>
    )
};

export { Header };