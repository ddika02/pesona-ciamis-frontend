import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css"; // Pastikan untuk membuat file CSS ini

const Footer = () => {
  return (
    <footer className="bg-brown text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Pesona Ciamis</h2>
            <p>
              Keindahan Alam Yang Memesona, Dari Air Terjun Yang Menyegarkan
              Hingga Perbukitan Hijau Yang Menyegarkan Mata. Nikmati Wisata
              Alam, Budaya, Dan Kuliner Khas Yang Membuat Setiap Perjalanan Di
              Ciamis Senantiasa Berkesan.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <h3>Ikuti Kami :</h3>
            <div className="social-icons mt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light me-3 fs-3"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light me-3 fs-3"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-3"
              >
                <i className="fab fa-x-twitter"></i>
              </a>
            </div>
          </div>

          <div className="col-md-4 text-center">
            <h3>Hubungi Kami :</h3>
            <p>+62 8967334455</p>
            <p>+62 426757324</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
