import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaDribbble,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";

import "./contact.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Contact() {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function changeHandler(e) {
    const { name, value } = e.target;
    setMessage({ ...message, [name]: value });
  }

  async function submitHandler(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/send-email", message);
      toast.success(res.data.msg);

      setMessage({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  }

  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <div className="contact__title">Don't be Shy !</div>
          <p className="contact__description">
            Feel free to get touch with me. I am always open to discussing new
            projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">beingkashifali@gmail.com</h4>
              </div>
            </div>
            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+923007519181</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a
              href="https://www.facebook.com/profile.php?id=61576300870382"
              className="contact__social-link"
            >
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="contact__social-link">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" className="contact__social-link">
              <FaYoutube />
            </a>
            <a href="https://dribbble.com" className="contact__social-link">
              <FaDribbble />
            </a>
          </div>
        </div>

        <form onSubmit={submitHandler} className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                name="name"
                value={message.name}
                placeholder="Your Name"
                className="form__control"
                onChange={changeHandler}
              />
            </div>
            <div className="form__input-div">
              <input
                type="email"
                name="email"
                value={message.email}
                placeholder="Your Email"
                className="form__control"
                onChange={changeHandler}
              />
            </div>
            <div className="form__input-div">
              <input
                type="text"
                name="subject"
                value={message.subject}
                placeholder="Your Subject"
                className="form__control"
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="form__input-div">
            <textarea
              name="message"
              value={message.message}
              placeholder="Your Message"
              className="form__control textarea"
              onChange={changeHandler}
            ></textarea>
          </div>
          <button className="button" type="submit">
            Send Message{" "}
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
