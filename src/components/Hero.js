import React from "react";
import MyImage from "../images/SEN-262524.JPG"


export default function Hero(){
    return(
        <section className ="hero">

            <div className="section introduction">
                <div className="left-container">
                    <h1>Hello, I'm Sanduni | </h1>
                    <h1 className="job-title">Junior Developer</h1>
                    <p>As a former civil engineering student and project manager who always ended up being the tech guru of
                        a team, it became obvious that I should make a change. While it wasn't the easiest decision, I am now pursuing my passions and am currently learning to code through online resources to create applications to solve real world
                        problems for the people around me.</p>
                    <ul className ="intro-links">
                        <a className ="btn"  href="#">Skills</a>
                        <a  className ="btn" href="#">Projects</a>
                        <a className ="btn" href="#">Contact</a>
                    </ul>
                </div>
                <div className="right-container">
                     <img className="profile-picture" src={MyImage} alt="Sanduni Senarath in a white blouse smiling"/>
                </div>
            </div>
        </section>
    )
}