import React from "react";
import "./Services.css";

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2 data-aos="fade-up">Services</h2>
      <div className="container services_container">
        <article className="service" data-aos="fade-left">
          <div className="service_head">
            <h3>Back-end development</h3>
          </div>
          <ul className="service_list">
            <li>
              <i className="fa-solid fa-check service_list-icon"></i>
              <p>We are highly experienced in APIs </p>
            </li>
            <li>
              <i className="fa-solid fa-check service_list-icon"></i>
              <p>Web services, custom data connectors</p>
            </li>
            <li>
              <i className="fa-solid fa-check service_list-icon"></i>
              <p>
                Middleware for secure integration with third-party solutions.
              </p>
            </li>
            <li>
              <i className="fa-solid fa-check service_list-icon"></i>
              <p>
                We can outsource API development projects to develop fully
                functional APIs.
              </p>
            </li>
          </ul>
        </article>
        {/* end of 1st card */}

        <article className="service" data-aos="fade-up">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <i className="fa-solid fa-check service_list-icon"></i>
              <p>
                We take a proactive approach to web development and elaborate on
                ways to uncover less obvious business requirements, save costs
                and envisage risks for your project.
              </p>
            </li>
            <li>
              <i className="fa-solid fa-check service_list-icon"></i>
              <p>Full-stack development of web apps.</p>
            </li>
            <li>
              <i className="fa-solid fa-check service_list-icon"></i>
              <p>we bring it to life with front-end coding.</p>
            </li>
            <li>
              <p></p>
            </li>
          </ul>
        </article>
        {/* end of 1st card */}
        <article className="service" data-aos="fade-right">
          <div className="service_head">
            <h3>Web Redesign </h3>
          </div>
          <ul className="service_list">
            <li>
              <i className="fa-solid fa-check service_list-icon"></i>
              <p>Web app re-architecting to enable greater scalability.</p>
            </li>
            <li>
              <i className="fa-solid fa-check service_list-icon"></i>
              <p>
                Delivery of UX and UI innovations for better user appeal and
                usability.
              </p>
            </li>
            <li>
              <i className="fa-solid fa-check service_list-icon"></i>
              <p>Delivery of new web app features.</p>
            </li>
            <li>
              <i className="fa-solid fa-check service_list-icon"></i>
              <p>
                Incorporation of disparate business modules into a single web
                application.
              </p>
            </li>
          </ul>
        </article>
        {/* end of 1st card */}
      </div>
    </section>
  );
}

export default Services;
