import React from 'react';
import useCountry from '../../../hooks/useCountry';
import Loading from '../../Loading';

const AddBankAccountModal = ({ isOpen, onClose, onSubmit, inputs, handleInput, callback, isLoading, isAddAddress }) => {
  const [ states, setStates ] = React.useState([]);
  const [ cities, setCities ] = React.useState([]);

  const { 
    countries, 
    isLoadingStates,
    isLoadingCities,
    getStates, 
    getCities 
  } = useCountry();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(callback);
  };

  const handleCountrySelect = async (event) => {
		
    const value = event.target.value;

    setStates([]);
    setCities([]);
		handleInput("address.state_id", '');
		handleInput("address.city_id", '');
    handleInput("address.country_id", value);

    const states = await getStates(value);    
    setStates(states || [])
  }

  const handleStateSelect = async (event) => {
		
    const value = event.target.value;

    setCities([]);
		handleInput("address.city_id", '');
    handleInput("address.state_id", value);

    const cities = await getCities(value);
    setCities(cities || []);
  }

  const getCountryStates = async () => {
    const states = await getStates(inputs.address.country_id);
    setStates(states || []);
  }

  const getStateCities = async () => {
    const cities = await getCities(inputs.address.state_id);
    setCities(cities || []);
  }

	React.useEffect(() => {
		if(inputs.address.country_id) getCountryStates();
	}, [inputs.address.country_id]);

  React.useEffect(() => {
    if(inputs.address.state_id) getStateCities();
  }, [inputs.address.state_id]);

	if (!isOpen) return null;

	const sectionLabel = isAddAddress ? 'Add' : 'Update';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-lg rounded-lg p-6 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">{sectionLabel} Address</h2>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
						<div>
              <label className="block text-sm font-medium mb-1">Country</label>
              <select 
                name="country"
                value={inputs.address.country_id}
                onChange={handleCountrySelect}
                className="w-full border px-3 py-2 rounded"
            >
                <option value="">Select Country</option>
                {countries.map((country, i) => <option key={i} value={country.countryId}>{country.country}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">State</label>
              <select 
                name="country"
                value={inputs.address.state_id}
                onChange={handleStateSelect}
                className="w-full border px-3 py-2 rounded"
            >
                {isLoadingStates ? (
                  <option value="" disabled>Loading States</option>
                ) : (
                  <option value="">Select State</option>
                )}
                {states.map((state, i) => <option key={i} value={state.stateId}>{state.state}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <select 
                name="country"
                value={inputs.address.city_id}
                onChange={e => handleInput('address.city_id', e.target.value)}
                className="w-full border px-3 py-2 rounded"
            >
                {isLoadingCities ? (
                  <option value="" disabled>Loading Cities</option>
                ) : (
                  <option value="">Select City</option>
                )}
                {cities.map((cities, i) => <option key={i} value={cities.cityId}>{cities.city}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <textarea
                value={inputs.address.address}
                onChange={e => handleInput("address.address", e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Postal Code</label>
              <input
                type="number"
                name="accountNumber"
                value={inputs.address.postal_code}
                onChange={e => handleInput("address.postal_code", e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Contact Person</label>
              <input
                type="text"
                name="recipientCode"
                value={inputs.address.contact_person}
                onChange={e => handleInput("address.contact_person", e.target.value)}
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
