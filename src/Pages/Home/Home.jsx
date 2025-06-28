import React from "react";
import image from "../../assets/WhatsApp Image 2025-06-25 at 15.16.12_f6c972c7.jpg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen md:p-20 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={image}
            alt="Profile"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-full shadow-2xl mx-auto"
          />
          <div className="flex-1">
            <h1 className="text-5xl font-bold">
              Hello, I'm <br /> Mahir Siyam
            </h1>
            <p className="py-6 w-2/3">
              I am a passionate Frontend Developer dedicated to building clean,
              responsive, and user-friendly web interfaces. I specialize in
              modern technologies like HTML, CSS, JavaScript, React, and
              Tailwind CSS to craft seamless digital experiences.
            </p>
            <Link to="projects" smooth={true} duration={1000}>
              <button className="btn btn-primary">View Projects</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
