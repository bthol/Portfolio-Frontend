import React from "react";

const Comp5 = (props) => {
    return(
        <div className="artpage-layout-width origami-grid-layout">
            <div className="origami-grid-images">
                {props.image1}
                {props.image2}
            </div>
            <div className="content-container">
                {props.name}
                {props.describe}
            </div>
        </div>
    )
}

export { Comp5 }