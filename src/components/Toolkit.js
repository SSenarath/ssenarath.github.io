import React from "react";


export default function Toolkit({project}){
        let i = -1
        const tools = project.map(each => {
            i++;
            if(i < (project.length-1)){
                return (
                <>
                <p>{each}</p>
                <p>| </p>
                </>)
            } else {
                return <div>{each}</div>
            }
            
        })
        return (
        <section className="skill-category dev">
            <h3>Tools Used: </h3>
            <div className="dev-tools">
            {tools}
            </div>
        </section>
        
    )
}