import React from "react";
import ProfileProgressCard from "../../../components/DashboardBCC/Homepage/ProfileProgressCard";
import LocationsTable from "../../../components/DashboardBCC/Goods/LocationsTable";

const PickupLocation = () => {
  return (
    <div className=" bg-[#faf9f9] overflow-y-auto">
      <div className="py-6 px-4">
        <h1 className="font-bold text-2xl">Goods</h1>
        <p className="text-xs text-[#687280] ">
          Dashboard ›
          <span className="text-yellow-500">{"  "} All Pickup Location </span>{" "}
        </p>
        <ProfileProgressCard completedFields={4} totalFields={10} />
      </div>

      <LocationsTable />
    </div>
  );
};

export default PickupLocation;
