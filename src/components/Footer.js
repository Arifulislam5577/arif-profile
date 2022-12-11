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
          <p className="text-white text-sm">Connect with Md Ariful Islam</p>
          <div className="flex items-center gap-5">
            <button>
              <FaFacebookF size="14" color="white" />
            </button>
            <button>
              <FaGithub size="14" color="white" />
            </button>
            <button>
              <FaLinkedinIn size="14" color="white" />
            </button>
            <button>
              <FaTwitter size="14" color="white" />
            </button>
            <button>
              <FaPhone size="14" color="white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
