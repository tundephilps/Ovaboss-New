// LocationManager.jsx
import { useState } from "react";
import { FiPlus, FiMoreVertical } from "react-icons/fi";

export default function LocationsTable() {
  const [showModal, setShowModal] = useState(false);

  const locations = [
    {
      id: "#001",
      title: "London Warehouse",
      phone: "+44 20 7946 0123",
      address: "15 Dock Street, London E1 8JN, UK",
      description: "Main distribution hub",
      dateCreated: "2025-05-10 14:32",
    },
    {
      id: "#002",
      title: "Manchester Pickup Point",
      phone: "+44 161 850 2244",
      address: "82 Oxford Road, Manchester M1 5NH, UK",
      description: "North West customer hub",
      dateCreated: "2025-05-10 15:45",
    },
  ];

  return (
    <div className="p-4 bg-white mx-4">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center text-xs gap-2 bg-[#FFD700] hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded"
        >
          <FiPlus />
          Add Location
        </button>
      </div>

      <table className="w-full text-sm text-left mt-8">
        <thead className="border-b py-2 h-12">
          <tr className="py-2 text-base">
            <th>ID</th>
            <th>Title</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Description</th>
            <th>Date Created</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {locations.map((loc, index) => (
            <tr key={index} className="border-b py-2 text-xs">
              <td className="py-2">{loc.id}</td>
              <td>{loc.title}</td>
              <td>{loc.phone}</td>
              <td>{loc.address}</td>
              <td>{loc.description}</td>
              <td>{loc.dateCreated}</td>
              <td>
                <FiMoreVertical className="cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md p-6 rounded shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Add Pickup Location</h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Enter Pickup Location Title e.g Main Office"
                className="w-full border rounded p-2"
              />
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-1/2 border rounded p-2"
                />
                <input
                  type="text"
                  placeholder="Pick-up Time"
                  className="w-1/2 border rounded p-2"
                />
              </div>
              <textarea
                placeholder="Address"
                className="w-full border rounded p-2"
              ></textarea>
              <textarea
                placeholder="Description"
                className="w-full border rounded p-2"
              ></textarea>

              <div className="flex justify-end gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded text-gray-500 hover:underline"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#FFD700] hover:bg-yellow-600 text-black rounded"
                >
                  Save Location
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
