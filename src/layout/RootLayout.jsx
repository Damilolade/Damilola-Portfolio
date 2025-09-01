// src/layout/RootLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="app-layout">
      {/* ✅ Navbar visible on every page */}
      <Navbar />

      {/* ✅ This is where nested routes (Home, About, Projects, etc.) will show */}
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
