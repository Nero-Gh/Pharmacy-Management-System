import React from "react";
import { Outlet } from "react-router-dom";

const UserDashboardLayout = () => {
  return (
    <div className="flex">
      <div>sidebar User </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default UserDashboardLayout;
