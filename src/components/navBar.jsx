import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        Home
      </Link>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/blog" className="nav-link">
            <button className="btn btn-primary">Blog</button>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="nav-link">
            <button className="btn btn-primary">Projects</button>
          </Link>
        </li>
        <li>
          <Link to="/skills" className="nav-link">
            <button className="btn btn-primary">Skills</button>
          </Link>
        </li>
        <li>
          <Link to="/resources" className="nav-link">
            <button className="btn btn-primary">Resources</button>
          </Link>
        </li>
        <li>
          <Link to="/games" className="nav-link">
            <button className="btn btn-primary">Games</button>
          </Link>
        </li>
        <li>
          <Link to="/forms" className="nav-link">
            <button className="btn btn-primary">Forms</button>
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">
            <button className="btn btn-primary">Contact</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
