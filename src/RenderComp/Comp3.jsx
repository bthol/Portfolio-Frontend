import React from "react";
import { useState } from "react";

const Comp3 = (props) => {
    // SHOW MORE/LESS
    const [showMSG, setShowMSG] = useState("more");
    const [show, setShow] = useState(false);
    const [shown, setShown] = useState("down-arrow");
    const [togshow, setTogshow] = useState(false);
    const toggleShown = () => {
        setTogshow(!togshow);
        if (!togshow) {
        setShow(true);
        setShowMSG("less");
        setShown("up-arrow");
        } else {
        setShow(false);
        setShowMSG("more");
        setShown("down-arrow");
        }
    }
    
    return (
        <div id={props.id} className="">
            <div className="text-large" tabIndex={0}><b>{props.jobTitle}</b></div>
            <div className="flex-between" tabIndex={0}><p className="text-large">{props.employer}</p><p>{props.workPeriod}</p></div>
            {
                show &&
                <div>
                    {props.list}
                </div>
            }
            <div tabIndex={0} onClick={toggleShown} onKeyDown={(e) => {
                if (props.enter(e)) {
                    toggleShown();
                }
            }}><div className="flex-center button-hover"><p className="cursor-pointer">{showMSG}</p><p className={`nav-arrow ${shown}`}></p></div></div>
            <hr size="1px" noshade="true"/>
            <br />
        </div>
    )
};

export { Comp3 };