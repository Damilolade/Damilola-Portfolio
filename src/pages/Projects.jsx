// src/components/Projects.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.css";

const projects = [
  {
    title: "My Portfolio",
    description:
      "My personal portfolio website showcasing my projects, skills, and achievements as a frontend developer.",
    link: "https://damilola-portfolio-j374.vercel.app/", // ✅ correct link
    tech: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Todo App",
    description:
      "A simple yet powerful Todo application with task creation, completion, and deletion features.",
    link: "https://todo-app-nxdq.vercel.app/",
    tech: ["React", "CSS"],
  },
  {
    title: "Counter App",
    description:
      "A basic counter application demonstrating React state management and interactivity.",
    link: "https://counter-app-mjlk.vercel.app/",
    tech: ["React", "Hooks"],
  },
  {
    title: "Blog CMS",
    description:
      "A content management system (CMS) built with React and Node.js for managing blog posts, categories, and user roles. Focuses on scalability and security.",
    link: "https://github.com/damilola-dev/blog-cms",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "E-Learning Platform",
    description:
      "An online learning platform offering courses, video lectures, and progress tracking. Designed for seamless user experience and responsive layouts.",
    link: "https://github.com/damilola-dev/e-learning",
    tech: ["React", "Express", "CSS", "JWT"],
  },
  {
    title: "Chat Application",
    description:
      "A real-time chat application with private rooms, user authentication, and socket-based communication.",
    link: "https://github.com/damilola-dev/chat-app",
    tech: ["React", "Socket.io", "Node.js"],
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="projects" className="projects-section">
      <h2 data-aos="fade-up">Dami Projects 💻</h2>
      <p className="subtitle" data-aos="fade-up" data-aos-delay="100">
        Explore a selection of my recent projects showcasing clean design,
      </p>
      <p className="subtitle" data-aos="fade-up" data-aos-delay="150">
        modern technologies, and a focus on building scalable,
        user-friendly applications.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.tech.map((t, i) => (
                  <span key={i} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
