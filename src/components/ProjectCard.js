import React from "react";
import Toolkit from "./Toolkit.js";

export default function ProjectCard({item}){
    return (
        <div className="projectcard-container">
            <div className="container-left">
                <img className="project-img" src={require(`../images/${item.coverImg}`)} alt="Sanduni Senarath in a white blouse smiling"/>
            </div>
            <div className="container-right">
                <h2>{item.title}</h2>
                <Toolkit project={item.tools} key={item.id}/>
                <h2>Background</h2>
                <p>{item.description}</p>
            </div>
        </div>

    )
}