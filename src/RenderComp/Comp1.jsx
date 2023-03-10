import React from "react";

const Comp1 = (props) => {
    return (
        <div id={props.id} className="title-line">
            <p className="text-large" tabIndex={0}>{props.skillsTitle}</p>
            {props.skillsList}
        </div>
    )
};

export { Comp1 };