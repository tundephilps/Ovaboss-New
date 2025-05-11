import { useState } from "react";
import { FaTruck } from "react-icons/fa";

const DeliveryAddressForm = () => {
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

  return (
    <div className="mx-auto bg-white p-4 rounded-md shadow space-y-4">
      {/* Header */}
      <div className="flex items-center space-x-2 text-lg font-semibold border-b pb-2">
        <FaTruck className="text-yellow-500" />
        <span>Delivery Address (For Deliverable Items)</span>
      </div>

      {showSummary ? (
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
            <button className="px-8 py-2 rounded-md bg-[#e6ae06] text-white hover:text-black hover:bg-yellow-600">
              Use Address
            </button>
          </div>
        </div>
      ) : (
        // 📝 Form View
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Fatimah"
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Oladigbolu"
                className="w-full border rounded px-3 py-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Country</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              >
                <option value="🇳🇬 Nigeria">🇳🇬 Nigeria</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Lagos"
                className="w-full border rounded px-3 py-2"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Delivery Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 h-24"
              placeholder="24 Adetokunbo Ademola St, Victoria Island, Lagos 101241, Nigeria"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Additional Information
            </label>
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 h-24"
              placeholder=""
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-12 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-12 py-2 rounded-md bg-[#e6ae06] text-white hover:text-black hover:bg-yellow-600"
            >
              Save
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default DeliveryAddressForm;
