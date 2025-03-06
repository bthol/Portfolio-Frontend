import React, { useEffect } from "react";
import { useState } from "react";

const Comp9 = (props) => {
    const [env, setEnv] = useState(props.mobile);
    const [show, setShow] = useState(true);
    const toggle = () => {
        setShow(!show)
    }
    useEffect(() => {
        setEnv(props.mobile)
    }, [props.mobile]);
    
    return (
        <div>
            {env
            // mobile version (add height)
            ? <div className="content-highlight">
                <div className="flex-center link-desat" onClick={toggle} onKeyDown={(e) => {if (props.enter(e)) {toggle()}}} tabIndex={0}><b>{props.title}</b></div>
                {!show &&
                    <div className="cursor-default">
                        <br />
                        {props.text}
                    </div>
                }
            </div>
            
            // desktop version (pops over content)
            : show
                
            ? <div className="content-highlight flex-center link-desat" onClick={toggle} onKeyDown={(e) => {if (props.enter(e)) {toggle()}}} tabIndex={0}><b>{props.title}</b></div>
                
            : <div className="content-highlight">
                <div className="cursor-pointer link-desat flex-center" onClick={toggle} onKeyDown={(e) => {if (props.enter(e)) {toggle()}}} tabIndex={0}><b>{props.title}</b></div>
                <div className="cursor-default popover">
                    <br />
                    {props.text}
                </div>
            </div>
            }
        </div>
    )
}

export { Comp9 }