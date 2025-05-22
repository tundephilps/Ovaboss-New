import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import { AiOutlineEye, AiOutlineMail } from "react-icons/ai";
import Pagination from "./Pagination";

const data = [
  {
    id: "#10234",
    name: "Fatimah Bello",
    city: "Orange",
    country: "Georgia",
    date: "Feb 28, 2025",
  },
  {
    id: "#10233",
    name: "David Oke",
    city: "Toledo",
    country: "Curaçao",
    date: "Feb 28, 2025",
  },
  {
    id: "#10232",
    name: "Mary Johnson",
    city: "Fairfield",
    country: "Serbia",
    date: "Feb 28, 2025",
  },
  {
    id: "#10231",
    name: "Laura Benson",
    city: "Austin",
    country: "Guinea",
    date: "Feb 28, 2025",
  },
  {
    id: "#10230",
    name: "John Smith",
    city: "Pembroke Pines",
    country: "Iceland",
    date: "Feb 28, 2025",
  },
  {
    id: "#10229",
    name: "Sarah Thompson",
    city: "Fairfield",
    country: "Haiti",
    date: "Feb 28, 2025",
  },
  {
    id: "#10229",
    name: "Sarah Thompson",
    city: "Fairfield",
    country: "Haiti",
    date: "Feb 28, 2025",
  },
  {
    id: "#10229",
    name: "Sarah Thompson",
    city: "Fairfield",
    country: "Haiti",
    date: "Feb 28, 2025",
  },
  {
    id: "#10229",
    name: "Sarah Thompson",
    city: "Fairfield",
    country: "Haiti",
    date: "Feb 28, 2025",
  },
];

export default function AQMtable() {
  const [sortByDate, setSortByDate] = useState(false);
  const [sortByCountry, setSortByCountry] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleViewOnCCC = (person) => {
    console.log("View on CCC clicked for:", person.name);
    setOpenDropdown(null);
  };

  const handleSendMessage = (person) => {
    console.log("Send message clicked for:", person.name);
    setOpenDropdown(null);
  };

  return (
    <div className="p-4 bg-white rounded-md mt-6 mb-20">
      <div className="flex gap-4 items-center mb-4">
        <p className="font-semibold text-sm">Sort By</p>
        <div className="relative">
          <button
            className="border px-4 py-2 rounded bg-gray-50 flex items-center text-xs gap-6"
            onClick={() => setSortByDate(!sortByDate)}
          >
            <div className="inline-flex items-center gap-1">
              <VscSettings className="text-black text-xs" />
              Date
            </div>
            <span>
              <MdKeyboardArrowDown />
            </span>
          </button>
        </div>
        <div className="relative">
          <button
            className="border px-4 py-2 rounded bg-gray-50 flex items-center text-xs gap-6"
            onClick={() => setSortByCountry(!sortByCountry)}
          >
            <div className="inline-flex items-center gap-1">
              <VscSettings className="text-black text-xs" />
              Country
            </div>
            <span>
              <MdKeyboardArrowDown />
            </span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-y-2">
          <thead className="bg-gray-50 h-8 w-full">
            <tr className="text-left text-gray-500 text-sm">
              <th>ID</th>
              <th>Full Name</th>
              <th>City</th>
              <th>Country</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {data.map((person, index) => (
              <tr
                key={index}
                className="bg-white hover:bg-gray-50 rounded shadow-sm"
              >
                <td className="py-2">{person.id}</td>
                <td className="py-2">{person.name}</td>
                <td className="py-2">{person.city}</td>
                <td className="py-2">{person.country}</td>
                <td className="py-2">{person.date}</td>
                <td className="py-2 text-right relative">
                  <button
                    onClick={() => handleDropdownToggle(index)}
                    className="text-gray-800 cursor-pointer hover:text-gray-600 p-1"
                  >
                    <BsThreeDots />
                  </button>

                  {openDropdown === index && (
                    <div className="absolute right-0 top-8 bg-white border border-gray-200 rounded-md shadow-lg z-10 w-48">
                      <div className="py-2">
                        <button
                          onClick={() => handleViewOnCCC(person)}
                          className="flex items-center gap-3 w-full px-4 py-2 text-[10px] text-gray-700 hover:bg-gray-50"
                        >
                          <AiOutlineEye className="text-yellow-500 text-lg" />
                          View on CCC
                        </button>
                        <button
                          onClick={() => handleSendMessage(person)}
                          className="flex items-center gap-3 w-full px-4 py-2 text-[10px] text-gray-700 hover:bg-gray-50"
                        >
                          <AiOutlineMail className="text-yellow-500 text-lg" />
                          Send a message on CCC
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Backdrop to close dropdown when clicking outside */}
                  {openDropdown === index && (
                    <div
                      className="fixed inset-0 z-5"
                      onClick={() => setOpenDropdown(null)}
                    ></div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-8">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
