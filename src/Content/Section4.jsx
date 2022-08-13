import React from "react";

const Section4 = () => {
    return (
        <section className="main-section-style" id="main-section-style-last">
            <h3 className="title-line text-x-large" tabIndex={0}>Education</h3>
            <div>
                <div className="flex-between" tabIndex={0}><div className="text-large"><b>BitWise Industries</b></div>May 2022 - June 2022</div>
                <ul>
                    <li className="exp-list remove-bullet-list" tabIndex={0}><b>Description: </b>BitWise industry has courses on computer programming and web development, offering a learning community to support its members in their journey to learning to code.</li>
                </ul>
            </div>
            <br />
            <div>
                <div className="flex-between" tabIndex={0}><div className="text-large"><b>General Assembly</b></div>December 2021 - March 2022</div>
                <ul>
                    <li className="exp-list remove-bullet-list" tabIndex={0}><b>Description: </b>General Assembly is a full-stack software engineering coding bootcamp, which places students in an intensive, twelve-week course requiring 400+ hours of hands on experience with product development fundamentals, e.g. object-oriented programming, simple algorithms, front-end styling and layout technologies, responsive and interactive design, the MVC development model, the MERN stack, test-based development, web-application deployment, and team collaboration strategies.</li>
                </ul>
            </div>
            <br />
            <div>
                <div className="flex-between" tabIndex={0}><div className="text-large"><b>Berkeley City College</b></div>March 2021 - December 2021</div>
                <ul>
                    <li className="exp-list remove-bullet-list" tabIndex={0}><b>Subject of Study: </b>Biological Sciences</li>
                </ul>
            </div>
            <br />
            <div>
                <div className="flex-between" tabIndex={0}><div className="text-large"><b>Diablo Valley College</b></div>June 2015 - May 2016</div>
                <ul>
                    <li className="exp-list remove-bullet-list" tabIndex={0}><b>Subject of Study: </b>Biological Sciences</li>
                </ul>
            </div>
            <br />
        </section>
    )
};

export { Section4 };