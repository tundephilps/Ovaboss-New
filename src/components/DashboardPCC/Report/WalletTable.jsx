import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import { AiOutlineEye, AiOutlineMail } from "react-icons/ai";
import Pagination from "./Pagination";

const data = [
  {
    id: "#19234",
    category: "Product Order",
    type: "Debit",
    status: "Completed",
    amount: "£13.50",
    newBalance: "£1947.50",
    description: "Order payment for #1254",
    dateTime: "2025-05-19 16:52",
  },
  {
    id: "#19233",
    category: "Personal Inter-wallet",
    type: "Credit",
    status: "Completed",
    amount: "£7.00",
    newBalance: "£1554.00",
    description: "Personal inter-wallet Transfer",
    dateTime: "2025-05-19 15:45",
  },
  {
    id: "#19232",
    category: "Product Order",
    type: "Debit",
    status: "Completed",
    amount: "£7.00",
    newBalance: "£1547.00",
    description: "Order payment for #1256",
    dateTime: "2025-05-08 10:15",
  },
  {
    id: "#19231",
    category: "Personal Inter-wallet",
    type: "Credit",
    status: "Completed",
    amount: "£12.50",
    newBalance: "£1547.50",
    description: "Order payment for #1256",
    dateTime: "2025-05-08 09:20",
  },
  {
    id: "#19230",
    category: "Personal Inter-wallet",
    type: "Credit",
    status: "Completed",
    amount: "£7.00",
    newBalance: "£1547.50",
    description: "Personal inter-wallet Transfer",
    dateTime: "2025-05-11 11:00",
  },
  {
    id: "#19229",
    category: "Personal Inter-wallet",
    type: "Credit",
    status: "Completed",
    amount: "£13.50",
    newBalance: "£1552.50",
    description: "Personal inter-wallet Transfer",
    dateTime: "2025-05-09 10:15",
  },
  {
    id: "#19228",
    category: "Personal Inter-wallet",
    type: "Credit",
    status: "Completed",
    amount: "£7.00",
    newBalance: "£1552.00",
    description: "Order payment for #1254",
    dateTime: "2025-05-10 15:45",
  },
  {
    id: "#19227",
    category: "Personal Inter-wallet",
    type: "Credit",
    status: "Completed",
    amount: "£13.50",
    newBalance: "£1561.50",
    description: "Personal inter-wallet Transfer",
    dateTime: "2025-05-09 10:15",
  },
  {
    id: "#19226",
    category: "Product Order",
    type: "Credit",
    status: "Completed",
    amount: "£13.50",
    newBalance: "£1552.00",
    description: "Order payment for #1256",
    dateTime: "2025-05-19 16:52",
  },
];

const statusColor = {
  Completed: "text-green-600",
  Pending: "text-orange-500",
  Failed: "text-red-500",
  Debit: "text-red-500",
  Credit: "text-green-600",
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
  "Payment Status": ["Paid", "Unpaid", "Refunded"],
};
export default function WalletTable() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeFilterMenu, setActiveFilterMenu] = useState(null);

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleFilterToggle = (menuName) => {
    setActiveFilterMenu((prev) => (prev === menuName ? null : menuName));
  };

  return (
    <div className="p-4 bg-white rounded-md mt-6 mb-20 ">
      <div className="flex gap-4 items-center mb-4 relative">
        <p className="font-semibold text-sm text-black">Sort By</p>

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

      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-y-2">
          <thead className="bg-gray-50">
            <tr className="text-left text-gray-700 h-10 text-sm">
              <th className="px-4">ID</th>
              <th className="px-4">Category</th>
              <th className="px-4">Type</th>
              <th className="px-4">Status</th>
              <th className="px-4">Amount</th>
              <th className="px-4">New Balance</th>
              <th className="px-4">Description</th>
              <th className="px-4">Date & Time</th>
              <th className="px-4"></th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {data.map((item, index) => (
              <tr
                key={index}
                className="bg-white hover:bg-gray-50 rounded shadow-sm border-b border-gray-100"
              >
                <td className="py-3 px-4 text-blue-600 font-medium">
                  {item.id}
                </td>
                <td className="py-3 px-4">{item.category}</td>
                <td
                  className={`py-3 px-4 font-semibold ${
                    statusColor[item.type]
                  }`}
                >
                  {item.type}
                </td>
                <td
                  className={`py-3 px-4 font-semibold ${
                    statusColor[item.status]
                  }`}
                >
                  {item.status}
                </td>
                <td className="py-3 px-4 font-medium">{item.amount}</td>
                <td className="py-3 px-4 font-medium">{item.newBalance}</td>
                <td className="py-3 px-4 text-gray-600">{item.description}</td>
                <td className="py-3 px-4 text-gray-600">{item.dateTime}</td>
                <td className="py-3 px-4 text-right relative">
                  <button
                    onClick={() => handleDropdownToggle(index)}
                    className="text-gray-800 hover:text-gray-600 p-1"
                  >
                    <BsThreeDots />
                  </button>

                  {openDropdown === index && (
                    <>
                      <div className="absolute right-0 top-8 bg-white border border-gray-200 rounded-md shadow-lg z-10 w-48">
                        <div className="py-2">
                          <button className="flex items-center gap-3 w-full px-4 py-2 text-xs text-gray-700 hover:bg-gray-50">
                            <AiOutlineEye className="text-yellow-500 text-lg" />
                            View Transaction
                          </button>
                          <button className="flex items-center gap-3 w-full px-4 py-2 text-xs text-gray-700 hover:bg-gray-50">
                            <AiOutlineMail className="text-yellow-500 text-lg" />
                            Send Message
                          </button>
                        </div>
                      </div>
                      <div
                        className="fixed inset-0 z-5"
                        onClick={() => setOpenDropdown(null)}
                      />
                    </>
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
