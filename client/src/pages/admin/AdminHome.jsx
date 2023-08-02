import React from "react";
import Card from "../../components/Card";
import { FcSalesPerformance } from "react-icons/fc";
import Chart from "../../components/Chart";
import MedicineTable from "../../components/MedicineTable";

const AdminHome = () => {
  return (
    <div className="scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
      <div className="text-sm breadcrumbs mb-5">
        <ul>
          <li>Dashboard</li>
          <li></li>
        </ul>
      </div>
      <div className="flex gap-x-2 flex-col sm:flex-row ">
        <Card icon={<FcSalesPerformance />} title="Sales" total="200.00" />
        <Card icon={<FcSalesPerformance />} title="Sales" total="200.00" />
        <Card icon={<FcSalesPerformance />} title="Sales" total="200.00" />
      </div>
      <div className="flex gap-x-2 mt-5 h-[54vh]">
        <div className=" flex-1 shadow-md rounded-sm p-2">
          <MedicineTable />
        </div>
        <div className=" w-4/12 rounded-sm shadow-md">
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
