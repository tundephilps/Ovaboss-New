import React from "react";
import { useState } from "react";
import ProfileProgressCard from "../../../components/DashboardBCC/Homepage/ProfileProgressCard";
import LocationsTable from "../../../components/DashboardBCC/Goods/LocationsTable";

const AddNewGoods = () => {
  const [images, setImages] = useState(new Array(6).fill(null));

  const categories = ["Electronics", "Appliances", "Furniture"];
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

            <div>
              <label className="block mb-1 font-semibold">
                Category<span className="text-red-500">*</span>
              </label>
              <select className="w-full border rounded p-2">
                <option value="">Select Category</option>
                {categories.map((cat, idx) => (
                  <option key={idx}>{cat}</option>
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
              <label className="block mb-1 font-semibold">Brand</label>
              <input
                type="text"
                placeholder="Brand"
                className="w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Colour</label>
              <select className="w-full border rounded p-2">
                <option value="">Select Colour</option>
                {colours.map((color, idx) => (
                  <option key={idx}>{color}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-1 font-semibold">Colour Family</label>
              <input
                type="text"
                placeholder="Colour family"
                className="w-full border rounded p-2"
              />
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

          <h2 className="text-xl font-semibold mb-4 pt-4">Variants</h2>
          <div className="mx-auto pb-4 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block mb-1 font-semibold">
                Size<span className="text-red-500">*</span>
              </label>
              <select className="w-full border rounded p-2">
                <option>Size</option>
                {sizes.map((s, idx) => (
                  <option key={idx}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-1 font-semibold">Note</label>
              <input
                type="text"
                placeholder="Ex: Galaxy A05"
                className="w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">
                Target Country<span className="text-red-500">*</span>
              </label>
              <select className="w-full border rounded p-2">
                <option>Target country</option>
                {countries.map((c, idx) => (
                  <option key={idx}>{c}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-1 font-semibold">Gender</label>
              <select className="w-full border rounded p-2">
                <option>Gender</option>
                {genders.map((g, idx) => (
                  <option key={idx}>{g}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-1 font-semibold">
                Delivery and Collection<span className="text-red-500">*</span>
              </label>
              <select className="w-full border rounded p-2">
                <option>Delivery and collection</option>
                {deliveryOptions.map((d, idx) => (
                  <option key={idx}>{d}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-1 font-semibold">Shipped from</label>
              <input
                type="text"
                placeholder="Shipped from"
                className="w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">
                Target State/Region
              </label>
              <select className="w-full border rounded p-2">
                <option>Target state/region</option>
                {states.map((s, idx) => (
                  <option key={idx}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-1 font-semibold">Sleeve Length</label>
              <select className="w-full border rounded p-2">
                <option>Sleeve Length</option>
                {sleeves.map((s, idx) => (
                  <option key={idx}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-1 font-semibold">Age Group</label>
              <select className="w-full border rounded p-2">
                <option>Age group</option>
                {ageGroups.map((a, idx) => (
                  <option key={idx}>{a}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-1 font-semibold">
                Seller SKU<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Seller SKU"
                className="w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">GTIN Barcode</label>
              <input
                type="text"
                placeholder="GTIN barcode"
                className="w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Quantity</label>
              <input
                type="number"
                placeholder="Quantity"
                className="w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">
                Global Price (NGN)<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Global price"
                className="w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">
                Sale Price (NGN)
              </label>
              <input
                type="text"
                placeholder="Sale price"
                className="w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">
                Sale Start Date
              </label>
              <input type="date" className="w-full border rounded p-2" />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Sale End Date</label>
              <input type="date" className="w-full border rounded p-2" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewGoods;
