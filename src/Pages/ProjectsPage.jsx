import React from 'react';

const ProjectsPage = () => {
    return (
        <div>
            <span className="aside-main">
                <aside className="app-aside shadow-behind">
                    <div>This block will be removed in future versions.</div>
                </aside>
                <main className="app-main">
                    <section className="main-section-style shadow-behind">
                        <h3 className="title-line text-x-large" tabIndex={0}>Projects Page To-Be</h3>
                        <div className="main-section-style-content">
                            <p>This page exists for now to illustrate the sucess of a scalable render-based page handling system.</p>
                            <p>In future versions, this will be a page with unique content layout within a generic page template.</p>
                            <p>Problems like the inconsistent spacing at the bottom and the need for the useless block will be resolved by a flexible grid layout in the generic page template that is still in development at the moment.</p>
                        </div>
                        <br />
                    </section>
                </main>
            </span>
        </div>
    )
}

export { ProjectsPage }