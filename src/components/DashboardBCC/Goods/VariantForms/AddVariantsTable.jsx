import { useState } from "react";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const AddVariantsTable = ({ tableHead, tableData, handleDeleteVariant, handleEditVariant }) => {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const variants = [
    {
      size: "2XL + Extra",
      price: "₦45,000",
      colour: "Blue",
      country: "Nigeria",
      region: "All",
      model: "VGR‑206",
    },
    {
      size: "4XL + Extra",
      price: "₦62,000",
      colour: "Black",
      country: "Ghana",
      region: "Lagos",
      model: "VGR‑256",
    },
  ];

  const toggleMenu = (index) => {
    setOpenMenuIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full border border-gray-200 rounded-lg bg-white  relative">
      {/* title */}
      <h2 className="px-6 pt-4 text-base font-semibold">Recorded Variants</h2>

      {/* table */}
      <div className="px-6 pb-4 overflow-x-auto min-h-[40vh]">
        <table className="min-w-full text-sm">
          <thead className="border-b text-left text-gray-500">
            <tr>
              {tableHead.map((header, i) => (
                <th key={i} className="py-2 pr-4 whitespace-nowrap">
                  {header}
                </th>
              ))}
              <th className="py-2 whitespace-nowrap">Action</th>
            </tr>
          </thead>

          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b last:border-0 relative mb-12">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="py-3 pr-4">
                    {cell}
                  </td>
                ))}
                <td className="py-3 relative">
                  <div
                    className="p-1 text-gray-600 hover:text-black cursor-pointer"
                    onClick={() => toggleMenu(rowIndex)}
                  >
                    <BiDotsHorizontalRounded size={18} />
                  </div>

                  {openMenuIndex === rowIndex && (
                    <div className="absolute right-4 mt-2 z-10 bg-white border rounded shadow-md text-[10px] w-28">
                      <div 
                        onClick={() => handleEditVariant(rowIndex)}
                        className="w-full px-4 py-2 hover:bg-gray-100 text-left"
                      >
                        Edit
                      </div>
                      <div 
                        onClick={() => handleDeleteVariant(rowIndex)} 
                        className="w-full px-4 py-2 hover:bg-gray-100 text-left text-red-600 cursor-pointer"
                      >
                        Delete
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default AddVariantsTable;
