import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import { AiOutlineEye, AiOutlineMail } from "react-icons/ai";
import Pagination from "./Pagination";
import useCommunity from "../../../hooks/useCommunity";
import Loading from "../../Loading";

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

  Country: ["Nigeria", "Ghana"],
};

export default function Table({ type }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeFilterMenu, setActiveFilterMenu] = useState(null);

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleFilterToggle = (menuName) => {
    setActiveFilterMenu((prev) => (prev === menuName ? null : menuName));
  };

  const { isLoading, community } = useCommunity({ type });

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
          <thead className="bg-gray-50 h-8 w-full">
            <tr className="text-left text-gray-500 text-sm">
              <th>ID</th>
              <th>Full Name</th>
              <th>Country</th>
              <th>User Type</th>
              {/* <th>Email</th>
              <th>Phone Number</th> */}
              <th></th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {isLoading ? (
              <tr>
                <td colSpan={7} className="text-center py-8">
                  <Loading />
                  <p className="text-gray-500 mt-2 text-sm">Loading data...</p>
                </td>
              </tr>
            ) : community.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-8 text-gray-400">
                  No data available
                </td>
              </tr>
            ) : (
              community.map((person, index) => (
                <tr
                  key={index}
                  className="bg-white hover:bg-gray-50 rounded shadow-sm"
                >
                  <td className="py-2">{index + 1}</td>
                  <td className="py-2">{person.firstname} {person.lastname}</td>
                  <td className="py-2">{person.country}</td>
                  <td className="py-2">{person.userType}</td>
                  {/* <td className="py-2">{person.email}</td> */}
                  {/* <td className="py-2">{person.phone_number}</td> */}
                  <td className="py-2 text-right relative">
                    <button
                      onClick={() => handleDropdownToggle(index)}
                      className="text-gray-800 cursor-pointer hover:text-gray-600 p-1"
                    >
                      <BsThreeDots />
                    </button>

                    {openDropdown === index && (
                      <>
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

                        {/* Backdrop to close dropdown */}
                        <div
                          className="fixed inset-0 z-5"
                          onClick={() => setOpenDropdown(null)}
                        />
                      </>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>

        </table>
        <div className="p-8">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
