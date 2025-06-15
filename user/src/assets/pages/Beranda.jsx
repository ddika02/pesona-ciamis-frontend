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
import { motion } from "framer-motion";

const Beranda = () => {
  return (
    <div className="position-relative">
      <motion.div
        initial={{ x: -200, opacity: 0 }} // mulai dari kiri & transparan
        animate={{ x: 0, opacity: 1 }} // menuju ke posisi normal & terlihat
        transition={{ duration: 1, ease: "easeOut" }} // durasi dan gaya animasi
        className="position-absolute top-0 start-0 text-white text-start mt-4 ms-3 z-1"
        style={{ maxWidth: "500px" }}
      >
        <h1 className="fw-bold mt-5 mb-3">
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
      </motion.div>

      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Gambar1} className="d-block w-100" alt="Gambar 1" />
          </div>
          <div className="carousel-item">
            <img src={Gambar2} className="d-block w-100" alt="Gambar 2" />
          </div>
          <div className="carousel-item">
            <img src={Gambar3} className="d-block w-100" alt="Gambar 3" />
          </div>
          <div className="carousel-item">
            <img src={Gambar4} className="d-block w-100" alt="Gambar 4" />
          </div>
        </div>
      </div>

      <div className="row g-4 px-4 mt-5">
        {/* Judul muncul dari atas */}
        <motion.h1
          className="text-center fw-bold mb-4 cimais"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Beberapa Destinasi Ciamis
        </motion.h1>

        {/* Komponen Destinasi - dengan delay animasi */}
        {[Destinasi1, Destinasi2, Destinasi3].map((image, index) => {
          const titles = [
            "Ciung Wanara",
            "Curug Tujuh Cibolang",
            "Wisata Alam Cadas Ngampar",
          ];
          const descriptions = [
            "Wisata Alam Ciung Wanara adalah destinasi wisata yang terletak di Kabupaten Ciamis, tempat ini terkenal dengan situs sejarah dan alamnya yang asri.",
            "Wisata Curug Tujuh Cibolang adalah destinasi alam yang terletak di Kabupaten Ciamis, terkenal dengan tujuh tingkatan air terjun dan pemandangan alami yang memukau.",
            "Wisata Alam Cadas Ngampar adalah destinasi wisata alam yang terletak di Kabupaten Ciamis,  Tempat ini menawarkan keindahan batuan cadas alami yang luas, berpadu dengan aliran sungai yang jernih dan pepohonan hijau di sekitarnya.",
          ];

          return (
            <motion.div
              key={index}
              className="col-md-4"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 * (index + 1) }}
            >
              <Link to="/destinasi" className="text-decoration-none text-white">
                <div className="position-relative img-hover rounded-lg overflow-hidden shadow-sm">
                  <img
                    src={image}
                    alt={titles[index]}
                    className="img-fluid rounded"
                    style={{ transition: "filter 0.3s ease" }}
                  />
                  <div className="position-absolute bottom-0 start-0 w-100 bg-opacity-50 p-3 rounded-bottom">
                    <h5 className="mb-1 text-center">{titles[index]}</h5>
                    <p className="mb-0" style={{ fontSize: "0.9rem" }}>
                      {descriptions[index]}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      <div className="row g-4 px-4 mt-5 mb-5">
        {/* Judul muncul dari belakang dan membesar */}
        <motion.h1
          className="text-center fw-bold mb-4 cimais"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Kenapa Harus Wisata Ke Ciamis?
        </motion.h1>

        <div className="row align-items-center ps-5">
          {/* Gambar muncul dari samping kiri */}
          <motion.div
            className="col-md-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={Ciamis}
              alt="Keindahan Alam"
              className="img-fluid rounded shadow d-block"
              style={{ maxHeight: "350px", objectFit: "cover" }}
            />
          </motion.div>

          {/* Deskripsi muncul dari kanan */}
          <motion.div
            className="col-md-6"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p
              className="fs-5 mt-5 fw-bold custom-font"
              style={{ textAlign: "justify" }}
            >
              Karena Ciamis berkembang sebagai daerah wisata yang memadukan
              sejarah, budaya, dan keindahan alam. Beberapa destinasi bersejarah
              dapat dikunjungi, menjadikan Ciamis bukan hanya sekadar tempat
              wisata alam, tetapi juga destinasi yang kaya akan sejarah dan
              budaya. Jelajahi Ciamis dan temukan keindahan serta kisah yang
              tertanam di setiap sudutnya!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Beranda;
