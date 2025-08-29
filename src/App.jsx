import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Skills from "./Pages/Skills/Skills";
import Education from "./Pages/Education/Education";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import Starfield from "./Pages/Starfield";
import logo from "../src/assets/Creative Agency Logo with Letter 'M'-modified.png";
import Footer from "./Components/Footer";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative jetbrains-mono">
      <Starfield />

      {/* Animated Loading Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-[9999]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Logo animation */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-30 h-30 rounded-full border-4 border-[#fec544] flex flex-col items-center justify-center overflow-hidden"
            >
              <img
                className="w-20 h-20 rounded-full object-cover"
                src={logo}
                alt="logo"
              />
              {/* <p className="text-white text-xl font-bold mt-1">
                <span className="text-[#fec544]">M</span>ahir
              </p> */}
            </motion.div>

            {/* Text animation */}
            <motion.p
              className="mt-6 text-lg tracking-widest text-[#fec544]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Loading Portfolio...
            </motion.p>

            {/* Animated bar */}
            <motion.div className="mt-4 h-1 w-40 bg-[#fec544]/30 overflow-hidden rounded-full">
              <motion.div
                className="h-1 bg-[#fec544]"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 1.2,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      {!loading && (
        <>
          <section className="sticky top-0 z-50">
            <Navbar />
          </section>

          <section id="home" className="relative z-10">
            <Home />
          </section>

          <section id="about" className="relative z-10">
            <About />
          </section>

          <section id="skills" className="relative z-10">
            <Skills />
          </section>

          <section id="education" className="relative z-10">
            <Education />
          </section>

          <section id="projects" className="relative z-10">
            <Projects />
          </section>

          <section id="contact" className="relative z-10">
            <Contact />
          </section>

          <section>
            <Footer></Footer>
          </section>
        </>
      )}
    </div>
  );
};

export default App;
