import React from "react";
import img1 from "../../assets/Screenshot 2025-06-29 024137.png";
import img2 from "../../assets/Screenshot 2025-06-29 031202.png";
import img3 from "../../assets/Screenshot 2025-06-29 031415.png";
import github from "../../assets/icons8-github-64.png";
import liveLink from "../../assets/icons8-live-50.png";

import { motion } from "framer-motion";

const projectData = [
  {
    id: 1,
    name: "TalkNest",
    image: img1,
    description:
      "A tutor booking platform where students can view, book, and manage tutor appointments.",
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
    id: 2,
    name: "Recipe Book",
    image: img2,
    description:
      "A recipe management system with user authentication and CRUD functionalities.",
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
  {
    id: 3,
    name: "Marathon Run",
    image: img3,
    description:
      "A responsive single-page website designed for a marathon event.",
    technologies: ["Firebase", "React", "Tailwind CSS", "DaisyUI"],
    github: {
      client: "https://github.com/MahirSiyam/Run",
      server: null,
    },
    live: "https://marathon-run-project.netlify.app/",
  },
];

const Projects = () => {

  return (
    <section id="projects" className="bg-[#0a111e] py-16 px-6">
      <title>Mahir</title>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#fec544] mb-12">My Projects</h2>

        <div className="grid md:grid-cols-1 gap-8">
          {projectData.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-[#141a29] rounded-xl shadow-md overflow-visible flex flex-col md:flex-row border border-[#fec544]"
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
                      transition={{ type: "spring", stiffness: 300 }}
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
                      transition={{ type: "spring", stiffness: 300 }}
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