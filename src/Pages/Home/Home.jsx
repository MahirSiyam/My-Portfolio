import React from "react";
import image from "../../assets/WhatsApp Image 2025-06-25 at 15.16.12_f6c972c7.jpg";
import view from "../../assets/icons8-view-64.png";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariantsLeft = {
  hidden: { opacity: 0, x: -50, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const itemVariantsRight = {
  hidden: { opacity: 0, x: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Home = () => {
  return (
    <section className="hero min-h-screen py-16 px-6 md:px-16 lg:px-20 relative z-10">
      <div className="hero-content flex flex-col lg:flex-row-reverse items-center text-white max-w-7xl mx-auto">
        {/* Image Section */}
        <motion.div
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-full overflow-hidden shadow-2xl"
          variants={itemVariantsRight}
          initial="hidden"
          animate="visible"
        >
          <img
            src={image}
            alt="Profile"
            className="w-full rounded-full object-cover"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="flex-1 mt-10 lg:mt-0 lg:mr-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Animated heading container */}
          <motion.div variants={itemVariantsLeft}>
            <h1 className="text-3xl font-semibold text-[#fec544] leading-snug">
              <Typewriter
                words={["Hello, I'm"]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
            <h2 className="text-white text-5xl font-extrabold mt-2">
              Mahir Siyam
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            className="mt-6 text-base text-gray-300 max-w-lg"
            variants={itemVariantsLeft}
          >
            I am a passionate{" "}
            <span className="font-bold text-xl" style={{ color: "#fec544" }}>
              {"{Frontend Developer}"}
            </span>{" "}
            dedicated to building clean, responsive, and user-friendly web
            interfaces. I specialize in modern technologies like HTML, CSS,
            JavaScript, React, and Tailwind CSS to craft seamless digital
            experiences.
          </motion.p>

          {/* Button */}
          <Link to="projects" smooth={true} duration={1000}>
  <motion.button
    className="btn bg-[#fec544] mt-8 text-black font-bold rounded-2xl flex items-center gap-2 "
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <img className="w-7" src={view} alt="view" />
    View Projects
  </motion.button>
</Link>

        </motion.div>
      </div>
    </section>
  );
};

export default Home;
