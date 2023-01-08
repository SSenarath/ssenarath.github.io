import React from "react";


export default function Toolkit({project}){
        let i = -1
        const tools = project.map(each => {
            i++;
            if(i < (project.length-1)){
                return <div>{each} | </div>
            } else {
                return <div>{each}</div>
            }
            
        })
        return (
        <section className="toolkit">
            <h1>Tools Used: </h1>
            {tools}
        </section>
        
    )
}