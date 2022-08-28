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
                >{props.rootName}
            </button>
            {props.navState &&
                <div>
                    {props.rootLinks}
                </div>
            }
        </div>
    )
}

export { NavButton };