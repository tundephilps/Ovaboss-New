import React from "react";
import ProfileProgressCard from "../../components/DashboardBCC/Homepage/ProfileProgressCard";
import CreateBusinessHeader from "../../components/DashboardBCC/Homepage/CreateBusiness";
import OrderStatusCards from "../../components/DashboardBCC/Homepage/OrderStats";
import Wallets from "../../components/DashboardBCC/Homepage/Wallets";
import SalesChart from "../../components/DashboardBCC/Homepage/SalesChart";
import PurchaseChart from "../../components/DashboardBCC/Homepage/PurchaseChart";
import MapData from "../../components/DashboardBCC/Homepage/MapData";
import ChangeBusiness from "../../components/DashboardBCC/Homepage/ChangeBusiness";
import useBCCDashboard from "../../hooks/useBCCDashboard";
import Loading from "../../components/Loading";

const DashboardHome = () => {
  const { isLoading, isLoadingWallets, analytics, wallets  } = useBCCDashboard();

  return (
    <div className=" bg-[#faf9f9] overflow-y-auto">
      <CreateBusinessHeader />
      <ChangeBusiness />
      <div className="py-6 px-4">
        <h1 className="font-bold text-2xl">BCC</h1>
        <p className="text-xs text-[#687280]">Dashboard</p>
        {/* <ProfileProgressCard completedFields={4} totalFields={10} /> */}
        {isLoading || isLoadingWallets ? (
          <Loading/>
        ) : (
          <>
            <OrderStatusCards analytics={analytics}/>
            <Wallets wallets={wallets}/>
          </>
        )}
        
        <PurchaseChart />
        <SalesChart />
        <MapData />
      </div>
    </div>
  );
};

export default DashboardHome;
