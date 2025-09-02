import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi"; // React Icons

const SalesReceiptTable = () => {
  const data = [
    {
      sn: "#001",
      mtr: "1425459897",
      amount: "₦ 20.00",
      serviceCharge: "₦ 1.18",
      customer: "Adepteun Robert Kehinde",
      description: "iPhone 14",
      date: "11/06/2025",
      time: "01:24 PM",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        All Pending MTR
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-4 py-2 font-medium">S/N</th>
              <th className="px-4 py-2 font-medium">MTR</th>
              <th className="px-4 py-2 font-medium">Amount</th>
              <th className="px-4 py-2 font-medium">Service Charge</th>
              <th className="px-4 py-2 font-medium">Customer</th>
              <th className="px-4 py-2 font-medium">Date Created</th>
              <th className="px-4 py-2 font-medium">Description</th>
              <th className="px-4 py-2 font-medium text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-3">{item.sn}</td>
                <td className="px-4 py-3">{item.mtr}</td>
                <td className="px-4 py-3">{item.amount}</td>
                <td className="px-4 py-3">{item.serviceCharge}</td>
                <td className="px-4 py-3 whitespace-nowrap">{item.customer}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  {item.description}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div>
                    <div>{item.date}</div>
                    <div>{item.time}</div>
                  </div>
                </td>
                <td className="px-4 py-3 text-center">
                  <div className="flex justify-center items-center gap-3">
                    <button
                      className="text-green-600 hover:text-green-800"
                      title="Edit"
                    >
                      <FiEdit />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800"
                      title="Delete"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesReceiptTable;
