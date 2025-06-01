import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/background.png";

const Login = () => {
  const navigate = useNavigate(); // ⬅️ Hook untuk navigasi

  const handleSubmit = (e) => {
    e.preventDefault();
    // logika login bisa ditambah nanti
    navigate("/dashboard"); // ⬅️ Arahkan ke dashboard
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
              type="email"
              className="form-control"
              id="email"
              placeholder="Masukan Akun"
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
