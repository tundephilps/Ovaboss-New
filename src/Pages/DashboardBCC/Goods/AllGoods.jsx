import React from "react";
import ProfileProgressCard from "../../../components/DashboardBCC/Homepage/ProfileProgressCard";
import AllGoodsTable from "../../../components/DashboardBCC/Goods/AllGoodsTable";
import useProduct from "../../../hooks/useProduct";

const AllGoods = () => {
  const { isLoading, myProducts, handleDeleteProduct } = useProduct({ shouldGetMyProducts: true });

  return (
    <div className=" bg-[#faf9f9] overflow-y-auto">
      <div className="py-6 px-4">
        <h1 className="font-bold text-2xl">Goods</h1>{" "}
        <p className="text-xs text-[#687280] ">
          Dashboard ›<span className="text-yellow-500">{"  "} All Goods </span>{" "}
        </p>
        <ProfileProgressCard completedFields={4} totalFields={10} />
      </div>
      <AllGoodsTable 
        isLoading={isLoading}
        products={myProducts}
        handleDeleteProduct={handleDeleteProduct}
      />
    </div>
  );
};

export default AllGoods;
