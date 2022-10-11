import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <nav className=" bg-primary">
      <div className="d-flex  justify-content-between align-items-center container">
        <div>
          <h1 className="text-bold">Quizizz Wizard</h1>
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="topic">Topics</Link>
          <Link to="statistics">Statistics</Link>
          <Link to="blog">Blog</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
