import React from "react"

const Verify = (props) => {
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
                        {props.link && <a onClick={() => { props.setModal(false) }} href={`${props.href}`} target="_blank" rel="noreferrer"><button className="buttons modal-button" tabIndex={-1}>{props.actionBtnText}</button></a>}
                        {!props.link && <button onClick={() => { props.action(); props.setModal(false); }} className="buttons modal-button">{props.actionBtnText}</button>}
                        <button onClick={() => { props.setModal(false) }} className="buttons modal-button" autoFocus>{props.closeBtnText}</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export { Verify }