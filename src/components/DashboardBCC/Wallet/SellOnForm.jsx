import { FaChevronDown } from "react-icons/fa";

export default function BuyOnForm() {
  return (
    <div className="mx-auto bg-white  p-6 space-y-6">
      <h2 className="text-lg font-semibold border-b pb-2">
        Business to User Transfer
      </h2>

      <p className="text-sm font-medium text-gray-600">User to user Transfer</p>

      <form className="space-y-4">
        {/* From Wallet */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            From <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value="Business BUYON Wallet"
            disabled
            className="w-full border rounded px-3 py-2 text-sm bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Transfer Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Transfer Type <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              className="w-full border rounded px-3 py-2 text-sm appearance-none pr-8"
              defaultValue="default"
            >
              <option value="default" disabled>
                Select Transfer Type
              </option>
              <option value="user">User to User Transfer</option>
              <option value="peer">Personal inter wallet Transfer</option>
              <option value="group">User to Business Transfer</option>
            </select>
            <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm pointer-events-none" />
          </div>
        </div>

        {/* Transfer To */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            User Pin <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              className="w-full border rounded px-3 py-2 text-sm appearance-none pr-8"
              defaultValue=""
              placeholder="Enter Ovaboss User Pin"
            />

            <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm pointer-events-none" />
          </div>
        </div>

        {/* Amount */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount
          </label>
          <input
            type="number"
            defaultValue={0}
            className="w-full border rounded px-3 py-2 text-sm"
          />
        </div>

        {/* Submit */}
        <div className="text-right">
          <button
            type="submit"
            className="bg-[#FFD700] text-white px-5 py-2 rounded hover:bg-yellow-600 text-sm font-medium"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
