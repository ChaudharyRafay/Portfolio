import React from "react";
import "./Footer.css";
import logo from "../../images/logo5.png";
// import logo from '../../images/favicon.png';
import { ImFacebook } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { RiSnapchatLine } from "react-icons/ri";
function Footer() {
  return (
    <footer>
      <div className="footer_logo" data-aos="zoom-in">
        <img src={logo} alt="logo" />
      </div>
      <ul className="permalinks">
        <li>
          <a
            href="#home"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about "
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#experience"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#services"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#review"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Testimonials
          </a>
        </li>
        <li>
          <a
            href="#contact"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="footer_socials" data-aos="zoom-in">
        <a
          href="https://www.facebook.com/muhammad.rafay.7509836"
          target="_blank"
          rel="noreferrer"
        >
          <ImFacebook className="footer_socials-icons" />
        </a>
        <a
          href="https://www.instagram.com/muhammadrafay28/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="footer_socials-icons" />
        </a>
        <a
          href="https://www.snapchat.com/add/ch_rafay28?share_id=K8NVT_Fig9c&locale=en-US"
          target="_blank"
          rel="noreferrer"
        >
          <RiSnapchatLine className="footer_socials-icons" />
        </a>
      </div>
      <div className="footer_copyright" data-aos="fade-right">
        <small>&copy; Rafay Website. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
