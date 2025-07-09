import React from "react";
import ProfileProgressCard from "../../../components/DashboardBCC/Homepage/ProfileProgressCard";
import PromotionForm from "../../../components/DashboardBCC/Goods/PromotionForm";

const Promotions = () => {
  return (
    <div className=" bg-[#faf9f9] overflow-y-auto">
      <div className="py-6 px-4">
        <h1 className="font-bold text-2xl">Goods</h1>
        <p className="text-xs text-[#687280] ">
          Dashboard ›<span> All Goods ›</span>
          <span className="text-yellow-500">{"  "} Promotions</span>{" "}
        </p>
      </div>

      <PromotionForm />
    </div>
  );
};

export default Promotions;
