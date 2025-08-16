import React from "react";
import ProfileProgressCard from "../../../components/DashboardPCC/Homepage/ProfileProgressCard";
import WalletTable from "../../../components/DashboardPCC/Report/WalletTable";
import useReport from "../../../hooks/useReport";

const WalletTransactions = () => {
  const { isLoading, reports } = useReport({ reportType: 'wallet' });

  return (
    <div className=" bg-[#faf9f9] overflow-y-auto">
      <div className="py-6 px-4  overflow-x-auto">
        <h1 className="font-bold text-2xl pb-2">Reports</h1>
        <p className="text-xs text-[#687280] ">
          <span className="text-[#687280]">Dashboard › {"  "} Report </span>{" "}
          <span className="text-[#687280]">› {"  "}Payout Report </span>{" "}
          <span className="text-yellow-500">
            {" "}
            › {"  "} Wallet Transaction Report{" "}
          </span>{" "}
        </p>
        <ProfileProgressCard completedFields={4} totalFields={10} />
        <WalletTable isLoading={isLoading} reports={reports.wallet}/>
      </div>
    </div>
  );
};

export default WalletTransactions;
