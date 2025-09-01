import React, { useEffect } from "react";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Download,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css"; // Import CSS file

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="contact" className="contact-section">
      {/* Heading */}
      <h2 className="contact-title" data-aos="fade-up">
        Let’s Connect 🚀
      </h2>
      <p
        className="contact-subtitle"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        I’d love to hear from you! Whether it’s a project idea, collaboration,
        or just to say hi, feel free to reach out anytime. I’m open to
        opportunities that allow me to grow and create meaningful impact.
      </p>

      {/* Social Links */}
      <div className="social-links" data-aos="zoom-in">
        <a
          href="https://github.com/Damilolade"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="icon-btn"
        >
          <Github size={28} />
        </a>
        <a
          href="https://wa.me/message/DG2NEGVXTCIDK1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="icon-btn"
        >
          <FaWhatsapp size={28} />
        </a>
        <a
          href="https://twitter.com/theDammi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter / X"
          className="icon-btn"
        >
          <Twitter size={28} />
        </a>
        <a
          href="https://linkedin.com/in/olawepo-damilola-a5a1102b2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="icon-btn"
        >
          <Linkedin size={28} />
        </a>
        <a
          href="mailto:damilolaolawepo441@gmail.com"
          aria-label="Email"
          className="icon-btn"
        >
          <Mail size={28} />
        </a>
      </div>

      {/* Extra Info */}
      <div className="extra-info" data-aos="fade-up">
        <p className="location">
          <MapPin className="map-icon" /> Lagos, Nigeria
        </p>
        <a
          href="/resume.pdf"
          download
          className="download-btn"
        >
          <Download className="download-icon" /> Download Resume
        </a>
      </div>

      {/* Contact Form */}
      <form className="contact-form" data-aos="fade-up">
        <div className="form-grid">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
        </div>
        <input type="text" placeholder="Subject" />
        <textarea rows="5" placeholder="Your Message"></textarea>
        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
