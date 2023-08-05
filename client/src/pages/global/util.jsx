import { AiFillDashboard } from "react-icons/ai";
import { SiPowerpages } from "react-icons/si";
import { MdPermMedia } from "react-icons/md";
import { AiOutlineProject } from "react-icons/ai";
import { MdAnalytics } from "react-icons/md";
import { FaInbox } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { AiFillSetting } from "react-icons/ai";
import { CgLogOut } from "react-icons/cg";
import { TbHistory } from "react-icons/tb";

// import {N} from "react-router-dom";

export const Menus = [
  // {
  //   title: "Sales",
  //   icon: <AiOutlineProject />,
  //   submenu: true,
  //   submenuItems: [
  //     { title: "New Sale", link: "/new-sale" },
  //     { title: "Sales History", link: "/sale-history" },
  //   ],
  // },
  { title: "Dashboard", icon: <AiFillDashboard />, link: "/dashboard" },
  { title: "Sale", icon: <AiOutlineProject />, link: "new-sale" },
  {
    title: "Sale History",
    link: "sale-history",
    spacing: true,
    icon: <TbHistory />,
  },
  { title: "Batch", icon: <SiPowerpages />, link: "batch" },
  { title: "Medicine", spacing: true, icon: <MdPermMedia />, link: "medicine" },

  { title: "Supplier", icon: <MdAnalytics />, link: "supplier" },
  { title: "Category", icon: <FaInbox />, link: "category" },
  {
    title: "Drug General Name",
    spacing: true,
    icon: <CgProfile />,
    link: "generic-name",
  },
  { title: "Manufacturer", icon: <AiFillSetting />, link: "manufacturer" },
  { title: "User Management", icon: <AiFillSetting />, link: "users" },
  { title: "Logout", icon: <CgLogOut /> },
];

export const UserMenu = [
  { title: "Dashboard", icon: <AiFillDashboard />, link: "/dashboard" },
  {
    title: "Sales",
    icon: <AiOutlineProject />,
    submenu: true,
    submenuItems: [{ title: "New Sale" }, { title: "Sales History" }],
  },
];

export const API_URL = "http://localhost:5000/api";
