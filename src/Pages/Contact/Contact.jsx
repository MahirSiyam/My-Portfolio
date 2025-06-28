import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-5">
          Let's Connect
        </h2>

        <div className="bg-white rounded-xl shadow-md p-8">
          <p className="text-lg text-gray-700 mb-8 text-center">
            I’m always open to connecting — whether it’s about a new project, a
            creative idea, or a potential collaboration. Feel free to reach out
            anytime!
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Direct Contact Methods */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Direct Contact
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <FaEnvelope className="text-blue-500 mr-3 text-xl" />
                  <div>
                    <p className="text-gray-600">Email</p>
                    <a
                      href="mailto:mahirmubtasimsiyam@gmail.com"
                      className="text-blue-600 hover:underline"
                    >
                      mahirmubtasimsiyam@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-center">
                  <FaPhone className="text-blue-500 mr-3 text-xl" />
                  <div>
                    <p className="text-gray-600">Phone</p>
                    <a
                      href="tel:+8801844923860"
                      className="text-blue-600 hover:underline"
                    >
                      +8801844923860
                    </a>
                  </div>
                </li>
                <li className="flex items-center">
                  <FaWhatsapp className="text-blue-500 mr-3 text-xl" />
                  <div>
                    <p className="text-gray-600">WhatsApp</p>
                    <a
                      href="https://wa.me/8801844923860"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      +8801844923860
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Professional Profiles */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Professional Profiles
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <FaLinkedin className="text-blue-500 mr-3 text-xl" />
                  <a
                    href="https://www.linkedin.com/in/mahir-siyam-1a9808356/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    LinkedIn Profile
                  </a>
                </li>
                <li className="flex items-center">
                  <FaGithub className="text-blue-500 mr-3 text-xl" />
                  <a
                    href="https://github.com/MahirSiyam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    GitHub Profile
                  </a>
                </li>
              </ul>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Preferred Contact Methods
                </h3>
                <div className="flex flex-wrap gap-3">
                  <span className="badge badge-primary flex items-center gap-1">
                    <FaEnvelope /> Email
                  </span>
                  <span className="badge badge-primary flex items-center gap-1">
                    <FaLinkedin /> LinkedIn
                  </span>
                  <span className="badge badge-primary flex items-center gap-1">
                    <FaWhatsapp /> WhatsApp
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-gray-500">
            <p>I typically respond within 24 hours on weekdays.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
