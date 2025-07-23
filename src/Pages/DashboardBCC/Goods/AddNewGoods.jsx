import React from "react";
import { useState } from "react";
import ProfileProgressCard from "../../../components/DashboardBCC/Homepage/ProfileProgressCard";
import LocationsTable from "../../../components/DashboardBCC/Goods/LocationsTable";
import FashionandAccessories from "../../../components/DashboardBCC/Goods/VariantForms/FashionandAccessories";
import GiftsandToys from "../../../components/DashboardBCC/Goods/VariantForms/GiftsandToys";
import HealthandFitness from "../../../components/DashboardBCC/Goods/VariantForms/HealthandFitness";
import HomeandOffice from "../../../components/DashboardBCC/Goods/VariantForms/HomeandOffice";
import AgricultureandFood from "../../../components/DashboardBCC/Goods/VariantForms/AgricultureandFood";
import BeautyProducts from "../../../components/DashboardBCC/Goods/VariantForms/BeautyProducts";
import ComputerandGadgets from "../../../components/DashboardBCC/Goods/VariantForms/ComputerandGadgets";
import ElectronicsForm from "../../../components/DashboardBCC/Goods/VariantForms/ElectronicsForm";
import AddVariantsTable from "../../../components/DashboardBCC/Goods/VariantForms/AddVariantsTable";
import { HiOutlinePlusCircle } from "react-icons/hi";

const AddNewGoods = () => {
  const [images, setImages] = useState(new Array(6).fill(null));
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    "Agriculture and Food",
    "Beauty Products",
    "Computer and Gadgets",
    "Electronics",
    "Fashion and Accessories",
    "Gifts and Toys",
    "Health and Fitness",
    "Home and Office",
  ];
  const colours = ["Red", "Blue", "Black", "Silver"];
  const sizes = ["Small", "Medium", "Large"];
  const countries = ["Nigeria", "Ghana", "Kenya"];
  const genders = ["Male", "Female", "Unisex"];
  const deliveryOptions = [
    "Delivery only",
    "Collection only",
    "Delivery and collection",
  ];
  const ageGroups = ["Adult", "Teen", "Child"];
  const states = ["Lagos", "Abuja", "Kano"];
  const sleeves = ["Short", "Long", "Sleeveless"];

  const handleImageChange = (index, event) => {
    const newImages = [...images];
    newImages[index] = URL.createObjectURL(event.target.files[0]);
    setImages(newImages);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Function to render the appropriate product specification component
  const renderProductSpecification = () => {
    switch (selectedCategory) {
      case "Agriculture and Food":
        return <AgricultureandFood />;
      case "Beauty Products":
        return <BeautyProducts />;
      case "Computer and Gadgets":
        return <ComputerandGadgets />;
      case "Electronics":
        return <ElectronicsForm />;
      case "Fashion and Accessories":
        return <FashionandAccessories />;
      case "Gifts and Toys":
        return <GiftsandToys />;
      case "Health and Fitness":
        return <HealthandFitness />;
      case "Home and Office":
        return <HomeandOffice />;
      default:
        return null;
    }
  };

  return (
    <div className=" bg-[#faf9f9] overflow-y-auto">
      <div className="py-6 px-4">
        <h1 className="font-bold text-2xl">Goods</h1>
        <p className="text-xs text-[#687280] ">
          Dashboard ›<span> All Goods ›</span>
          <span className="text-yellow-500">{"  "} Add New Goods</span>{" "}
        </p>
        <ProfileProgressCard completedFields={4} totalFields={10} />
      </div>
      <div className=" mx-auto px-4 py-6 bg-white">
        <h2 className="text-xl font-semibold mb-4">Product Information</h2>

        {/* Images */}
        <div className="grid grid-cols-3 lg:grid-cols-8 gap-2 mb-4">
          {images.map((img, i) => (
            <label
              key={i}
              className="border border-dashed border-yellow-500 flex items-center justify-center aspect-square text-xs text-gray-500 cursor-pointer rounded"
            >
              {img ? (
                <img
                  src={img}
                  alt={`Upload ${i}`}
                  className="object-cover w-full h-full"
                />
              ) : (
                <span>+ {i === 0 ? "Main Image" : "Image"}</span>
              )}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleImageChange(i, e)}
              />
            </label>
          ))}
        </div>

        <p className="text-xs text-gray-500 mb-4">
          Image needs to be between 500x500 and 2000x2000 pixels. White
          backgrounds are recommended. No watermarks. Max size 2MB.
        </p>

        <form className=" mx-auto py-4  gap-4 text-[10px]">
          <h2 className="text-lg font-semibold mb-4 pt-4">Product Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block mb-1 font-semibold">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Ex: Nexus Bedside Refrigerator (NX-65) - Silver"
                className="w-full border rounded p-2"
              />
            </div>

            {/* Create New Product */}
            <div>
              <label className="block mb-1 font-semibold">
                Category<span className="text-red-500">*</span>
              </label>
              <select
                className="w-full border rounded p-2"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="">Select Category</option>
                {categories.map((cat, idx) => (
                  <option key={idx} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-1 font-semibold">
                Product Sub-Category<span className="text-red-500">*</span>
              </label>
              <select className="w-full border rounded p-2">
                <option value="">Select Sub-Category</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-semibold">
                Product Type<span className="text-red-500">*</span>
              </label>
              <select className="w-full border rounded p-2">
                <option value="">Select Sub-Category</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4">
            <div>
              <label className="block mb-1 font-semibold">
                Brand<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Brand"
                className="w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">
                Production Country
              </label>
              <select className="w-full border rounded p-2">
                <option value="">Nigeria</option>
                <option value="">Ghana</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-semibold">
                Weight (kg)<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Ex: 1.2kg"
                className="w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Note</label>
              <input
                type="text"
                placeholder="Colour family"
                className="w-full border rounded p-2"
              />
            </div>
          </div>
          <div className="md:col-span-2 pt-4">
            <label className="block mb-1 font-semibold">
              Product description<span className="text-red-500">*</span>
            </label>
            <textarea
              rows={5}
              className="w-full border rounded p-2"
              placeholder="- Include only product-related information.\n- Write clearly and concisely.\n- Make sure the description matches your product images.\n- No promotional messages or quotes."
            ></textarea>
          </div>

          <div className="md:col-span-2 pt-4">
            <label className="block mb-1 font-semibold">Highlights</label>
            <textarea
              rows={4}
              className="w-full border rounded p-2"
              placeholder="[Key features in bullet points, minimum of 4 for a good content score]\nEx: Lightweight design · Noise cancellation · 20-hour battery life · Wireless connectivity"
            ></textarea>
          </div>

          {/* VARAINTS - Only render the selected category's component */}
          <h2 className="text-xl font-semibold mb-4 pt-4">Variants</h2>
          {selectedCategory && <>{renderProductSpecification()}</>}

          <div className="inline-flex my-12  items-center mx-auto w-full gap-2 rounded bg-yellow-400 justify-center py-2 font-medium hover:bg-yellow-500">
            <HiOutlinePlusCircle className="text-xl" />
            Add Variant
          </div>

          <AddVariantsTable />

          <div className="flex justify-end my-8">
            <div className="flex items-center  cursor-pointer text-xs gap-2 bg-[#FFD700] hover:bg-yellow-600 text-black font-semibold px-12 py-2 rounded">
              Submit
            </div>
          </div>
        </form>
        <div className="pb-40" />
      </div>
    </div>
  );
};

export default AddNewGoods;
