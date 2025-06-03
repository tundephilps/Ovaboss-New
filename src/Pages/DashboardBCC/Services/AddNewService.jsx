import React from "react";
import AddNewServiceForm from "../../../components/DashboardBCC/Services/AddNewServiceForm";

export const AddNewService = () => {
  return (
    <div className=" bg-[#faf9f9] overflow-y-auto">
      <div className="py-6 px-4">
        <h1 className="font-bold text-2xl pb-2">Services</h1>
        <p className="text-xs text-[#687280] ">
          Dashboard ›<span> All Services ›</span>
          <span className="text-yellow-500">{"  "} Add New Service </span>{" "}
        </p>
      </div>

      <AddNewServiceForm />
      <div className="h-40" />
    </div>
  );
};
