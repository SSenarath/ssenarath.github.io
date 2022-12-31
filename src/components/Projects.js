import React from "react";

import ProjectCard from "./ProjectCard";

export default function Projects(){
    return(
        <section className="project section">
            <div className="content-container">
            <h1>My Projects</h1>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            </div>
        </section>
    )
}