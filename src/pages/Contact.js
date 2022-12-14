import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

import "./styles/contactStyle.css";
import {
  FaFacebook,
  FaInstagram,
  FaSearchLocation,
  FaEnvelope,
  FaMobileAlt,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ctjljgy",
        "template_cbjd8vk",
        form.current,
        process.env.REACT_APP_EMAILJS_KEY
      )
      .then(
        (result) => {
          toast.success("Message Sent Successfully!");
        },
        (error) => {
          toast.error("Message Not Sent!");
        }
      );
    e.target.reset();
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <section class="contact-page-section">
        <div class="container">
          <div class="sec-title">
            <div class="title">Contact Us</div>
            <h2>Let's Get in Touch.</h2>
          </div>
          <div class="inner-container">
            <div class="row clearfix">
              <div class="form-column col-md-8 col-sm-12 col-xs-12">
                <div class="inner-column">
                  <div class="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                      <input type="hidden" name="form-name" value="Contact" />
                      <div class="row clearfix">
                        <div class="form-group col-md-6 col-sm-6 co-xs-12">
                          <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                          />
                        </div>
                        <div class="form-group col-md-6 col-sm-6 co-xs-12">
                          <input
                            type="text"
                            name="location"
                            placeholder="Address"
                            required
                          />
                        </div>
                        <div class="form-group col-md-6 col-sm-6 co-xs-12">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            required
                          />
                        </div>
                        <div class="form-group col-md-6 col-sm-6 co-xs-12">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                          />
                        </div>
                        <div class="form-group col-md-12 col-sm-12 co-xs-12">
                          <textarea
                            name="message"
                            placeholder="Message"
                          ></textarea>
                        </div>

                        <div class="form-group col-md-12 col-sm-12 co-xs-12">
                          <button type="submit" class="theme-btn btn-style-one">
                            Send Now
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div class="info-column col-md-4 col-sm-12 col-xs-12">
                <div class="inner-column">
                  <h2>Contact Info</h2>
                  <ul class="list-info">
                    <li>
                      <FaSearchLocation />
                      Suite 5, Mobil filling station complex, Samonda, Ibadan
                    </li>
                    <li>
                      <FaEnvelope />
                      info@jamitechenergy.com
                    </li>
                    <li>
                      <FaMobileAlt /> (234) 816 492 2753 <br /> (234) 818 899
                      9994
                    </li>
                  </ul>
                  <ul class="social-icon-four">
                    <li class="follow">Follow on: </li>

                    <li>
                      <a href="https://www.instagram.com/jamitechsolar%20">
                        <FaInstagram />
                      </a>
                    </li>
                    {/* <li>
                      <a href="https://wa.me/2348164922753">
                        <FaWhatsapp />
                      </a>
                    </li> */}
                    <li>
                      <a href="https://www.facebook.com/jamitechenergysolutions">
                        <FaFacebook />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
