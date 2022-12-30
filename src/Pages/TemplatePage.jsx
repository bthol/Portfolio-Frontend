import React from 'react';

const TemplatePage = () => {

    return (
        <div>
            <span className="aside-main">
                <aside className="app-aside shadow-behind">
                    <div>text</div>
                </aside>
                <main className="app-main">
                <section className="main-section-style shadow-behind">
                    <h3 className="title-line text-x-large" tabIndex={0}>Title</h3>
                    <div className="main-section-style-content">
                        <p>text</p>
                        <p>text</p>
                    </div>
                    <br />
                    <div className="main-section-style-content">
                        <p>text</p>
                        <p>text</p>
                </div>
                <br />
                </section>
                <section className="main-section-style shadow-behind">
                    <h3 className="title-line text-x-large" tabIndex={0}>Title</h3>
                    <div className="main-section-style-content">
                        <p>text</p>
                        <p>text</p>
                    </div>
                    <br />
                    <div className="main-section-style-content">
                        <p>text</p>
                        <p>text</p>
                    </div>
                    <br />
                </section>
                </main>
            </span>
        </div>
    )
}

export { TemplatePage }