import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Real-Time Chat App",
      description:
        "Built a fully functional real-time chat application with React, Node.js, and Socket.io. Features include live messaging, user presence status, and responsive UI.",
      tech: ["React", "Node.js", "Socket.io", "Express", "MongoDB"],
      link: "https://github.com/dcortesnet/Reactjs-nodejs-realtime",
    },
    {
      title: "Portfolio Website",
      description:
        "Designed a clean, modern, and responsive portfolio website using React and Tailwind CSS to showcase skills, projects, and professional background.",
      tech: ["React", "Tailwind CSS", "Vercel"],
      link: "#",
      demo: true,
    },
    {
      title: "API Integration Dashboard",
      description:
        "Developed a dashboard to visualize real-time HR and payroll data integrating multiple RESTful APIs with dynamic charts and filtering options.",
      tech: ["React", "REST APIs", "Chart.js", "Node.js"],
      privateCode: true,
    },
  ];

  return (
    <section className="bg-gray-100 min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          My Projects
        </h2>

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold mb-1">Technologies:</h4>
                <ul className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <li
                      key={i}
                      className="bg-blue-100 text-blue-800 text-xs sm:text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-6">
                {project.link && !project.privateCode && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    {project.demo ? "Live Demo" : "View on GitHub"}
                  </a>
                )}

                {project.privateCode && (
                  <span className="text-gray-500 font-medium">Code Private</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
