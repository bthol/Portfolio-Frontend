import React from "react";

const Comp2 = (props) => {
    return (
        <div id={props.id} className="carousel-item" tabIndex={0}>
            <b><div className="text-large flex-center">{props.projectTitle}</div></b>
            <br />
            {props.projectText}
            {props.projectList}
        </div>
    )
};

export { Comp2 };