import React from "react";

export default function About() {
  return (
    <div>
      <div>
        <div id="skills">
          <div className="container">
            <h1 className="section-title">MY SKILLS & TOOLS</h1>
            <div className="skill-category">
              <h3>Languages: </h3>
              <p>Node.js</p>
              <p>|</p>
              <p>JavaScript</p>
              <p>|</p>
              <p>Java</p>
              <p>|</p>
              <p>Python </p>
            </div>
            <div className="skill-category">
              <h3>Frameworks: </h3>
              <p>ReactJS</p>
              <p>|</p>
              <p>ExpressJS</p>
              <p>|</p>
              <p>Mongoose</p>
            </div>
            <div className="skill-category">
              <h3>Databases: </h3>
              <p>MongoDB</p>
            </div>
            <div className="skill-category dev">
              <h3>Developer Tools: </h3>
              <div className="dev-tools">
                <p>HTML</p>
                <p>|</p>
                <p>CSS</p>
                <p>|</p>
                <p>Git</p>
                <p>|</p>
                <p>Github</p>
                <p>|</p>
                <p>Visual Studio Code</p>
                <p>|</p>
                <p>Netbeans</p>
                <p>|</p>
                <p>Chrome DevTools</p>
                <p>|</p>
                <p>Linux (Ubuntu)</p>
                <p>|</p>
                <p>Figma</p>
              </div>
            </div>
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
