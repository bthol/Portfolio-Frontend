import React from "react";

const Comp6 = (props) => {
    return (
        <div className={`content-container artpage-layout-width fx3d ${props.containerFirst}`}>
            <div className="flex-center">
                <div className="text-x-large title-layout-pad">{props.title}</div>
            </div>
        </div>
    )
}

export { Comp6 }