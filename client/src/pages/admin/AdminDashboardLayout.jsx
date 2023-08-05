import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../global/SideBar";
import Navbar from "../global/Navbar";
import "../../App.css";

const AdminDashboardLayout = () => {
  return (
    <div className="h-screen fixed  w-full bg-white">
      <div>
        <div className="flex">
          <div className="">
            <SideBar />
          </div>
          <div className="p-2 flex-1 overflow-auto">
            <div>
              <Navbar />
            </div>
            <div className="pl-6 mt-10 ">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
