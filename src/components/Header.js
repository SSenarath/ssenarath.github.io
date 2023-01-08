import React from "react";

export default function Header(){
    return(
        <header>
            <h4>Sanduni Senarath</h4>
            <nav className = "header-navbar">
                <div className="navbar-item">
                    <img src={require(`../images/navbar/skills.png`)}/>
                    <a href="#">Skills</a>
                </div>
                <div className="navbar-item projects">
                    <img src={require(`../images/navbar/projects.png`)}/>
                    <a href="#">Projects</a>
                </div>
                <div className="navbar-item">
                    <img src={require(`../images/navbar/contact.png`)}/>
                    <a href="#">Contact</a>
                </div>
                <a className ="btn" href="#">Resume</a>
            </nav>
        </header>
    )
}