import React from "react";
import ChangeBusiness from "../../../components/DashboardBCC/Homepage/ChangeBusiness";
import AllOrdersTable from "../../../components/DashboardBCC/Orders/AllOrdersTable";

const AllOrders = () => {
  return (
    <div className=" bg-[#faf9f9] overflow-y-auto">
      <ChangeBusiness />
      <div className="py-6 px-4">
        <h1 className="font-bold text-2xl pb-2">Orders</h1>
        <p className="text-xs text-[#687280] ">
          Dashboard ›<span className="text-yellow-500">{"  "} All Orders </span>{" "}
        </p>
      </div>
      <AllOrdersTable />
    </div>
  );
};

export default AllOrders;
