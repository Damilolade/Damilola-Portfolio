// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, DownloadIcon } from "lucide-react";
import bg from "../assets/bg.jpg"; 
import logo from "../assets/logo.jpeg"; 
import "./Home.css"; // import CSS

const Home = () => {
  return (
    <section
      className="home-section"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="home-content">
        <img src={logo} alt="Profile" className="profile-img" />

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="title"
        >
          DAMILOLA OLAWEPO PORTFOLIO
        </motion.h1>

        <p className="subtitle">
          I’m a passionate Computer Science student, learning and building creative
          solutions with <span className="highlight">technology</span>.
        </p>

        {/* Buttons */}
        <div className="buttons">
          <a href="mailto:example@mail.com" className="btn primary">
            <Mail size={18} /> Contact Me
          </a>
          <a href="#" className="btn secondary">
            <DownloadIcon size={18} /> Resume
          </a>
        </div>

        {/* Socials */}
        <div className="socials">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github className="icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
