import React from "react";
import GoodsOrderTable from "../../../components/DashboardPCC/Report/GoodsOrderTable";

const GoodsOrderReport = () => {
  return (
    <div className=" bg-[#faf9f9] overflow-y-auto">
      <div className="py-6 px-4">
        <h1 className="font-bold text-2xl pb-2">Reports</h1>
        <p className="text-xs text-[#687280] ">
          <span className="text-[#687280]">Dashboard › {"  "} Report </span>{" "}
          <span className="text-[#687280]">› {"  "}General Report </span>{" "}
          <span className="text-yellow-500"> › {"  "} Goods Order Report </span>{" "}
        </p>
        <GoodsOrderTable />
      </div>
    </div>
  );
};

export default GoodsOrderReport;
