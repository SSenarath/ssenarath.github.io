import React from "react";
import Toolkit from "./Toolkit.js";

export default function ProjectCard({item}){
    return (
        <div className="projectcard">
    
            <a target="_blank" href={item.websiteLink}><img className="project-img" src={require(`../images/${item.coverImg}`)} alt="Sanduni Senarath in a white blouse smiling"/></a>  
            
            <div className="projectcard-right-info">
                <h2>{item.title}</h2>
                <Toolkit project={item.tools} key={item.id}/>
                <p className="project-description p-lineheight">{item.description}</p>
                <div className="links">
                    <a className = "btn" target="_blank" href={item.websiteLink}>Live Site</a>
                    <a className = "btn" target="_blank" href={item.githubRepoLink}>Github Repository</a>
                </div>
                    
            </div>
        </div>

    )
}  