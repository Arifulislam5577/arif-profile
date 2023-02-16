import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaPhone,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" bg-slate-800 py-5">
      <div className="container">
        <div className="flex items-center justify-between">
          <p className="text-white lg:text-sm text-xs">
            Connect with Md Ariful Islam
          </p>
          <div className="flex items-center gap-5">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/arif.3399"
            >
              <FaFacebookF size="14" color="white" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.github.com/Arifulislam5577"
            >
              <FaGithub size="14" color="white" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.github.com/Arifulislam5577"
            >
              <FaLinkedinIn size="14" color="white" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/arifulislam5577"
            >
              <FaTwitter size="14" color="white" />
            </a>
            <a target="_blank" rel="noreferrer" href="tel:+8801722903107">
              <FaPhone size="14" color="white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
