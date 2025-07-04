import { FaChevronDown } from "react-icons/fa";

export default function SignOnForm2() {
  return (
    <div className="mx-auto  p-6 space-y-6">
      <h2 className="text-lg font-semibold border-b pb-2">
        SignOn Transfer to Bank
      </h2>

      <p className="text-sm font-medium text-gray-600">User to user Transfer</p>

      <form className="space-y-4">
        {/* From Wallet */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Bank Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2 text-sm bg-gray-100 "
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Bank Account Number <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            value="Account Number"
            className="w-full border rounded px-3 py-2 text-sm bg-gray-100 cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Sort/Swift Code <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            value="Swift Code"
            className="w-full border rounded px-3 py-2 text-sm bg-gray-100 cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Reason for transfer
          </label>
          <input
            type="number"
            value="Description"
            className="w-full border rounded px-3 py-2 text-sm bg-gray-100 cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            defaultValue={0}
            className="w-full border rounded px-3 py-2 text-sm bg-gray-100 cursor-not-allowed"
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
