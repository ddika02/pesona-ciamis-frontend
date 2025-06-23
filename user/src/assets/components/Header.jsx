import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import Logo from "../images/Logo.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <header>
      <nav className="navbar navbar-expand-sm bg-brown navbar-light fixed-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img
              src={Logo}
              alt="Logo Pesona Ciamis"
              style={{ height: "50px" }}
            />
          </Link>

          {/* Tombol Toggle muncul di mobile */}
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${
              isNavCollapsed ? "" : "show"
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav text-center mx-auto">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  onClick={() => setIsNavCollapsed(true)}
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
                  onClick={() => setIsNavCollapsed(true)}
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
                  onClick={() => setIsNavCollapsed(true)}
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
