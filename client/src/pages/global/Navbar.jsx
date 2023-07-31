import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-gray-200 rounded z-10">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Dashboard</a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost w-36">Hi Nero</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
