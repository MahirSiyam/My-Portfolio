import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import img1 from "../../assets/Screenshot 2025-06-29 024137.png";
import img2 from "../../assets/Screenshot 2025-06-29 031202.png";
import img3 from "../../assets/Screenshot 2025-06-29 031415.png";

const projectData = [
  {
    id: 1,
    name: "TalkNest",
    image: img1,
    description:
      "A tutor booking platform where students can view, book, and manage tutor appointments.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Firebase",
      "DaisyUI",
      "MongoDB",
      "Express.js",
    ],
    github: {
      client: "https://github.com/MahirSiyam/talknest-client",
      server: null,
    },
    live: "https://talknest-ab7a1.web.app/myBookedTutors",
    details: `TalkNest is a full-stack tutor booking platform built with React, Firebase, Express.js, and MongoDB. Students can view tutor profiles, filter by language, book sessions, and manage appointments from their personalized dashboard.

Key Features:
- Student dashboard with real-time booking management
- Tutor role assignment and visibility
- Firebase authentication with route protection
- Booking system using Firestore with live updates
- Admin dashboard to manage users and roles
- Responsive UI with Tailwind CSS and DaisyUI

Challenges Faced & Solutions:
1. Real-Time Booking Updates: Booking data wasn't updating without a page reload.
   ✅ Solved using Firestore listeners and conditional rendering to ensure real-time state sync.

2. Role-Based Access: Controlling what students, tutors, and admins could access.
   ✅ Implemented role-based rendering and protected routes using Firebase Auth and user role flags.

3. Theme Persistence: User-selected dark/light theme reset on refresh.
   ✅ Solved using localStorage to persist the theme state.

4. Booking Conflict Handling: Users sometimes booked the same tutor time slot.
   ✅ Prevented this using Firestore validation and conditional UI disabling for already-booked slots.

TalkNest is optimized for responsiveness, data consistency, and a smooth user experience without reloads.`,
  },
  {
    id: 2,
    name: "Recipe Book",
    image: img2,
    description:
      "A recipe management system with user authentication and CRUD functionalities.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Firebase",
      "Express.js",
      "MongoDB",
      "DaisyUI",
    ],
    github: {
      client: "https://github.com/MahirSiyam/cooking-client",
      server: "https://github.com/MahirSiyam/cooking-server",
    },
    live: "https://recipe-book-app-8135e.web.app/",
    details: `Recipe Book is a full-stack recipe management system where users can share, update, like, and manage their recipes. It features secure authentication, personalized recipe dashboards, and a like-based ranking system.

Key Features:
- User signup/login with Firebase authentication
- Add, update, and delete personal recipes
- View all recipes and filter/sort by likes and name
- Like feature (users can like others’ recipes, but not their own)
- Dashboard overview showing total and personal recipe stats
- Protected routes with JWT for secure access
- Backend API built with Express.js and MongoDB

Challenges Faced & Solutions:
1. User-Based Recipe Management: Users should only manage their own recipes.
   ✅ Solved using JWT verification and email-matching filters on backend routes.

2. Like System Handling: Avoiding multiple likes from the same user and self-liking.
   ✅ Implemented frontend conditions and backend validation to restrict likes.

3. Dashboard Stats Calculation: Required total and user-specific counts efficiently.
   ✅ Solved using MongoDB aggregation pipelines to count and group data per user.

4. Responsive and Smooth UI: Maintaining a clean UI with filtering, sorting, and no page reload.
   ✅ Achieved using React state management, Tailwind CSS, and DaisyUI components.

Recipe Book delivers a seamless experience for managing and browsing user-generated content, with robust backend security and intuitive frontend interactivity.`,
  },
  {
    id: 3,
    name: "Marathon Run",
    image: img3,
    description:
      "A responsive single-page website designed for a marathon event.",
    technologies: ["Firebase", "React", "Tailwind CSS", "DaisyUI"],
    github: {
      client: "https://github.com/MahirSiyam/Run",
      server: null,
    },
    live: "https://marathon-run-project.netlify.app/",
    details: `Marathon Run is a modern, responsive single-page website designed for promoting a marathon event. It serves as an attractive landing page that provides key event details and encourages user engagement.

Key Features:
- Hero section with event highlight and CTA button
- Event schedule, location, and contact info sections
- Responsive layout for mobile, tablet, and desktop
- Smooth scroll and clean section transitions
- Interactive registration or information button

Challenges Faced & Solutions:
1. Mobile-First Design: Ensuring the site looks great on all devices.
   ✅ Used Tailwind CSS with responsive utilities and flex/grid layouts to handle mobile responsiveness.

2. Smooth UX and Scroll Animations:
   ✅ Leveraged CSS transitions and scroll behavior to provide a polished experience.

3. Clean Visual Hierarchy and Accessibility:
   ✅ Structured content with semantic HTML, proper headings, and clear button interactions.

Marathon Run highlights front-end skills by blending design, responsiveness, and performance into a clean, event-focused landing page.`,
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-12">My Projects</h2>

        <div className="grid md:grid-cols-1 gap-8">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 rounded-xl shadow-md overflow-visible flex flex-col md:flex-row"
            >
              {/* Image Section */}
              <div className="md:w-1/2">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full max-h-80 md:max-h-none object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                />
              </div>

              {/* Content Section */}
              <div className="p-5 flex justify-center items-center flex-grow md:w-1/2">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="badge badge-outline text-blue-600 border-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {/* GitHub Dropdown */}
                    <div className="dropdown dropdown-top md:dropdown-bottom">
                      <label
                        tabIndex={0}
                        className="btn btn-sm btn-outline text-blue-600 flex items-center gap-1"
                      >
                        <FaGithub /> GitHub
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <a
                            className="bg-base-300"
                            href={project.github.client}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Client Side
                          </a>
                        </li>
                        {project.github.server && (
                          <li>
                            <a
                              className="bg-base-300"
                              href={project.github.server}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Server Side
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Live Button */}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline text-green-600"
                    >
                      Live Site
                    </a>

                    {/* Details Button */}
                    <button
                      className="btn btn-sm btn-outline text-purple-600"
                      onClick={() => setSelectedProject(project)}
                    >
                      Project Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <dialog id="my_modal" className="modal modal-open">
            <div className="modal-box">
              <h3 className="font-bold text-lg text-blue-600 mb-2">
                {selectedProject.name} - Details
              </h3>
              <p className="text-gray-700 text-start whitespace-pre-line">
                {selectedProject.details}
              </p>
              <div className="modal-action">
                <button
                  className="btn"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </dialog>
        )}
      </div>
    </section>
  );
};

export default Projects;
