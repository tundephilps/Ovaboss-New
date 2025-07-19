import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';
import { useAppContext } from '../../../context/AppContext';
import useCountry from '../../../hooks/useCountry';

const AddressTable = ({ setModalOpen, setInputs, setIsAddAddress, showEllipse = true }) => {
  const { user } = useAppContext();
  const { countries } = useCountry();

  const [openDropdown, setOpenDropdown] = React.useState(null);
  const [dropdownPosition, setDropdownPosition] = React.useState({ top: 0, left: 0 });
  const dropdownRef = React.useRef(null);

  const handleDropdownToggle = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null);
      return;
    }

    const button = document.getElementById(`address-dropdown-btn-${index}`);
    if (button) {
      const rect = button.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY + 4,
        left: rect.right - 192, // 192px = dropdown width
      });
    }

    setOpenDropdown(index);
  };

  const handleUpdate = (selectedAddress) => {
    const { id, postalCode, address, contactPerson, countryId, cityId, stateId } = selectedAddress;

    setInputs(prev => ({
        ...prev,
        address: {
          id,
          country_id: countryId,
          state_id: cityId,
          city_id : stateId,
          postal_code : postalCode,
          address : address,
          contact_person : contactPerson,
        }
    }))
    setIsAddAddress(false);
    setModalOpen(prev => !prev);
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-separate border-spacing-y-2">
        <thead className="bg-gray-50 h-8 w-full">
          <tr className="text-left text-gray-500 text-sm">
            <th>ID</th>
            <th>Country</th>
            <th>City</th>
            <th>State</th>
            <th>Address</th>
            <th>Postal Code</th>
            <th>Contact Person</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {user?.address?.length === 0 ? (
            <tr>
              <td colSpan={9} className="text-center py-8 text-gray-400">
                No address data available
              </td>
            </tr>
          ) : (
            user.address.map((item, index) => (
              <tr
                key={index}
                className="bg-white hover:bg-gray-50 rounded shadow-sm"
              >
                <td className="py-2">{item.id}</td>
                <td className="py-2">{item.country}</td>
                <td className="py-2">{item.city}</td>
                <td className="py-2">{item.state}</td>
                <td className="py-2">{item.address}</td>
                <td className="py-2">{item.postalCode}</td>
                <td className="py-2">{item.contactPerson}</td>
                {showEllipse && 
                    <td className="py-2 text-right">
                    <button
                        id={`address-dropdown-btn-${index}`}
                        onClick={() => handleDropdownToggle(index)}
                        className="text-gray-800 cursor-pointer hover:text-gray-600 p-1"
                    >
                        <BsThreeDots />
                    </button>
                    </td>
                }
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Dropdown - rendered outside the table and positioned using fixed */}
      {openDropdown !== null && (
        <>
          <div
            ref={dropdownRef}
            className="fixed bg-white border border-gray-200 rounded-md shadow-lg z-50 w-48"
            style={{
              top: `${dropdownPosition.top}px`,
              left: `${dropdownPosition.left}px`,
            }}
          >
            <div className="py-2">
              <button
                onClick={() => {
                  handleUpdate(user.address[openDropdown]);
                  setOpenDropdown(null);
                }}
                className="flex items-center gap-3 w-full px-4 py-2 text-[10px] text-gray-700 hover:bg-gray-50"
              >
                <AiOutlineEye className="text-yellow-500 text-lg" />
                Update
              </button>
            </div>
          </div>

          {/* Backdrop to close the dropdown */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpenDropdown(null)}
          />
        </>
      )}
    </div>
  );
};

export default AddressTable;
