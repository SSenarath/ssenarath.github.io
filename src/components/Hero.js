import React from "react";
import MyImage from "../images/SEN-262524.JPG"
import {Link} from 'react-scroll'


export default function Hero(){
    return(
        <section id="hero" >
            <div className="container">
                <div className="hero-left-container">
                    <h1 className="main-intro">Hello, I'm Sanduni | <br/> Junior Developer </h1>
                    <p className="about-me p-lineheight" >As a former engineering student and project manager who always ended up being the tech guru of
                        a team, it became obvious that I should make a change. While it wasn't the easiest decision, I am now happily pursuing my passions and am learning to code through online resources to create applications to solve real world
                        problems for the people around me.</p>
                    <div className ="links">
                        <a className='btn'><Link  activeClass="active" to="skills" spy={true} smooth={true}>Skills</Link></a>
                        <a className='btn'><Link  activeClass="active" to="projects" spy={true} smooth={true}>Projects</Link></a>
                        <a className='btn'><Link  activeClass="active" to="contact" spy={true} smooth={true}>Contact</Link></a>
                    </div>
                </div>
                <div className="hero-right-container">
                     <img className="profile-picture" src={MyImage} alt="Sanduni Senarath in a white blouse smiling"/>
                </div>
            </div>
        </section>
    )
}