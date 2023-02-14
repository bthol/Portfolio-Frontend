import React from 'react';

const TemplatePage = (props) => {

    return (
        <div className="page-content">
            <div className="content-container shadow-behind" id="container-first">
                <div>
                    <p>First Container Content</p>
                </div>
            </div>
            <div className="content-container">
                <div>
                    <p>Mobile Enviro Test</p>
                    {
                        props.mobile
                        ? <p>Is Mobile</p>
                        : <p>Isn't Mobile</p>
                    }
                </div>
            </div>
            <div className="content-container" id="container-last">
                <div>
                    <p>Last Container Content</p>
                </div>
            </div>
        </div>
    )
}

export { TemplatePage }