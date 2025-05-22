import React from "react";
import ProfileProgressCard from "../../../components/DashboardPCC/Homepage/ProfileProgressCard";
import PCMtable from "../../../components/DashboardPCC/MyCommunity/PCMtable";
import Pagination from "../../../components/DashboardPCC/MyCommunity/Pagination";
import SignOnCard from "../../../components/DashboardPCC/Wallet/SignOnCard";

const SignOn = () => {
  return (
    <div className=" bg-[#faf9f9] overflow-y-auto">
      <div className="py-6 px-4">
        <h1 className="font-bold text-2xl pb-2">Wallet</h1>
        <p className="text-xs text-[#687280] ">
          <span className="text-[#687280]">
            Dashboard › {"  "} All Wallet Transactions{" "}
          </span>{" "}
          <span className="text-yellow-500">
            {" "}
            › {"  "} SIGNON Transactions{" "}
          </span>{" "}
        </p>
        <ProfileProgressCard completedFields={4} totalFields={10} />
        <SignOnCard />
      </div>
    </div>
  );
};

export default SignOn;
