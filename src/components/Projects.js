import React from "react";
import data from "./data";

import ProjectCard from "./ProjectCard";

export default function Projects(props){
    const projectList = data.projectinfo.map(each => {
        return <ProjectCard key={each.id} item={each}/>
    })
    return(
        <section className="project section">
            <div className="content-container">
            <h1>My Projects</h1>
            {projectList}
            </div>
        </section>
    )
}