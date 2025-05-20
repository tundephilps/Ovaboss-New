import React from "react";
import ProfileProgressCard from "../../components/DashboardPCC/Homepage/ProfileProgressCard";
import Wallets from "../../components/DashboardPCC/Homepage/Wallets";
import PurchaseChart from "../../components/DashboardPCC/Homepage/PurchaseChart";
import MapData from "../../components/DashboardPCC/Homepage/MapData";

const DashboardHome = () => {
  return (
    <div className=" bg-[#faf9f9] overflow-y-auto">
      <div className="py-6 px-4">
        <h1 className="font-bold text-2xl">PCC</h1>
        <p className="text-xs text-[#687280]">Dashboard</p>
        <ProfileProgressCard completedFields={4} totalFields={10} />
        <Wallets />
        <PurchaseChart />
        <MapData />
      </div>
    </div>
  );
};

export default DashboardHome;
