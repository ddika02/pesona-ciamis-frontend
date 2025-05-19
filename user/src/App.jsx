import { useState } from "react";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Beranda from "./assets/pages/Beranda";
import Destinasi from "./assets/pages/Destinasi";
import HubungiKami from "./assets/pages/HubungiKami";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <div style={{ paddingTop: "80px" }}>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/destinasi" element={<Destinasi />} />
          <Route path="/hubungi-kami" element={<HubungiKami />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
