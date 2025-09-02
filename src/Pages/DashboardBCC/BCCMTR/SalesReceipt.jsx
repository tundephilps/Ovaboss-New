import React from "react";
import ChangeBusiness from "../../../components/DashboardBCC/Homepage/ChangeBusiness";
import AQBTable from "../../../components/DashboardBCC/BusinessCommunity/AQBTable";

const SalesReceipt = () => {
  return (
    <div className=" bg-[#faf9f9] overflow-y-auto">
      <ChangeBusiness />
      <div className="py-6 px-4">
        <h1 className="font-bold text-2xl pb-2">Sales MTR</h1>
        <p className="text-xs text-[#687280] ">
          Dashboard ›
          <span className="text-yellow-500">
            {"  "} Sales Mobile Transaction Receipt{" "}
          </span>{" "}
        </p>
      </div>
      <AQBTable />
    </div>
  );
};

export default SalesReceipt;
