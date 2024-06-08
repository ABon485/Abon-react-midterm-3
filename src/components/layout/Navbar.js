import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from 'react-icons/fa';

const Navbar = ({ mode, toggleMode }) => {
    
  return (
    <nav className={`navbar bg-success ${mode === "light" ? "bg-light" : "bg-dark"}`}>
      <h1>
        <FaGithub /> GitHub Finder
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
