import { useState } from "react";
import { FaTruck } from "react-icons/fa";
import { useAppContext } from "../../../context/AppContext";
import { Link } from "react-router-dom";

interface DeliveryAddressFormProps {
  addressId: string;
}

const DeliveryAddressForm = ({ addressId }: DeliveryAddressFormProps) => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
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

  return (
    <div className="mx-auto bg-white p-4 rounded-md shadow space-y-4">
      {/* Header */}
      <div className="flex items-center space-x-2 text-lg font-semibold border-b pb-2">
        <FaTruck className="text-yellow-500" />
        <span>Delivery Address (For Deliverable Items)</span>
      </div>

      {!address ? (
        <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 text-center space-y-4">
          <p className="text-gray-600 text-sm m-2">
            You have not set up any address
          </p>
          <Link to="/EditBankInfo">
            <button className="inline-flex items-center px-4 py-2 bg-yellow-500 text-white text-sm font-medium rounded-md shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition">
              Set Up Address
            </button>
          </Link>
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
