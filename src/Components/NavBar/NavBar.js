import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container">
        <h3 className=" logo text-bold  text-white">
          <Link to="/">Quizizz Wizard</Link>
        </h3>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav NavLinks ms-auto">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : undefined)}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="topic">Topics</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="statistics">Statistics</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="blog">Blog</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
