import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Skills from "./Pages/Skills/Skills";
import Education from "./Pages/Education/Education";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";  


const App = () => {
  
  return (
    <div className="max-w-7xl mx-auto">
      <section className="sticky top-0 z-50">
        <Navbar></Navbar>
      </section>

      <section id="home">
        <Home></Home>
      </section>

      <section id="about">
        <About></About>
      </section>

      <section id="skills">
        <Skills></Skills>
      </section>

      <section id="education">
        <Education></Education>
      </section>

      <section id="projects">
        <Projects></Projects>
      </section>

      <section id="contact">
       <Contact></Contact>
      </section>
    </div>
  );
};

export default App;
