import React from "react";
import MyImage from "../images/SEN-262524.JPG"
import {Link} from 'react-scroll'


export default function Hero(){
    return(
        <section id="hero" className ="hero">

            <div className="section introduction">
                <div className="left-container">
                    <h1>Hello, I'm Sanduni | </h1>
                    <h1 className="job-title">Junior Developer</h1>
                    <p>As a former engineering student and project manager who always ended up being the tech guru of
                        a team, it became obvious that I should make a change. While it wasn't the easiest decision, I am now pursuing my passions and am currently learning to code through online resources to create applications to solve real world
                        problems for the people around me.</p>
                    <div className ="intro-links">
                        <a className='btn'><Link  activeClass="active" to="skills" spy={true} smooth={true}>Skills</Link></a>
                        <a className='btn'><Link  activeClass="active" to="projects" spy={true} smooth={true}>Projects</Link></a>
                        <a className='btn'><Link  activeClass="active" to="home" spy={true} smooth={true}>Contact</Link></a>
                    </div>
                </div>
                <div className="right-container">
                     <img className="profile-picture" src={MyImage} alt="Sanduni Senarath in a white blouse smiling"/>
                </div>
            </div>
        </section>
    )
}