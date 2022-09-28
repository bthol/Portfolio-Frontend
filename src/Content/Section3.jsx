import React from "react";

const Section3 = (props) => {
    return (
        <div>
            <div className="text-large" tabIndex={0}><b>{props.jobTitle}</b></div>
            <p className="flex-between" tabIndex={0}><div className="text-large">{props.employer}</div>{props.workPeriod}</p>
            {props.list}
        </div>
    )
};

export { Section3 };