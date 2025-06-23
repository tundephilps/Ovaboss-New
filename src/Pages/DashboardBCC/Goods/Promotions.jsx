import React from "react";
import ProfileProgressCard from "../../../components/DashboardBCC/Homepage/ProfileProgressCard";

const Promotions = () => {
  return (
    <div className=" bg-[#faf9f9] overflow-y-auto">
      <div className="py-6 px-4">
        <h1 className="font-bold text-2xl">Goods</h1>
        <p className="text-xs text-[#687280] ">
          Dashboard ›<span> All Goods ›</span>
          <span className="text-yellow-500">{"  "} Add New Goods</span>{" "}
        </p>
        <ProfileProgressCard completedFields={4} totalFields={10} />
      </div>
    </div>
  );
};

export default Promotions;
