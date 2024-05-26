import React from "react";
import { Link } from "react-router-dom";
import logo from "../assert/starbucks_corporation_logo.png";
import profile from "../assert/user.png";
const Navbar: React.FC = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "black" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand ms-5" href="#" style={{ color: "white" }}>
            <Link to="/">
              <img src={logo} width={71} height={71} />
            </Link>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon bg-white"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <span className="navbar-text me-5" style={{ color: "white" }}>
              Norrapat Sai-ai<img src={profile} width={30} height={30}/>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
