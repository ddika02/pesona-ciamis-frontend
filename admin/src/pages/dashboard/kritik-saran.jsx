import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const AdminKritikSaran = () => {
  const [kritikList, setKritikList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchKritik = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "http://localhost:5000/api/kritik-saran",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Respon backend:", response.data);
      setKritikList(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Gagal mengambil data:", error);
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Gagal Memuat Data",
        text: "Terjadi kesalahan saat mengambil data.",
      });
    }
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Yakin ingin menghapus pesan ini?",
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
          await axios.delete(`http://localhost:5000/api/kritik-saran/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          Swal.fire({
            icon: "success",
            title: "Berhasil Dihapus",
            text: "Pesan telah dihapus.",
            timer: 1500,
            showConfirmButton: false,
          });

          fetchKritik();
        } catch (error) {
          console.error("Gagal menghapus data:", error);
          Swal.fire({
            icon: "error",
            title: "Gagal Menghapus",
            text: "Terjadi kesalahan saat menghapus data.",
          });
        }
      }
    });
  };

  useEffect(() => {
    fetchKritik();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#EFEFEF",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2>PESAN TAMU</h2>
      {loading ? (
        <p>Memuat data...</p>
      ) : (
        <div className="mt-5 table-responsive">
          <table className="table table-hover table-borderless align-middle">
            <thead className="table-dark text-white text-center">
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Email</th>
                <th>Pesan</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {kritikList.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center">
                    Tidak ada data
                  </td>
                </tr>
              ) : (
                kritikList.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.nama}</td>
                    <td>{item.email}</td>
                    <td>{item.pesan}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm align-center"
                        onClick={() => handleDelete(item.id)}
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminKritikSaran;
