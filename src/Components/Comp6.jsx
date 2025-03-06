import React from "react";

const Comp6 = (props) => {
    return (
        <div className={`${props.containerFirst} rain artpage-layout-width`}>
            <div className={`cloud content-container fx3d`}>
                <div className="flex-center">
                    <div className="text-x-large title-layout-pad">{props.title}</div>
                </div>
            </div>
            <div className="artpage-layout-width cloud-link-container">
                {props.links}
            </div>
        </div>
    )
}

export { Comp6 }