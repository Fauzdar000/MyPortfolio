import React from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Weather App",
    description: "A Blazor app showing live weather data with beautiful UI.",
    image:
      "https://i.pinimg.com/736x/9d/f5/17/9df5179c00907fe96e99682b596b1425.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Quiz App",
    description: "Interactive quiz app using JavaScript and React.",
    image:
      "https://i.pinimg.com/736x/36/02/d1/3602d122eb57e762b0a1177b32c4c04f.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "My personal portfolio website built with React and CSS.",
    image:
      "https://i.pinimg.com/1200x/cb/24/39/cb243937c98d127147e8e3cb3fb30ae0.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "AI Sticker Generator",
    description: "Generate cute AI stickers from your photos.",
    image:
      "https://i.pinimg.com/736x/4c/98/59/4c9859c843dcb96bf664b53b85bab576.jpg",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      {" "}
      <h1 className="projects-title">My Projects</h1>{" "}
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            {" "}
            <img src={project.image} alt={project.title} />{" "}
            <div className="project-info">
              {" "}
              <h3>{project.title}</h3> <p>{project.description}</p>{" "}
              <a href={project.link} className="project-btn">
                View Project
              </a>{" "}
            </div>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </section>
  );
};

export default Projects;
