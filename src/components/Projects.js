import React from "react";
import data from "./data";

import ProjectCard from "./ProjectCard";

export default function Projects(props){
    const projectList = data.projectinfo.map(each => {
        return <ProjectCard key={each.id} item={each}/>
    })
    return(
        <section id="projects" className="project">
            <div className="section">
                <div className="content-container">
                <h1 className="section-title">MY PROJECTS</h1>
                {projectList}
                </div>
            </div>
            
        </section>
    )
}