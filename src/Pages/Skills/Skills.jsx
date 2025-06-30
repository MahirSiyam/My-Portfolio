import React from "react";
import html5 from "../../assets/html5_16183594.png";
import css3 from "../../assets/css-3.png";
import tailwind from "../../assets/icons8-tailwind-css-48.png";
import js from "../../assets/icons8-javascript-48.png";
import react from "../../assets/react.svg"
import router from "../../assets/react-router-svgrepo-com.svg"
import nextjs from "../../assets/Next.js.png"
import nodejs from "../../assets/icons8-node-js-48.png"
import express from "../../assets/Express.png"
import firebase from "../../assets/icons8-firebase-48.png"
import mongodb from "../../assets/MongoDB.png"
import git from "../../assets/Git.png"
import github from "../../assets/github.png"
import vscode from "../../assets/Visual Studio Code (VS Code).png"

import { motion } from "framer-motion";


const Skills = () => {
  return (
    <section id="skills" className="bg-[#0a111e] py-8 md:py-12 lg:py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#fec544] mb-12">My Skills</h2>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {/* Frontend */}
          <SkillCategory
            title="Frontend"
            skills={[
              { icon: html5, label: "HTML5" },
              { icon: css3, label: "CSS3" },
              { icon: tailwind, label: "Tailwind CSS" },
              { icon: js, label: "JavaScript" },
              { icon: react, label: "React" },
              { icon: router, label: "React Router" },
              { icon: nextjs, label: "Next.js" },
            ]}
          />

          {/* Backend */}
          <SkillCategory title="Backend" skills={[
            { icon: mongodb, label: "MongoDB" },
            { icon: firebase, label: "Firebase" },
            { icon: nodejs, label: "Node.js" },
            { icon: express, label: "Express.js" },
          ]} />

          {/* Tools */}
          <SkillCategory title="Tools" skills={[
            { icon: github, label: "GitHub" },
            { icon: git, label: "Git" },
            { icon: vscode, label: "VS Code" },
          ]} />
        </div>
      </div>
    </section>
  );
};

const SkillCategory = ({ title, skills }) => (
  <motion.div
    className="bg-[#141a29] p-6 rounded-xl shadow border border-[#fec544]"
    whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(254, 197, 68, 0.4)" }}
    transition={{ type: "spring", stiffness: 200 }}
  >
    <title>Mahir</title>
    <h3 className="text-2xl font-semibold mb-4 text-[#fec544]">{title}</h3>
    <ul className="grid grid-cols-3 gap-6 justify-items-center">
      {skills.map((skill, index) => (
        <li
          key={index}
          className="flex flex-col items-center text-white text-lg"
        >
          {skill.icon && (
            <img
              src={skill.icon}
              alt={skill.label}
              className="w-10 h-10 mb-2"
            />
          )}
          <span className="text-sm font-semibold">{skill.label}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default Skills;
