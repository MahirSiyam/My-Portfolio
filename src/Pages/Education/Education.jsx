import React from "react";

const Education = () => {
  return (
    <section id="education" className="bg-[#0a111e] py-16 px-6">

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

      <title>Mahir</title>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#fec544] mb-8">Education</h2>

        <div className="bg-[#141a29] rounded-xl shadow-md p-4 md:p-10 lg:p-15 text-left animate-border border border-[#fec544]">
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
