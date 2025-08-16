import React from "react";
import ProfileProgressCard from "../../../components/DashboardPCC/Homepage/ProfileProgressCard";
import OnlineInvoiceTable from "../../../components/DashboardPCC/Report/OnlineInvoiceTable";

const OnlineInvoiceReport = () => {
  return (
    <div className=" bg-[#faf9f9] overflow-y-auto">
      <div className="py-6 px-4">
        <h1 className="font-bold text-2xl pb-2">Reports</h1>
        <p className="text-xs text-[#687280] ">
          <span className="text-[#687280]">Dashboard › {"  "} Report </span>{" "}
          <span className="text-[#687280]">› {"  "}General Report </span>{" "}
          <span className="text-[#687280]">› {"  "}Invoice Report </span>{" "}
          <span className="text-yellow-500">
            {" "}
            › {"  "} Online Invoice Report{" "}
          </span>{" "}
        </p>
        <ProfileProgressCard completedFields={4} totalFields={10} />
        <OnlineInvoiceTable />
      </div>
    </div>
  );
};

export default OnlineInvoiceReport;
