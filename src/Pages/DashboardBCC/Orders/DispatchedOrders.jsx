import React from "react";
import ChangeBusiness from "../../../components/DashboardBCC/Homepage/ChangeBusiness";
import AwaitingPaymentTable from "../../../components/DashboardBCC/Orders/AwaitingPaymentTable";
import DispatchOrderTable from "../../../components/DashboardBCC/Orders/DispatchOrderTable";

const DispatchedOrders = () => {
  return (
    <div className=" bg-[#faf9f9] overflow-y-auto">
      <ChangeBusiness />
      <div className="py-6 px-4">
        <h1 className="font-bold text-2xl pb-2">Orders</h1>
        <p className="text-xs text-[#687280] ">
          Dashboard ›<span> All Orders ›</span>
          <span className="text-yellow-500">
            {"  "} Dispatched Orders{" "}
          </span>{" "}
        </p>
      </div>
      <DispatchOrderTable />
    </div>
  );
};

export default DispatchedOrders;
