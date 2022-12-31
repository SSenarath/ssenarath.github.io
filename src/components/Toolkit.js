import React from "react";
import data from "./data";

export default function Toolkit({project}){
        const tools = project.map(each => {
            return <div>{each}</div>
        })
        return (
        <section className="toolkit">
            {tools}
        </section>
        
    )
}