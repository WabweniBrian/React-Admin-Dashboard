import { FiUsers } from "react-icons/fi";
import { CiMoneyBill } from "react-icons/ci";
import { TbReportMoney } from "react-icons/tb";
import { BsCreditCard2Back } from "react-icons/bs";

export const cardsData = [
  {
    id: 4,
    title: "users",
    isMoney: false,
    link: "View all users",
    text: "720",
    url: "/users",
    icon: <FiUsers />,
    classType: "btn-danger-soft",
  },
  {
    id: 1,
    title: "earnings",
    isMoney: true,
    link: "View net earnings",
    text: "278,331",
    url: "/",
    icon: <CiMoneyBill />,
    classType: "btn-warning-soft",
  },
  {
    id: 3,
    title: "orders",
    isMoney: false,
    link: "View all orders",
    text: "1,281",
    url: "/",
    icon: <BsCreditCard2Back />,
    classType: "btn-success-soft",
  },
  {
    id: 2,
    title: "balance",
    isMoney: true,
    link: "See details",
    text: "178,321",
    url: "/",
    icon: <TbReportMoney />,
    classType: "btn-primary-soft",
  },
];
