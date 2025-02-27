import React from "react";

const Comp2 = (props) => {
    return (
        <div id={props.id} className="carousel-item">
            {props.projectTitle}
            {props.projectLinks}
            <br /> 
            {props.projectText}
            {props.projectList}
        </div>
    )
};

export { Comp2 };