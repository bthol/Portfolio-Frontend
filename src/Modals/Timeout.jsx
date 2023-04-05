import React from "react"

const Timeout = (props) => {
    return (
        <div className={`modal modal-container-${props.modal} flex-center`}>
            <div className={`modal modal-content-${props.modal} shadow-behind`}>
            <h1>Inactive</h1>
            <hr />
            <p className="text-xlarge">Are you still there?</p>
            <br />
            <div>
                <button onClick={() => {props.setModal("closed")}} className="buttons modal-button" tabIndex={props.modalTabIdx} autoFocus>Yes, I'm still here</button>
            </div>
            </div>
        </div>
    )
};

export { Timeout }