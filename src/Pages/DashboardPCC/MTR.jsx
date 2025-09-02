import React, { useState } from "react";
import ProfileProgressCard from "../../components/DashboardPCC/Homepage/ProfileProgressCard";
import MTRForm from "../../components/DashboardPCC/MTR/MTRForm";

const MTR = () => {
  const [showForm, setShowForm] = useState(false); // State to toggle MTRForm

  return (
    <div className="bg-[#faf9f9] overflow-y-auto">
      <div className="py-6 px-4">
        <h1 className="font-bold text-2xl">MTR</h1>
        <p className="text-xs text-[#687280]">
          Dashboard{" "}
          <span className="text-yellow-500">
            {" "}
            › {"  "} Mobile Transaction Receipt{" "}
          </span>
        </p>

        <ProfileProgressCard completedFields={4} totalFields={10} />

        <div className="p-6 bg-white rounded-lg shadow mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              All Pending MTR
            </h2>

            {/* Button to show MTRForm */}
            {!showForm && (
              <button
                className="bg-[#FFF6DA] text-xs font-semibold text-gray-800 px-4 py-2 rounded hover:bg-yellow-200 transition"
                onClick={() => setShowForm(true)} // Show form on click
              >
                New Purchase MTR
              </button>
            )}
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-700">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 font-medium">S/N</th>
                  <th className="px-4 py-3 font-medium">MTR</th>
                  <th className="px-4 py-3 font-medium">Amount</th>
                  <th className="px-4 py-3 font-medium">Business</th>
                  <th className="px-4 py-3 font-medium">Description</th>
                  <th className="px-4 py-3 font-medium">Date Created</th>
                </tr>
              </thead>
              <tbody>
                {/* Sample row */}
                <tr className="border-t">
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2">MTR-001</td>
                  <td className="px-4 py-2">$200</td>
                  <td className="px-4 py-2">ABC Ltd.</td>
                  <td className="px-4 py-2">Purchase of office supplies</td>
                  <td className="px-4 py-2">2025-05-23</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Conditional rendering of MTRForm */}
        {showForm && <MTRForm />}
      </div>
      <div className="py-32" />
    </div>
  );
};

export default MTR;
