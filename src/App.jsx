import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./UI/AppLayout";
import Home from "./pages/Home";
import Tours from "./pages/Tours";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Cultural from "./pages/Cultural";
import { TourProvider } from "./context/TourProvider";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <TourProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />

            <Route path="home" element={<Home />} />
            <Route path="tours" element={<Tours />} />
            <Route path="tours/:id" element={<Cultural />} />

            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TourProvider>
  );
}

export default App;
