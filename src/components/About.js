import React from "react";
import MyImage from "../images/SEN-262524.JPG"
import Toolkit from "./Toolkit.js";
import data from "./data";

export default function About(){
    return(
        <div id ="skills" className="skills">
            <section className="section">
                    <h1>MY SKILLS & TOOLS</h1>
                    <div className="skill-category">
                        <h2>Languages: </h2>
                        <p>Node.js |</p>
                        <p>JavaScript </p>
                    </div>
                    <div className="skill-category">
                        <h2>Frameworks: </h2>
                        <p>ReactJS |</p>
                        <p>ExpressJS |</p>
                        <p>Mongoose</p>
                    </div>
                    <div className="skill-category">
                        <h2>Databases: </h2>
                        <p>MongoDB</p>
                    </div>
                    <div className="skill-category">
                        <h2>Databases: </h2>
                        <p>HTML |</p>
                        <p>CSS |</p>
                        <p>Git |</p>
                        <p>Github |</p>
                        <p>VS Code |</p>
                        <p>Netbeans |</p>
                        <p>Chrome DevTools |</p>
                        <p>Linux (Ubuntu) |</p>
                        <p>Figma</p>
                    </div>
            </section>
        </div>
        
    )
}