import React from 'react';

const ProjectsPage = (props) => {
    return (
        <div className="page-content">
            <div id="projects-section-1" className="content-container shadow-behind container-first">
                {
                    props.mobile
                    ? <div>
                        <p>First Container Content</p>
                        <p>Is Mobile</p>
                    </div>
                    : <div>
                        <p>First Container Content</p>
                        <p>Isn't Mobile</p>
                    </div>
                }
            </div>
            <div id="projects-section-2" className="content-container shadow-behind">
                {
                    props.mobile
                    ? <div>
                        <p>Middle Container Content</p>
                        <p>Is Mobile</p>
                    </div>
                    : <div>
                        <p>Middle Container Content</p>
                        <p>Isn't Mobile</p>
                    </div>
                }
            </div>
            <div id="projects-section-3" className="content-container shadow-behind container-last">
                {
                    props.mobile
                    ? <div>
                        <p>Last Container Content</p>
                        <p>Is Mobile</p>
                    </div>
                    : <div>
                        <p>Last Container Content</p>
                        <p>Isn't Mobile</p>
                    </div>
                }
            </div>
        </div>
    )
}

export { ProjectsPage }