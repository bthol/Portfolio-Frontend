import React, { useState } from "react";

const Comp7 = (props) => {
    const [imgSelect, setImgSelect] = useState("");
    const [selected, setSelected] = useState(true);
    const select = () => {
        setImgSelect("gallery-image-select");
        window.scrollTo(0, 0);
    }
    const deselect = () => {
        setImgSelect("");
    }
    const toggleSelect = () => {
        setSelected(!selected);
        if (selected) {
            select();
        } else {
            deselect();
        }
    }

    return(
        <div className={`gallery-image-container ${props.galleryColumn} ${imgSelect}`} onClick={toggleSelect} onKeyDown={(e) => {if (props.enter(e)) {toggleSelect();}}}>
            {props.image}
        </div>
    )
}

export { Comp7 } 