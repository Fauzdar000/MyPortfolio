import React from "react";
import "./Home.css";
import { Download } from "lucide-react";
import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <section id="home" className="home-container">
      {/* Left Section */}
      <div className="home-text">
        <h1>
          Hi, I’m <span className="highlight">Hiro</span> 👋
        </h1>
        <p>
          <ReactTyped
            strings={[
              "Let's build something amazing together!",
              "I love crafting modern web experiences.",
              "Turning ideas into beautiful designs.",
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </p>
        <a href="/resume.pdf" download className="resume-btn">
          <Download size={18} />
          <span>Download Resume</span>
        </a>
      </div>

      {/* Right Section */}
      <div className="home-image">
        <img src="./gundam-hd-wallpaper-uhdpaper.com-294@5@d.jpg" alt="Hiro" loading="lazy" />
      </div>
    </section>
  );
}
