import { useState } from "react";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Beranda from "./assets/pages/Beranda";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <Beranda />
      <Footer />
    </>
  );
}

export default App;
