import React from "react";
import ChangeBusiness from "../../../components/DashboardBCC/Homepage/ChangeBusiness";
import AwaitingPaymentTable from "../../../components/DashboardBCC/Orders/AwaitingPaymentTable";

const AwaitingPayment = () => {
  return (
    <div className=" bg-[#faf9f9] overflow-y-auto">
      <ChangeBusiness />
      <div className="py-6 px-4">
        <h1 className="font-bold text-2xl pb-2">Orders</h1>
        <p className="text-xs text-[#687280] ">
          Dashboard ›<span> All Orders ›</span>
          <span className="text-yellow-500">{"  "} Awaiting Payment </span>{" "}
        </p>
      </div>
      <AwaitingPaymentTable />
    </div>
  );
};

export default AwaitingPayment;
