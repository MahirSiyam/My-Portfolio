// import React from "react";
// import html5 from "../../assets/html5_16183594.png";
// import css3 from "../../assets/css-3.png";
// import tailwind from "../../assets/icons8-tailwind-css-48.png";
// import js from "../../assets/icons8-javascript-48.png";
// import react from "../../assets/react.svg"
// import router from "../../assets/react-router-svgrepo-com.svg"
// import nextjs from "../../assets/Next.js.png"
// import nodejs from "../../assets/icons8-node-js-48.png"
// import express from "../../assets/Express.png"
// import firebase from "../../assets/icons8-firebase-48.png"
// import mongodb from "../../assets/MongoDB.png"
// import git from "../../assets/Git.png"
// import github from "../../assets/github.png"
// import vscode from "../../assets/Visual Studio Code (VS Code).png"

// import { motion } from "framer-motion";

// const Skills = () => {
//   return (
//     <section id="skills" className="bg-[#0a111e] py-16 px-6">

// {/* Inject the CSS for border animation */}
//       <style>
//         {`
//           @property --border-angle {
//             syntax: "<angle>";
//             inherits: true;
//             initial-value: 0deg;
//           }

//           @keyframes border-spin {
//             100% {
//               --border-angle: 360deg;
//             }
//           }

//           .animate-border {
//             animation: border-spin 6s linear infinite;
//             background:
//               linear-gradient(#0a111e, #0a111e) padding-box,
//               conic-gradient(
//                 from var(--border-angle),
//                 rgba(100, 116, 139, 0.48) 80%,
//                 #fec544 86%,
//                 #dbb85a 90%,
//                 #fec544 94%,
//                 rgba(100, 116, 139, 0.48)
//               ) border-box;
//             border: 2px solid transparent;
//             border-radius: 1rem;
//           }
//         `}
//       </style>

//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-4xl font-bold text-[#fec544] mb-12">My Skills</h2>

//         <div className="grid md:grid-cols-3 gap-8 text-left">
//           {/* Frontend */}
//           <SkillCategory
//             title="Frontend"
//             skills={[
//               { icon: html5, label: "HTML5" },
//               { icon: css3, label: "CSS3" },
//               { icon: tailwind, label: "Tailwind CSS" },
//               { icon: js, label: "JavaScript" },
//               { icon: react, label: "React" },
//               { icon: router, label: "React Router" },
//               { icon: nextjs, label: "Next.js" },
//             ]}
//           />

//           {/* Backend */}
//           <SkillCategory title="Backend" skills={[
//             { icon: mongodb, label: "MongoDB" },
//             { icon: firebase, label: "Firebase" },
//             { icon: nodejs, label: "Node.js" },
//             { icon: express, label: "Express.js" },
//           ]} />

//           {/* Tools */}
//           <SkillCategory title="Tools" skills={[
//             { icon: github, label: "GitHub" },
//             { icon: git, label: "Git" },
//             { icon: vscode, label: "VS Code" },
//           ]} />
//         </div>
//       </div>
//     </section>
//   );
// };

// const SkillCategory = ({ title, skills }) => (
//   <motion.div
//     className="bg-[#141a29] p-6 rounded-xl shadow border animate-border border-[#fec544]"
//     whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(254, 197, 68, 0.4)" }}
//     transition={{ type: "spring", stiffness: 200 }}
//   >
//     <title>Mahir</title>
//     <h3 className="text-2xl font-semibold mb-4 text-[#fec544]">{title}</h3>
//     <ul className="grid grid-cols-3 gap-6 justify-items-center">
//       {skills.map((skill, index) => (
//         <li
//           key={index}
//           className="flex flex-col items-center text-white text-lg"
//         >
//           {skill.icon && (
//             <img
//               src={skill.icon}
//               alt={skill.label}
//               className="w-10 h-10 mb-2"
//             />
//           )}
//           <span className="text-sm font-semibold">{skill.label}</span>
//         </li>
//       ))}
//     </ul>
//   </motion.div>
// );

