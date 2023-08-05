import React from "react";

const GenericName = () => {
  return (
    <div>
      <div className="flex justify-between border py-4 shadow-sm mb-10 px-4 items-center rounded-md">
        <button className="btn btn-neutral px-4">Add</button>
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered bg-transparent w-[30%]"
        />
      </div>
      <div className="text-2xl">List Generic Name Details</div>
      <div className="border text-gray-950 p-3 shadow-md rounded-md">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-gray-700">
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="bg-100-200">
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td className="flex gap-2">
                  <button className="btn btn-primary  px-10 w-8 ">Edit</button>
                  <button className="btn btn-warning  px-10 w-8">Delete</button>
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
                <td className="flex gap-2">
                  <button className="btn btn-primary  px-10 w-8 ">Edit</button>
                  <button className="btn btn-warning  px-10 w-8">Delete</button>
                </td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
                <td className="flex gap-2">
                  <button className="btn btn-primary  px-10 w-8 ">Edit</button>
                  <button className="btn btn-warning  px-10 w-8">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="join grid grid-cols-2 w-[30%] mx-auto my-4 text-gray-900">
        <button className="join-item btn btn-outline text-gray-700">
          Previous page
        </button>
        <button className="join-item btn btn-outline text-gray-700">
          Next
        </button>
      </div>
    </div>
  );
};

export default GenericName;
