import React from "react";
import { useState } from "react";

const Comp9 = (props) => {
    const [show, setShow] = useState(false);
    const [style, setStyle] = useState("");
    const toggle = () => {
        setShow(!show)
        if (show) {
            setStyle("")
        } else {
            setStyle("expand-text")
        }
    }
    return(
        <div className={`flex-center ${style}`} onClick={toggle}>
            <div className="content-highlight">
                <div className="flex-center link-desat"><b>{props.title}</b></div>
                { show &&
                    <div className="cursor-default">
                        <br />
                        {props.text}
                    </div>
                }
            </div>
        </div>
    )
}

export { Comp9 }