import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_293b4k9", // replace with your EmailJS service ID
        "template_op3fmmr", // replace with your EmailJS template ID
        form.current,
        "yFNdwhNhGIHaR6mdC" // replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus("Message sent successfully ✅");
          e.target.reset();
        },
        (error) => {
          setStatus("Failed to send ❌");
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      {" "}
      <div className="contact-container">
        {/* Left Side - Info Card */}{" "}
        <div className="contact-info">
          {" "}
          <h2>
            Contact me for <span>collaboration</span>{" "}
          </h2>{" "}
          <p>
            Reach out today to discuss your project needs and start
            collaborating on something amazing!{" "}
          </p>{" "}
          <div className="social-icons">
            {" "}
            <a
              href="https://github.com/Fauzdar000"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg"
                alt="GitHub"
              />{" "}
            </a>{" "}
            <a
              href="https://linkedin.com/in/sugam-faujdar-61a329325"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
                alt="LinkedIn"
              />{" "}
            </a>{" "}
            <a href="mailto:sugamfaujdar@gmail.com">
              {" "}
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg"
                alt="Mail"
              />{" "}
            </a>{" "}
            <a
              href="https://instagram.com/sugam__fauzdar"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
                alt="Instagram"
              />{" "}
            </a>{" "}
          </div>{" "}
        </div>
        
        {/* Right Side - Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <div className="input-box">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="from_name"
                id="name"
                placeholder="Your name"
                required
              />
            </div>
            <div className="input-box">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="from_email"
                id="email"
                placeholder="Your email"
                required
              />
            </div>
          </div>

          <div className="message-box">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder="Your message"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
          <p className="form-status">{status}</p>
        </form>
      </div>
    </section>
  );
}
