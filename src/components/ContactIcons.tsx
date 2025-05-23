import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const ContactIcons = () => {
  const links = [
    {
      label: "Contact me by email",
      href: "mailto:eburdekin@proton.me",
      icon: faEnvelope,
    },
    {
      label: "View my GitHub profile",
      href: "https://github.com/eburdekin",
      icon: faGithub,
    },
    {
      label: "View my LinkedIn profile",
      href: "https://www.linkedin.com/in/eburdekin/",
      icon: faLinkedin,
    },
  ];

  return (
    <>
      {links.map((link) => {
        return (
          <a
            key={link.label}
            href={link.href}
            aria-label={link.label}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={link.icon}
              size="xl"
              className="contact-icon"
            />
          </a>
        );
      })}
    </>
  );
};

export default ContactIcons;
