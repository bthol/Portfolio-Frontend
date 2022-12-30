import React from "react";

const Section4 = (props) => {
    return (
        <div className="main-section-style-content hover-effect">
            <div className="flex-between" tabIndex={0}><div className="text-large"><b>{props.school}</b></div>{props.schoolPeriod}</div>
            <p className="exp-list" tabIndex={0}><b>Description: </b>{props.schoolDescription}</p>
        </div>
    )
};

export { Section4 };