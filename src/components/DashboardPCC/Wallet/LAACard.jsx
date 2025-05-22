import { FaChevronDown, FaFile, FaFolder } from "react-icons/fa";
import Wallet1 from "../../../assets/Wallet1.png";

export default function LAACard() {
  return (
    <div className=" bg-white rounded-xl shadow-md p-4  my-6">
      <div className="flex justify-between pb-4">
        <p className="text-lg font-semibold">Ovaboss Wallet Details</p>

        {/* Dropdown Button */}
        <div className="relative">
          <button className="bg-gray-100 border border-gray-300 text-xs px-3 py-1 rounded flex items-center space-x-1 hover:bg-gray-200">
            <FaFolder />
            <span>Transfer to Wallet</span>
            <FaChevronDown className="text-xs" />
          </button>
        </div>
      </div>

      <div className="flex gap-6">
        <div>
          {/* Logo */}
          <div className="w-full h-full ">
            <img
              src={Wallet1} // replace with your actual logo path
              alt="LAA Logo"
              className="w-full h-full object-cover "
            />
          </div>
        </div>

        {/* Wallet Info */}
        <div className="flex-1 max-w-md">
          <h2 className="text-lg font-semibold mb-2">Personal LAA Wallet</h2>

          <div className="text-sm space-y-1">
            <div className="flex justify-between border-b border-gray-700 pb-2">
              <span>Balance</span>
              <span>0</span>
            </div>
            <div className="flex justify-between">
              <span>GE:</span>
              <span>0</span>
            </div>
            <div className="flex justify-between">
              <span>Type:</span>
              <span>Wallet</span>
            </div>
            <div className="flex justify-between">
              <span>Is Active</span>
              <span>Yes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
