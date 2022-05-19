import React from "react";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 MCommerce Headphones All rights reserved</p>
      <p className="icons">
        <a href="https://instagram.com/mabast_95" target="_blank">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/mabast1" target="_blank">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/mabast/" target="_blank">
          <AiFillLinkedin />
        </a>
        <a href="https://twitter.com/Mabast95" target="_blank">
          <AiOutlineTwitter />
        </a>
      </p>
    </div>
  );
};

export default Footer;
