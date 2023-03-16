import React from "react";

const Comp3 = (props) => {
    return (
        <div id={props.id} className="content-highlight">
            <div className="text-large" tabIndex={0}><b>{props.jobTitle}</b></div>
            <div className="flex-between" tabIndex={0}><p className="text-large">{props.employer}</p><p>{props.workPeriod}</p></div>
            {props.list}
        </div>
    )
};

export { Comp3 };