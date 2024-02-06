import React from "react";
import MyImage from "../images/SEN-262524.JPG";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-left-container">
          <h1 className="main-intro">
            Sanduni Senarath | <br /> Junior Developer{" "}
          </h1>
          <p className="about-me p-lineheight">
            Hello there! I'm Sanduni, a Front-End Software Developer
            specializing in crafting applications from scratch using JavaScript,
            HTML, and CSS. In my previous career, I was a construction project
            manager that was frequently stepping into the role of the team's
            go-to tech support. With the help of an internship that turned into
            a full-time Software Developer position at Arudi, I happily
            transitioned into pursuing my passion for coding. Now, I am actively
            learning through online resources to create practical solutions for
            real-world challenges.
          </p>
          <div className="links">
            <a className="btn">
              <Link activeClass="active" to="skills" spy={true} smooth={true}>
                Skills
              </Link>
            </a>
            <a className="btn">
              <Link activeClass="active" to="projects" spy={true} smooth={true}>
                Projects
              </Link>
            </a>
            <a className="btn">
              <Link activeClass="active" to="contact" spy={true} smooth={true}>
                Contact
              </Link>
            </a>
          </div>
        </div>
        <div className="hero-right-container">
          <img
            className="profile-picture"
            src={MyImage}
            alt="Sanduni Senarath in a white blouse smiling"
          />
        </div>
      </div>
    </section>
  );
}
