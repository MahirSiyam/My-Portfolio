import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

import logo from "../../assets/Creative Agency Logo with Letter 'M'-modified.png";
import home from "../../assets/icons8-home-24.png";
import about from "../../assets/icons8-about-me-50.png";
import skills from "../../assets/icons8-skills-50.png";
import education from "../../assets/icons8-education-50.png";
import project from "../../assets/icons8-projects-50.png";
import contact from "../../assets/icons8-contact-50.png";
import download from "../../assets/icons8-download-64.png";

const Navbar = () => {
  const nav = (
  <>
    {[
      { icon: home, label: "Home", to: "home" },
      { icon: about, label: "About Me", to: "about" },
      { icon: skills, label: "Skills", to: "skills" },
      { icon: education, label: "Education", to: "education" },
      { icon: project, label: "Projects", to: "projects" },
      { icon: contact, label: "Contact", to: "contact" },
    ].map((item, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Link
          to={item.to}
          spy={true}
          smooth={true}
          duration={900}
          activeClass="!text-[#fec544] !font-bold"
          className="flex gap-1 items-center cursor-pointer text-white hover:text-[#fec544]"
        >
          <img className="w-6" src={item.icon} alt={item.label} />
          {item.label}
        </Link>
      </motion.div>
    ))}
  </>
);


  return (
    <div className="navbar max-w-7xl mx-auto border border-[#fec544] rounded-xl fixed top-0 left-0 right-0 z-50 justify-center items-center bg-[#070d1b]/55 backdrop-blur-lg shadow-sm">
      <title>Mahir</title>
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <motion.div
            tabIndex={0}
            role="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="btn p-2 mr-1 md:p-4 btn-ghost bg-[#070d1b] lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#fec544]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </motion.div>

          <ul
            tabIndex={0}
            className="menu menu-sm gap-3 items-start dropdown-content bg-[#070d1b] text-[#fec544] rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {nav}
          </ul>
        </div>

        {/* Logo */}
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={900}
          className="flex justify-center items-center gap-3 cursor-pointer"
        >
          <img className="w-9 rounded-4xl" src={logo} alt="logo" />
          <p className="text-white text-2xl font-bold">
            <span className="text-[#fec544]">M</span>ahir
          </p>
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu gap-6 menu-horizontal px-1 text-md font-semibold">
          {nav}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="btn bg-[#fec544] text-black font-bold rounded-2xl flex items-center gap-2"
          href="#"
        >
          <img className="w-6" src={download} alt="download" />
          Resume
        </motion.a>
      </div>
    </div>
  );
};

export default Navbar;
