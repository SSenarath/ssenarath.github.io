import React from "react";
import data from "./data";

import ProjectCard from "./ProjectCard";

export default function Projects(props){
    const projectList = data.projectinfo.map(each => {
        return <ProjectCard key={each.id} item={each}/>
    })
    return(
        <section id="projects">
            <div className="container">
                <h1 className="section-title">MY PROJECTS</h1>
                {projectList}
            </div>
            
        </section>
    )
}