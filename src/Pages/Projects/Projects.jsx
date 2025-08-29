import React from "react";
import img1 from "../../assets/Screenshot 2025-06-29 024137.png";
import img2 from "../../assets/Screenshot 2025-08-14 010859.png";
import img3 from "../../assets/Screenshot 2025-08-11 110332.png";
import github from "../../assets/icons8-github-64.png";
import liveLink from "../../assets/icons8-live-50.png";
import { motion } from "framer-motion";

const projectData = [
  {
    id: 1,
    name: "UniWise – Scholarship Application Platform",
    image: img3,
    description:
      "A full-stack scholarship platform that allows students to explore, apply, and manage scholarships with secure payment integration and a role-based management system.",
    technologies: [
      "React",
      "React Router",
      "Tailwind CSS",
      "Axios",
      "Stripe React",
      "Firebase Auth",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe Payment Integration",
      "Firebase Admin SDK",
    ],
    github: {
      client: "https://github.com/MahirSiyam/Uniwise-Client",
      server: "https://github.com/MahirSiyam/Uniwise-Server",
    },
    live: "https://explore-email-password-a-22a93.web.app/",
  },
  {
    id: 2,
    name: "TalkNest – Tutor Finder Platform",
    image: img1,
    description:
      "A web application to help students find and book tutors based on subjects and location with real-time appointment management.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Firebase",
      "DaisyUI",
      "MongoDB",
      "Express.js",
    ],
    github: {
      client: "https://github.com/MahirSiyam/talknest-client",
      server: "https://github.com/MahirSiyam/talknest-server",
    },
    live: "https://talknest-ab7a1.web.app/myBookedTutors",
  },
  {
    id: 3,
    name: "COOKING – Recipe Management App",
    image: img2,
    description:
      "A full-stack recipe management app where users can create, update, delete, and like recipes with real-time updates and personalized dashboards.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Firebase",
      "Express.js",
      "MongoDB",
      "DaisyUI",
    ],
    github: {
      client: "https://github.com/MahirSiyam/cooking-client",
      server: "https://github.com/MahirSiyam/cooking-server",
    },
    live: "https://recipe-book-app-8135e.web.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0a111e] py-16 px-6">

      {/* Inject the CSS for border animation */}
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
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#fec544] mb-8">My Projects</h2>

        <div className="grid md:grid-cols-1 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#141a29] rounded-xl animate-border shadow-md overflow-visible flex flex-col md:flex-row border border-[#fec544]"
            >
              {/* Image Section */}
              <div className="md:w-1/2">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full max-h-80 md:max-h-none object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                />
              </div>

              {/* Content Section */}
              <div className="p-5 flex justify-center items-center flex-grow md:w-1/2">
                <div>
                  <h3 className="text-2xl font-semibold text-[#fec544] mb-4">
                    {project.name}
                  </h3>
                  <p className="text-white mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="badge badge-outline text-white border-[#fec544]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {/* GitHub Dropdown */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="dropdown dropdown-top md:dropdown-bottom"
                    >
                      <label
                        tabIndex={0}
                        className="btn btn-sm btn-outline text-black font-bold bg-[#fec544] flex items-center gap-1"
                      >
                        <img className="w-6" src={github} alt="github" /> GitHub
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-[#0a111e] rounded-box w-52"
                      >
                        <li>
                          <a
                            className="text-white hover:bg-[#141a29] hover:text-[#fec544]"
                            href={project.github.client}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Client Side
                          </a>
                        </li>
                        {project.github.server && (
                          <li>
                            <a
                              className="text-white hover:bg-[#141a29] hover:text-[#fec544]"
                              href={project.github.server}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Server Side
                            </a>
                          </li>
                        )}
                      </ul>
                    </motion.div>

                    {/* Live Button */}
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline text-black font-bold bg-[#fec544] flex items-center gap-1"
                    >
                      <img className="w-6" src={liveLink} alt="live site" />
                      Live Site
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
