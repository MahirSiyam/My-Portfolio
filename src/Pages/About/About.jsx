import React from "react";
import about from "../../assets/IMG-20240929-WA0007.jpg";

const About = () => {
  return (
    <section id="about" className="bg-[#0a111e] py-16 px-4 sm:px-8">
      <title>Mahir</title>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#fec544] mb-8">
          About Me
        </h2>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 bg-[#141a29] p-4 sm:p-6 md:p-8 rounded-xl shadow-md border border-[#fec544]">
          {/* Image Section */}
          <div className="">
            <img
              src={about}
              alt="About Me"
              className="w-auto h-[500px] rounded-lg object-contain"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-white text-center lg:text-left text-base leading-relaxed font-light">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
