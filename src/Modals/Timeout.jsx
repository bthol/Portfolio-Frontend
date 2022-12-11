import React from "react"

const Timeout = (props) => {
    return (
        <div className={`modal modal-container-${props.modal} flex-center`}>
            <div className={`modal modal-content-${props.modal} shadow-behind`}>
            <h2>Inactive</h2>
            <hr />
            <p>Are you still there?</p>
            <div>
                <button onClick={() => {props.setModal("closed")}} className="buttons modal-button">Yes</button>
            </div>
            </div>
        </div>
    )
};

export { Timeout }