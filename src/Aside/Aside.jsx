import React from 'react';
import { ProfilePhoto } from '../Images/ProfilePhoto';

//button logic
const btnNormal = document.querySelector(`#btn-theme-normal`);
btnNormal.addEventListener("click", setThemeNormal);
function setThemeNormal() {
  document.body.classList.remove("color-theme-dark");
  document.body.classList.add("color-theme-normal");
};
const btnDark = document.querySelector(`#btn-theme-dark`);
btnDark.addEventListener("click", setThemeDark);
function setThemeDark() {
  document.body.classList.remove("color-theme-normal");
  document.body.classList.add("color-theme-dark");
};

const Aside = () => {
    return(
        <div>
            <ProfilePhoto></ProfilePhoto>
            <div className="flex-between">
                <a href="" rel="noreferrer" className="link-desat header-padd-right" onClick={() => {alert("Feature still in development")}}>Contact</a>
                <a href="" className="link-desat" onClick={() => {alert("You wanted an error message?")}}>error message</a>
            </div>
            <p><b>About Me</b>: I am a Full Stack Web and App Developer searching for a position to utilize and further develop my creative and technological skillset.</p>
            <br />
            <div className="flex-between">
                <button id="btn-theme-normal" className="buttons">Normal Theme</button>
                <button id="btn-theme-dark" className="buttons dark-button">Dark Theme</button>
            </div>
        </div>
    )
}

export { Aside }