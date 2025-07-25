import { useState } from "react";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const AddVariantsTable = () => {
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
              <th className="py-2 pr-4 whitespace-nowrap">Size</th>
              <th className="py-2 pr-4 whitespace-nowrap">Global Price</th>
              <th className="py-2 pr-4 whitespace-nowrap">Colour</th>
              <th className="py-2 pr-4 whitespace-nowrap">Target Country</th>
              <th className="py-2 pr-4 whitespace-nowrap">
                Target State/Region
              </th>
              <th className="py-2 pr-4 whitespace-nowrap">Model</th>
              <th className="py-2 whitespace-nowrap">Action</th>
            </tr>
          </thead>

          <tbody>
            {variants.map((v, i) => (
              <tr key={i} className="border-b last:border-0 relative mb-12">
                <td className="py-3 pr-4">{v.size}</td>
                <td className="py-3 pr-4">{v.price}</td>
                <td className="py-3 pr-4">{v.colour}</td>
                <td className="py-3 pr-4">{v.country}</td>
                <td className="py-3 pr-4">{v.region}</td>
                <td className="py-3 pr-4">{v.model}</td>
                <td className="py-3 relative">
                  <div
                    className="p-1 text-gray-600 hover:text-black cursor-pointer"
                    onClick={() => toggleMenu(i)}
                  >
                    <BiDotsHorizontalRounded size={18} />
                  </div>

                  {/* Dropdown Menu */}
                  {openMenuIndex === i && (
                    <div className="absolute right-4 mt-2 z-10 bg-white border rounded shadow-md text-[10px] w-28">
                      <div className="w-full px-4 py-2 hover:bg-gray-100 text-left">
                        Edit
                      </div>
                      <div className="w-full px-4 py-2 hover:bg-gray-100 text-left text-red-600">
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
