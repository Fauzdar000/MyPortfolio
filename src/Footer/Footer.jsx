import React from "react";
import "./Footer.css";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <h2 className="footer-logo">HIRO</h2>
          <p>Frontend Developer | BSc CSIT Student</p>
        </div>

        {/* Center Section */}
        <div className="footer-center">
          <p>© {new Date().getFullYear()} Hiro. All rights reserved.</p>
        </div>

        {/* Right Section (Social Links) */}
        <div className="footer-right">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <Github className="footer-icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="footer-icon" />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
            <Instagram className="footer-icon" />
          </a>
          <a href="mailto:yourname@email.com">
            <Mail className="footer-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}
