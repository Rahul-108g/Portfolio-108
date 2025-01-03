import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaTwitter } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { IoIosMail } from "react-icons/io";

const Contect = () => {
  return (
    <div
      className="container contact"
      data-aos="flip-zoom-in"
      data-aos-duration="1000"
      id="contect"
    >
      <h1>Contact Me</h1>

      <div
        className="contact-icon"
        data-aos="flip-left"
        data-aos-duration="1000"
      >
        <a href="https://www.instagram.com" className="itemss">
          <FaInstagramSquare className="icons" />
        </a>
        <a href="https://www.facebook.com" className="itemss">
          <TiSocialFacebookCircular className="icons" />
        </a>
        <a href="https://www.linkedin.com" className="itemss">
          <TbBrandLinkedin className="icons" />
        </a>
        <a href="https://www.twitter.com" className="itemss">
          <FaTwitter className="icons" />
        </a>
        <a href="https://www.github.com" className="itemss">
          <SiGithub className="icons" />
        </a>
        <a href="mailto:webdevmastery@gmal.com" className="itemss">
          <IoIosMail className="icons" />
        </a>
      </div>
    </div>
  );
};

export default Contect;
