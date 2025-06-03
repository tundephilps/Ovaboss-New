import React, { useState } from "react";

const AddNewServiceForm = () => {
  const [features, setFeatures] = useState([""]);

  const addFeature = () => {
    setFeatures([...features, ""]);
  };

  return (
    <form className="mx-4 p-6 bg-white shadow-md rounded-md space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Product Name *
        </label>
        <input
          type="text"
          placeholder="Enter Services Name"
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Service URL *
          </label>
          <input
            type="text"
            placeholder="Enter service Slug e.g product-name"
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Service Price
          </label>
          <input
            type="text"
            placeholder="Enter Service Price e.g 150"
            className="w-full border rounded px-3 py-2"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Service Category *
          </label>
          <select className="w-full border rounded px-3 py-2">
            <option>Sub category</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Service Sub Category *
          </label>
          <select className="w-full border rounded px-3 py-2">
            <option>Sub category</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Service Description *
        </label>
        <textarea
          placeholder="Enter service description"
          className="w-full border rounded px-3 py-2"
          rows={4}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Product Key feature 1 *
        </label>
        {features.map((_, index) => (
          <input
            key={index}
            type="text"
            className="w-full border rounded px-3 py-2 mb-2"
            placeholder={`Feature ${index + 1}`}
          />
        ))}
        <button
          type="button"
          onClick={addFeature}
          className="bg-yellow-500 text-black font-bold px-4 py-2 rounded mt-2 hover:bg-yellow-600"
        >
          Add New Feature
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Service Images *
        </label>
        <div className="flex items-center">
          <label className="bg-gray-200 px-4 py-2 rounded cursor-pointer">
            Choose File
            <input type="file" className="hidden" />
          </label>
          <span className="ml-4 text-gray-500">No file chosen</span>
        </div>

        <button
          type="button"
          className="bg-yellow-500 text-black font-bold px-4 py-2 mt-4 rounded  hover:bg-yellow-600"
        >
          Add New Image
        </button>
      </div>

      {/* Next Button */}
      <div className="flex justify-end gap-6 mt-8">
        <button
          type="button"
          className="px-6 py-2 bg-white border-4 hover:bg-gray-100 text-black font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-colors"
        >
          Reset
        </button>
        <button
          type="button"
          className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-colors"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddNewServiceForm;
