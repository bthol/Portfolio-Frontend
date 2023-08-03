import React, { useState } from "react";

const Comp7 = (props) => {
    const [imgSelect, setImgSelect] = useState("");
    const [selected, setSelected] = useState(true);
    const [scrollAmmount, setScrollAmmount] = useState(0);
    const toggleSelect = (e) => {
        setSelected(!selected);
        if (selected) {
            // setScrollAmmount(e.pageY)
            setImgSelect("gallery-image-select");
            // window.scrollTo(0, -scrollAmmount);
            // console.log(e.pageY);
            window.scrollTo(0, 0);
        } else {
            setImgSelect("");
            // window.scrollTo(0, scrollAmmount);
        }
    }

    return(
        <div className={`gallery-image-container ${props.galleryColumn} ${imgSelect}`} onClick={(e) => {toggleSelect(e)}} onKeyDown={(e) => {if (props.enter(e)) {toggleSelect(e)}}}>
            {props.image}
        </div>
    )
}

export { Comp7 } 