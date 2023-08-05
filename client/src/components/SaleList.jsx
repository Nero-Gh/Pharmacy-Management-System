import React from "react";

const SaleList = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-gray-900 text-gray-100 p-2 text-center text-md uppercase rounded-md">
        Items List
      </div>
      <div className="bg-white px-4 py-5">
        <li className="list-none">Some Item</li>
        <li className="list-none">Some Item</li>
        <li className="list-none">Some Item</li>
        <li className="list-none">Some Item</li>
        <li className="list-none">Some Item</li>
      </div>
      <div className="bg-gray-200 text-gray-900 text-bold p-2 uppercase absolute rounded-md bottom-0 right-0 left-0">
        Total:
      </div>
    </div>
  );
};

export default SaleList;
