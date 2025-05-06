import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
import GithubIcon from "../icons/githubIcon";

type ProjectCardProps = {
  // children: Iterable<React.ReactNode>;
  projectName: string;
  projectDesc: string;
  image: string;
  githubLink: string;
  siteLink: string;
  technologies: Array<string>;
};

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div className="project-card">
      <span className="project-name">{props.projectName}</span>
      <div className="project-image-container">
        <img
          src={props.image}
          alt={props.projectName}
          className="project-image"
        />
      </div>
      <div className="project-blurb">{props.projectDesc}</div>
      <div className="tech-chip-container">
        {props.technologies.map((tech) => {
          return (
            <span key={tech} className="tech-chip">
              {tech}
            </span>
          );
        })}
      </div>
      <div className="project-link-container">
        <a href={props.githubLink} target="_blank" rel="noreferrer">
          <GithubIcon />
        </a>
        <a href={props.siteLink} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faExternalLink} size="lg" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
