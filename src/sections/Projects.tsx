import React from "react";
import ProjectCard from "../components/ProjectCard";

const Work = () => {
  return (
    <section id="projects">
      <h2 className="section-header">Projects</h2>
      <div className="project-card-container">
        <ProjectCard
          image="../images/expungeassist.webp"
          projectName="Expunge Assist"
          link1="https://expungeassist.org/"
          link2="https://github.com/hackforla/expunge-assist"
          technologies={["React", "TypeScript", "MaterialUI", "Jest"]}
        >
          Free digital tool designed to aid Californians with arrest and
          conviction histories in clearing their criminal records.
        </ProjectCard>
        <ProjectCard
          image="../images/tdmcalculator.webp"
          projectName="TDM Calculator"
          link1="https://tdm.ladot.lacity.org/about"
          link2="https://github.com/hackforla/tdm-calculator"
          technologies={["React", "Node", "Express", "Jest"]}
        >
          Web app created with the L.A. Department of Transportation (LADOT) and
          L.A. City Planning to help real estate developers design better
          projects for the city.
        </ProjectCard>
      </div>
    </section>
  );
};

export default Work;
