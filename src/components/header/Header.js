import React from "react";
import CTA from "./CTA";
import "./Header.css";
import Typewriter from "typewriter-effect";
import ME from "../../images/rafay1.png";
import HeaderSocials from "./HeaderSocials";
function Header() {
  return (
    <header id="home">
      <div className="container header_container">
        <h5
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          Hello I'm
        </h5>
        <div className="type_effect">
          <Typewriter
            options={{
              strings: "Muhammad Rafay",
              autoStart: true,
            }}
          />
        </div>
        <h5
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
        >
          Mern Stack Developer
        </h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img data-aos="zoom-in" src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
