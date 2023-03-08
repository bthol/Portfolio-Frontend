import React from "react";

const Comp2 = (props) => {
    return (
        <div className="content-highlight carousel-item" tabIndex={0}>
            <b><div className="text-large flex-center">{props.projectTitle}</div></b>
            {props.projectText}
            {props.projectList}
        </div>
    )
};

export { Comp2 };