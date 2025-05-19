import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import Logo from "../images/Logo.png";

const Header = () => {
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
                <span className="nav-link">Beranda</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">Destinasi</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">Hubungi Kami</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
