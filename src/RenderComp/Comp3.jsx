import React from "react";
import { useState } from "react";

const Comp3 = (props) => {
    // SHOW MORE/LESS
    const [show, setShow] = useState(false);
    const [shown, setShown] = useState("down-arrow");
    const [togshow, setTogshow] = useState(false);
    const toggleShown = () => {
        setTogshow(!togshow);
        if (!togshow) {
            setShow(true);
            setShown("up-arrow");
        } else {
            setShow(false);
            setShown("down-arrow");
        }
    }

    return (
        <div id={props.id}>
            <div className="text-large"><b>{props.jobTitle}</b></div>
            <div className="flex-between"><p className="text-large">{props.employer}</p><p>{props.workPeriod}</p></div>
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
            }}><div className="flex-center button-hover"><p className={`arrow ${shown}`}></p></div></div>
            <hr noshade="true" />
            <br />
        </div>
    )
};

export { Comp3 };