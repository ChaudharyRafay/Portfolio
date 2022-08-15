import React from "react";
import "./About.css";
import me from "../../images/rafay2.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscNewFolder } from "react-icons/vsc";
function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2 data-aos="flip-left">About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img data-aos="fade-right" src={me} alt="Me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card" data-aos="zoom-in">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>6+ month </small>
            </article>
            <article className="about_card" data-aos="zoom-in">
              <FiUsers className="about_icon" />
              <h5>Student</h5>
              <small> ARID UNIVERSITY</small>
            </article>
            <article className="about_card" data-aos="zoom-in">
              <VscNewFolder className="about_icon" />
              <h5>Projects</h5>
              <small>10+ Completed </small>
            </article>
          </div>
          <p className="animate__animated  animate__bounceInRight animate__repeat-2">
            I am a full-stack developer & Ui/Ux designer, During this time I
            have worked on all layers of codes from database to UI. I have also
            been involved in all stages of a product life cycle from
            conceptualization and design and up to deployment in production and
            support.
          </p>
          <a href="#contact" className="btn btn-primary" data-aos="zoom-in">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
