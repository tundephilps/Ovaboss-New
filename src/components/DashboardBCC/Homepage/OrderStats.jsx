import React from "react";
import {
  FaClock,
  FaShoppingCart,
  FaShoppingBasket,
  FaTruck,
  FaShoppingBag,
  FaTimesCircle,
} from "react-icons/fa";

const orderStats = [
  {
    icon: <FaClock className="text-black" size={24} />,
    count: 0,
    label: "Awaiting Payment",
    badgeColor: "bg-gray-200 text-black",
  },
  {
    icon: <FaShoppingCart className="text-orange-500" size={24} />,
    count: 0,
    label: "Pending Orders",
    badgeColor: "bg-orange-100 text-orange-600",
  },
  {
    icon: <FaShoppingBasket className="text-indigo-600" size={24} />,
    count: 0,
    label: "Processing Orders",
    badgeColor: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: <FaTruck className="text-yellow-600" size={24} />,
    count: 0,
    label: "Processing Orders",
    badgeColor: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: <FaShoppingBag className="text-green-600" size={24} />,
    count: 0,
    label: "Completed Orders",
    badgeColor: "bg-green-100 text-green-600",
  },
  {
    icon: <FaTimesCircle className="text-red-600" size={24} />,
    count: 0,
    label: "Processing Orders",
    badgeColor: "bg-red-100 text-red-600",
  },
];

export default function OrderStatusCards() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 py-4">
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
