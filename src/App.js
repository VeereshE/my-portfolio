import React from "react";
import { useEffect } from "react";
import NavBar from "./Component/NavBar";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import Project from "./Component/Project";
import Skills from "./Component/Skills";
import About from "./Component/About";

import "./App.css";

export default function App() {
  useEffect(() => {
    document.title = `My Portfolio Website`;
  }, []);

  return (
    <>
      <NavBar />
      <div className="My-Portfolio-Website">
        <Home />
        <About />
        <Project />
        <Skills />
        <Contact />
      </div>
    </>
  );
}
