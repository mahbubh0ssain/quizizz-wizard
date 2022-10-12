import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="bg-light position-fixed bottom-0 w-100 py-3 ">
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
          <p>@mahbubh0ssain</p>
        </div>
        <div className="social">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt=""
          />{" "}
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt=""
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
