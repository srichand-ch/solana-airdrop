import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/srichand-ch" target="_blank" rel="noreferrer">
        <FaGithub className="icon-git" />
      </a>
      <a
        href="https://www.linkedin.com/in/sri-chand-ch-79bb1422b/" target="_blank" rel="noreferrer">
        <FaLinkedin className="icon-ldin" />
      </a>
    </footer>
  );
}

export default Footer;
