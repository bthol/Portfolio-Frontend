import React, { useState } from "react";

const Comp7 = (props) => {
    const [sized, setSized] = useState(false);
    const [select, setSelect] = useState(true);
    const toggleSelect = (e) => {
        new Promise((resolve) => {
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
                // calculate aspect ratio of image (AR)
                const iAR = iH / iW;

                const getNewWidth = (iAR, iW, aH, aW) => {
                    let newWidth;
                    // get difference of area width and image width
                    const wDiff = aW - iW;
                    // adjust image width using difference to get new width
                    newWidth = iW + wDiff;
                    // get new height using new width and image aspect ratio
                    let newHeight = newWidth * iAR;
                    // get difference of area height and new height 
                    const hDiff = aH - newHeight;
                    // if new height exceeds area height
                    if (hDiff < 0) {
                        // get difference of area height and image height
                        const hDiff = aH - iH - 93;
                        // adjust image height using difference to get new height
                        newHeight = iH + hDiff;
                        // get new width using new height and image aspect ratio
                        newWidth = newHeight / iAR;
                    } else {
                        newWidth -= 93;
                    }
                    return newWidth;
                };
                new Promise((resolve) => {
                    setSized(true);
                    resolve("resolved")
                }).then(() => {
                    const newWidth = getNewWidth(iAR, iW, aH, aW);
                    a.firstChild.style.width = `${newWidth}px`;
                })
                window.addEventListener("resize", () => {
                    aH = a.offsetHeight;
                    aW = a.offsetWidth;
                    const newWidth = getNewWidth(iAR, iW, aH, aW);
                    a.firstChild.style.width = `${newWidth}px`;
                })
            }
        })
    }

    return (
        <div className={`gallery-image-container ${props.galleryColumn}`} onClick={(e) => { toggleSelect(e) }} onKeyDown={(e) => { if (props.enter(e)) { toggleSelect(e) } }}>
            <div>{props.image}</div>
            {!select && <div className="gallery-image-select">
                {sized && props.image}
                <div>{`${props.info} `} by Blake Thollaug </div>
            </div>}
        </div>
    )
}

export { Comp7 } 