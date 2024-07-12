import React from "react"

const Notify = (props) => {
    return (
        <div className={`modal modal-container flex-center`}>
            <div className={`modal modal-content shadow-behind`}>
                <div>
                    <h1>{props.title}</h1>
                    <hr noshade="true" />
                </div>
                <div>
                    <p className="text-xlarge">{props.message}</p>
                    <br />
                    <div>
                        <button onClick={(e) => { props.setDisplay(e, false) }} onKeyDown={(e) => {if (props.enter(e) === true) {props.setDisplay(e, false)}}} className="buttons modal-button" autoFocus>{props.closeBtnText}</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export { Notify }