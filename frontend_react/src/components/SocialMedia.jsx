import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn, FaGithub, FaTelegram, FaFigma } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://twitter.com/Mr_Abbasnejad" className="p-text">
      <div>
        <BsTwitter />
      </div>
    </a>

    <a
      href="https://www.linkedin.com/in/mohammad-abbasnezhad/"
      className="p-text"
    >
      <div>
        <FaLinkedinIn />
      </div>
    </a>

    <a href="https://twitter.com/Mr_Abbasnejad" className="p-text">
      <div>
        <FaGithub />
      </div>
    </a>

    <a href="https://t.me/MR_MOHAMMAD_80" className="p-text">
      <div>
        <FaTelegram />
      </div>
    </a>

    <a href="https://www.figma.com/@phenom" className="p-text">
      <div>
        <FaFigma />
      </div>
    </a>
  </div>
);

export default SocialMedia;
