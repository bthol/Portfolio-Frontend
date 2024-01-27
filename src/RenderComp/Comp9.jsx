import React from "react";
import { useState } from "react";
import { Notify } from "../Modals/Notify";

const Comp9 = (props) => {
    const [show, setShow] = useState(false);
    const toggle = () => {
        setShow(!show)
    }
    return (
        <div>
            <div className="content-highlight">
                <div className="flex-center link-desat" onClick={toggle} onKeyDown={(e) => {if (props.enter(e)) {toggle()}}} tabIndex={0}><b>{props.title}</b></div>
                {show &&
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