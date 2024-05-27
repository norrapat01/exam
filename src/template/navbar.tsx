import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assert/starbucks_corporation_logo.png";
import profile from "../assert/user.png";

const Navbar: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "black" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand ms-5" to="/" style={{ color: "white" }}>
            <img src={logo} width={71} height={71} alt="Logo" />
          </Link>
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded={isActive}
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            <span
              className={`navbar-toggler-icon ${isActive ? "active" : ""}`}
            ></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isActive ? "show" : ""}`}
            id="navbarText"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <span className="navbar-text me-5" style={{ color: "white" }}>
              Norrapat Sai-ai
              <img src={profile} width={30} height={30} alt="Profile" />
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
