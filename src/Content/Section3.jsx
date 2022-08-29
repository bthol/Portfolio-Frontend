import React from "react";

const Section3 = (props) => {
    return (
        <div>
            <p className="text-large" tabIndex={0}>{props.jobTitle}</p>
            <p className="flex-between" tabIndex={0}><i>{props.employer}</i>{props.workPeriod}</p>
            {props.list}
        </div>
    )
};

export { Section3 };