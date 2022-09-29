import React from "react";

const Section3 = (props) => {
    return (
        <div>
            <div className="text-large" tabIndex={0}><b>{props.jobTitle}</b></div>
            <div className="flex-between" tabIndex={0}><p className="text-large">{props.employer}</p><p>{props.workPeriod}</p></div>
            {props.list}
        </div>
    )
};

export { Section3 };