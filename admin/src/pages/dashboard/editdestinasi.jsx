import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const EditDestinasi = ({ onClose, onUpdate, initialData }) => {
  const [form, setForm] = useState({
    nama_destinasi: "",
    alamat: "",
    asal_usul: "",
    daya_tarik: "",
    fasilitas: "",
    harga_jam: "",
    deskripsi: "",
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        nama_destinasi: initialData.nama_destinasi || "",
        alamat: initialData.alamat || "",
        asal_usul: initialData.asal_usul || "",
        daya_tarik: initialData.daya_tarik || "",
        fasilitas: initialData.fasilitas || "",
        harga_jam: initialData.harga_jam || "",
        deskripsi: initialData.deskripsi || "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `http://localhost:5000/api/destinasi/${initialData.id}`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Data berhasil diperbarui.",
        timer: 1500,
        showConfirmButton: false,
      });
      if (onUpdate) onUpdate(form);
      onClose();
    } catch (error) {
      console.error("Update gagal:", error);
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Terjadi kesalahan saat menyimpan data.",
      });
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container bg-white p-4 rounded shadow">
        <h3 className="text-center mb-4 fw-bold">Edit Destinasi</h3>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="fw-bold">Nama Destinasi</label>
            <input
              name="nama_destinasi"
              className="form-control"
              value={form.nama_destinasi}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="fw-bold">Alamat</label>
            <input
              name="alamat"
              className="form-control"
              value={form.alamat}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-3">
            <label className="fw-bold">Asal – Usul</label>
            <textarea
              name="asal_usul"
              className="form-control"
              rows="4"
              value={form.asal_usul}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="col-md-3">
            <label className="fw-bold">Daya Tarik</label>
            <textarea
              name="daya_tarik"
              className="form-control"
              rows="4"
              value={form.daya_tarik}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="col-md-3">
            <label className="fw-bold">Fasilitas</label>
            <textarea
              name="fasilitas"
              className="form-control"
              rows="4"
              value={form.fasilitas}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="col-md-3">
            <label className="fw-bold">Harga & Jam</label>
            <textarea
              name="harga_jam"
              className="form-control"
              rows="4"
              value={form.harga_jam}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <div className="mb-3">
          <label className="fw-bold">Deskripsi</label>
          <textarea
            name="deskripsi"
            className="form-control"
            rows="5"
            value={form.deskripsi}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="d-flex justify-content-center gap-2 mt-4">
          <button className="btn btn-secondary" onClick={onClose}>
            Batal
          </button>
          <button className="btn btn-success" onClick={handleSubmit}>
            Simpan Perubahan
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditDestinasi;
