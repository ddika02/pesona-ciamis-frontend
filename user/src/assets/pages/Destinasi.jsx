import React, { useEffect, useState } from "react";
import "./Destinasi.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Destinasi = () => {
  const [destinasi, setDestinasi] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDestinasi = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/destinasi");
      const data = await response.json();
      setDestinasi(data.data || []); // agar aman jika response kosong
    } catch (error) {
      console.error("Gagal mengambil data destinasi:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDestinasi();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center warna my-4">Halaman Destinasi</h1>

      {loading ? (
        <p className="text-center">Memuat data destinasi...</p>
      ) : destinasi.length === 0 ? (
        <p className="text-center">Belum ada destinasi wisata.</p>
      ) : (
        <div className="row">
          {destinasi.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <div className="card shadow-sm destinasi-card h-100">
                <img
                  src={`http://localhost:5000${item.gambar_utama}`} // ambil langsung dari DB
                  alt={item.nama_destinasi}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.nama_destinasi}</h5>
                  <p className="card-text text-muted">
                    {item.rating || "4.5"} ⭐
                  </p>
                  <a
                    href={`/detail/${item.id}`}
                    className="btn btn-lihat w-100"
                  >
                    Lihat
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Destinasi;
