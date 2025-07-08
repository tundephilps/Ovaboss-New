import React from 'react';
import useBank from '../../../hooks/useBank';
import useCountry from '../../../hooks/useCountry';
import Loading from '../../Loading';

const AddBankAccountModal = ({ isOpen, onClose, onSubmit, inputs, handleInput, callback, isLoading, isAddBankAccount }) => {
	const [ banks, setBanks ] = React.useState([])

  const { getBanks, bankAccountTypes } = useBank();
  const { countries } = useCountry();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(callback);
  };

  const handleCountrySelect = async (event) => {
		
    const value = event.target.value;

		handleInput("bankAccount.bank_id", '');
    handleInput("bankAccount.country_id", value);

    const banks = await getBanks(value);

		setBanks(banks || []);
    
  }

	const getCountryBanks = async () => {
		if(inputs.bankAccount.country_id) {
			const banks = await getBanks(inputs.bankAccount.country_id);
			setBanks(banks || []);
		}
	}

	React.useEffect(() => {
		getCountryBanks();
	}, [inputs.bankAccount.country_id])

	if (!isOpen) return null;

	const sectionLabel = isAddBankAccount ? 'Add' : 'Update';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-lg rounded-lg p-6 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">{sectionLabel} Bank Account</h2>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
						<div>
              <label className="block text-sm font-medium mb-1">Country</label>
              <select 
                name="country"
                value={inputs.bankAccount.country_id}
                onChange={handleCountrySelect}
                className="w-full border px-3 py-2 rounded"
            >
                <option value="">Select Country</option>
                {countries.map((country, i) => <option key={i} value={country.countryId}>{country.country}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Bank</label>
              <select 
                name="bank"
                value={inputs.bankAccount.bank_id}
                onChange={e => handleInput("bankAccount.bank_id", e.target.value)}
                className="w-full border px-3 py-2 rounded"
            >
                <option value="">Select Bank</option>
                {banks.map((bank, i) => <option key={i} value={bank.bankId}>{bank.name}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Account Type</label>
              <select 
                name="accountType" 
                value={inputs.bankAccount.bank_account_type_id}
                onChange={e => handleInput("bankAccount.bank_account_type_id", e.target.value)}
                className="w-full border px-3 py-2 rounded"
            >
                <option value="">Select Type</option>
                {bankAccountTypes.map((type, i) => <option key={i} value={type.bankAccountTypeId}>{type.accountType}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Account Name</label>
              <input
                type="text"
                name="accountName"
                value={inputs.bankAccount.account_name}
                onChange={e => handleInput("bankAccount.account_name", e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Account Number</label>
              <input
                type="number"
                name="accountNumber"
                value={inputs.bankAccount.account_number}
                onChange={e => handleInput("bankAccount.account_number", e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">SWIFT Code</label>
              <input
                type="text"
                name="swiftCode"
                value={inputs.bankAccount.swift_code}
                onChange={e => handleInput("bankAccount.swift_code", e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Recipient Code</label>
              <input
                type="text"
                name="recipientCode"
                value={inputs.bankAccount.recipient_code}
                onChange={e => handleInput("bankAccount.recipient_code", e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
							disabled={isLoading}
              type="submit"
              className="px-4 py-2 rounded bg-yellow-500 text-white hover:bg-yellow-600"
            >
              {isLoading ? <Loading/> : sectionLabel}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBankAccountModal;
