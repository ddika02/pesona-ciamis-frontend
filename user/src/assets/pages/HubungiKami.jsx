import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const HubungiKami = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Terima kasih, ${nama}! Pesan Anda sudah terkirim.`);
    // Di sini kamu bisa tambahkan logic kirim data ke server
    setNama("");
    setEmail("");
    setPesan("");
  };

  return (
    <>
      <div className="container mt-5 mb-5" style={{ maxWidth: "1000px" }}>
        <h2 className="mt-5 mb-5 text-center" style={{ color: "#40E0D0" }}>
          Masukan Kritik & Saran
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 fw-bold">
            <label htmlFor="namaLengkap" className="form-label">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="namaLengkap"
              className="form-control"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              required
              placeholder="Masukkan nama lengkap Anda"
              style={{ backgroundColor: "#D9D9D9", width: "100%" }}
            />
          </div>

          <div className="mb-3 fw-bold">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Masukkan email Anda"
              style={{ backgroundColor: "#D9D9D9", width: "100%" }}
            />
          </div>

          <div className="mb-3 fw-bold">
            <label htmlFor="pesan" className="form-label">
              Tulis Pesan
            </label>
            <textarea
              id="pesan"
              className="form-control"
              rows="4"
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
              required
              placeholder="Tulis pesan Anda di sini"
              style={{ backgroundColor: "#D9D9D9", width: "100%" }}
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{
              width: "100%",
              backgroundColor: "#40E0D0",
              borderColor: "#40E0D0",
              color: "#fff",
              margin: 0,
              paddingLeft: "12px",
              paddingRight: "12px",
              boxSizing: "border-box",
            }}
          >
            Kirim Pesan
          </button>
        </form>
      </div>

      {/* Kontak */}
      <div className="container my-5" style={{ maxWidth: "1000px" }}>
        <h2 className="text-center mb-4" style={{ color: "#40E0D0" }}>
          Hubungi Kami Di
        </h2>

        <div className="row">
          {/* Kiri: Telepon dan Email */}
          <div className="col-12 col-md-6 d-flex flex-column gap-3 position-relative">
            {/* Telepon */}
            <a
              href="tel:+6281234567890"
              className="d-flex align-items-center p-3 rounded text-decoration-none"
              style={{ color: "inherit" }}
            >
              <div
                style={{
                  backgroundColor: "#D9D9D9",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "15px",
                  flexShrink: 0,
                }}
              >
                <i className="fas fa-phone fa-lg text-dark"></i>
              </div>
              <div>
                <h5 className="mb-1">Telepon</h5>
                <p className="mb-0">+62 812 3456 7890</p>
              </div>
            </a>

            {/* Email (posisinya di bawah Telepon, tapi jangan push alamat) */}
            <a
              href="https://support.google.com/mail/answer/56256?hl=en"
              className="d-flex align-items-center p-3 rounded text-decoration-none"
              style={{ color: "inherit" }}
            >
              <div
                style={{
                  backgroundColor: "#D9D9D9",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "15px",
                  flexShrink: 0,
                }}
              >
                <i className="fas fa-envelope fa-lg text-dark"></i>
              </div>
              <div>
                <h5 className="mb-1">Email</h5>
                <p className="mb-0">info@wisataciamis.com</p>
              </div>
            </a>
          </div>

          {/* Kanan: Alamat */}
          <div
            className="col-12 col-md-6 d-flex align-items-start p-3 rounded"
            style={{ height: "fit-content" }}
          >
            <a
              href="https://maps.app.goo.gl/k47VbaeytV52u7NZ6"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex align-items-center text-decoration-none"
              style={{ color: "inherit" }}
            >
              <div
                style={{
                  backgroundColor: "#D9D9D9",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "15px",
                  flexShrink: 0,
                }}
              >
                <i className="fas fa-map-marker-alt fa-lg text-dark"></i>
              </div>
              <div>
                <h5 className="mb-1">Alamat</h5>
                <p className="mb-0">Ciamis, Jawa Barat</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Lokasi dengan Peta */}
      <div className="container my-5 mt-5 mb-5" style={{ maxWidth: "1000px" }}>
        <h2 className="text-center mb-4" style={{ color: "#40E0D0" }}>
          Lokasi Kami
        </h2>

        <div className="d-flex justify-content-center">
          <a
            href="https://goo.gl/maps/1x2y3z4a5b6c"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "100%",
              maxWidth: "800px",
              borderRadius: "10px",
              overflow: "hidden",
              display: "block",
            }}
            title="Buka lokasi di Google Maps"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.958221842758!2d108.1348735143167!3d-7.322823394833988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6508d2eacde2d1%3A0x258f07a6db27a8f8!2sCiamis%2C%20Jawa%20Barat%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1685046862222!5m2!1sen!2sid"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Lokasi Ciamis"
            ></iframe>
          </a>
        </div>
      </div>
    </>
  );
};

export default HubungiKami;
