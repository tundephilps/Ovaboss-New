import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';
import { useAppContext } from '../../../context/AppContext';

const BankAccountTable = ({ setModalOpen, setInputs, setIsAddBankAccount, showEllipse = true }) => {
  const { user } = useAppContext();
  const [openDropdown, setOpenDropdown] = React.useState(null);
  const [dropdownPosition, setDropdownPosition] = React.useState({ top: 0, left: 0 });
  const dropdownRef = React.useRef(null);

  const handleDropdownToggle = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null);
      return;
    }

    const button = document.getElementById(`dropdown-btn-${index}`);
    if (button) {
      const rect = button.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY + 4,
        left: rect.right - 192, // 192px = dropdown width
      });
    }

    setOpenDropdown(index);
  };

  const handleUpdate = (account) => {
    setInputs(prev => ({
        ...prev,
        bankAccount: {
            id: account.id,
            bank_id : account.bankId,
            country_id: account.countryId,
            bank_account_type_id: account.bankAccountTypeId,
            account_name : account.accountName,
            account_number : account.accountNumber,
            swift_code : account.swiftCode,
            recipient_code : account.recipientCode,
        }
    }))
    setIsAddBankAccount(false);
    setModalOpen(prev => !prev);
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-separate border-spacing-y-2">
        <thead className="bg-gray-50 h-8 w-full">
          <tr className="text-left text-gray-500 text-sm">
            <th>ID</th>
            <th>Bank Name</th>
            <th>Account Name</th>
            <th>Account Number</th>
            <th>Account Type</th>
            <th>Country</th>
            <th>SWIFT Code</th>
            <th>Recipient Code</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {user?.bankAccountDetails?.length === 0 ? (
            <tr>
              <td colSpan={9} className="text-center py-8 text-gray-400">
                No bank account data available
              </td>
            </tr>
          ) : (
            user.bankAccountDetails.map((item, index) => (
              <tr
                key={index}
                className="bg-white hover:bg-gray-50 rounded shadow-sm"
              >
                <td className="py-2">{item.id}</td>
                <td className="py-2">{item.bankName}</td>
                <td className="py-2">{item.accountName}</td>
                <td className="py-2">{item.accountNumber}</td>
                <td className="py-2">{item.bankAccountType}</td>
                <td className="py-2">{item.countryName}</td>
                <td className="py-2">{item.swiftCode}</td>
                <td className="py-2">{item.recipientCode}</td>
                {showEllipse && 
                    <td className="py-2 text-right">
                    <button
                        id={`dropdown-btn-${index}`}
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
                  handleUpdate(user.bankAccountDetails[openDropdown]);
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

export default BankAccountTable;
