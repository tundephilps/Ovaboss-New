import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";

const reviewData = [
  {
    id: "#001",
    title: "Home Cleaning Service",
    status: "Approved",
    stock: 25,
    date: "2025-05-10 14:32",
  },
  {
    id: "#002",
    title: "Mobile Hairdressing",
    status: "Pending",
    stock: 10,
    date: "2025-05-10 15:45",
  },
  {
    id: "#002",
    title: "Courier & Delivery",
    status: "Rejected",
    stock: 5,
    date: "2025-05-10 15:45",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Approved":
      return "text-green-500";
    case "Pending":
      return "text-yellow-500";
    case "Rejected":
      return "text-red-500";
    default:
      return "";
  }
};

export default function AllServicesTable() {
  const [sortBy, setSortBy] = useState("Date");

  return (
    <div className="p-4 bg-white m-4 rounded-md">
      <div className="flex lg:flex-row flex-col justify-between items-center mb-6">
        <div className="flex gap-4 items-center  whitespace-nowrap">
          <p className="font-semibold text-sm lg:flex hidden ">Sort By</p>
          {["Date", "Status"].map((label) => (
            <div key={label} className="relative">
              <button className="border px-4 py-2 rounded bg-gray-50 flex items-center text-xs gap-6">
                <div className="inline-flex items-center gap-1">
                  <VscSettings className="text-black text-xs" />
                  {label}
                </div>
                <MdKeyboardArrowDown />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-gray-100 text-[#202020] ">
              <th className="p-3 font-semibold">ID</th>
              <th className="p-3 font-semibold">Thumbnail</th>
              <th className="p-3 font-semibold">Title</th>
              <th className="p-3 font-semibold">Review Status</th>
              <th className="p-3 font-semibold">Stock</th>
              <th className="p-3 font-semibold">Date Created</th>
              <th className="p-3 font-semibold"></th>
            </tr>
          </thead>
          <tbody>
            {reviewData.map((item, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="p-3">{item.id}</td>
                <td className="p-3">
                  {/* Placeholder thumbnail */}
                  <div className="w-10 h-10 bg-gray-300 rounded" />
                </td>
                <td className="p-3">{item.title}</td>
                <td
                  className={`p-3 font-medium ${getStatusColor(item.status)}`}
                >
                  {item.status}
                </td>
                <td className="p-3">{item.stock}</td>
                <td className="p-3">{item.date}</td>
                <td className="p-3 cursor-pointer">
                  <BsThreeDots />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
