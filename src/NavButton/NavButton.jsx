import { React } from 'react';
import { useState } from 'react';

const NavButton = (props) => {

    const [menuItem, setMenuItem] = useState(false);
    const toggleMenuItem = () => {
        setMenuItem(!menuItem);
    }

    return(
    <div>
        <button className="nav-root-buttons link-desat no-select"
            onClick={(e) => {
                e.preventDefault();
                toggleMenuItem();
            }}
            >{props.rootName}
        </button>
        {menuItem &&
            <div>
                {props.rootLinks}
            </div>
        }
        </div>
    )
}

export { NavButton };