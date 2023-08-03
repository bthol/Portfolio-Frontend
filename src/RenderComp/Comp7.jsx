import React, { useState } from "react";

const Comp7 = (props) => {
    const [select, setSelect] = useState(true);
    const toggleSelect = (e) => {
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