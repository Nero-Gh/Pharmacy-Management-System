import React from "react";

const SalesAmount = () => {
  return (
    <>
      <form className="bg-white w-[48%] rounded-md flex flex-col justify-center shadow-md p-5">
        <div className="form-control w-full  max-w-md  ">
          <label className="label">
            <span className="label-text text-gray-900">Medicine Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered border-gray-400 bg-transparent text-gray-900 w-full max-w-md"
          />
        </div>
        <div className="form-control w-full max-w-md">
          <label className="label">
            <span className="label-text text-gray-900">Sales</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered border-gray-400 bg-transparent text-gray-900 w-full max-w-md"
          />
        </div>
        <div className="form-control w-full max-w-md">
          <label className="label">
            <span className="label-text border-gray-400 text-gray-900">
              Quantity
            </span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered bg-transparent border-gray-400 text-gray-900 w-full max-w-md"
          />
        </div>
        <div className="form-control w-full max-w-md shadow-sm">
          <label className="label">
            <span className="label-text text-gray-900">Amount</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered bg-transparent border-gray-400 text-gray-900 w-full max-w-md shadow-sm"
          />
        </div>
        <button className="btn btn-gray-500 text-white mt-3 w-[46%] ">
          add
        </button>
      </form>
    </>
  );
};

export default SalesAmount;
