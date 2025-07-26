import React from "react";
import ProfileProgressCard from "../../../components/DashboardPCC/Homepage/ProfileProgressCard";
import ServiceOrderTable from "../../../components/DashboardPCC/Report/ServiceOrderTable";
import useReport from "../../../hooks/useReport";

const ServiceOrderReportBCC = () => {
  const { isLoading, reports } = useReport({ reportType: 'general' });

  return (
    <div className=" bg-[#faf9f9] overflow-y-auto">
      <div className="py-6 px-4">
        <h1 className="font-bold text-2xl pb-2">Reports</h1>
        <p className="text-xs text-[#687280] ">
          <span className="text-[#687280]">Dashboard › {"  "} Report </span>{" "}
          <span className="text-[#687280]">› {"  "}General Report </span>{" "}
          <span className="text-yellow-500">
            {" "}
            › {"  "} Service Order Report{" "}
          </span>{" "}
        </p>
        <ProfileProgressCard completedFields={4} totalFields={10} />
        <ServiceOrderTable 
          isLoading={isLoading}
          reports={reports.services}
        />
      </div>
    </div>
  );
};

export default ServiceOrderReportBCC;
