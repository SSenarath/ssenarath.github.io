import React from "react";
import Toolkit from "./Toolkit.js";
import Calculator from "../images/calculator.png"

export default function ProjectCard(){
    return (
        <div className="projectcard-container">
            <div className="container-left">
                <img className="project-img" src={"src/images/calculator.png"} alt="Sanduni Senarath in a white blouse smiling"/>
            </div>
            <div className="container-right">
                <h2>SKILLS & TOOLS</h2>
                <Toolkit project={"generalTools"} key={"generalTools"}/>
                <h2>Background</h2>
                <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
            </div>
        </div>

    )
}