import React from "react";

const Comp7 = (props) => {
    return(
        <div className={`gallery-image hover-effect ${props.galleryColumn}`}>
            {props.image}
        </div>
    )
}

export { Comp7 } 