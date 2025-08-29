import React from "react";
import {
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";

import email from "../../assets/email_2669578.png";
import phone from "../../assets/phone-call_9946313.png";
import whatsapp from "../../assets/whatsapp.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#0a111e] py-16 px-6 box-border overflow-hidden break-words">
      <title>Mahir</title>

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

      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#fec544] mb-6">
          Let's Connect
        </h2>

        <div className="bg-[#141a29] rounded-xl shadow-md p-4 sm:p-8 border animate-border border-[#fec544]">
          <p className="text-base sm:text-lg text-white mb-8 text-center">
            I’m always open to connecting — whether it’s about a new project, a
            creative idea, or a potential collaboration. Feel free to reach out
            anytime!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Direct Contact Methods */}
            <div>
              <h3 className="text-xl font-semibold text-[#fec544] mb-4">
                Direct Contact
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-center">
                  <img className="w-6 sm:w-7" src={email} alt="email" />
                  <div>
                    <p className="text-gray-200 text-sm">Email</p>
                    <a
                      href="mailto:mahirmubtasimsiyam@gmail.com"
                      className="text-white hover:underline text-sm sm:text-base break-all"
                    >
                      mahirmubtasimsiyam@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex gap-3 items-center">
                  <img className="w-6 sm:w-7" src={phone} alt="phone" />
                  <div>
                    <p className="text-gray-200 text-sm">Phone</p>
                    <a
                      href="tel:+8801844923860"
                      className="text-white hover:underline text-sm sm:text-base"
                    >
                      +8801844923860
                    </a>
                  </div>
                </li>
                <li className="flex gap-3 items-center">
                  <img className="w-6 sm:w-7" src={whatsapp} alt="whatsapp" />
                  <div>
                    <p className="text-gray-200 text-sm">WhatsApp</p>
                    <a
                      href="https://wa.me/8801844923860"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:underline text-sm sm:text-base"
                    >
                      +8801844923860
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Professional Profiles */}
            <div>
              <h3 className="text-xl font-semibold text-[#fec544] mb-4">
                Professional Profiles
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-center">
                  <img className="w-6 sm:w-7" src={linkedin} alt="linkedin" />
                  <a
                    href="https://www.linkedin.com/in/mahir-siyam-1a9808356/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:underline text-sm sm:text-base break-all"
                  >
                    LinkedIn Profile
                  </a>
                </li>
                <li className="flex gap-3 items-center">
                  <img className="w-6 sm:w-7" src={github} alt="github" />
                  <a
                    href="https://github.com/MahirSiyam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:underline text-sm sm:text-base break-all"
                  >
                    GitHub Profile
                  </a>
                </li>
              </ul>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-[#fec544] mb-3">
                  Preferred Contact Methods
                </h3>
                <div className="flex flex-wrap gap-3">
                  <span className="badge badge-outline text-white border-[#fec544] flex items-center gap-1 px-3 py-2">
                    <FaEnvelope /> Email
                  </span>
                  <span className="badge badge-outline text-white border-[#fec544] flex items-center gap-1 px-3 py-2">
                    <FaLinkedin /> LinkedIn
                  </span>
                  <span className="badge badge-outline text-white border-[#fec544] flex items-center gap-1 px-3 py-2">
                    <FaWhatsapp /> WhatsApp
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center text-white text-sm sm:text-base">
            <p>I typically respond within 24 hours on weekdays.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
