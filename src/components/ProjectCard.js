import React from "react";
import Toolkit from "./Toolkit.js";

export default function ProjectCard({ item }) {
  return (
    <div className="border flex bg-[#e9e9e9]">
      <div className="w-1/4 p-2 flex items-center">
        <a target="_blank" href={item.websiteLink}>
          <img src={require(`../images/${item.coverImg}`)} alt="" />
        </a>
      </div>
      <div className="w-3/4 flex flex-col p-2 justify-center item">
        <h2>{item.title}</h2>
        <Toolkit project={item.tools} key={item.id} />
        <p className="p-lineheight">{item.description}</p>
        <div className="links">
          <a className="btn" target="_blank" href={item.websiteLink}>
            Live Site
          </a>
          <a className="btn" target="_blank" href={item.githubRepoLink}>
            Github Repository
          </a>
        </div>
      </div>
    </div>
  );
}
