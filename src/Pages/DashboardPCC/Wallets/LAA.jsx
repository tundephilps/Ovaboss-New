import React from "react";
import ProfileProgressCard from "../../../components/DashboardPCC/Homepage/ProfileProgressCard";
import LAACard from "../../../components/DashboardPCC/Wallet/LAACard";
import LAAForm from "../../../components/DashboardPCC/Wallet/LAAForm";
import LAATab from "../../../components/DashboardPCC/Wallet/LAATab";
const LAA = () => {
  return (
    <div className=" bg-[#faf9f9]  overflow-y-auto">
      <div className="py-6 px-4">
        <h1 className="font-bold text-2xl pb-2">Wallet</h1>
        <p className="text-xs text-[#687280] ">
          <span className="text-[#687280]">
            Dashboard › {"  "} All Wallet Transactions{" "}
          </span>{" "}
          <span className="text-yellow-500"> › {"  "} LAA Transactions </span>{" "}
        </p>
        <ProfileProgressCard completedFields={4} totalFields={10} />

        <LAACard />
        <LAAForm />
        <LAATab />
      </div>
    </div>
  );
};

export default LAA;
