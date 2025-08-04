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
import useProduct from "../../../hooks/useProduct";
import useCountry from "../../../hooks/useCountry";
import Loading from "../../../components/Loading";
import { useNavigate, useParams } from "react-router-dom";
import { ucfirst } from "../../../utils";
import { useAppContext } from "../../../context/AppContext";

const AddNewGoods = () => {
  const [images, setImages] = useState(new Array(6).fill(null));
  const [selectedCategory, setSelectedCategory] = useState("");

  const {
    isLoading,
    inputs,
    productCategories,
    productSubCategories,
    productVariants,
    variantInput,
    table,
    variantContainerRef,
    isAddVariant,
    businessCategoryTypes,
    getProductSubCategory,
    getProductVariants,
    handleInput,
    handleVariantInput,
    handleAddVariant,
    handleDeleteVariant,
    handleEditVariant,
    handleUpdateVariant,
    handleAddProduct,
  } = useProduct();
  const { countries } = useCountry();
  const { currentProduct } = useAppContext();
  const { section } = useParams();
  const navigate = useNavigate();

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
    const file = event.target.files[0];
    const newImages = [...images];
    newImages[index] = URL.createObjectURL(file);

    const newInputImages = [...inputs.images];
    newInputImages[index] = file;

    handleInput('images', newInputImages);

    setImages(newImages);
  };

  const handleCategoryChange = (categoryId) => {
    handleInput('category_id', categoryId);
    getProductSubCategory(categoryId);
  };

  const handleSubCategoryChange = (subCategoryId) => {
    handleInput('sub_category_id', subCategoryId);
    getProductVariants(subCategoryId);
  };

  const handleProductionCountryChange = (country) => {
    handleInput('production_country', country)
  }

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

  React.useEffect(() => {
    if(section === 'update' && !currentProduct) {
      navigate('/goods/product/add')
    }
  }, [])

  return (
    <div className=" bg-[#faf9f9] overflow-y-auto">
      <div className="py-6 px-4">
        <h1 className="font-bold text-2xl">Goods</h1>
        <p className="text-xs text-[#687280] ">
          Dashboard ›<span> All Goods ›</span>
          <span className="text-yellow-500">{"  "} {ucfirst(section)} Product</span>{" "}
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
                value={inputs.title}
                onChange={e => handleInput('title', e.target.value)}
              />
            </div>

            {/* Create New Product */}
            <div>
              <label className="block mb-1 font-semibold">
                Category<span className="text-red-500">*</span>
              </label>
              <select
                className="w-full border rounded p-2"
                value={inputs.category_id}
                onChange={e => handleCategoryChange(e.target.value)}
              >
                <option value="">Select Category</option>
                {productCategories.map((item, idx) => (
                  <option key={idx} value={item.categoryId}>
                    {item.categoryName}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-1 font-semibold">
                Product Sub-Category<span className="text-red-500">*</span>
              </label>
              <select 
                value={inputs.sub_category_id}
                className="w-full border rounded p-2"
                onChange={e => handleSubCategoryChange(e.target.value)}
              >
                {isLoading.productSubCategory &&
                  <option value="" selected>Getting Sub-Categories</option>
                }

                <option value="">Select Sub-Category</option>
                {productSubCategories.map((item, idx) => (
                  <option key={idx} value={item.id}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-1 font-semibold">
                Product Type<span className="text-red-500">*</span>
              </label>
              <select 
                value={inputs.product_type_id}
                className="w-full border rounded p-2"
                onChange={e => handleInput('product_type_id', e.target.value)}
              >
                <option value="">Select Product Type</option>
                 {businessCategoryTypes.map((item, idx) => (
                  <option key={idx} value={item.id}>
                    {item.type}
                  </option>
                ))}
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
                value={inputs.brand}
                onChange={e => handleInput('brand', e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">
                Production Country
              </label>
              <select 
                className="w-full border rounded p-2"
                value={inputs.production_country}
                onChange={e => handleProductionCountryChange(e.target.value)}
              >
            
                <option value="">Select Country</option>
                {countries.map((item, idx) => (
                  <option key={idx} value={item.country}>
                    {item.country}
                  </option>
                ))}
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
                value={inputs.weight}
                onChange={e => handleInput('weight', e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Note</label>
              <input
                type="text"
                placeholder="Colour family"
                className="w-full border rounded p-2"
                value={inputs.notes}
                onChange={e => handleInput('notes', e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-semibold">
              Main Price<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="2000"
              className="w-full border rounded p-2"
              value={inputs.main_price}
              onChange={e => handleInput('main_price', e.target.value)}
            />
          </div>

          <div className="md:col-span-2 pt-4">
            <label className="block mb-1 font-semibold">
              Product description<span className="text-red-500">*</span>
            </label>
            <textarea
              rows={5}
              className="w-full border rounded p-2"
              placeholder="- Include only product-related information.\n- Write clearly and concisely.\n- Make sure the description matches your product images.\n- No promotional messages or quotes."
              value={inputs.description}
              onChange={e => handleInput('description', e.target.value)}
            ></textarea>
          </div>

          <div className="md:col-span-2 pt-4">
            <label className="block mb-1 font-semibold">Highlights</label>
            <textarea
              rows={4}
              className="w-full border rounded p-2"
              placeholder="[Key features in bullet points, minimum of 4 for a good content score]\nEx: Lightweight design · Noise cancellation · 20-hour battery life · Wireless connectivity"
              value={inputs.highlights}
              onChange={e => handleInput('highlights', e.target.value)}
            ></textarea>
          </div>

          <div ref={variantContainerRef}>
            {/* VARAINTS - Only render the selected category's component */}
            <h2 className="text-xl font-semibold mb-4 pt-4">Variants</h2>
            {/* {selectedCategory && <>{renderProductSpecification()}</>} */}

            <div className="py-6 space-y-6">
              <div className="mx-auto pb-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                {productVariants.map((item, key) => (
                  <div key={key}>
                    <label className="block mb-1 font-semibold">{item.name}</label>
                    <input
                      type="text"
                      placeholder={item.name}
                      className="w-full border rounded p-2"
                      onChange={e => handleVariantInput(item, e.target.value)}
                      value={variantInput[item.id]?.value}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button 
            onClick={isAddVariant ? handleAddVariant : handleUpdateVariant}
            className="inline-flex my-12  items-center mx-auto w-full gap-2 rounded bg-yellow-400 justify-center py-2 font-medium hover:bg-yellow-500"
          >
            <HiOutlinePlusCircle className="text-xl" />
            {isAddVariant ? 'Add' : 'Update'} Variant
          </button>

          <AddVariantsTable 
            {...table} 
            handleDeleteVariant={handleDeleteVariant}
            handleEditVariant={handleEditVariant}
          />

          <div className="flex justify-end my-8">
            <div 
              onClick={handleAddProduct} 
              aria-disabled={isLoading.addProduct}
              className="flex items-center  cursor-pointer text-xs gap-2 bg-[#FFD700] hover:bg-yellow-600 text-black font-semibold px-12 py-2 rounded"
            >
              {isLoading.addProduct ? <Loading/> : 'Submit'}
            </div>
          </div>
        </form>
        <div className="pb-40" />
      </div>
    </div>
  );
};

export default AddNewGoods;
