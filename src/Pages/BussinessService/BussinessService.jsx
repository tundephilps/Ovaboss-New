import React from "react";
import Hero from "../../components/BusinessService/Homepage/Hero";
import MoreServices from "../../components/BusinessService/Homepage/MoreService";
import TopServices from "../../components/BusinessService/Homepage/TopServices";
import BrowsingHistory from "../../components/BusinessService/CategoryPage/BrowsingHistory";

const BussinessService = () => {
  return (
    <div className="bg-[#faf9f9] py-8">
      <Hero />
      <MoreServices />
      <TopServices />
    </div>
  );
};

export default BussinessService;
