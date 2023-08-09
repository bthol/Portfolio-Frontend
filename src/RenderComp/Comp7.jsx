import React, { useState } from "react";

const Comp7 = (props) => {
    const [select, setSelect] = useState(true);
    const toggleSelect = (e) => {
        // get height and width of Area
        // get height and width of Image
        // calculate aspect ratios (AR)
        // where AR of Area < AR of Image
            // (Height of Area / Height of Image) * intial Width of Image = final Width of Image
            // assign final Width of Image to image
        // otherwise
            // (Smaller dimension of Area / AR of Image) * intial Width of Image = final Width of Image
            // assign final Width of Image to image
        // Rerender
        setSelect(!select);
    }

    return(
        <div className={`gallery-image-container ${props.galleryColumn}`} onClick={(e) => {toggleSelect(e)}} onKeyDown={(e) => {if (props.enter(e)) {toggleSelect(e)}}}>
            {!select && <div className="gallery-image-select">{props.image}</div>}
            <div>{props.image}</div>
        </div>
    )
}

export { Comp7 } 