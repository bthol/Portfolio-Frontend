import React, { useState } from "react";

const Comp7 = (props) => {
    const [sized, setSized] = useState(false);
    const [select, setSelect] = useState(true);
    const toggleSelect = (e) => {
        new Promise((resolve, err) => {
            setSelect(!select);
            resolve("resolved")
        }).then(() => {
            if (select === true) {
                // select the area
                const a = document.getElementsByClassName("gallery-image-select")[0];
                // get height and width of Area
                let aH = a.offsetHeight;
                let aW = a.offsetWidth;
                // select the image
                const i = e.target;
                // get height and width of Image
                const iH = i.offsetHeight;
                const iW = i.offsetWidth;
                // calculate aspect ratios (AR)
                let aAR = aH / aW;
                const iAR = iH / iW;
                const getNewSize = (aAR, iAR, aH, aW, iH, iW) => {
                    let newSize;
                    if (aAR < iAR) {
                        // console.log(1);
                        newSize = (aH / iH) * iW;
                    } else {
                        if (aH > aW) {
                            // console.log(2);
                            newSize = aW;
                        } else {
                            // console.log(3);
                            newSize = aH / iAR;
                        }
                    }
                    return newSize;
                };
                new Promise((resolve) => {
                    setSized(true);
                    resolve("resolved")
                }).then(() => {
                    const newSize = getNewSize(aAR, iAR, aH, aW, iH, iW);
                    a.firstChild.style.width = `${newSize - 55}px`;
                })
                window.addEventListener("resize", () => {
                    console.log("ran");
                    aH = a.offsetHeight;
                    aW = a.offsetWidth;
                    aAR = aH / aW;
                    const newSize = getNewSize(aAR, iAR, aH, aW, iH, iW);
                    a.firstChild.style.width = `${newSize -100}px`;
                })
            }
        })
    }

    return(
        <div className={`gallery-image-container ${props.galleryColumn}`} onClick={(e) => {toggleSelect(e)}} onKeyDown={(e) => {if (props.enter(e)) {toggleSelect(e)}}}>
            {
                !select && <div className="gallery-image-select">
                    {sized && props.image}
                </div>
            }
            <div>{props.image}</div>
        </div>
    )
}

export { Comp7 } 