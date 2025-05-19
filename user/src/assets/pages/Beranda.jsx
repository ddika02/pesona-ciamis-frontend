import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Gambar1 from "../images/Gambar1.png";
import Gambar2 from "../images/Gambar2.png";
import Gambar3 from "../images/Gambar3.png";
import Gambar4 from "../images/Gambar4.png";
import { Link } from "react-router-dom";
import "./Beranda.css";

const Beranda = () => {
  return (
    <div className="position-relative">
      <div
        className="position-absolute top-0 start-0 text-white text-start mt-4 ms-3 z-1"
        style={{ maxWidth: "500px" }}
      >
        <h1 className="fw-bold mt-5 mb-3 text-selamat">
          Selamat Datang Di Wisata <span className="cimais">Ciamis</span>!
        </h1>
        <h3 className="fw-bold mb-5">
          Rasakan Kesejukan Alam, Keindahan Yang Disajikan Alam, Dan Ketenangan
          Yang Menyegarkan Jiwa
        </h3>
        <h4 className="mb-5">
          Jelajahi, Nikmati Dan Abadikan Momen Terindah Disurga Tersembunyi Ini!
        </h4>
        <Link to="/destinasi" className="btn mt-3 bg-color">
          Explorre Wisata
        </Link>
      </div>
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Gambar1} className="d-block w-100" alt="Gambar 1" />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <img src={Gambar2} className="d-block w-100" alt="Gambar 2" />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <img src={Gambar3} className="d-block w-100" alt="Gambar 3" />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <img src={Gambar4} className="d-block w-100" alt="Gambar 4" />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beranda;
