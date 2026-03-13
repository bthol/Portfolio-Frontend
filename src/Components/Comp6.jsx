import React from "react";

const Comp6 = (props) => {
    return (
        <div className="cloudform artpage-layout-width">
            <div className={`${props.containerFirst} rain`}>
                <div className="cloud content-container fx3d" onClick={props.togShowDrops}>
                    <div className="flex-center">
                        <div className="text-x-large title-layout-pad">{props.title}</div>
                    </div>
                </div>
                <div className="artpage-layout-width cloud-link-container">
                    {props.links}
                </div>
            </div>
        </div>
    )
}

export { Comp6 }