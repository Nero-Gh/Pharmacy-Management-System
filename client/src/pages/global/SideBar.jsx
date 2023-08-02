import React, { useState } from "react";
import { Menus } from "../global/util";
import { MdArrowRightAlt } from "react-icons/md";
import { GiHospital } from "react-icons/gi";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div
      className={`bg-gray-900 p-5 h-[100vh] ${
        open ? "w-64" : "w-20"
      } duration-300 pt-4 relative pt-10`}
    >
      <MdArrowRightAlt
        className={`text-2xl bg-white rounded-full cursor-pointer absolute -right-2  border border-gray-900 ${
          !open && "rotate-180"
        }`}
        onClick={handleToggle}
      />
      <div className="inline-flex items-center justify-center gap-2">
        <GiHospital
          className={`text-4xl text-white block duration-300 ${
            !open && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`text-white font-semibold text-3xl ${!open && "scale-0"}`}
        >
          Pharmacy
        </h1>
      </div>

      {/* //Menu Sidebar */}
      <div className="scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
        <div>
          <ul className="pt-4">
            {Menus.map((menu, index) => (
              <>
                <li
                  key={index}
                  className={`text-gray-300 flex items-center  gap-x-2 cursor-pointer ${
                    !open && "p-0 "
                  } p-2 hover:bg-light-white rounded-md mt-2 `}
                >
                  {
                    <Link to={menu.link} className="flex items-center gap-x-2">
                      <span className="text-2xl">{menu.icon}</span>
                      <span
                        className={`text-base font-medium flex-1 ${
                          !open && "hidden"
                        }`}
                      >
                        {menu.title}
                      </span>
                      {menu.submenu && open && (
                        <BsChevronDown
                          className="text-xl text-gray-400 ml-20"
                          onClick={() => {
                            setOpenSubMenu(!openSubMenu);
                          }}
                        />
                      )}
                    </Link>
                  }
                </li>

                {menu.submenu && openSubMenu && open && (
                  <ul>
                    {menu.submenuItems.map((submenuItem, index) => (
                      <li
                        key={index}
                        className={`text-gray-300 flex font-[500]  items-center justify-center  gap-x-2  text-sm cursor-pointer  p-2 hover:bg-light-white rounded-md `}
                      >
                        {submenuItem.title}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ))}
          </ul>
        </div>
      </div>
      {/* //Bottom Sidebar */}
    </div>
  );
};

export default SideBar;
