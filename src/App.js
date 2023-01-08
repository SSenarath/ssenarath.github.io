import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills"
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";

export default function App() {
  return (
   <main>
    <Header/>
    <Hero/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
   </main>
  );
}

