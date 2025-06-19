import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import { AiOutlineEye, AiOutlineMail } from "react-icons/ai";
import Pagination from "./Pagination";

const data = [
  {
    id: "#10234",
    orderNumber: "ORD-1001",
    trackingNumber: "TBK-984751",
    orderStatus: "Shipped",
    paymentStatus: "Paid",
    amount: "£12.50",
    orderTime: "2025-05-10 14:32",
  },
  {
    id: "#10233",
    orderNumber: "ORD-1002",
    trackingNumber: "TBK-984752",
    orderStatus: "Processing",
    paymentStatus: "Unpaid",
    amount: "£7.00",
    orderTime: "2025-05-10 15:45",
  },
  {
    id: "#10232",
    orderNumber: "ORD-1003",
    trackingNumber: "TBK-984753",
    orderStatus: "Delivered",
    paymentStatus: "Paid",
    amount: "£25.00",
    orderTime: "2025-05-09 18:15",
  },
  {
    id: "#10231",
    orderNumber: "ORD-1004",
    trackingNumber: "TBK-984754",
    orderStatus: "Cancelled",
    paymentStatus: "Refunded",
    amount: "£18.00",
    orderTime: "2025-05-08 09:20",
  },
  {
    id: "#10230",
    orderNumber: "ORD-1005",
    trackingNumber: "TBK-984755",
    orderStatus: "Delivered",
    paymentStatus: "Paid",
    amount: "£10.50",
    orderTime: "2025-05-11 11:00",
  },
  {
    id: "#10229",
    orderNumber: "ORD-1006",
    trackingNumber: "TBK-984755",
    orderStatus: "Delivered",
    paymentStatus: "Paid",
    amount: "£12.50",
    orderTime: "2025-05-09 10:15",
  },
  {
    id: "#10229",
    orderNumber: "ORD-1007",
    trackingNumber: "TBK-984755",
    orderStatus: "Processing",
    paymentStatus: "Unpaid",
    amount: "£25.00",
    orderTime: "2025-05-10 15:45",
  },
  {
    id: "#10229",
    orderNumber: "ORD-1008",
    trackingNumber: "TBK-984755",
    orderStatus: "Shipped",
    paymentStatus: "Paid",
    amount: "£25.00",
    orderTime: "2025-05-09 10:15",
  },
  {
    id: "#10229",
    orderNumber: "ORD-1009",
    trackingNumber: "TBK-984752",
    orderStatus: "Cancelled",
    paymentStatus: "Refunded",
    amount: "£19.50",
    orderTime: "2025-05-10 15:45",
  },
];

const statusColor = {
  Shipped: "text-blue-600",
  Delivered: "text-green-600",
  Processing: "text-orange-500",
  Cancelled: "text-red-500",
  Paid: "text-green-600",
  Unpaid: "text-red-500",
  Refunded: "text-yellow-500",
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

export default function GoodsOrderTable() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeFilterMenu, setActiveFilterMenu] = useState(null);

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleFilterToggle = (menuName) => {
    setActiveFilterMenu((prev) => (prev === menuName ? null : menuName));
  };
  return (
    <div className="p-4 bg-white rounded-md mt-6 mb-20">
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
          <thead className="bg-[#faf9f9]">
            <tr className="text-left text-[@202020] h-10 text-sm">
              <th>ID</th>
              <th>Order Number</th>
              <th>Tracking Number</th>
              <th>Order Status</th>
              <th>Payment Status</th>
              <th>Amount</th>
              <th>Order Time</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {data.map((item, index) => (
              <tr
                key={index}
                className="bg-white hover:bg-gray-50 rounded shadow-sm"
              >
                <td className="py-2">{item.id}</td>
                <td className="py-2">{item.orderNumber}</td>
                <td className="py-2">{item.trackingNumber}</td>
                <td
                  className={`py-2 font-semibold ${
                    statusColor[item.orderStatus]
                  }`}
                >
                  {item.orderStatus}
                </td>
                <td
                  className={`py-2 font-semibold ${
                    statusColor[item.paymentStatus]
                  }`}
                >
                  {item.paymentStatus}
                </td>
                <td className="py-2">{item.amount}</td>
                <td className="py-2">{item.orderTime}</td>
                <td className="py-2 text-right relative">
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
                          <button className="flex items-center gap-3 w-full px-4 py-2 text-[10px] text-gray-700 hover:bg-gray-50">
                            <AiOutlineEye className="text-yellow-500 text-lg" />
                            View on CCC
                          </button>
                          <button className="flex items-center gap-3 w-full px-4 py-2 text-[10px] text-gray-700 hover:bg-gray-50">
                            <AiOutlineMail className="text-yellow-500 text-lg" />
                            Send a message on CCC
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
