import React from "react";
import data from "./data";

export default function Toolkit({project}){
        console.log(project)
        const tools = data.generalTools.map(each => {
            return <div>{each}</div>
        })
        return (
        <section className="toolkit">
            {tools}
        </section>
        
    )
}