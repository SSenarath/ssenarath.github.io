import React from "react";

export default function Header(){
    return(
        <header>
            <h4>Sanduni Senarath <small className="job-title">Junior Developer</small></h4>
            <nav className = "header-navbar">
                <a href="#">Skills </a>
                <a href="#">Projects </a>
                <a href="#">Contact </a>
                <a className ="resume-btn" href="#">Resume</a>
            </nav>
        </header>
    )
}