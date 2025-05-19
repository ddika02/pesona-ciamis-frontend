import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import Logo from "../images/Logo.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <nav className="navbar navbar-expand-sm bg-brown navbar-light fixed-top">
        <div className="container-fluid">
          <div className="navbar-brand text-container d-flex flex-column align-items-start">
            <img
              src={Logo}
              alt="Logo Pesona Ciamis"
              style={{ height: "50px" }}
            />
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav text-center mx-auto">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                >
                  Beranda
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/destinasi"
                  className={`nav-link ${
                    location.pathname === "/destinasi" ? "active" : ""
                  }`}
                >
                  Destinasi
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/hubungi-kami"
                  className={`nav-link ${
                    location.pathname === "/hubungi-kami" ? "active" : ""
                  }`}
                >
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
