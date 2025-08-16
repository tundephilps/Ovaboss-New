import React from "react";
import ProfileProgressCard from "../../../components/DashboardPCC/Homepage/ProfileProgressCard";
import GeneralReportTable from "../../../components/DashboardPCC/Report/GeneralReportTable";
import useReport from "../../../hooks/useReport";

const GeneralReport = () => {
  const { isLoading, reports } = useReport({ reportType: 'general' });

  return (
    <div className=" bg-[#faf9f9] overflow-y-auto">
      <div className="py-6 px-4">
        <h1 className="font-bold text-2xl pb-2">Reports</h1>
        <p className="text-xs text-[#687280] ">
          <span className="text-[#687280]">Dashboard › {"  "} Report </span>{" "}
          <span className="text-yellow-500"> › {"  "} General Report </span>{" "}
        </p>
        <ProfileProgressCard completedFields={4} totalFields={10} />
        <GeneralReportTable 
          isLoading={isLoading}
          reports={reports.general}
        />
      </div>
    </div>
  );
};

export default GeneralReport;
