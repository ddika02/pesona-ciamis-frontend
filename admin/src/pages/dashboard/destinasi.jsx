import React, { useState, useEffect } from "react";
import axios from "axios";
import TambahDestinasi from "./tambahdestinasi";
import EditDestinasi from "./editdestinasi";
import Gambar from "./gambar";
import Swal from "sweetalert2";

const Destinasi = () => {
  const [destinasiList, setDestinasiList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [showGambarModal, setShowGambarModal] = useState(false);
  const [gambarDestinasiId, setGambarDestinasiId] = useState(null);

  const fetchDestinasi = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:5000/api/destinasi", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDestinasiList(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Gagal mengambil data destinasi:", error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Yakin ingin menghapus destinasi ini?",
      text: "Data yang dihapus tidak dapat dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, Hapus",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const token = localStorage.getItem("token");
          await axios.delete(`http://localhost:5000/api/destinasi/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          fetchDestinasi();
          Swal.fire({
            icon: "success",
            title: "Berhasil",
            text: "Destinasi telah dihapus.",
            timer: 1500,
            showConfirmButton: false,
          });
        } catch (error) {
          console.error("Gagal menghapus destinasi:", error);
          Swal.fire({
            icon: "error",
            title: "Gagal",
            text: "Terjadi kesalahan saat menghapus data.",
          });
        }
      }
    });
  };

  const handleEditClick = (item) => {
    setSelectedData(item);
    setShowEditModal(true);
  };

  const handleGambarClick = (id) => {
    setGambarDestinasiId(id);
    setShowGambarModal(true);
  };

  useEffect(() => {
    fetchDestinasi();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#EFEFEF",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fw-bold">DESTINASI</h2>
        <button
          className="btn btn-warning text-white fw-bold"
          onClick={() => setShowModal(true)}
        >
          <i className="fas fa-plus me-2"></i>Tambah
        </button>
      </div>

      {loading ? (
        <p>Memuat data...</p>
      ) : (
        <div className="table-responsive">
          <table className="table align-middle">
            <thead style={{ backgroundColor: "#2dd4bf", color: "white" }}>
              <tr className="text-center">
                <th style={{ width: "50px" }}>NO</th>
                <th>Nama Destinasi</th>
                <th>Alamat</th>
                <th style={{ width: "150px" }}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {destinasiList.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center">
                    Tidak ada data
                  </td>
                </tr>
              ) : (
                destinasiList.map((item, index) => (
                  <tr key={item.id}>
                    <td className="fw-bold text-center">{index + 1}.</td>
                    <td>{item.nama_destinasi}</td>
                    <td>{item.alamat}</td>
                    <td className="text-center">
                      <div className="d-flex justify-content-center gap-2">
                        <button
                          className="btn btn-sm"
                          style={{ backgroundColor: "#facc15" }}
                          title="Edit"
                          onClick={() => handleEditClick(item)}
                        >
                          <i className="fas fa-pen"></i>
                        </button>
                        <button
                          className="btn btn-sm"
                          style={{ backgroundColor: "#22c55e", color: "#fff" }}
                          title="Gambar"
                          onClick={() => handleGambarClick(item.id)}
                        >
                          <i className="fas fa-image"></i>
                        </button>
                        <button
                          className="btn btn-sm"
                          style={{ backgroundColor: "#ef4444", color: "#fff" }}
                          title="Hapus"
                          onClick={() => handleDelete(item.id)}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {showModal && (
        <TambahDestinasi
          onClose={() => {
            setShowModal(false);
            fetchDestinasi(); // Refresh data setelah tambah
          }}
        />
      )}

      {showEditModal && (
        <EditDestinasi
          onClose={() => {
            setShowEditModal(false);
            fetchDestinasi(); // Refresh data setelah edit
          }}
          initialData={selectedData}
        />
      )}

      {showGambarModal && (
        <Gambar
          destinasiId={gambarDestinasiId}
          onClose={() => setShowGambarModal(false)}
        />
      )}
    </div>
  );
};

export default Destinasi;
