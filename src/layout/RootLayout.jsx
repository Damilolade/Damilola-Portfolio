// src/layouts/RootLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"; // ✅ correct relative path
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar always visible */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1 mt-16">
        <Outlet /> {/* React Router injects pages here */}
      </main>

      {/* Optional Footer */}
      <Footer />
    </div>
  );
};

export default RootLayout;
