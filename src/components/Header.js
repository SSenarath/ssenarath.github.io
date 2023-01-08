import React from "react";
import {Link} from 'react-scroll'

export default function Header(){
    return(
        <header>
            <h4>Sanduni Senarath</h4>
            <nav className = "header-navbar">
                <div className="navbar-item">
                    <img src={require(`../images/navbar/skills.png`)}/>
                    <p><Link activeClass="active" to="skills" spy={true} smooth={true}>Skills</Link></p>
                </div>
                <div className="navbar-item projects">
                    <img src={require(`../images/navbar/projects.png`)}/>
                    <p><Link activeClass="active" to="projects" spy={true} smooth={true}>Projects</Link></p>
                </div>
                <div className="navbar-item">
                    <img src={require(`../images/navbar/contact.png`)}/>
                    <p><Link activeClass="active" to="home" spy={true} smooth={true}>Contact</Link></p>
                </div>
                <a className ="btn" href="#">Resume</a>
            </nav>
        </header>
    )
}