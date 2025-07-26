import React from "react";
import ProfileProgressCard from "../../../components/DashboardPCC/Homepage/ProfileProgressCard";
import GoodsOrderTable from "../../../components/DashboardPCC/Report/GoodsOrderTable";
import useReport from "../../../hooks/useReport";

const GoodsOrderReportBCC = () => {
  const { isLoading, reports } = useReport({ reportType: 'general' });

  return (
    <div className=" bg-[#faf9f9] overflow-y-auto">
      <div className="py-6 px-4">
        <h1 className="font-bold text-2xl pb-2">Reports</h1>
        <p className="text-xs text-[#687280] ">
          <span className="text-[#687280]">Dashboard › {"  "} Report </span>{" "}
          <span className="text-[#687280]">› {"  "}General Report </span>{" "}
          <span className="text-yellow-500"> › {"  "} Goods Order Report </span>{" "}
        </p>
        <ProfileProgressCard completedFields={4} totalFields={10} />
        <GoodsOrderTable 
          isLoading={isLoading}
          reports={reports.goods}
        />
      </div>
    </div>
  );
};

export default GoodsOrderReportBCC;
