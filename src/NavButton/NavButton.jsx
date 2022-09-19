import { useState } from 'react';
import { React } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

const NavButton = (props) => {
    return (
        <div>
            <button className="nav-buttons link-desat no-select"
                onClick={(e) => {
                    e.preventDefault();
                    props.closeNav();
                    props.toggleNavState();
                }}
                >{props.name} <MdKeyboardArrowDown className={`nav-arrow ${props.drop}`} />
            </button>
            {props.navState &&
                <div className={`nav-menu-style ${props.drop}`}>
                    {props.links}
                </div>
            }
        </div>
    )
}

export { NavButton };