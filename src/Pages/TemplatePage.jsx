import React from 'react';

const TemplatePage = (props) => {

    return (
        <div className="page-content">
            <div className="content-container shadow-behind" id="container-first">
                <div>
                    <p>First Container Content</p>
                </div>
            </div>
            <div className="content-container shadow-behind">
                <div>
                    <p>Middle Container Content</p>
                </div>
            </div>
            <div className="content-container shadow-behind" id="container-last">
                <div>
                    <p>Last Container Content</p>
                </div>
            </div>
        </div>
    )
}

export { TemplatePage }