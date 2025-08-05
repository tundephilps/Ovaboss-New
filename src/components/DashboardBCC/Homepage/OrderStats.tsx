import React from "react";
import { CiMoneyBill } from "react-icons/ci";
import {
  FaClock,
  FaShoppingCart,
  FaShoppingBasket,
  FaTruck,
  FaShoppingBag,
  FaTimesCircle,
} from "react-icons/fa";
import { numberFormat } from "../../../utils";
import { BCCAnalytics } from "../../../types/analytics.type";


export default function OrderStatusCards({ analytics }: { analytics: BCCAnalytics }) {

  const orderStats = [
  // {
  //   icon: <FaClock className="text-black" size={24} />,
  //   count: 0,
  //   label: "Awaiting Payment",
  //   badgeColor: "bg-gray-200 text-black",
  // },
  {
    icon: <FaShoppingCart className="text-orange-500" size={24} />,
    count: numberFormat(analytics.totalProducts),
    label: "Number of Products",
    badgeColor: "bg-orange-100 text-orange-600",
  },
  {
    icon: <FaShoppingBasket className="text-indigo-600" size={24} />,
    count: numberFormat(analytics.todayProducts),
    label: "Today Products",
    badgeColor: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: <FaTruck className="text-yellow-600" size={24} />,
    count: numberFormat(analytics.activeProduct),
    label: "Active Products",
    badgeColor: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: <FaShoppingBag className="text-green-600" size={24} />,
    count: numberFormat(analytics.approvedProducts),
    label: "Approved Products",
    badgeColor: "bg-green-100 text-green-600",
  },
  {
    icon: <FaShoppingBag className="text-red-600" size={24} />,
    count: numberFormat(analytics.pendingApprovalProducts),
    label: "Pending Approval Products",
    badgeColor: "bg-red-100 text-red-600",
  },
  // {
  //   icon: <CiMoneyBill className="text-red-600" size={24} />,
  //   count: numberFormat(analytics.totalRevenue, 2),
  //   label: "Total Revenue",
  //   badgeColor: "bg-red-100 text-red-600",
  // },
];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 py-4">
      {orderStats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md flex flex-col items-center justify-center p-4 text-center"
        >
          <div className="mb-2">{stat.icon}</div>
          <div className="text-xl font-bold">{stat.count}</div>
          <div
            className={`mt-2 text-sm font-medium px-3 py-1 rounded-full ${stat.badgeColor}`}
          >
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
