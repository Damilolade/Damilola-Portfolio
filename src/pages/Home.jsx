// src/pages/Home.jsx
import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";
import avatar from "../assets/profileImg.jpg";
import "./Home.css";

const Home = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <section className={`home-section ${theme}`}>
      {/* Theme Switch */}
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      </button>

      <div className="container">
        {/* Hero Card */}
        <div className="card">
          <img src={avatar} alt="Profile" className="avatar" />
          <div className="home-content">
            <h1>
              Hi, I’m <span className="accent">Damilola Olawepo</span>
            </h1>
            <p>
              A dedicated <span className="accent">Software Engineer</span>{" "}
              blending technical expertise with problem-solving skills.
            </p>
            <p>
              I build efficient, user-friendly products that deliver meaningful
              digital experiences.
            </p>
            <div className="actions">
              <a href="/resume.pdf" className="btn btn-primary" download>
                Download CV
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <section className="tech-section">
          <h2>Technologies & Tools</h2>
          <div className="tech-grid">
            <Tech src="/icons/JsIcon.webp" label="JavaScript" />
            <Tech src="/icons/reactIcon.png" label="React" />
            <Tech src="/icons/tailwindIcon.jpeg" label="Tailwind CSS" />
            <Tech src="/icons/nodeIcon.svg" label="Node.js" />
            <Tech src="/icons/TypescriptIcon.webp" label="TypeScript" />
          </div>
        </section>

        {/* Tech List */}
        <section className="tech-list">
          <div className="my-languages">
            <h2>Languages</h2>
            <ul>
              <li><a href="#">HTML</a></li>
              <li><a href="#">CSS</a></li>
              <li><a href="#">JavaScript</a></li>
              <li><a href="#">TypeScript</a></li>
            </ul>
          </div>
          <div className="my-libraries">
            <h2>Libraries & Frameworks</h2>
            <ul>
              <li><a href="#">React.js</a></li>
              <li><a href="#">Tailwind CSS</a></li>
              <li><a href="#">Next.js</a></li>
              <li><a href="#">Node.js</a></li>
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
};

const Tech = ({ src, label }) => (
  <div className="tech">
    <img src={src} alt={label} />
    <span>{label}</span>
  </div>
);

export default Home;
