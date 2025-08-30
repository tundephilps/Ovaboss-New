import React, { useState } from "react";
import { FaTruck } from "react-icons/fa";
import { useAppContext } from "../../../context/AppContext";
import { Link } from "react-router-dom";
import useCountry from "../../../hooks/useCountry";
import { ShippingFeeAddressFields } from "../../../hooks/useShippingFee";

interface DeliveryAddressFormProps {
  addressId: string;
  handleInput: (field: ShippingFeeAddressFields, value: any) => void;
}

const DeliveryAddressForm = ({ addressId, handleInput: handleAddressInput }: DeliveryAddressFormProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "🇳🇬 Nigeria",
    state: "",
    address: "",
    additionalInfo: "",
  });

  const [showSummary, setShowSummary] = useState(false);

  const { user, checkoutData, setCheckoutData } = useAppContext();
  const {
    countries,
    states,
    cities,
    isLoading: isLoadingCountries,
    isLoadingCities,
    isLoadingStates,
    getStates,
    getCities,
  } = useCountry();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setShowSummary(true);
  };

  const handleEdit = () => {
    setShowSummary(false);
  };

  const address = user?.address.find(item => item.id === +addressId);

  const handleInput = (field: keyof typeof checkoutData, value: any) => {
    setCheckoutData(prev => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleCountryChange = (countryId: string) => {
    handleAddressInput('country_code', countryId);
    getStates(+countryId);
  }

  const handleStateChange = (stateId: string) => {
    handleAddressInput('state_code', stateId);
    getCities(+stateId);
  }

  return (
    <div className="mx-auto bg-white p-4 rounded-md shadow space-y-4">
      {/* Header */}
      <div className="flex items-center space-x-2 text-lg font-semibold border-b pb-2">
        <FaTruck className="text-yellow-500" />
        <span>Delivery Address (For Deliverable Items)</span>
      </div>

      {!address ? (
        <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 text-center space-y-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Country + State */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-left">Country</label>
                <select
                  onChange={e => handleCountryChange(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                  required
                >
                  {isLoadingCountries && <option value='' disabled>Getting countries</option>}
                  <option>Choose Country</option>
                  {countries.map((item, key) => (
                    <option value={item.countryId} key={key}>{item.country}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-left">State</label>
                <select
                  onChange={e => handleStateChange(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                  required
                >
                  {isLoadingStates && <option value='' disabled selected>Getting states</option>}
                  <option value=''>Choose state/region</option>
                  {states.map((item, key) => (
                    <option value={item.stateId} key={key}>{item.state}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium mb-1 text-left">City</label>
              <select
                className="w-full border rounded px-3 py-2"
                required
                onChange={(e) => handleAddressInput('city', e.target.value)}
              >
                {isLoadingCities && <option value='' disabled selected>Getting Cities</option>}
                <option value=''>Choose city</option>
                {cities.map((item, key) => (
                  <option value={item.city} key={key}>{item.city}</option>
                ))}
              </select>
            </div>

            {/* Address (full width textarea) */}
            <div>
              <label className="block text-sm font-medium mb-1 text-left">Address</label>
              <textarea
                name="address"
                className="w-full border rounded px-3 py-2 h-24"
                onChange={(e) => handleAddressInput('address', e.target.value)}
              />
            </div>

            {/* Postal Code + Phone Number side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-left">Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  className="w-full border rounded px-3 py-2"
                  onChange={(e) => handleAddressInput('postal_code', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-left">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  className="w-full border rounded px-3 py-2"
                  onChange={e => handleInput('phone_number', e.target.value)}
                  value={checkoutData.phone_number}
                />
              </div>
            </div>

            {/* Additional Info (full width textarea) */}
            <div>
              <label className="block text-sm font-medium mb-1 text-left">Additional Information</label>
              <textarea
                name="additionalInfo"
                className="w-full border rounded px-3 py-2 h-24"
                placeholder=""
                onChange={e => handleInput('notes', e.target.value)}
                value={checkoutData.notes}
              />
            </div>
          </form>

        </div>
      ) : showSummary ? (
        // 📦 Summary View
        <div className="border p-4 rounded bg-gray-50 space-y-2">
          <div>
            <p className="font-semibold">
              {formData.firstName} {formData.lastName}
            </p>
            <p>
              {formData.address}, {formData.state}, {formData.country}
            </p>
            <p>
              {formData.phone} | {formData.email}
            </p>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              onClick={handleEdit}
              className="px-8 py-2 rounded-md border"
            >
              Edit
            </button>
            <button className="px-8 py-2 rounded-md bg-[#FFD700] text-white hover:text-black hover:bg-yellow-600">
              Use Address
            </button>
          </div>
        </div>
      ) : (
        // 📝 Form View
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Contact Person
              </label>
              <input
                type="text"
                name="firstName"
                value={address.contactPerson}
                placeholder="Fatimah"
                className="w-full border border-gray-300 bg-gray-100 text-gray-500 rounded px-3 py-2 cursor-not-allowed focus:outline-none focus:ring-0 opacity-80"
                disabled
                readOnly
              />
            </div>
          </div>

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">E-mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="fatimah@oladigbolu.com"
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+2347055655656"
                className="w-full border rounded px-3 py-2"
              />
            </div>
          </div> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Country</label>
              <input
                name="country"
                value={address.country}
                className="w-full border border-gray-300 bg-gray-100 text-gray-500 rounded px-3 py-2 cursor-not-allowed focus:outline-none focus:ring-0 opacity-80"
                disabled
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">State</label>
              <input
                type="text"
                name="state"
                value={address.state}
                className="w-full border border-gray-300 bg-gray-100 text-gray-500 rounded px-3 py-2 cursor-not-allowed focus:outline-none focus:ring-0 opacity-80"
                disabled
                readOnly
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Delivery Address
            </label>
            <textarea
              name="address"
              value={address.address}
              className="w-full border border-gray-300 bg-gray-100 text-gray-500 rounded px-3 py-2 h-24 cursor-not-allowed resize-none focus:outline-none focus:ring-0"
              disabled
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="text"
              name="state"
              className="w-full border rounded px-3 py-2"
              onChange={e => handleInput('phone_number', e.target.value)}
              value={checkoutData.phone_number}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Additional Information
            </label>
            <textarea
              name="additionalInfo"
              className="w-full border rounded px-3 py-2 h-24"
              placeholder=""
              onChange={e => handleInput('notes', e.target.value)}
              value={checkoutData.notes}
            />
          </div>

          {/* <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-12 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-12 py-2 rounded-md bg-[#FFD700] text-white hover:text-black hover:bg-yellow-600"
            >
              Save
            </button>
          </div> */}
        </form>
      )}
    </div>
  );
};

export default DeliveryAddressForm;
