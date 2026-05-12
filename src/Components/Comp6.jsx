import React from "react";

const Comp6 = ({ togShowDropsRef, setShowDropsRef, setShowDropsArgRef, linkRef, ...props }) => {
    return (
        <div className="cloudform layout-width">
            <div className={`rain ${props.addClass}`}>
                <div className="cloud content-container fx3d" onClick={() => {if (togShowDropsRef.current !== null && setShowDropsRef.current !== null) {
                        // access state of bool in ref
                        // pass state to toggle function
                        // set inverted value to state
                        // assigns state to ref for next inversion
                        // use state to render on or off
                        setShowDropsRef.current(setShowDropsArgRef.current);
                        togShowDropsRef.current();
                    }}}>
                    <div className="flex-center">
                        <div className="text-x-large title-layout-pad">{props.title}</div>
                    </div>
                </div>
                <div ref={linkRef} className="cloud-link-container">
                    {props.links}
                </div>
            </div>
        </div>
    )
}

export { Comp6 }