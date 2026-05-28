import React, { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import AppLayout from "./UI/AppLayout";

import { TourProvider } from "./context/TourProvider";
import ScrollToTop from "./utils/ScrollToTop";
import AnimatedPage from "./utils/AnimatedPage";

const Home = lazy(() => import("./pages/Home"));
const Tours = lazy(() => import("./pages/Tours"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const Cultural = lazy(() => import("./pages/Cultural"));

function PageLoader() {
  return (
    <div className="grid min-h-[45svh] place-items-center bg-white px-4 py-16 text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
          Regency Nepal
        </p>
        <p className="mt-3 text-base font-medium text-zinc-600">
          Preparing your travel page...
        </p>
      </div>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Suspense fallback={<PageLoader />}>
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
    </Suspense>
  );
}

function App() {
  return (
    <TourProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="font-roboto">
          <AnimatedRoutes />
        </div>
      </BrowserRouter>
    </TourProvider>
  );
}

export default App;
