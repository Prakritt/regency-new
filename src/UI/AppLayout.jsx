import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

function AppLayout() {
  return (
    <>
      <NavBar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Outlet />
      </motion.main>
      <Footer />
    </>
  );
}

export default AppLayout;
