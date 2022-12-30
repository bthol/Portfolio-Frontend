import React, { useState, useEffect } from 'react';
import { Header } from '../Template/Header';
import { Footer } from '../Template/Footer';
import { Timeout } from '../Modals/Timeout';

const TemplatePage = (props) => {
    // IDLE MODAL
    const [modal, setModal] = useState("closed");
    useEffect(() => {
        let seconds = 0;
        // listners reset the count
        document.addEventListener("touchmove", () => {seconds = 0});
        document.addEventListener("mousemove", () => {seconds = 0});
        document.addEventListener("keydown", () => {seconds = 0});
        const counter = setInterval(() => {
        seconds += 1;
        if (seconds === 300) {
            // display modal
            setModal("open")
            seconds = 0;
        }
        }, 1000);
        return () => clearInterval(counter);
    }, []);

    // THEME-BUTTON LOGIC
    const [btnText, setBtnText] = useState("Night Theme");
    const btnTextUpdate = () => {
        if (props.theme == "color-theme-night") {
            setBtnText("Night Theme");
        } else if (props.theme == "color-theme-day") {
            setBtnText("Day Theme");
        }
    }

    return (
        <div id="root-react" className={`App color ${props.theme}`}>
            <Timeout modal={modal} setModal={setModalFunct}></Timeout>
            <Header
                featureAlert={props.featureAlertFunct}
                btnText={btnText}
                btnTextUpdate={btnTextUpdate}
            ></Header>
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
            <Footer />
        </div>
    )
}