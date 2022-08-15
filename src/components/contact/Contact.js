import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";

function Contact(props) {
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  const form = useRef();

  const sendEmail = (e) => {
    props.setProgress(50);
    e.preventDefault();
    const thank = async () => {
      await delay(4300);
      console.log("Waited 5s.............................");
      toast.success(
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          {" "}
          Thanks for Contact me 💝
        </div>,
        {
          position: "bottom-center",
          icon: false,
        }
      );
    };
    emailjs
      .sendForm(
        "service_w7swtmq",
        "template_sduuje7",
        form.current,
        "_o3ohhnnCDeQY-ipO"
      )
      .then(
        (result) => {
          props.setProgress(100);
          toast.success(
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
              }}
            >
              {" "}
              Message Sent{" "}
            </div>,
            {
              position: "top-center",
            }
          );
          thank();
        },
        (error) => {
          props.setProgress(100);
          toast.warn("Message not sent!!", {
            position: "top-center",
          });
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2 data-aos="flip-up">Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article
            className="contact_option"
            data-aos="fade-right"
            data-aos-offset="250"
            data-aos-easing="ease-in-sine"
          >
            <MdOutlineMail className="contact_option-icon" />
            <h5>rafaymuhammad245@gmail.com</h5>
            <a
              href="mailto:rafaymuhammad245@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
          <article
            className="contact_option"
            data-aos="fade-right"
            data-aos-offset="250"
            data-aos-easing="ease-in-sine"
          >
            <RiMessengerLine className="contact_option-icon" />
            <h5>Chaudhary Rafay</h5>
            <a
              href="https://m.me/muhammad.rafay.7509836/"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
          <article
            className="contact_option"
            data-aos="fade-right"
            data-aos-offset="250"
            data-aos-easing="ease-in-sine"
          >
            <FaWhatsapp className="contact_option-icon" />
            {/* <h4>Whatsapp</h4> */}
            <h5>03185444760</h5>
            <a
              href="https://wa.me/+923185444760"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            data-aos="flip-left"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            data-aos="flip-right"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            data-aos="flip-down"
            required
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary"
            data-aos="zoom-in-up"
          >
            Send Message
          </button>
        </form>
      </div>
      <ToastContainer autoClose={3000} />
    </section>
  );
}

export default Contact;
