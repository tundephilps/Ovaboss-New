import React from "react";
import ChangeBusiness from "../../../components/DashboardBCC/Homepage/ChangeBusiness";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import useBusinessAccount from "../../../hooks/useBusinessAccount";
import Loading from "../../../components/Loading";

interface BusinessOnboarding {
  businessAccountHooks: ReturnType<typeof useBusinessAccount>;
  setCurrentSection: React.Dispatch<React.SetStateAction<'businessAccount' | 'businessDetails'>>;
}

const BusinessOnboarding = ({ businessAccountHooks, setCurrentSection }: BusinessOnboarding) => {
  const [formData, setFormData] = useState({
    categoryType: [],
    saleType: [],
    businessScale: "",
    businessCategory: "",
    specialCategory: "",
    businessTypes: [],
  });

  const { isLoading, businessData, inputs, isSaving, handleArrayInput, handleInput, handleCreateBusiness } = businessAccountHooks;

  const handleCheckbox = (group, value) => {
    setFormData((prev) => {
      const current = prev[group];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [group]: updated };
    });
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if(isLoading) {
    return <Loading/>
  }

  return (
    <div className=" bg-[#faf9f9] overflow-y-auto">
      <ChangeBusiness onBackClick={undefined} onCreateClick={undefined} />
      <div className="py-6 px-4">
        <h1 className="font-bold text-2xl pb-2">Profile</h1>
        <p className="text-xs text-[#687280] ">
          Dashboard ›<span> Business Profile ›</span>
          <span> Add New Business ›</span>
          <span className="text-yellow-500">
            {"  "} Business Onboarding{" "}
          </span>{" "}
        </p>
      </div>
      <div className="mx-4 p-6 bg-white rounded-md shadow">
        <div className=" ">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-4">
            Business Details
          </h2>

          <div className="inline-flex items-center justify-between w-full">
            {/* Business Category Type */}
            <div className="mb-4">
              <label className="block font-medium text-gray-700 mb-1">
                Business Category Type <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-6">
                {businessData?.categoryTypes.map((item, key) => (
                  <label key={key} className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={inputs.businessDetails.business_category_type_id.includes(item.id)}
                      onChange={() => handleArrayInput("business_category_type_id", +item.id)}
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    {item.type}
                  </label>
                ))}
              </div>
            </div>

            {/* Sale Type */}
            <div className="mb-4">
              <label className="block font-medium text-gray-700 mb-1">
                Sale Type <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-6 flex-wrap">
                {businessData?.salesTypes.map((item, key) => (
                  <label key={key} className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={inputs.businessDetails.sale_type_id.includes(item.id)}
                      onChange={() => handleArrayInput("sale_type_id", item.id)}
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    {item.type}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Business scale <span className="text-red-500">*</span>
              </label>
              <select
                value={String(inputs.businessDetails.business_scale_id)}
                onChange={(e) => handleInput("businessDetails.business_scale_id", +e.target.value)}
                className="w-full border p-2 border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              >
                <option value="">Please select Business scale</option>
                {businessData?.businessScales.map((item, key) => (
                  <option value={String(item.id)} key={key}>{item.scale}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Business Category <span className="text-red-500">*</span>
              </label>
              <select
                value={String(inputs.businessDetails.business_category_id)}
                onChange={(e) =>
                  handleInput("businessDetails.business_category_id", +e.target.value)
                }
                className="w-full border p-2 border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              >
                <option value="">Please select Business Category</option>
                {businessData?.categories.map((item, key) => (
                  <option value={String(item.id)} key={key}>{item.category}</option>
                ))}
              </select>
            </div>
          </div>

          {/* <div className="mb-4">
            <label className="block font-medium text-gray-700 mb-1">
              Special Category <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.specialCategory}
              onChange={(e) => handleChange("specialCategory", e.target.value)}
              className="w-full border p-2 border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
            >
              <option value="">Please select Business scale</option>
              <option value="Women-led">Women-led</option>
              <option value="Youth-led">Youth-led</option>
              <option value="Veteran-owned">Veteran-owned</option>
            </select>
          </div> */}

          {/* Type of Business */}
          <div className="mb-6">
            <label className="block font-medium text-gray-700 mb-1">
              Type of Business <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {businessData?.businessTypes.map((item, key) => (
                <label key={key} className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={inputs.businessDetails.business_type_id.includes(item.id)}
                    onChange={() => handleArrayInput("business_type_id", item.id)}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  {item.type}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Next Button */}
        <div className="flex justify-end mt-8 gap-4 mb-40">
          <button onClick={() => setCurrentSection('businessAccount')} className="px-6 py-2 border border-yellow-500 text-yellow-600 rounded-md hover:bg-yellow-50">
            Back
          </button>
          <button
            onClick={handleCreateBusiness}
            type="button"
            className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-colors"
          >
            { isSaving ? <Loading/> : 'Create Business' }
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessOnboarding;
