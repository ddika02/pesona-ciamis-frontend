import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/background.png";

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
        body: JSON.stringify({ username, password }), // ⬅️ Kirim 'username'
      });

      const data = await res.json();
      console.log(data);

      // ✅ Sesuaikan dengan struktur response server
      if (data.status === "success") {
        localStorage.setItem("token", data.data.token); // ambil dari data.data.token
        navigate("/dashboard");
      } else {
        alert("Login gagal: " + data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Terjadi kesalahan saat login.");
    }
  };

  return (
    <div
      className="vh-100 d-flex align-items-center justify-content-end"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div style={{ width: "350px", marginRight: "3rem" }}>
        <h2 className="text-center mb-4 text-white">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-white"></label>
            <input
              type="username"
              className="form-control"
              id="username"
              placeholder="Masukan Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                backgroundColor: "#D9D9D9",
                border: "none",
                color: "white",
              }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label text-white"></label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Masukan Kata Sandi"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                backgroundColor: "#D9D9D9",
                border: "none",
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
