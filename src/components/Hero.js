import React from "react";
import MyImage from "../images/SEN-262524.JPG"


export default function Hero(){
    return(
        <section className ="hero">

            <div className="introduction">
                <h1>Hello, I'm Sanduni | Junior Developer</h1>
                <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                <ul className ="intro-links">
                    <a href="#">Skills</a>
                    <a href="#">Projects</a>
                    <a href="#">Contact</a>
                </ul>

            </div>
        </section>
    )
}