import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import { AiOutlineEye } from "react-icons/ai";
import { MdBusinessCenter } from "react-icons/md";
import Pagination from "./Pagination";

const orders = [
  {
    id: "#10234",
    title: "Bluetooth Headphones",
    qty: 2,
    amount: 12.5,

    status: "Processing",
    tracking: "GB123456789",
    date: "2025-05-10 14:32",
  },
  {
    id: "#10233",
    title: "Leather Handbag",
    qty: 1,
    amount: 7.0,
    status: "Processing",
    tracking: "GB987654321",
    date: "2025-05-10 14:35",
  },
  {
    id: "#10232",
    title: "Fitness Smartwatch",
    qty: 1,
    amount: 25.0,

    status: "Processing",
    tracking: "GB987654321",
    date: "2025-05-09 10:15",
  },
  {
    id: "#10231",
    title: "Home Security Camera",
    qty: 3,
    amount: 18.0,

    status: "Processing",
    tracking: "GB987654321",
    date: "2025-05-08 09:20",
  },
  {
    id: "#10230",
    title: "Wireless Charger Pad",
    qty: 5,
    amount: 10.5,

    status: "Processing",
    tracking: "GB987654321",
    date: "2025-05-11 11:00",
  },
  {
    id: "#10229",
    title: "Makeup Brush Set",
    qty: 2,
    amount: 12.5,

    status: "Processing",
    tracking: "GB987654321",
    date: "2025-05-09 10:15",
  },
  {
    id: "#10229",
    title: "32GB Flash Drive",
    qty: 10,
    amount: 25.0,
    status: "Processing",
    tracking: "GB987654321",
    date: "2025-05-10 14:45",
  },
];

const statusColors = {
  Shipped: "text-blue-600",
  Processing: "text-yellow-500",
  Delivered: "text-green-600",
  Cancelled: "text-red-600",
};

// Dropdown content data
const filterMenuOptions = {
  Date: [
    "Last 3 Days",
    "Last 7 Days",
    "Last 2 Weeks",
    "Last 1 Month",
    "Last 3 Months",
    "Last Year",
  ],
  "Order Status": [
    "Pending",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancelled",
  ],
  Amount: ["0-1000", "1000-10000", "10000-above"],
};

export default function PendingOrderTable() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const totalAmount = orders.reduce((sum, o) => sum + o.amount, 0);
  const [activeFilterMenu, setActiveFilterMenu] = useState(null);

  const handleFilterToggle = (menuName) => {
    setActiveFilterMenu((prev) => (prev === menuName ? null : menuName));
  };

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleMenuClick = (action, order) => {
    console.log(`${action} clicked for order:`, order);
    setActiveDropdown(null); // Close dropdown after action
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };

    if (activeDropdown !== null) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [activeDropdown]);

  return (
    <div className="p-6 bg-white rounded-xl shadow mb-32 mx-4 overflow-x-auto">
      <div className="flex lg:flex-row flex-col justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">
          Total Order ({orders.length}):{" "}
          <span className="font-bold">£{totalAmount.toFixed(2)}</span>
        </h2>
        <div className="flex gap-4 items-center  whitespace-nowrap">
          <p className="font-semibold text-sm lg:flex hidden ">Sort By</p>
          {Object.entries(filterMenuOptions).map(([menuName, menuItems]) => (
            <div key={menuName} className="relative">
              <button
                onClick={() => handleFilterToggle(menuName)}
                className="border px-4 py-2 rounded bg-gray-50 flex items-center text-xs gap-6"
              >
                <div className="inline-flex items-center gap-1 text-black">
                  <VscSettings className="text-xs" />
                  {menuName}
                </div>
                <MdKeyboardArrowDown />
              </button>

              {activeFilterMenu === menuName && (
                <div className="absolute left-0 top-12 bg-white rounded shadow p-2 text-sm w-44 z-10">
                  {menuItems.map((item) => (
                    <div
                      key={item}
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        console.log(`${menuName} selected:`, item);
                        setActiveFilterMenu(null);
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <table className="w-full text-left whitespace-nowrap ">
        <thead className="text-sm bg-[#FAF9F9] h-12 text-[#202020]">
          <tr className="">
            <th className="pl-2">ID</th>
            <th>Title</th>
            <th>Qty</th>
            <th>Amt</th>
            <th>Status</th>
            <th className="">Shipping Tracking No</th>
            <th>Date Created</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {orders.map((order, index) => (
            <tr key={index} className="border-gray-100">
              <td className="py-2">{order.id}</td>
              <td>{order.title}</td>
              <td>{order.qty}</td>
              <td>£{order.amount.toFixed(2)}</td>
              <td className={`${statusColors[order.status]} font-semibold`}>
                {order.status}
              </td>
              <td className="pl-4">{order.tracking}</td>
              <td>{order.date}</td>
              <td className="text-right relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDropdownToggle(index);
                  }}
                  className="cursor-pointer p-2 hover:bg-gray-100 rounded"
                >
                  <BsThreeDots />
                </button>

                {activeDropdown === index && (
                  <div className="absolute text-[10px] right-0 top-8 bg-white border border-gray-200 rounded-lg shadow-lg z-10 w-48">
                    <div className="py-1">
                      <button
                        onClick={() =>
                          handleMenuClick("View Full Details", order)
                        }
                        className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3"
                      >
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <AiOutlineEye className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-[10px] text-gray-700">
                          View Full Details
                        </span>
                      </button>
                      <button
                        onClick={() =>
                          handleMenuClick("Set As Primary Business", order)
                        }
                        className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3"
                      >
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                          <MdBusinessCenter className="w-3 h-3 text-blue-600" />
                        </div>
                        <span className="text-[10px] text-gray-700">
                          Set As Primary Business
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
}
