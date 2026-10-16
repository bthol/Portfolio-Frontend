import React from "react";

const Comp12 = (props) => {
    return(
        <div className="content-container shadow-behind layout-width">
            <h3 className="underline text-x-large">{props.name}</h3>
            <a href={props.url} target="_blank" rel="noreferrer" style={{cursor:"pointer"}} className="link-color link-desat" onClick={(e) => {
                if (props.url === null || props.url === undefined) {
                    props.notifyFeature(e, true);
                }
            }}>Try this Software</a>
            <p><b>Software Type</b>: {props.softwareType}</p>
            <p><b>Platform</b>: {props.platform}</p>
            <p><b>Purpose</b>: {props.purpose}</p>
            <p><b>Tech Stack</b>: {props.techStack}</p>
            <p><b>Description</b>: {props.description}</p>
            <div>{props.list}</div>
        </div>
    )
}

export { Comp12 }