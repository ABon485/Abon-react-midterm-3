import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ mode, toggleMode }) => {
  return (
    <nav className={`navbar ${mode === "light" ? "bg-light" : "bg-dark"}`}>
      <h1>
        <i className="fab fa-github" /> GitHub Finder
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <button
            onClick={toggleMode}
            className={`btn ${mode === "light" ? 'btn-dark' : 'btn-light'}`}
          >
            {mode === "light" ? "Dark" : "Light"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
