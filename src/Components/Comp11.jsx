import React from "react";

const Comp11 = (props) => {
    return(
        <div className="content-container shadow-behind comp11-layout">
            <h3 className="underline text-x-large">{props.name}</h3>
            <a href={props.url} target="_blank" rel="noreferrer" className="gameplay-button">PLAY</a>
            <p>{props.description}</p>
        </div>
    )
}

export { Comp11 }