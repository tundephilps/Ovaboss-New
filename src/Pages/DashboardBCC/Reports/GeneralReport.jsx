import React from "react";
import ProfileProgressCard from "../../../components/DashboardBCC/Homepage/ProfileProgressCard";
import GeneralReportTable from "../../../components/DashboardBCC/Report/GeneralReportTable";

const GeneralReportBCC = () => {
  return (
    <div className=" bg-[#faf9f9] overflow-y-auto">
      <div className="py-6 px-4">
        <h1 className="font-bold text-2xl pb-2">Reports</h1>
        <p className="text-xs text-[#687280] ">
          <span className="text-[#687280]">Dashboard › {"  "} Reports </span>{" "}
          <span className="text-yellow-500"> › {"  "} General Report </span>{" "}
        </p>
        <ProfileProgressCard completedFields={4} totalFields={10} />
        <GeneralReportTable />
      </div>
    </div>
  );
};

export default GeneralReportBCC;
