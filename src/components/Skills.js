import React from "react";

export default function About() {
  return (
    <div id="skills">
      <div className="container ">
        <h1 className="section-title">MY SKILLS & TOOLS</h1>
        <div className="skill-category flex items-start">
          <h3 className="font-bold">Programming Skills: </h3>
          <div className="flex gap-2 flex-wrap">
            <p>Javascript</p>
            <p>|</p>
            <p>HTML</p>
            <p>|</p>
            <p>React</p>
            <p>|</p>
            <p>Vue</p>
            <p>|</p>
            <p>Nuxt</p>
            <p>|</p>
            <p>Element-UI</p>
            <p>|</p>
            <p>Tailwind CSS</p>
            <p>|</p>
            <p>FastAPI</p>
            <p>|</p>
            <p>Python</p>
          </div>
        </div>
        <div className="skill-category flex items-start">
          <h3 className="font-bold">Other: </h3>
          <div className="dev-tools">
            <p>Git</p>
            <p>|</p>
            <p>GitHub</p>
            <p>|</p>
            <p>Azure DevOps</p>
            <p>|</p>
            <p>Jira</p>
            <p>|</p>
            <p>Chrome DevTools</p>
            <p>|</p>
            <p>Figma</p>
          </div>
        </div>
      </div>
    </div>
  );
}
