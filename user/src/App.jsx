import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Beranda from "./assets/pages/Beranda";
import Destinasi from "./assets/pages/Destinasi";
import HubungiKami from "./assets/pages/HubungiKami";
import DetailDestinasi from "./assets/pages/DetailDestinasi";

function AppContent() {
  const location = useLocation();
  const isDetailPage = location.pathname.startsWith("/detail/");

  return (
    <>
      {!isDetailPage && <Header />}
      <div style={{ paddingTop: !isDetailPage ? "80px" : 0 }}>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/destinasi" element={<Destinasi />} />
          <Route path="/hubungi-kami" element={<HubungiKami />} />
          <Route path="/detail/:id" element={<DetailDestinasi />} />
        </Routes>
      </div>
      {!isDetailPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
