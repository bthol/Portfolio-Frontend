import React from "react";

const Comp4 = (props) => {
    return (
        <div id={props.id} className="content-highlight">
            <div className="flex-between"><div className="text-large"><b>{props.school}</b></div>{props.schoolPeriod}</div>
            <p className="exp-list"><b>Description: </b>{props.schoolDescription}</p>
        </div>
    )
};

export { Comp4 };