// export default Skills;

import Marquee from "react-fast-marquee";
import fullStop from "../../assets/full-stop (2).png";

const Skills = () => {
  const universities = [
    { name: "React", logo: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-128.png" },
    { name: "CSS", logo: "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-1024.png" },
    { name: "Firebase", logo: "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png" },
    { name: "HTML", logo: "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-512.png" },
    { name: "Tailwind CSS", logo: "https://img.icons8.com/?size=96&id=4PiNHtUJVbLs&format=png" },
    { name: "React Router", logo: "https://www.svgrepo.com/show/354262/react-router.svg" },
    { name: "Next js", logo: "https://www.svgrepo.com/show/354113/nextjs-icon.svg" },
  ];

  const univer = [
    { name: "JS", logo: "https://www.svgrepo.com/show/303206/javascript-logo.svg" },
    { name: "Express.js", logo: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png" },
    { name: "Firebase", logo: "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png" },
    { name: "Node.js", logo: "https://www.svgrepo.com/show/354118/nodejs.svg" },
    { name: "Tailwind CSS", logo: "https://img.icons8.com/?size=96&id=4PiNHtUJVbLs&format=png" },
    { name: "Github", logo: "https://www.svgrepo.com/show/512317/github-142.svg" },
    { name: "MongoDB", logo: "https://www.svgrepo.com/show/373845/mongo.svg" },
  ];

  return (
    <div className="bg-[#0a111e] py-16 px-6">
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

      <p className="text-3xl sm:text-3xl md:text-4xl text-center font-bold text-[#fec544] mb-8">Skills</p>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-16 bg-[#141a29] p-4 md:p-10 lg:p-15 rounded-xl animate-border">
        
        {/* Logo Marquees */}
        <div className="w-full lg:w-1/2">
          <Marquee speed={50} gradient={false}>
            {universities.map((uni, index) => (
              <div
                key={index}
                className="flex items-center gap-2 mx-3 mb-4 p-3 border-2 rounded-xl border-[#232c3c]"
              >
                <img src={uni.logo} alt={uni.name} className="h-12 w-auto object-contain" title={uni.name} />
              </div>
            ))}
          </Marquee>

          <Marquee speed={50} gradient={false} direction="reverse">
            {univer.map((univ, index) => (
              <div
                key={index}
                className="flex items-center gap-2 mx-3 p-3 border-2 rounded-xl border-[#232c3c]"
              >
                <img src={univ.logo} alt={univ.name} className="h-12 w-auto object-contain" title={univ.name} />
              </div>
            ))}
          </Marquee>
        </div>

        {/* Divider (hidden on small screens) */}
        <div className="hidden lg:block border-l-2 border-[#232c3c] h-52" />

        {/* Skills Text */}
        <div className="text-white w-full lg:w-1/2 space-y-4">
          <div className="flex items-start gap-3">
            <img src={fullStop} alt="" className="w-10 h-10 sm:w-12 sm:h-12" />
            <p className="text-base sm:text-lg">
              <span className="font-extrabold text-lg">Front-End:</span> HTML, CSS, Tailwind CSS, JavaScript, React, Next.js, React Router, Firebase
            </p>
          </div>
          <div className="flex items-start gap-3">
            <img src={fullStop} alt="" className="w-10 h-10 sm:w-12 sm:h-12" />
            <p className="text-base sm:text-lg">
              <span className="font-extrabold text-lg">Back-End:</span> Node.js, Express.js, MongoDB
            </p>
          </div>
          <div className="flex items-start gap-3">
            <img src={fullStop} alt="" className="w-10 h-10 sm:w-12 sm:h-12" />
            <p className="text-base sm:text-lg">
              <span className="font-extrabold text-lg ">Tools:</span> Git, GitHub, VS Code, Netlify, Vercel, Figma
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
