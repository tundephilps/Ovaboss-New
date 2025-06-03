import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaLock, FaWrench, FaEllipsisV } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import Pagination from "./Pagination";

const dummyData = [
  {
    id: "#10234",
    logoType: "lock",
    name: "Tosin Stitches",
    email: "tosin@tosinstitches.com",
    link: "www.tosinstitches.com/Ovaboss",
    city: "Orange",
    country: "Georgia",
    date: "Feb 28, 2025",
  },
  {
    id: "#10233",
    logoType: "wrench",
    name: "Tosin Stitches",
    email: "tosin@tosinstitches.com",
    link: "www.tosinstitches.com/Ovaboss",
    city: "Toledo",
    country: "Curaçao",
    date: "Feb 28, 2025",
  },
  // Add more rows here...
];

const getIcon = (type) => {
  switch (type) {
    case "lock":
      return <FaLock className="text-pink-500" />;
    case "wrench":
      return <FaWrench className="text-gray-500" />;
    default:
      return null;
  }
};

export default function PMBTable() {
  const [sortBy, setSortBy] = useState("Date");

  return (
    <div className="p-4 bg-white m-4">
      <div className="flex lg:flex-row flex-col justify-between items-center mb-6">
        <div className="flex gap-4 items-center  whitespace-nowrap">
          <p className="font-semibold text-sm lg:flex hidden ">Sort By</p>
          {["Date", "Country"].map((label) => (
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
            <tr className="bg-[#faf9f9] text-[#202020] capitalize">
              <th className="p-3 font-semibold">ID</th>
              <th className="p-3 font-semibold">Logo</th>
              <th className="p-3 font-semibold">Business Name</th>
              <th className="p-3 font-semibold">E-mail</th>
              <th className="p-3 font-semibold">Store Link</th>
              <th className="p-3 font-semibold">City</th>
              <th className="p-3 font-semibold">Country</th>
              <th className="p-3 font-semibold">Date</th>
              <th className="p-3 font-semibold"></th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((item, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="p-3">{item.id}</td>
                <td className="p-3">{getIcon(item.logoType)}</td>
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.email}</td>
                <td className="p-3 text-yellow-600 underline cursor-pointer">
                  {item.link}
                </td>
                <td className="p-3">{item.city}</td>
                <td className="p-3">{item.country}</td>
                <td className="p-3">{item.date}</td>
                <td className="p-3 cursor-pointer">
                  <BsThreeDots />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination />
      </div>
    </div>
  );
}
