import { useState } from 'react';
import { React } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

class NavButton extends React.Component {
    render() {
        return <div>
            <button className="nav-buttons link-desat no-select"
                onClick={(e) => {
                    e.preventDefault();
                    this.props.closeNav();
                    this.props.toggleNavState();
                }}
                >{this.props.name} <MdKeyboardArrowDown className={`nav-arrow ${this.props.drop}`} />
            </button>
            {this.props.navState &&
                <div className={`nav-menu-style ${this.props.drop}`}>
                    {this.props.links}
                </div>
            }
        </div>
    }
}

export { NavButton };