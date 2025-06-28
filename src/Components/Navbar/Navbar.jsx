import React from "react";
import { Link } from "react-scroll";
import logo from "../../assets/Professional Corporate Logo with Interlocking Design.png"

const Navbar = () => {

    const nav = <>
  <Link to="home" spy={true} smooth={true} duration={900} activeClass="text-blue-600 font-bold" className="cursor-pointer hover:text-blue-500">
    Home
  </Link>
  <Link to="about" spy={true} smooth={true} duration={900} activeClass="text-blue-600 font-bold" className="cursor-pointer hover:text-blue-500">
    About Me
  </Link>
  <Link to="skills" spy={true} smooth={true} duration={900} activeClass="text-blue-600 font-bold" className="cursor-pointer hover:text-blue-500">
    Skills
  </Link>
  <Link to="education" spy={true} smooth={true} duration={900} activeClass="text-blue-600 font-bold" className="cursor-pointer hover:text-blue-500">
    Education
  </Link>
  <Link to="projects" spy={true} smooth={true} duration={900} activeClass="text-blue-600 font-bold" className="cursor-pointer hover:text-blue-500">
    Projects
  </Link>
  <Link to="contact" spy={true} smooth={true} duration={900} activeClass="text-blue-600 font-bold" className="cursor-pointer hover:text-blue-500">
    Contact
  </Link>
</>

  return (
    <div className="navbar justify-center backdrop-blur-lg items-center bg-base-100/5 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {
                nav
            }
          </ul>
        </div>
       
       <img className="w-10 rounded-4xl" src={logo} alt="" />

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu gap-5 menu-horizontal px-1 text-md font-semibold">
          {
            nav
          }
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Resume</a>
      </div>
    </div>
  );
};

export default Navbar;
