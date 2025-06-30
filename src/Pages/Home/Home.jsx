import React from "react";
import image from "../../assets/WhatsApp Image 2025-06-25 at 15.16.12_f6c972c7.jpg";
import bgImage from "../../assets/bg.jpg";
import { Link } from "react-scroll";
import view from "../../assets/icons8-view-64.png";
import { Typewriter } from "react-simple-typewriter";

import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      className="hero min-h-screen px-10 md:px-15 lg:px-20"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <title>Mahir</title>
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-white flex-col lg:flex-row-reverse z-10">
        <img
          src={image}
          alt="Profile"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-full shadow-2xl mx-auto"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-[#fec544]">
            <Typewriter
              words={["Hello, I'm"]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
            <br />
            <span className="text-white text-5xl font-bold">Mahir Siyam</span>
          </h1>
          <p className="py-6 w-2/3 text-base-300">
            I am a passionate Frontend Developer dedicated to building clean,
            responsive, and user-friendly web interfaces. I specialize in modern
            technologies like HTML, CSS, JavaScript, React, and Tailwind CSS to
            craft seamless digital experiences.
          </p>
          <Link to="projects" smooth={true} duration={1000}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="btn bg-[#fec544] text-black font-bold rounded-2xl flex items-center gap-2"
            >
              <img className="w-6" src={view} alt="view" />
              View Projects
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
