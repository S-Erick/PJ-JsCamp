import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFoundPage } from "./Pages/404.jsx";
import Header from "./Components/Header.jsx";
import { HomePage } from "./Pages/Home-page.jsx";
import { EmpleosPage } from "./Pages/Empleos-page.jsx";
import Footer from "./Components/Footer.jsx";

export function App() {
  return (
    <>
      <BrowserRouter basename="/PJ-jsCamp">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/empleos" element={<EmpleosPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}
