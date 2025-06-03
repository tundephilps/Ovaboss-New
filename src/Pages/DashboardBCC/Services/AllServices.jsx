import React from "react";
import ChangeBusiness from "../../../components/DashboardBCC/Homepage/ChangeBusiness";
import AllServicesTable from "../../../components/DashboardBCC/Services/AllServicesTable";

const AllServices = () => {
  return (
    <div className=" bg-[#faf9f9] overflow-y-auto">
      <ChangeBusiness />
      <div className="py-6 px-4">
        <h1 className="font-bold text-2xl pb-2">Services</h1>
        <p className="text-xs text-[#687280] ">
          Dashboard ›
          <span className="text-yellow-500">{"  "} All Services </span>{" "}
        </p>
      </div>
      <AllServicesTable />
    </div>
  );
};

export default AllServices;
