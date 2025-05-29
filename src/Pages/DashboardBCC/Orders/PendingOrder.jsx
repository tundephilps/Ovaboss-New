import React from "react";
import ChangeBusiness from "../../../components/DashboardBCC/Homepage/ChangeBusiness";
import PendingOrderTable from "../../../components/DashboardBCC/Orders/PendingOrderTable";

const PendingOrders = () => {
  return (
    <div className=" bg-[#faf9f9] overflow-y-auto">
      <ChangeBusiness />
      <div className="py-6 px-4">
        <h1 className="font-bold text-2xl pb-2">Orders</h1>
        <p className="text-xs text-[#687280] ">
          Dashboard ›<span> All Orders ›</span>
          <span className="text-yellow-500">{"  "} Pending Orders </span>{" "}
        </p>
      </div>
      <PendingOrderTable />
    </div>
  );
};

export default PendingOrders;
