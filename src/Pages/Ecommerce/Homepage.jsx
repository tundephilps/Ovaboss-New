import React from "react";
import Hero from "../../components/Ecommerce/homepage/Hero";
import FlashSaleCountdown from "../../components/Ecommerce/homepage/FlashSalesTimer";
import FlashSales from "../../components/Ecommerce/homepage/FlashSales";
import SponsoredProducts from "../../components/Ecommerce/homepage/SponsoredProducts";
import Dealoftheday from "../../components/Ecommerce/homepage/Dealsoftheday";
import AccessoriesCategories from "../../components/Ecommerce/homepage/Accessories";
import HouseholdItems from "../../components/Ecommerce/homepage/HouseholdItems";
import Intro from "../../components/Ecommerce/homepage/Intro";
import HeroMobile from "../../components/Ecommerce/homepage/HeroMobile";

const Homepage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HeroMobile />
      {/* <FlashSaleCountdown /> */}
      {/* <FlashSales /> */}
      {/* <SponsoredProducts /> */}
      {/* <Dealoftheday /> */}
      <AccessoriesCategories />
      <HouseholdItems />
      <Intro />
    </div>
  );
};

export default Homepage;
