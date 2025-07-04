import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import { AiOutlineEye, AiOutlineMail } from "react-icons/ai";
import Pagination from "../Report/Pagination";

const laaTransactionsData = [
  {
    id: "#19234",
    category: "Product Order",
    type: "Debit",
    status: "Completed",
    amount: "£13.50",
    newBalance: "£1947.50",
    description: "Order payment for #1254",
    date: "2025-05-19",
  },
];

const statusColor = {
  Completed: "text-green-600",
  Pending: "text-orange-500",
  Failed: "text-red-500",
  Debit: "text-red-500",
  Credit: "text-green-600",
};

export default function BuyOnTab() {
  const [activeTab, setActiveTab] = useState("wallet");
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const renderEarningTransactions = () => (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-600 bg-[#Faf9f9] text-sm border-b">
            <th className="py-4 px-4 font-medium">ID</th>
            <th className="py-4 px-4 font-medium">Category</th>
            <th className="py-4 px-4 font-medium">Type</th>
            <th className="py-4 px-4 font-medium">Amount</th>
            <th className="py-4 px-4 font-medium">New Balance</th>
            <th className="py-4 px-4 font-medium">Description</th>
            <th className="py-4 px-4 font-medium">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="7" className="text-center py-16 text-gray-500">
              No Transaction found
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  const renderLAATransactions = () => (
    <>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-600 bg-[#Faf9f9] text-sm border-b">
              <th className="py-4 px-4 font-medium">ID</th>
              <th className="py-4 px-4 font-medium">Category</th>
              <th className="py-4 px-4 font-medium">Type</th>
              <th className="py-4 px-4 font-medium">Status</th>
              <th className="py-4 px-4 font-medium">Amount</th>
              <th className="py-4 px-4 font-medium">New Balance</th>
              <th className="py-4 px-4 font-medium">Description</th>
              <th className="py-4 px-4 font-medium">Date</th>
              <th className="py-4 px-4"></th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {laaTransactionsData.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 border-b border-gray-100"
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
                <td className="py-3 px-4 text-gray-600">{item.date}</td>
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
    </>
  );

  return (
    <div className="p-6 bg-white rounded-md mt-6 mb-20">
      {/* Tab Navigation */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab("wallet")}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
            activeTab === "wallet"
              ? "bg-orange-100 text-orange-700 border border-orange-200"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Wallet Transactions
        </button>
        <button
          onClick={() => setActiveTab("earnings")}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
            activeTab === "earnings"
              ? "bg-orange-100 text-orange-700 border border-orange-200"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Earnings Transactions
        </button>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "wallet" && (
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Bra Wallet Transactions
            </h2>
            {renderLAATransactions()}
          </div>
        )}

        {activeTab === "earnings" && (
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Earning Transactions
            </h2>
            {renderEarningTransactions()}
          </div>
        )}
      </div>
    </div>
  );
}
