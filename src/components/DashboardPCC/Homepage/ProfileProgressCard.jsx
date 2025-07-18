import { FaInfoCircle } from "react-icons/fa";
import { useAppContext } from "../../../context/AppContext";
import { useNavigate } from "react-router-dom";
import useProfile from "../../../hooks/useProfile";
import Loading from "../../Loading";

const ProfileProgressCard = () => {

  const { user } = useAppContext();
  const { isSaving, handleUpgradeAccount } = useProfile();
  const navigate = useNavigate();

  let totalFields = 4;
  let completedFields = 1;

  if(user.nextOfKin) completedFields++; 
  if(user.address.length) completedFields++; 
  if(user.bankAccountDetails.length) completedFields++; 

  const percentage = Math.round((completedFields / totalFields) * 100);

  if(percentage === 100 && user.userType === 'CUSTOMER') {
    return (
      <div className="bg-[#fffbeb] border border-yellow-200 rounded-lg p-4 mt-4 mx-auto shadow-sm">
      <div className="flex justify-between items-center text-sm font-medium text-gray-700 mb-1">
        <div className="flex items-center gap-2">
          <FaInfoCircle className="text-yellow-600" />
          <span>Upgrade to BCC</span>
        </div>
      </div>

      <p className="text-gray-700 text-sm mb-3">
        Upgrade to BCC profile now to enjoy more features and personalized
        experience.
      </p>

      <button onClick={handleUpgradeAccount} className="bg-[#FFD700] text-white font-semibold text-sm px-4 py-2 rounded hover:bg-yellow-600 transition">
        {isSaving ? <Loading/> : 'Upgrade'}
      </button>
    </div>
    );
  }

  if(percentage === 100) {
    return ;
  }

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

      <button onClick={() => navigate('/profile')} className="bg-[#FFD700] text-white font-semibold text-sm px-4 py-2 rounded hover:bg-yellow-600 transition">
        Complete My Profile
      </button>
    </div>
  );
};

export default ProfileProgressCard;
