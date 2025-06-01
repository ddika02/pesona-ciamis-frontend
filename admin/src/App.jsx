import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/login";
import DashboardLayout from "./pages/dashboard/dashboardlayout";
import Dashboard from "./pages/dashboard/dashboard";
import Destinasi from "./pages/dashboard/destinasi";
import KritikSaran from "./pages/dashboard/kritik-saran";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Halaman Login */}
        <Route path="/" element={<Login />} />

        {/* Semua halaman dashboard dibungkus Sidebar (DashboardLayout) */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} /> {/* /dashboard */}
          <Route path="destinasi" element={<Destinasi />} />{" "}
          {/* /dashboard/destinasi */}
          <Route path="kritik-saran" element={<KritikSaran />} />{" "}
          {/* /dashboard/kritik-saran */}
        </Route>

        {/* Redirect jika ada yang akses langsung tanpa prefix /dashboard */}
        <Route
          path="/destinasi"
          element={<Navigate to="/dashboard/destinasi" replace />}
        />
        <Route
          path="/kritik-saran"
          element={<Navigate to="/dashboard/kritik-saran" replace />}
        />
        <Route
          path="/dashboard/*"
          element={<Navigate to="/dashboard" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
