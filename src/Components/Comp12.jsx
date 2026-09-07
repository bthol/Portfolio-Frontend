import React from "react";

const Comp12 = (props) => {
    return(
        <div className="content-container shadow-behind layout-width">
            <h3 className="underline text-x-large">{props.name}</h3>
            <a href={props.url} target="_blank" rel="noreferrer" style={{cursor:"pointer"}} className="link-desat" onClick={(e) => {
                if (props.url === null || props.url === undefined) {
                    props.notifyFeature(e, true);
                }
            }}>Try this Software</a>
            <p>Software Type: {props.softwareType}</p>
            <p>Platform: {props.platform}</p>
            <p>Purpose: {props.purpose}</p>
            <p>Tech Stack: {props.techStack}</p>
            <p>Description: {props.description}</p>
            <p>{props.list}</p>
        </div>
    )
}

export { Comp12 }