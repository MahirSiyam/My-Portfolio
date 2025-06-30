import React from "react";
import about from "../../assets/About us page.gif";

const About = () => {
  return (
    <section id="about" className="bg-[#0a111e] py-8 md:py-12 lg:py-16 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-[#fec544] mb-8">About Me</h2>

    <div className="flex flex-col lg:flex-row items-center gap-3 bg-[#141a29]">
      {/* Image Section */}
      <div className="w-[500px]">
        <img src={about} alt="About Me" className="w-full h-auto" />
      </div>

      {/* Text Section */}
      <div className="w-full text-white text-start text-md p-1 font-light leading-relaxed">
        <p>
          Hello! I’m <span className="font-semibold text-[#fec544]">Mahir Siyam</span>, a passionate front-end web developer with a strong focus on
          building clean, user-friendly, and responsive web interfaces. My
          journey into programming began with curiosity about how websites
          work. I started learning HTML and CSS, and quickly found joy in
          turning ideas into functional, beautiful designs using JavaScript
          and React. <br /><br /> I enjoy working on projects that solve real-world
          problems and enhance user experience. Whether it’s a dynamic
          recipe app or a smooth booking platform, I love seeing users
          interact with something I’ve built. I’m particularly drawn to
          challenges that involve integrating backend APIs, managing states,
          and optimizing UI/UX. <br /><br /> Beyond coding, I enjoy exploring
          photography, watching football, and sometimes sketching. These
          creative outlets help me stay fresh and bring a new perspective to
          my development work. I’m constantly learning, collaborating, and
          striving to improve. I believe in writing code that not only works
          but is also clean, scalable, and maintainable.
        </p>
      </div>
    </div>
  </div>
</section>

  );
};

export default About;
