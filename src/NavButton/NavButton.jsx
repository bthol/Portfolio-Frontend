import { React } from 'react';

const NavButton = (props) => {
    return (
        <div>
            <button className="nav-buttons link-desat no-select"
                onClick={(e) => {
                    e.preventDefault();
                    props.initNav();
                    props.toggleNavState();
                }}
                ><div className="flex-between">{props.name} <div className={`nav-arrow ${props.drop}`}></div></div>
            </button>
                <div className={`nav-menu-style ${props.drop}`}>
                    {props.links}
                </div>
        </div>
    )
}

export { NavButton };