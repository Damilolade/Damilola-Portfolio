import React from "react";
import { BookOpen, Music, Search } from "lucide-react";
import propic from "../assets/propic.jpg";
import "./About.css";

// Dynamic hobbies
const hobbiesData = [
  {
    icon: BookOpen,
    title: "Reading",
    desc: "Exploring books and articles to expand knowledge.",
    link: "https://www.goodreads.com/",
  },
  {
    icon: Music,
    title: "Playing Music",
    desc: "Expressing creativity and balance through music.",
    link: "https://soundcloud.com/",
  },
  {
    icon: Search,
    title: "Making Research",
    desc: "Diving into new ideas, trends, and innovations.",
    link: "https://scholar.google.com/",
  },
];

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h2 className="section-title">My Hobbies</h2>
      <div className="hobbies-grid">
        {hobbiesData.map((hobby, index) => {
          const Icon = hobby.icon;
          return (
            <a
              key={index}
              href={hobby.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hobby-card"
            >
              <Icon className="hobby-icon" />
              <h3 className="hobby-title">{hobby.title}</h3>
              <p className="hobby-desc">{hobby.desc}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section className="about-page">
      {/* Profile */}
      <div className="about-card profile">
        <img src={propic} alt="Profile" className="profile-img" />
        <h1 className="section-title">About Me</h1>
      </div>

      {/* Intro */}
      <div className="about-card">
        <p>
          Hi, I’m <span className="highlight">Damilola Olawepo</span>, a{" "}
          <span className="highlight">Computer Science student</span> at{" "}
          <span className="highlight">Yaba College of Technology</span>.
        </p>
      </div>

      {/* Passion */}
      <div className="about-card">
        <p>
          I am passionate about <span className="highlight">technology</span>,{" "}
          <span className="highlight">creativity</span>, and{" "}
          <span className="highlight">continuous learning</span>.
        </p>
      </div>

      {/* Skills */}
      <div className="about-card">
        <p>
          My journey in Computer Science is shaping my skills in{" "}
          <span className="highlight">software development</span>,{" "}
          <span className="highlight">data analysis</span>, and{" "}
          <span className="highlight">problem-solving</span>.
        </p>
        <p>
          I am also skilled in <span className="highlight">Microsoft Excel</span>{" "}
          and I’m a <span className="highlight">Professional Finger Food Chef</span>.
        </p>
      </div>

      {/* Goal */}
      <div className="about-card">
        <p>
          My goal is to grow into a{" "}
          <span className="highlight">versatile software engineer</span> who
          builds solutions that make life easier and more efficient.
        </p>
      </div>

      {/* Hobbies */}
      <Hobbies />
    </section>
  );
};

export default About;
