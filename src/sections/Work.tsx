import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    projectName: "TDM Calculator",
    projectDesc:
      "Web app created with the L.A. Department of Transportation (LADOT) and L.A. City Planning to help real estate developers design better projects for the city.",
    image: "../images/tdmcalculator.webp",
    githubLink: "https://github.com/hackforla/tdm-calculator",
    siteLink: "https://tdm.ladot.lacity.org/about",
    technologies: ["React", "Node", "Express", "Jest"],
  },
  {
    projectName: "Expunge Assist",
    projectDesc:
      "Free digital tool designed to aid Californians with arrest and conviction histories in clearing their criminal records.",
    image: "../images/expungeassist.webp",
    githubLink: "https://github.com/hackforla/expunge-assist",
    siteLink: "https://expungeassist.org/",
    technologies: ["React", "TypeScript", "MaterialUI", "Jest"],
  },
];

const Work = () => {
  return (
    <section id="work">
      <div className="section-header-container">
        <h3>Work</h3>
      </div>
      <div className="project-card-container">
        {projects.map((project) => {
          return <ProjectCard key={project.image} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Work;
