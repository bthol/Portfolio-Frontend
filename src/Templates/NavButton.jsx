import { React } from 'react';
import { useState } from 'react';

const NavButton = (props) => {
    const menuOverflow = () => {
        const navMenu = document.querySelectorAll(".nav-menu-list")[props.id];
        if (navMenu.offsetHeight > 250) {
            navMenu.style.height = "250px";
            navMenu.style.overflowY = "scroll"
        }
    }

    return (
        <div>
            <button className="nav-buttons link-desat"
                onClick={(e) => {
                    e.preventDefault();
                    props.initNav();
                    props.toggleNavState();
                    menuOverflow();
                }}
            ><div className="flex-between">{props.name} <div className={`nav-arrow ${props.drop}`}></div></div>
            </button>
            <div className={`nav-menu ${props.drop}`}
                onClick={() => {
                    props.initNav();
                }}
            >{props.links}</div>
        </div>
    )
}

export { NavButton };