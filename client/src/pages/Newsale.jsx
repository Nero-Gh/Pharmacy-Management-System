import React from "react";
import Sale from "../components/Sale";
import SaleList from "../components/SaleList";
import SalesAmount from "../components/SalesAmount";

const NewSale = () => {
  return (
    <div>
      <div className="flex gap-2 p-2">
        <div className="w-[40%] shadow-md ">
          <Sale />
        </div>

        <div className="bg-white flex-1 w-[60%] shadow-md rounded-md  relative">
          <SaleList />
        </div>
      </div>
      <div className="mt-10">
        <SalesAmount />
      </div>
    </div>
  );
};

// medicine name
// sales
// quantity
// amount

// Total Amount Discount Discount Amount total Payable Paid Return Submit new sale

export default NewSale;
