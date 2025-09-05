// src/pages/Home.jsx
import React, { useState } from "react";
import "./Home.css";
import profileImg from "../assets/profileImg.jpg";

// ✅ technology icons
import jsIcon from "../assets/jsIcon.webp";
import reactIcon from "../assets/reactIcon.png";
import tailwindIcon from "../assets/tailwindIcon.jpeg";
import nodeIcon from "../assets/nodeIcon.svg";
import typescriptIcon from "../assets/typescriptIcon.webp";

const Tech = ({ src, label }) => (
  <div className="tech">
    <img src={src} alt={label} />
    <span>{label}</span>
  </div>
);

const Home = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <section className={`home-section ${theme}`}>
      <div className="container">

        {/* Theme Toggle Button */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        {/* Card: image + intro */}
        <div className="card">
          <img className="avatar" src={profileImg} alt="Damilola Olawepo" />

          <div className="home-content">
            <h1>
              Hi, I'm <span className="accent">Damilola Olawepo</span>
            </h1>
            <p>
              A dedicated <span className="accent">Software Engineer</span> blending
              technical expertise with a clear, practical approach to problem-solving.
            </p>
            <p>
              I build efficient, user-friendly products that deliver meaningful digital
              experiences.
            </p>
            <p>
              Skilled across JavaScript, React, Tailwind CSS, and backend tools, I turn
              ideas into reliable, real-world solutions.
            </p>

            <div className="actions">
              <a className="btn btn-primary" href="/resume.pdf" download>
                Download CV
              </a>
              <a className="btn btn-outline" href="mailto:youremail@example.com">
                Contact Me
              </a>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="tech-section">
          <h2>
            <span>Technologies & Tools</span>
          </h2>
          <div className="tech-grid">
            <Tech src={jsIcon} label="JavaScript" />
            <Tech src={reactIcon} label="React" />
            <Tech src={tailwindIcon} label="Tailwind CSS" />
            <Tech src={nodeIcon} label="Node.js" />
            <Tech src={typescriptIcon} label="TypeScript" />
          </div>
        </div>

        {/* Tech List */}
        <div className="tech-list">
          <div className="my-languages">
            <h2>
              <span>Languages</span>
            </h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
            </ul>
          </div>
          <div className="my-libraries">
            <h2>
              <span>Libraries & Frameworks</span>
            </h2>
            <ul>
              <li>React.js</li>
              <li>Tailwind CSS</li>
              <li>Next.js</li>
              <li>Node.js</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
