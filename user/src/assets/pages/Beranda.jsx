import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Gambar1 from "../images/Gambar1.png";
import Gambar2 from "../images/Gambar2.png";
import Gambar3 from "../images/Gambar3.png";
import Gambar4 from "../images/Gambar4.png";
import Destinasi1 from "../images/Destinasi1.png";
import Destinasi2 from "../images/Destinasi2.png";
import Destinasi3 from "../images/Destinasi3.png";
import Ciamis from "../images/Ciamis.png";
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

      <div className="row g-4 px-4 mt-5">
        <h1 className="text-center fw-bold mb-4 cimais">
          Beberapa Destinasi Ciamis
        </h1>

        {/* Destinasi 1 */}
        <div className="col-md-4">
          <Link to="/destinasi" className="text-decoration-none text-white">
            <div className="position-relative img-hover rounded-lg overflow-hidden shadow-sm">
              <img
                src={Destinasi1}
                alt="Ciung Wanara"
                className="img-fluid rounded"
                style={{ transition: "filter 0.3s ease" }}
              />
              <div className="position-absolute bottom-0 start-0 w-100 bg-opacity-50 p-3 rounded-bottom">
                <h5 className="mb-1 text-center">Ciung Wanara</h5>
                <p className="mb-0" style={{ fontSize: "0.9rem" }}>
                  Wisata Alam Ciung Wanara adalah destinasi wisata yang terletak
                  di Kabupaten Ciamis, tempat ini terkenal dengan situs sejarah
                  dan alamnya yang asri.
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Destinasi 2 */}
        <div className="col-md-4">
          <Link to="/destinasi" className="text-decoration-none text-white">
            <div className="position-relative img-hover rounded-lg overflow-hidden shadow-sm">
              <img
                src={Destinasi2}
                alt="Curug Tujuh Cibolang"
                className="img-fluid rounded"
                style={{ transition: "filter 0.3s ease" }}
              />
              <div className="position-absolute bottom-0 start-0 w-100 bg-opacity-50 p-3 rounded-bottom">
                <h5 className="mb-1 text-center">Curug Tujuh Cibolang</h5>
                <p className="mb-0" style={{ fontSize: "0.9rem" }}>
                  Wisata Curug Tujuh Cibolang adalah destinasi alam yang
                  terletak di Kabupaten Ciamis, terkenal dengan tujuh tingkatan
                  air terjun dan pemandangan alami yang memukau.
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Destinasi 3 */}
        <div className="col-md-4">
          <Link to="/destinasi" className="text-decoration-none text-white">
            <div className="position-relative img-hover rounded-lg overflow-hidden shadow-sm">
              <img
                src={Destinasi3}
                alt="Kampung Adat Kuta"
                className="img-fluid rounded"
                style={{ transition: "filter 0.3s ease" }}
              />
              <div className="position-absolute bottom-0 start-0 w-100 bg-opacity-50 p-3 rounded-bottom">
                <h5 className="mb-1 text-center">Kampung Adat Kuta</h5>
                <p className="mb-0" style={{ fontSize: "0.9rem" }}>
                  Wisata Kampung Adat Kuta menawarkan keindahan tradisi budaya
                  dan alam di Kabupaten Ciamis dengan suasana khas dan asri.
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="row g-4 px-4 mt-5 mb-5">
          <h1 className="text-center fw-bold mb-4 cimais">
            Kenapa Harus Wisata Ke Ciamis?
          </h1>
          <div className="row align-items-centerps-4 ps-5">
            <div className="col-md-4">
              <img
                src={Ciamis}
                alt="Keindahan Alam"
                className="img-fluid rounded shadow d-block"
                style={{ maxHeight: "350px", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-6">
              <p
                className="fs-5 mt-5 fw-bold custom-font"
                style={{ textAlign: "justify" }}
              >
                Karena Ciamis berkembang sebagai daerah wisata yang memadukan
                sejarah, budaya, dan keindahan alam. Beberapa destinasi
                bersejarah dapat dikunjungi, menjadikan Ciamis bukan hanya
                sekadar tempat wisata alam, tetapi juga destinasi yang kaya akan
                sejarah dan budaya. Jelajahi Ciamis dan temukan keindahan serta
                kisah yang tertanam di setiap sudutnya!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beranda;
