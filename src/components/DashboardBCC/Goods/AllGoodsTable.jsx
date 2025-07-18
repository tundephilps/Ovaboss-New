import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";

import { FiMoreVertical } from "react-icons/fi";
import { Link } from "react-router-dom";

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
  Status: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
};

const AllGoodsTable = () => {
  const [activeFilterMenu, setActiveFilterMenu] = useState(null);

  const handleFilterToggle = (menuName) => {
    setActiveFilterMenu((prev) => (prev === menuName ? null : menuName));
  };

  const products = [
    {
      id: "#001",
      title: "Bluetooth Headphones",
      thumbnail: "https://via.placeholder.com/40", // replace with actual image
      reviewStatus: "Approved",
      stock: 25,
      dateCreated: "2025-05-10 14:32",
    },
    {
      id: "#002",
      title: "Leather Handbag",
      thumbnail: "https://via.placeholder.com/40",
      reviewStatus: "Pending",
      stock: 10,
      dateCreated: "2025-05-10 15:45",
    },
    {
      id: "#003",
      title: "Fitness Smartwatch",
      thumbnail: "https://via.placeholder.com/40",
      reviewStatus: "Rejected",
      stock: 5,
      dateCreated: "2025-05-10 15:45",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Approved":
        return "text-green-600";
      case "Pending":
        return "text-yellow-500";
      case "Rejected":
        return "text-red-500";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="bg-white mx-4 p-4 rounded-sm overflow-x-clip">
      <div className="flex lg:flex-row flex-col justify-between items-center mb-6">
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
        <Link to="/Goods/AddNewGoods">
          <button className="flex items-center text-xs gap-2 bg-[#FFD700] hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded">
            <FiPlus />
            Add Product
          </button>
        </Link>
      </div>

      <table className="w-full text-sm text-left">
        <thead className="border-b font-semibold">
          <tr>
            <th>ID</th>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Review Status</th>
            <th>Stock</th>
            <th>Date Created</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, idx) => (
            <tr key={idx} className="border-b">
              <td>{item.id}</td>
              <td>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-10 h-10 rounded object-cover"
                />
              </td>
              <td>{item.title}</td>
              <td className={getStatusColor(item.reviewStatus)}>
                {item.reviewStatus}
              </td>
              <td>{item.stock}</td>
              <td>{item.dateCreated}</td>
              <td>
                <FiMoreVertical className="cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllGoodsTable;
