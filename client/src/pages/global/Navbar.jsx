import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-gray-100 shadow-md rounded z-10 w-[69%] sm:w-full">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case sha text-xl">
            Admin Dashboard
          </a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost w-36">Hi Nero</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
