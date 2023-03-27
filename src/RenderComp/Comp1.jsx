import React from "react";

const Comp1 = (props) => {
    return (
        <div id={props.id} className="underline">
            <div className="text-large" tabIndex={0}>{props.skillsTitle}</div>
            {props.skillsList}
        </div>
    )
};

export { Comp1 };