import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="bg-light position-static bottom-0 w-100 py-3 ">
      <div
        className=" container d-flex justify-content-between align-items-center
      "
      >
        <div className="d-flex align-items-center">
          <img
            src="https://i.ibb.co/pv4D3P2/20211024-011255-0000-Edited.png"
            className="rounded-circle img-fluid "
            alt=""
          />{" "}
          <small>@mahbubh0ssain</small>
        </div>
        <div className="social">
          <a href="https://github.com/mahbubh0ssain" target="_blank">
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="github"
            />
          </a>
          <a href="https://www.linkedin.com/in/mahbubh0ssain/" target="_blank">
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="linkedin"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
