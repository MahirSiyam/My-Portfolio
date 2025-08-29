import React from "react";
import { motion } from "framer-motion";
import about from "../../assets/IMG-20240929-WA0007.jpg";

const About = () => {
  return (
    <section id="about" className="bg-[#0a111e] py-16 px-6 relative">
      <style>
        {`
          @property --border-angle {
            syntax: "<angle>";
            inherits: true;
            initial-value: 0deg;
          }
          @keyframes border-spin {
            100% {
              --border-angle: 360deg;
            }
          }
          .animate-border {
            animation: border-spin 6s linear infinite;
            background:
              linear-gradient(#141a29, #141a29) padding-box,
              conic-gradient(
                from var(--border-angle),
                rgba(100, 116, 139, 0.48) 80%,
                #fec544 86%,
                #dbb85a 90%,
                #fec544 94%,
                rgba(100, 116, 139, 0.48)
              ) border-box;
            border: 2px solid transparent;
            border-radius: 1rem;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto text-center rounded-xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#fec544] mb-8">
          About Me
        </h2>

        <motion.div
          className="flex flex-col animate-border lg:flex-row justify-center items-center gap-8 bg-[#141a29] p-4 md:p-8 rounded-xl shadow-md border border-[#fec544]"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Image Section */}
          <motion.div
            className="flex-shrink-0"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <img
              src={about}
              alt="About Me"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg object-contain"
              style={{ height: "auto" }}
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="w-full lg:w-1/2 text-white text-start lg:text-left text-base sm:text-lg leading-relaxed font-light mt-0 md:mt-1"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <p>
              Hello! I’m{" "}
              <span className="font-semibold text-[#fec544]">Mahir Siyam</span>, a passionate front-end web developer
              with a strong focus on building clean, user-friendly, and
              responsive web interfaces. My journey into programming began with
              curiosity about how websites work. I started learning HTML and
              CSS, and quickly found joy in turning ideas into functional,
              beautiful designs using JavaScript and React.
              <br /><br />
              I enjoy working on projects that solve real-world problems and
              enhance user experience. Whether it’s a dynamic recipe app or a
              smooth booking platform, I love seeing users interact with
              something I’ve built. I’m particularly drawn to challenges that
              involve integrating backend APIs, managing states, and optimizing
              UI/UX.
              <br /><br />
              Beyond coding, I enjoy exploring photography, watching football,
              and sometimes sketching. These creative outlets help me stay fresh
              and bring a new perspective to my development work. I’m constantly
              learning, collaborating, and striving to improve. I believe in
              writing code that not only works but is also clean, scalable, and
              maintainable.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
