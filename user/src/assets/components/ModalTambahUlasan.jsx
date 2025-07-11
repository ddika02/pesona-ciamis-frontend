import React, { useState } from "react";

const ModalTambahUlasan = ({
  destinasi,
  onClose,
  setNamaInput,
  setRatingInput,
  setUlasanInput,
  ratingInput,
  ulasanInput,
  namaInput,
  onSubmit,
}) => {
  const [sembunyikanIdentitas, setSembunyikanIdentitas] = useState(false);

  // Saat centang, otomatis isi nama jadi "Anonim"
  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setSembunyikanIdentitas(isChecked);

    if (isChecked) {
      setNamaInput("Anonim");
    } else {
      setNamaInput("");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 9999,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "20px",
          padding: "30px",
          width: "500px",
          maxWidth: "90%",
          textAlign: "center",
        }}
      >
        <h4 className="fw-bold mb-3">{destinasi.nama_destinasi}</h4>

        <div className="d-flex justify-content-center mb-3">
          {[1, 2, 3, 4, 5].map((bintang) => (
            <i
              key={bintang}
              className={`fa-star ${
                bintang <= ratingInput
                  ? "fa-solid text-warning"
                  : "fa-regular text-dark"
              }`}
              style={{ fontSize: "28px", cursor: "pointer", margin: "0 5px" }}
              onClick={() => setRatingInput(bintang)}
            ></i>
          ))}
        </div>

        <input
          className="form-control mb-2"
          placeholder="Nama Anda"
          value={namaInput}
          onChange={(e) => setNamaInput(e.target.value)}
          disabled={sembunyikanIdentitas}
        />

        <div className="form-check mb-3 text-start">
          <input
            className="form-check-input"
            type="checkbox"
            id="sembunyikanIdentitas"
            checked={sembunyikanIdentitas}
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label" htmlFor="sembunyikanIdentitas">
            Kirim sebagai Anonim
          </label>
        </div>

        <textarea
          className="form-control mb-4"
          placeholder="Bagikan pengalaman Anda"
          rows="4"
          value={ulasanInput}
          onChange={(e) => setUlasanInput(e.target.value)}
        />

        <div className="d-flex justify-content-center gap-3">
          <button className="btn btn-secondary" onClick={onClose}>
            Batal
          </button>
          <button className="btn btn-success" onClick={onSubmit}>
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalTambahUlasan;
