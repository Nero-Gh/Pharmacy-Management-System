import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../global/SideBar";
import Navbar from "../global/Navbar";

const AdminDashboardLayout = () => {
  return (
    <div className="h-screen flex overflow-hidden ">
      <SideBar />
      <div className="p-2 flex-1">
        <Navbar />
        <div className="pl-6 mt-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
