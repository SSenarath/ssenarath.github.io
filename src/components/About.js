import React from "react";
import MyImage from "../images/SEN-262524.JPG"

export default function About(){
    return(
        <section className="about">
            <div className="about-content">
                <h1>About Me</h1>
                <div className="container">
                    <div className="container-left">
                        <img className="profile-picture" src={MyImage} alt="Sanduni Senarath in a white blouse smiling"/>
                    </div>
                    <div className="container-right">
                        <h2>Skills</h2>
                        <h2>Filler for skills component</h2>
                        <h2>Background</h2>
                        <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                </div>
                </div>
            </div>
        </section>
    )
}