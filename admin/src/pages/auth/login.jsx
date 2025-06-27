import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/Background Login Revisi.png";
import logo from "../../assets/Logo Ciamis.png"; // pastikan ada logo pesona ciamis
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      console.log(data);

      if (data.status === "success") {
        localStorage.setItem("token", data.data.token);

        Swal.fire({
          icon: "success",
          title: "Login Berhasil",
          text: "Selamat datang!",
          timer: 2000,
          showConfirmButton: false,
        }).then(() => {
          navigate("/dashboard");
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Gagal",
          text: data.message || "Username atau Password salah!",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      Swal.fire({
        icon: "error",
        title: "Terjadi Kesalahan",
        text: "Tidak dapat terhubung ke server.",
      });
    }
  };

  return (
    <div
      className="vh-100 d-flex"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Bagian Kiri */}
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "white",
          padding: "2rem",
        }}
      >
        <img
          src={logo}
          alt="Logo Pesona Ciamis"
          style={{ width: "150px", marginBottom: "20px" }}
        />
        <h1>Pesona Ciamis</h1>
        <p>Selamat datang di aplikasi wisata Pesona Ciamis</p>
      </div>

      {/* Bagian Kanan */}
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{
          flex: 1,
          backdropFilter: "blur(10px)",
          padding: "2rem",
        }}
      >
        <div
          style={{
            width: "350px",
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Hitam transparan
            padding: "2rem",
            borderRadius: "10px",
            boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)", // Bayangan luar
          }}
        >
          <h2 className="text-center mb-4 text-white">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Masukan Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  border: "1px solid white",
                  color: "white",
                }}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Masukan Kata Sandi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  border: "1px solid white",
                  color: "white",
                }}
              />
            </div>
            <button
              type="submit"
              className="btn w-100"
              style={{
                backgroundColor: "#40E0D0",
                border: "none",
                color: "#fff",
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {/* Warna Placeholder */}
      <style>
        {`
          input::placeholder {
            color: white !important;
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
};

export default Login;
