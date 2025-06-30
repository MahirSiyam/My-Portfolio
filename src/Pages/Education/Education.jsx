import React from "react";

const Education = () => {
  return (
    <section id="education" className="bg-[#0a111e] py-16 px-6">
      <title>Mahir</title>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#fec544] mb-8">Education</h2>

        <div className="bg-[#141a29] rounded-xl shadow-md p-6 text-left border border-[#fec544]">
          <h3 className="text-2xl font-semibold text-gray-200">B.Sc. in Computer Science & Engineering</h3>
          <p className="text-lg text-white mt-2">Sylhet Engineering College, Sylhet</p>
          <p className="text-gray-100 mt-1 italic">Expected Graduation: Ongoing</p>
          <p className="text-white mt-4 leading-relaxed">
            I am currently pursuing my Bachelor's degree in Computer Science and Engineering at Sylhet Engineering College. My academic journey has helped me build strong foundations in programming, web development, and software engineering principles. I actively complement my studies with practical projects and continuous learning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
