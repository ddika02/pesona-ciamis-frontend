import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DetailDestinasi.css"; // Buat file ini untuk styling tambahan

const DetailDestinasi = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [destinasi, setDestinasi] = useState(null);
  const [gambar, setGambar] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res1 = await fetch(`http://localhost:5000/api/destinasi/${id}`);
        const data1 = await res1.json();
        setDestinasi(data1.data);

        const res2 = await fetch(`http://localhost:5000/api/gambar/${id}`);
        const data2 = await res2.json();
        setGambar(data2.data);
      } catch (err) {
        console.error("Gagal memuat data:", err);
      }
    };

    fetchData();
  }, [id]);

  if (!destinasi)
    return <p className="text-center mt-5">Memuat detail destinasi...</p>;

  return (
    <div className="container-fluid p-0 m-0">
      <a
        onClick={() => navigate("/destinasi")}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          zIndex: 10,
          cursor: "pointer",
          color: "#000",
          fontSize: "28px",
        }}
      >
        <i className="fa-solid fa-xmark"></i>
      </a>

      <div className="row g-0">
        {/* Gambar */}
        <div className="col-md-7 d-flex justify-content-center align-items-center">
          <div
            id="carouselGambar"
            className="carousel slide position-relative"
            data-bs-ride="carousel"
            style={{ width: "600px", height: "300px" }}
          >
            <div className="carousel-inner w-100 h-100">
              {gambar.map((g, i) => (
                <div
                  className={`carousel-item ${i === 0 ? "active" : ""}`}
                  key={g.id}
                >
                  <img
                    src={`http://localhost:5000${g.url_gambar}`}
                    className="d-block w-100 h-100 rounded"
                    alt={`Gambar ${i}`}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>

            {/* Tombol Kiri - di luar gambar dan center secara vertikal */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselGambar"
              data-bs-slide="prev"
              style={{
                position: "absolute",
                top: "50%", // Tengah secara vertikal
                left: "-50px", // Di luar sisi kiri
                transform: "translateY(-50%)", // Agar benar-benar di tengah
                width: "40px",
                height: "40px",
                zIndex: 2,
              }}
            >
              <span
                className="carousel-control-prev-icon bg-dark rounded-circle"
                aria-hidden="true"
              />
            </button>

            {/* Tombol Kanan - di luar gambar dan center secara vertikal */}
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselGambar"
              data-bs-slide="next"
              style={{
                position: "absolute",
                top: "50%",
                right: "-50px",
                transform: "translateY(-50%)",
                width: "40px",
                height: "40px",
                zIndex: 2,
              }}
            >
              <span
                className="carousel-control-next-icon bg-dark rounded-circle"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        {/* Detail */}
        <div
          className="col-md-5 overflow-auto p-4 d-flex flex-column kolom-kanan"
          style={{ height: "100vh" }}
        >
          <div className="d-flex align-items-center gap-3 mb-4">
            <button className="btn-custom">Ulasan</button>
            <div className="lokasi-custom d-flex align-items-center px-3 py-2">
              <i className="bi bi-geo-alt-fill me-2"></i>
              <span>{destinasi.alamat}</span>
            </div>
          </div>

          <h2 className="fw-bold">{destinasi.nama_destinasi}</h2>
          <hr />

          <h4 className="fw-bold">Asal Usul dan Sejarah</h4>
          <p>{destinasi.asal_usul}</p>

          <hr />
          <h4 className="fw-bold mb-2">Daya Tarik dan Keunikan</h4>
          <ul>
            {destinasi.daya_tarik &&
              destinasi.daya_tarik
                .split(".")
                .map((kalimat, index) =>
                  kalimat.trim() ? <li key={index}>{kalimat.trim()}.</li> : null
                )}
          </ul>

          <hr />
          <h4 className="fw-bold mb-2">Fasilitas Yang Disediakan</h4>
          <ul>
            {destinasi.fasilitas &&
              destinasi.fasilitas
                .split(",")
                .map((kalimat, index) =>
                  kalimat.trim() ? <li key={index}>{kalimat.trim()}.</li> : null
                )}
          </ul>
          <hr />
          <h4 className="fw-bold">Harga Tiket dan Jam Oprasional</h4>
          <ul>
            {destinasi.harga_jam &&
              destinasi.harga_jam
                .split(",")
                .map((kalimat, index) =>
                  kalimat.trim() ? <li key={index}>{kalimat.trim()}.</li> : null
                )}
          </ul>
          <hr />
          <h4 className="fw-bold"></h4>
          <p>{destinasi.deskripsi}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailDestinasi;
