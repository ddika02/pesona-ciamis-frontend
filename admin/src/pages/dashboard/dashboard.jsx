import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [jumlahDestinasi, setJumlahDestinasi] = useState(0);
  const [jumlahPesan, setJumlahPesan] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/destinasi")
      .then((res) => {
        setJumlahDestinasi(res.data.length);
      })
      .catch((err) => {
        console.error("Gagal mengambil destinasi:", err);
      });

    axios
      .get("http://localhost:5000/api/kritik-saran", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setJumlahPesan(res.data.data.length);
      })
      .catch((err) => {
        console.error("Gagal mengambil pesan:", err);
      });
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#EFEFEF",
        padding: "40px 20px",
      }}
    >
      <div className="container">
        <h2>Dashboard</h2>

        <div className="mt-5 bg-white p-5 rounded shadow">
          <h3 className="mb-4 text-dark">Jumlah Destinasi</h3>
          <div className="bg-white border rounded shadow-sm p-4 mb-5 text-center">
            <h1 className="fw-bold mb-2">{jumlahDestinasi}</h1>
            <p className="mb-0 text-muted fw-bold">Destinasi</p>
          </div>

          <h3 className="mb-4 text-dark">Pesan Dari Pengunjung</h3>
          <div className="bg-white border rounded shadow-sm p-4 text-center">
            <h1 className="fw-bold mb-2">{jumlahPesan}</h1>
            <p className="mb-0 text-dark fw-bold">Pesan Masuk</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
