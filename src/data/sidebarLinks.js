import {
  BsGrid,
  BsCreditCard2Back,
  BsTruck,
  BsMinecartLoaded,
  BsBarChartLine,
  BsBell,
  BsCpu,
} from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { BiCog, BiStats, BiUser, BiLogOutCircle } from "react-icons/bi";

const sidebarLinks = [
  {
    title: "main",
    links: [{ link: "dashboard", icon: <BsGrid />, url: "/" }],
  },
  {
    title: "lists",
    links: [
      { link: "users", icon: <FiUsers />, url: "/users" },
      { link: "products", icon: <BsMinecartLoaded />, url: "/products" },
      { link: "orders", icon: <BsCreditCard2Back />, url: "/orders" },
      { link: "delivery", icon: <BsTruck />, url: "/delivery" },
    ],
  },
  {
    title: "useful",
    links: [
      { link: "stats", icon: <BsBarChartLine />, url: "/stats" },
      { link: "notifications", icon: <BsBell />, url: "/notifications" },
    ],
  },
  {
    title: "services",
    links: [
      { link: "system health", icon: <BsCpu />, url: "/systemhealth" },
      { link: "logs", icon: <BiStats />, url: "/logs" },
      { link: "settings", icon: <BiCog />, url: "/settings" },
    ],
  },
];

export default sidebarLinks;
