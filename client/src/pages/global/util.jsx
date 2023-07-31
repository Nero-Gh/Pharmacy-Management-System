import { AiFillDashboard } from "react-icons/ai";
import { SiPowerpages } from "react-icons/si";
import { MdPermMedia } from "react-icons/md";
import { AiOutlineProject } from "react-icons/ai";
import { MdAnalytics } from "react-icons/md";
import { FaInbox } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { AiFillSetting } from "react-icons/ai";
import { CgLogOut } from "react-icons/cg";

// import {N} from "react-router-dom";

export const Menus = [
  { title: "Dashboard", icon: <AiFillDashboard /> },
  { title: "Pages", icon: <SiPowerpages /> },
  { title: "Media", spacing: true, icon: <MdPermMedia /> },
  {
    title: "Projects",
    icon: <AiOutlineProject />,
    submenu: true,
    submenuItems: [
      { title: "All Projects" },
      { title: "Add New" },
      { title: "Categories" },
    ],
  },
  { title: "Analytics", icon: <MdAnalytics /> },
  { title: "Inbox", icon: <FaInbox /> },
  { title: "Profile", spacing: true, icon: <CgProfile /> },
  { title: "Setting", icon: <AiFillSetting /> },
  { title: "Logout", icon: <CgLogOut /> },
];
