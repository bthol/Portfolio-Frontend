import React from "react";

const Section2 = (props) => {
    return (
        <div className="carousel-item">
            <b><p className="text-large flex-center" tabIndex={0}>{props.projectTitle}</p></b>
            {props.projectText}
            {props.projectList}
        </div>
    )
};

export { Section2 };