import React from "react";
import Card from "../../components/Card";
import { FcSalesPerformance } from "react-icons/fc";

const AdminHome = () => {
  return (
    <div className="overflow-y-scroll">
      <div className="flex gap-x-2 flex-col sm:flex-row ">
        <Card icon={<FcSalesPerformance />} title="Sales" total="200.00" />
        <Card icon={<FcSalesPerformance />} title="Sales" total="200.00" />
        <Card icon={<FcSalesPerformance />} title="Sales" total="200.00" />
      </div>
      <div className="flex gap-x-2 mt-5 h-[54vh]">
        <div className="bg-red-200 flex-1 rounded-sm">Charts</div>
        <div className="bg-slate-200 w-4/12 rounded-sm">Calender</div>
      </div>
    </div>
  );
};

export default AdminHome;
