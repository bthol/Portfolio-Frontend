import React from "react"

const Modal = (props) => {
    return (
        <div className={`modal modal-container flex-center`}>
            <div className={`modal modal-content shadow-behind`}>
                <div>
                    <h1>{props.title}</h1>
                    <hr />
                </div>
                <div>
                    <p className="text-xlarge">{props.message}</p>
                    <br />
                    <div>
                        <button onClick={() => { props.setModal(false) }} className="buttons modal-button" autoFocus>{props.closeBtnText}</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export { Modal }