import React from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import AppLayout from "./UI/AppLayout";
import Home from "./pages/Home";
import Tours from "./pages/Tours";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Cultural from "./pages/Cultural";

import { TourProvider } from "./context/TourProvider";
import ScrollToTop from "./utils/ScrollToTop";
import AnimatedPage from "./utils/AnimatedPage";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route element={<AppLayout />}>
          <Route
            index
            element={
              <AnimatedPage>
                <Navigate replace to="home" />
              </AnimatedPage>
            }
          />

          <Route
            path="home"
            element={
              <AnimatedPage>
                <Home />
              </AnimatedPage>
            }
          />
          <Route
            path="tours"
            element={
              <AnimatedPage>
                <Tours />
              </AnimatedPage>
            }
          />
          <Route
            path="tours/:dest/:id"
            element={
              <AnimatedPage>
                <Cultural />
              </AnimatedPage>
            }
          />
          <Route
            path="services"
            element={
              <AnimatedPage>
                <Services />
              </AnimatedPage>
            }
          />
          <Route
            path="contacts"
            element={
              <AnimatedPage>
                <Contact />
              </AnimatedPage>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <TourProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="font-roboto">
          {" "}
          {/* ✅ Global font applied here */}
          <AnimatedRoutes />
        </div>
      </BrowserRouter>
    </TourProvider>
  );
}

export default App;
