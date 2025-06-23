import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DetailDestinasi.css";
import ModalTambahUlasan from "../components/ModalTambahUlasan";

const DetailDestinasi = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [destinasi, setDestinasi] = useState(null);
  const [gambar, setGambar] = useState([]);
  const [tampilkanUlasan, setTampilkanUlasan] = useState(false);
  const [ratingInput, setRatingInput] = useState(0);
  const [namaInput, setNamaInput] = useState("");
  const [ulasanInput, setUlasanInput] = useState("");
  const [dataUlasan, setDataUlasan] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/api/destinasi/${id}`)
      .then((res) => res.json())
      .then((data) => setDestinasi(data.data))
      .catch((err) => console.error(err));

    fetch(`http://localhost:5000/api/gambar/${id}`)
      .then((res) => res.json())
      .then((data) => setGambar(data.data))
      .catch((err) => console.error(err));
  }, [id]);

  useEffect(() => {
    if (tampilkanUlasan) {
      fetch(`http://localhost:5000/api/destinasi/${id}/ulasan`)
        .then((res) => res.json())
        .then((data) => setDataUlasan(data.data))
        .catch((err) => console.error(err));
    }
  }, [tampilkanUlasan, id]);

  if (!destinasi)
    return <p className="text-center mt-5">Memuat detail destinasi...</p>;

  const handleKirimUlasan = () => {
    if (!namaInput.trim() || !ratingInput || !ulasanInput.trim()) {
      alert("Isi semua form terlebih dahulu.");
      return;
    }

    fetch(`http://localhost:5000/api/destinasi/${id}/ulasan`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nama_pengulas: namaInput,
        rating: ratingInput,
        komentar: ulasanInput,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Gagal menambahkan ulasan");
        }
        return res.json();
      })
      .then((data) => {
        alert("Ulasan berhasil dikirim.");
        setShowModal(false);
        setNamaInput("");
        setRatingInput(0);
        setUlasanInput("");

        // Langsung tambahkan ke daftar ulasan tanpa reload
        setDataUlasan((prev) => [
          {
            id: data.data.id, // pastikan backend mengirim id baru
            nama_pengulas: namaInput,
            rating: ratingInput,
            komentar: ulasanInput,
            tanggal: data.data.tanggal, // pastikan backend kirim tanggal
          },
          ...prev, // ulasan baru ditaruh paling atas
        ]);
      })
      .catch((err) => {
        console.error(err);
        alert("Terjadi kesalahan. Pastikan semua form sudah diisi.");
      });
  };

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
        {/* BAGIAN GAMBAR */}
        <div className="col-md-7 d-flex justify-content-center align-items-center">
          <div
            id="carouselGambar"
            className="carousel slide position-relative"
            data-bs-ride="carousel"
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

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselGambar"
              data-bs-slide="prev"
              style={{
                position: "absolute",
                top: "50%",
                left: "-50px",
                transform: "translateY(-50%)",
                width: "40px",
                height: "40px",
                zIndex: 2,
              }}
            >
              <span className="carousel-control-prev-icon bg-dark rounded-circle" />
            </button>

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
              <span className="carousel-control-next-icon bg-dark rounded-circle" />
            </button>
          </div>
        </div>

        {/* BAGIAN DETAIL */}
        <div
          className="col-md-5 overflow-auto p-4 d-flex flex-column kolom-kanan"
          style={{ height: "100vh" }}
        >
          {!tampilkanUlasan ? (
            <>
              <div className="d-flex align-items-center gap-3 mb-4">
                <button
                  className="btn-custom"
                  onClick={() => setTampilkanUlasan(true)}
                >
                  Ulasan
                </button>
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
                {destinasi.daya_tarik
                  ?.split(".")
                  .map((t, i) => t.trim() && <li key={i}>{t.trim()}.</li>)}
              </ul>
              <hr />

              <h4 className="fw-bold mb-2">Fasilitas Yang Disediakan</h4>
              <ul>
                {destinasi.fasilitas
                  ?.split(",")
                  .map((t, i) => t.trim() && <li key={i}>{t.trim()}.</li>)}
              </ul>
              <hr />

              <h4 className="fw-bold mb-2">Harga Tiket dan Jam Operasional</h4>
              <ul>
                {destinasi.harga_jam
                  ?.split(",")
                  .map((t, i) => t.trim() && <li key={i}>{t.trim()}.</li>)}
              </ul>
              <hr />

              <p>{destinasi.deskripsi}</p>
            </>
          ) : (
            <>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <button
                  onClick={() => setTampilkanUlasan(false)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#000",
                    fontSize: "24px",
                    cursor: "pointer",
                  }}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>

              <h4 className="fw-bold">Ulasan</h4>
              <p>{destinasi.nama_destinasi}</p>
              <hr />

              <h5 className="fw-bold">Beri Rating dan Ulasan</h5>
              <div className="d-flex mb-3">
                {[1, 2, 3, 4, 5].map((bintang) => (
                  <i
                    key={bintang}
                    className="fa-solid fa-star text-warning"
                    style={{
                      fontSize: "24px",
                      cursor: "pointer",
                      marginRight: "5px",
                    }}
                    onClick={() => setShowModal(true)}
                  ></i>
                ))}
              </div>
              <hr />

              {dataUlasan.length === 0 ? (
                <p>Belum ada ulasan.</p>
              ) : (
                dataUlasan.map((ulasan, i) => {
                  const tanggalBaru = new Date(
                    ulasan.tanggal
                  ).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  });

                  return (
                    <div key={i} className="border-bottom mb-3 pb-2">
                      {/* Nama Pengulas di atas */}
                      <p className="fw-bold m-0 mb-1">{ulasan.nama_pengulas}</p>

                      {/* Rating dan Tanggal bersebelahan */}
                      <div className="d-flex align-items-center mb-2">
                        {/* Rating Bintang */}
                        {[1, 2, 3, 4, 5].map((b) => (
                          <i
                            key={b}
                            className={`fa-star ${
                              b <= ulasan.rating
                                ? "fa-solid text-warning"
                                : "fa-regular text-secondary"
                            }`}
                            style={{ fontSize: "14px", marginRight: "2px" }}
                          ></i>
                        ))}

                        {/* Tanggal dekat bintang */}
                        <small className="text-muted ms-3">{tanggalBaru}</small>
                      </div>

                      {/* Komentar */}
                      <p>{ulasan.komentar}</p>
                    </div>
                  );
                })
              )}
            </>
          )}
        </div>
      </div>

      {/* Modal Muncul */}
      {showModal && (
        <ModalTambahUlasan
          destinasi={destinasi}
          onClose={() => setShowModal(false)}
          setNamaInput={setNamaInput}
          setRatingInput={setRatingInput}
          setUlasanInput={setUlasanInput}
          ratingInput={ratingInput}
          ulasanInput={ulasanInput}
          namaInput={namaInput}
          onSubmit={handleKirimUlasan}
        />
      )}
    </div>
  );
};

export default DetailDestinasi;
