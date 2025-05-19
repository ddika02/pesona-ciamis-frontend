import React, { useState } from "react";

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
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <h2>Hubungi Kami</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
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
          />
        </div>

        <div className="mb-3">
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
          />
        </div>

        <div className="mb-3">
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
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Kirim Pesan
        </button>
      </form>
    </div>
  );
};

export default HubungiKami;
