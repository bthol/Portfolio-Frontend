import React from "react"

const Timeout = (props) => {
    return (
        <div className={`modal modal-container flex-center`}>
            <div className={`modal modal-content shadow-behind`}>
                <div>
                    <h1>Inactive</h1>
                    <hr />
                </div>
                <div>
                    <p className="text-xlarge">Are you still there?</p>
                    <br />
                    <div>
                        <button onClick={() => {props.setModal(false)}} className="buttons modal-button" autoFocus>Yes, I'm still here</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export { Timeout }