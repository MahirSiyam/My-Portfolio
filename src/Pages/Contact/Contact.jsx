import React from "react";
import {
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";

import email from "../../assets/email_2669578.png"
import phone from "../../assets/phone-call_9946313.png"
import whatsapp from "../../assets/whatsapp.png"
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen px-6 bg-[#0a111e]">
      <div className="max-w-6xl mx-auto py-8 md:py-12 lg:py-16">
        <h2 className="text-3xl font-bold text-center text-[#fec544] mb-5">
          Let's Connect
        </h2>

        <div className="bg-[#141a29] rounded-xl shadow-md p-8 border border-[#fec544]">
          <p className="text-lg text-white mb-8 text-center">
            I’m always open to connecting — whether it’s about a new project, a
            creative idea, or a potential collaboration. Feel free to reach out
            anytime!
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Direct Contact Methods */}
            <div>
              <h3 className="text-xl font-semibold text-[#fec544] mb-4">
                Direct Contact
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-center">
                  <img className="w-7" src={email} alt="email" />
                  <div>
                    <p className="text-gray-200">Email</p>
                    <a
                      href="mailto:mahirmubtasimsiyam@gmail.com"
                      className="text-white hover:underline"
                    >
                      mahirmubtasimsiyam@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex gap-3 items-center">
                  <img className="w-7" src={phone} alt="phone" />
                  <div>
                    <p className="text-gray-200">Phone</p>
                    <a
                      href="tel:+8801844923860"
                      className="text-white hover:underline"
                    >
                      +8801844923860
                    </a>
                  </div>
                </li>
                <li className="flex gap-3 items-center">
                  <img className="w-7" src={whatsapp} alt="whatsapp" />
                  <div>
                    <p className="text-gray-200">WhatsApp</p>
                    <a
                      href="https://wa.me/8801844923860"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:underline"
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
                  <img className="w-7" src={linkedin} alt="linkedin" />
                  <a
                    href="https://www.linkedin.com/in/mahir-siyam-1a9808356/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:underline"
                  >
                    LinkedIn Profile
                  </a>
                </li>
                <li className="flex gap-3 items-center">
                  <img className="w-7" src={github} alt="github" />
                  <a
                    href="https://github.com/MahirSiyam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:underline"
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
                  <span className="badge badge-outline text-white border-[#fec544] flex items-center gap-1">
                    <FaEnvelope /> Email
                  </span>
                  <span className="badge badge-outline text-white border-[#fec544] flex items-center gap-1">
                    <FaLinkedin /> LinkedIn
                  </span>
                  <span className="badge badge-outline text-white border-[#fec544] flex items-center gap-1">
                    <FaWhatsapp /> WhatsApp
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-white">
            <p>I typically respond within 24 hours on weekdays.</p>
          </div>
        </div>
      </div>

      <footer className="w-full bg-[#0a111e] text-white py-4 border-t-1 border-[#fec544]">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <p className="text-sm sm:text-base">
          © 2025 - All rights reserved by{" "}
          <span className="text-[#fec544] font-semibold">Mahir Siyam</span>
        </p>
      </div>
    </footer>
    </section>
  );
};

export default Contact;
