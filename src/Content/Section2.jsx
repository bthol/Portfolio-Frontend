import React from "react";

const Section2 = (props) => {
    return (
        <div className="carousel-item" tabIndex={0}>
            <b><p className="text-large flex-center">{props.projectTitle}</p></b>
            {props.projectText}
            {props.projectList}
        </div>
    )
};

export { Section2 };