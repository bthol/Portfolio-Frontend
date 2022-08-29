import React from "react";

const Section1 = (props) => {
    return (
        <div>
            <p className="text-large" tabIndex={0}>{props.skillsTitle}</p>
            {props.skillsList}
        </div>
    )
};

export { Section1 };