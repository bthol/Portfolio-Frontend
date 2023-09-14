import React from "react";
import { useState } from "react";

const Comp9 = (props) => {
    const [show, setShow] = useState(false);
    const toggle = () => {
        setShow(!show)
    }
    return (
        <div className="content-highlight">
            <div className="flex-center link-desat" onClick={toggle} onKeyDown={(e) => {if (props.enter(e)) {toggle()}}} tabIndex={0}><b>{props.title}</b></div>
            {show &&
                <div className="cursor-default">
                    <br />
                    {props.text}
                </div>
            }
        </div>
    )
}

export { Comp9 }