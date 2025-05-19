import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Beranda from "./pages/Beranda";
import Destinasi from "./pages/Destinasi";
import HubungiKami from "./pages/HubungiKami";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/destinasi" element={<Destinasi />} />
        <Route path="/hubungi" element={<HubungiKami />} />
      </Routes>
    </Router>
  );
};

export default App;
