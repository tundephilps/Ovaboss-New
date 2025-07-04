import { FaInfoCircle } from "react-icons/fa";

const ProfileProgressCard = ({ completedFields = 4, totalFields = 10 }) => {
  const percentage = Math.round((completedFields / totalFields) * 100);

  return (
    <div className="bg-[#fffbeb] border border-yellow-200 rounded-lg p-4 mt-4 mx-auto shadow-sm">
      <div className="flex justify-between items-center text-sm font-medium text-gray-700 mb-1">
        <div className="flex items-center gap-2">
          <FaInfoCircle className="text-yellow-600" />
          <span>Incomplete Profile: {percentage}% completed</span>
        </div>
        <span className="text-xs text-gray-500">
          {completedFields} of {totalFields} fields completed
        </span>
      </div>

      <div className="w-full bg-gray-200 h-1.5 rounded-full mb-3">
        <div
          className="bg-yellow-500 h-1.5 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <p className="text-gray-700 text-sm mb-3">
        Complete your PCC profile now to enjoy more features and personalized
        experience.
      </p>

      <button className="bg-[#FFD700] text-white font-semibold text-sm px-4 py-2 rounded hover:bg-yellow-600 transition">
        Complete My Profile
      </button>
    </div>
  );
};

export default ProfileProgressCard;
