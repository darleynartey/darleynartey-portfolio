import React from "react";
import "./About.css";
import AboutImg from "../../assets/about.jpg";
import CV from "../../assets/Barbara-Cv.pdf";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">About Me</h2>
      <p className="section_subtitle">My introduction</p>

      <div className="about_container container grid">
        <img src={AboutImg} alt="image" className="about_img" />

        <div className="about_data">
          <Info />

          <p className="about_description">
            As a web developer, I possess a strong grasp of essential languages
            and frameworks including HTML, CSS, JavaScript, React.js, MongoDB,
            Express.js, and Jira.{" "}
          </p>

          <a download="" href={CV} className="button button--flex">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
