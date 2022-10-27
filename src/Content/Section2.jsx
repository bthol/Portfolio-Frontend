import React from "react";

const Section2 = (props) => {
    return (
        <div className="main-section-style-content carousel-item" tabIndex={0}>
            <b><div className="text-large flex-center">{props.projectTitle}</div></b>
            {props.projectText}
            {props.projectList}
        </div>
    )
};

export { Section2 };