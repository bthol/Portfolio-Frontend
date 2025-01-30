import { React } from 'react';

const NavButton = (props) => {
    const menuOverflow = () => {
        const navMenu = document.querySelectorAll(".nav-menu-list")[props.id];
        if (navMenu.offsetHeight > 200) {
            // style for dropdown menu
            navMenu.style.overflow = "-moz-scrollbars-vertical";
            navMenu.style.overflowY = "scroll";
            navMenu.style.height = "200px";
        }
    };

    const click = (e) => {
        e.preventDefault();
        props.initNav();
        props.toggleNavState();
        menuOverflow();
    };

    return (
        <div>
            <button className="nav-buttons link-desat" onClick={(e) => { click(e) }}>
                <div className="flex-between">{props.name} <div className={`nav-arrow ${props.drop}`}></div></div>
            </button>
            <div className={`nav-menu ${props.drop}`} onClick={() => { props.initNav() }}>{props.links}</div>
        </div>
    )
}

export { NavButton };