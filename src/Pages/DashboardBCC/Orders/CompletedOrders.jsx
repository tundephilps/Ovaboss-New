import React from "react";
import ChangeBusiness from "../../../components/DashboardBCC/Homepage/ChangeBusiness";
import CompletedOrderTable from "../../../components/DashboardBCC/Orders/CompletedOrderTable";

const CompletedOrders = () => {
  return (
    <div className=" bg-[#faf9f9] overflow-y-auto">
      <ChangeBusiness />
      <div className="py-6 px-4">
        <h1 className="font-bold text-2xl pb-2">Orders</h1>
        <p className="text-xs text-[#687280] ">
          Dashboard ›<span> All Orders ›</span>
          <span className="text-yellow-500">{"  "} Completed Orders </span>{" "}
        </p>
      </div>
      <CompletedOrderTable />
    </div>
  );
};

export default CompletedOrders;
