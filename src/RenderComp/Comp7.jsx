import React from "react";

const Comp7 = (props) => {
    return(
        <div className={`gallery-image-container ${props.galleryColumn}`}>
            {props.image}
        </div>
    )
}

export { Comp7 } 