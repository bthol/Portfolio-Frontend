import React from 'react';

const ProjectsPage = (props) => {
    return (
        <div className="page-content">
            <div className="content-container shadow-behind container-first">
                <div>
                    <p>First Container Content</p>
                </div>
            </div>
            <div className="content-container shadow-behind">
                <div>
                    <p>Middle Content</p>
                    {
                        props.mobile
                        ? <p>Is Mobile</p>
                        : <p>Isn't Mobile</p>
                    }
                </div>
            </div>
            <div className="content-container shadow-behind container-last">
                <div>
                    <p>Last Container Content</p>
                </div>
            </div>
        </div>
    )
}

export { ProjectsPage }