import React from "react";

const Comp1 = (props) => { 
    return (
        <div id={props.id} className="section-lists">

            {props.mobile

                ? <div>
                    <div className="text-large" tabIndex={0}>{props.skillsTitle}</div>
                    {props.skillsList}
                </div>

                : <div className="underline">
                    <div className="text-large" tabIndex={0}>{props.skillsTitle}</div>
                    {props.skillsList}
                </div>

            }

            <br />
            
        </div>
    )
};

export { Comp1 };