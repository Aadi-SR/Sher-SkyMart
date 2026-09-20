import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className=" bg-black">
      <Navbar />
      <div className="px-32 py-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
