import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">

        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="footer_link">
              Projects
            </a>
          </li>

          <li>
            <a href="skills" className="footer_link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <a
            href="https://github.com/darleynartey"
            className="footer_social-link"
            target="_blank"
          >
            <i class="bx bxl-github"></i>GitHub
          </a>
          <a
            href="https://www.youtube.com/channel/UCg2r7n2_7Hv4VWAk9LKzpWQ"
            className="footer_social-link"
            target="_blank"
          >
            <i class="bx bxl-youtube"></i>YouTube
          </a>
          <a
            href="https://www.linkedin.com/in/barbara-nartey-274961194/"
            className="footer_social-link"
            target="_blank"
          >
            <i class="bx bxl-linkedin"></i>LinkedIn
          </a>
        </div>

        <span className="footer_copy">&#169; Barbaranartey. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
