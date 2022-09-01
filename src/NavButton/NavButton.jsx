import { useState } from 'react';
import { React } from 'react';

const NavButton = (props) => {
    return (
        <div>
            <button className="nav-root-buttons link-desat no-select"
                onClick={(e) => {
                    e.preventDefault();
                    props.closeNav();
                    props.toggleNavState();
                }}
                >{props.name}
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