import React from "react";
import {Link} from 'react-scroll';


export default function Header(){

    return(

        <header>
            
                <nav className = "header-navbar">
                        <Link className="my-name" activeClass="active" to="hero" spy={true} smooth={true}>
                            <h4>Sanduni Senarath</h4>
                        </Link>
                        <div className="navbar-right">
                            <Link activeClass="active" to="skills" spy={true} smooth={true}>
                            <div className="navbar-item">
                                <img src={require(`../images/navbar/skills.png`)}/>
                                <a>Skills</a>
                            </div>
                            </Link>
                            <Link activeClass="active" to="projects" spy={true} smooth={true}>
                                <div className="navbar-item projects">
                                    <img src={require(`../images/navbar/projects.png`)}/>
                                    <a>Projects</a>
                                </div>
                            </Link>
                            <Link activeClass="active" to="contact" spy={true} smooth={true}>
                                <div className="navbar-item">
                                    <img src={require(`../images/navbar/contact.png`)}/>
                                    <a>Contact</a>
                                </div>
                            </Link>
                            <div className="navbar-item">
                                <a className ="btn" href="sanduni-resume.pdf" download="sanduni-resume.pdf">Resume</a>
                            </div>
                        </div>
                    </nav>
        
        </header>
    )
}

