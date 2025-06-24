import React, { useState, useEffect } from "react";
import "./tambahdestinasi.css";
import Swal from "sweetalert2";

const Gambar = ({ onClose, destinasiId }) => {
  const [gambarList, setGambarList] = useState([]);
  const [file, setFile] = useState(null);
  const [gambarUtama, setGambarUtama] = useState(null);
  const [namaDestinasi, setNamaDestinasi] = useState("");

  const fetchGambar = async () => {
    try {
      const token = localStorage.getItem("token");

      const resGambar = await fetch(
        `http://localhost:5000/api/gambar/${destinasiId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const dataGambar = await resGambar.json();
      setGambarList(dataGambar.data);

      const resDestinasi = await fetch(
        `http://localhost:5000/api/destinasi/${destinasiId}`
      );
      const dataDestinasi = await resDestinasi.json();
      setGambarUtama(dataDestinasi.data.gambar_utama);
      setNamaDestinasi(dataDestinasi.data.nama_destinasi); // Set nama destinasi
    } catch (err) {
      console.error("Gagal mengambil gambar:", err);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      Swal.fire({
        icon: "warning",
        title: "Peringatan",
        text: "Pilih file gambar terlebih dahulu.",
        didOpen: () => {
          document.querySelector(".swal2-container").style.zIndex = 9999;
        },
      });
      return;
    }

    const formData = new FormData();
    formData.append("gambar", file);

    try {
      const token = localStorage.getItem("token");
      await fetch(`http://localhost:5000/api/destinasi/${destinasiId}/gambar`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      setFile(null);
      fetchGambar();

      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Gambar berhasil diunggah.",
        timer: 1500,
        showConfirmButton: false,
        didOpen: () => {
          document.querySelector(".swal2-container").style.zIndex = 9999;
        },
      });
    } catch (err) {
      console.error("Gagal mengunggah gambar:", err);
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Terjadi kesalahan saat mengunggah gambar.",
        didOpen: () => {
          document.querySelector(".swal2-container").style.zIndex = 9999;
        },
      });
    }
  };

  const handleDelete = async (gambarId) => {
    Swal.fire({
      title: "Yakin ingin menghapus gambar ini?",
      text: "Tindakan ini tidak dapat dibatalkan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, hapus",
      cancelButtonText: "Batal",
      didOpen: () => {
        document.querySelector(".swal2-container").style.zIndex = 9999;
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const token = localStorage.getItem("token");
          await fetch(
            `http://localhost:5000/api/destinasi/${destinasiId}/gambar/${gambarId}`,
            {
              method: "DELETE",
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          fetchGambar();

          Swal.fire({
            icon: "success",
            title: "Berhasil",
            text: "Gambar berhasil dihapus.",
            timer: 1500,
            showConfirmButton: false,
            didOpen: () => {
              document.querySelector(".swal2-container").style.zIndex = 9999;
            },
          });
        } catch (err) {
          console.error("Gagal menghapus gambar:", err);
          Swal.fire({
            icon: "error",
            title: "Gagal",
            text: "Terjadi kesalahan saat menghapus gambar.",
            didOpen: () => {
              document.querySelector(".swal2-container").style.zIndex = 9999;
            },
          });
        }
      }
    });
  };

  const handleSetThumbnail = async (imgUrl) => {
    const fullUrl = imgUrl.startsWith("/uploads")
      ? imgUrl
      : `/uploads/destinasi/${imgUrl}`;

    Swal.fire({
      title: "Jadikan gambar ini sebagai thumbnail?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Ya, Set Thumbnail",
      cancelButtonText: "Batal",
      didOpen: () => {
        document.querySelector(".swal2-container").style.zIndex = 9999;
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const token = localStorage.getItem("token");

          const res = await fetch(
            `http://localhost:5000/api/destinasi/${destinasiId}/gambar-utama`,
            {
              method: "PUT",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ gambar_utama: fullUrl }),
            }
          );

          if (!res.ok) {
            const data = await res.json();
            throw new Error(data.message || "Gagal update thumbnail.");
          }

          setGambarUtama(fullUrl);
          fetchGambar();

          Swal.fire({
            icon: "success",
            title: "Berhasil",
            text: "Thumbnail berhasil diperbarui.",
            timer: 1500,
            showConfirmButton: false,
            didOpen: () => {
              document.querySelector(".swal2-container").style.zIndex = 9999;
            },
          });
        } catch (err) {
          console.error("Gagal mengatur thumbnail:", err);
          Swal.fire({
            icon: "error",
            title: "Gagal",
            text: "Terjadi kesalahan saat mengatur thumbnail.",
            didOpen: () => {
              document.querySelector(".swal2-container").style.zIndex = 9999;
            },
          });
        }
      }
    });
  };

  useEffect(() => {
    fetchGambar();
  }, [destinasiId]);

  return (
    <div className="modal-overlay">
      <div
        className="modal-container bg-white p-4 rounded shadow"
        style={{ maxHeight: "90vh", overflowY: "auto", width: "900px" }}
      >
        <h3 className="text-center fw-bold mb-3">
          Kelola Gambar {namaDestinasi && `" ${namaDestinasi} "`}
        </h3>

        <div className="mb-3">
          <label className="fw-bold">Unggah Gambar</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <div className="d-flex justify-content-start mb-4">
          <button
            className="btn btn-warning text-white fw-bold"
            onClick={handleUpload}
          >
            <i className="fas fa-plus"></i> Tambah
          </button>
        </div>

        {gambarList.length === 0 ? (
          <p className="text-center">Belum ada gambar</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-bordered text-center align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Gambar</th>
                  <th>Thumbnail</th>
                  <th>Hapus</th>
                </tr>
              </thead>
              <tbody>
                {gambarList.map((img) => (
                  <tr key={img.id}>
                    <td>
                      <img
                        src={`http://localhost:5000${img.url_gambar}`}
                        alt="Gambar"
                        style={{ width: "180px", objectFit: "cover" }}
                        className="img-thumbnail"
                      />
                    </td>
                    <td>
                      <button
                        className={`btn btn-sm ${
                          gambarUtama === img.url_gambar
                            ? "btn-success"
                            : "btn-outline-secondary"
                        }`}
                        title="Jadikan Thumbnail"
                        onClick={() => handleSetThumbnail(img.url_gambar)}
                      >
                        <i className="fas fa-check"></i>
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(img.id)}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="d-flex justify-content-center mt-4">
          <button className="btn btn-secondary" onClick={onClose}>
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gambar;
