import React from "react";
import "./About.css";
// import profileImg from "./gundam-hd-wallpaper-uhdpaper.com-294@d.jpg"; 

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Left side - Image */}
        <div className="about-image">
          <img src="./gundam-anime-4k-wallpaper-uhdpaper.com-295@5@d.jpg" alt="Hiro" />
        </div>

        {/* Right side - Text */}
        <div className="about-content">
          <h1>About Me</h1>
          <p className="about-intro">
            Hi, I’m <span className="highlight">Hiro</span> — a passionate
            frontend developer and BSc CSIT student from Nepal. I enjoy building
            clean, responsive web applications and experimenting with modern UI
            ideas.
          </p>
          {/* <p>
            I love learning new technologies, creating interactive experiences, and
            bringing designs to life with code. My goal is to make websites that
            are not just functional but also visually engaging.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default About;
