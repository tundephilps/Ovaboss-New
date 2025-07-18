import React, { useState } from "react";

const PromotionForm = () => {
  const [formData, setFormData] = useState({
    productName: "",
    productUrl: "",
    productCategory: "",
    productSubCategory: "",
    stockCount: "",
    productBrand: "",
    productColor: "",
    productModel: "",
    productWeight: "",
    productPrice: "",
    discountedPrice: "",
    deliveryOptions: [],
    summary: "",
    productImages: [],
  });

  const [options, setOptions] = useState([
    { id: 1, type: "", value: "", price: "" },
  ]);

  const [keyFeatures, setKeyFeatures] = useState([{ id: 1, feature: "" }]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDeliveryOptionsChange = (option) => {
    setFormData((prev) => ({
      ...prev,
      deliveryOptions: prev.deliveryOptions.includes(option)
        ? prev.deliveryOptions.filter((item) => item !== option)
        : [...prev.deliveryOptions, option],
    }));
  };

  const addNewOption = () => {
    const newId = Math.max(...options.map((o) => o.id)) + 1;
    setOptions((prev) => [
      ...prev,
      { id: newId, type: "", value: "", price: "" },
    ]);
  };

  const removeOption = (id) => {
    setOptions((prev) => prev.filter((option) => option.id !== id));
  };

  const updateOption = (id, field, value) => {
    setOptions((prev) =>
      prev.map((option) =>
        option.id === id ? { ...option, [field]: value } : option
      )
    );
  };

  const addNewFeature = () => {
    const newId = Math.max(...keyFeatures.map((f) => f.id)) + 1;
    setKeyFeatures((prev) => [...prev, { id: newId, feature: "" }]);
  };

  const removeFeature = (id) => {
    setKeyFeatures((prev) => prev.filter((feature) => feature.id !== id));
  };

  const updateFeature = (id, value) => {
    setKeyFeatures((prev) =>
      prev.map((feature) =>
        feature.id === id ? { ...feature, feature: value } : feature
      )
    );
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      productImages: [...prev.productImages, ...files],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("Options:", options);
    console.log("Key Features:", keyFeatures);
  };

  const handleReset = () => {
    setFormData({
      productName: "",
      productUrl: "",
      productCategory: "",
      productSubCategory: "",
      stockCount: "",
      productBrand: "",
      productColor: "",
      productModel: "",
      productWeight: "",
      productPrice: "",
      discountedPrice: "",
      deliveryOptions: [],
      summary: "",
      productImages: [],
    });
    setOptions([{ id: 1, type: "", value: "", price: "" }]);
    setKeyFeatures([{ id: 1, feature: "" }]);
  };

  return (
    <div className=" lg:p-6 p-2 mx-4 bg-white">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Product Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleInputChange}
            placeholder="Enter Product Name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Product URL and Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product URL: https://www.ovaboss.com/product/{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="productUrl"
              value={formData.productUrl}
              onChange={handleInputChange}
              placeholder="Enter Product Slug e.g product-name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Category
            </label>
            <select
              name="productCategory"
              value={formData.productCategory}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Item weight</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="books">Books</option>
              <option value="home">Home & Garden</option>
            </select>
          </div>
        </div>

        {/* Sub Category, Stock Count, Brand, Color */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Sub Category
            </label>
            <select
              name="productSubCategory"
              value={formData.productSubCategory}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Sub category</option>
              <option value="smartphones">Smartphones</option>
              <option value="laptops">Laptops</option>
              <option value="tablets">Tablets</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Stock Count <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="stockCount"
              value={formData.stockCount}
              onChange={handleInputChange}
              placeholder="Enter Stock Count"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Brand <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="productBrand"
              value={formData.productBrand}
              onChange={handleInputChange}
              placeholder="Enter Product Brand"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Color <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="productColor"
              value={formData.productColor}
              onChange={handleInputChange}
              placeholder="Enter Product Color"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>

        {/* Model, Weight, Price */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Model
            </label>
            <input
              type="text"
              name="productModel"
              value={formData.productModel}
              onChange={handleInputChange}
              placeholder="Enter Product Model"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Weight <span className="text-red-500">*</span>
            </label>
            <select
              name="productWeight"
              value={formData.productWeight}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select Item weight</option>
              <option value="0-1kg">0-1kg</option>
              <option value="1-5kg">1-5kg</option>
              <option value="5-10kg">5-10kg</option>
              <option value="10kg+">10kg+</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Price <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="productPrice"
              value={formData.productPrice}
              onChange={handleInputChange}
              placeholder="Enter Product Price e.g 3..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>

        {/* Second row for Model, Weight, Price */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Model
            </label>
            <input
              type="text"
              placeholder="Enter Product Model"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Weight <span className="text-red-500">*</span>
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select Item weight</option>
              <option value="0-1kg">0-1kg</option>
              <option value="1-5kg">1-5kg</option>
              <option value="5-10kg">5-10kg</option>
              <option value="10kg+">10kg+</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Price <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Product Price e.g 3..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>

        {/* Discounted Price */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Discounted Price <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="discountedPrice"
              value={formData.discountedPrice}
              onChange={handleInputChange}
              placeholder="Enter Product Sale Price"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>

        {/* Delivery Options */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Delivery Options <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.deliveryOptions.includes("Store Pickup")}
                onChange={() => handleDeliveryOptionsChange("Store Pickup")}
                className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              Store Pickup
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.deliveryOptions.includes("In Store")}
                onChange={() => handleDeliveryOptionsChange("In Store")}
                className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              In Store
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.deliveryOptions.includes("Shipping")}
                onChange={() => handleDeliveryOptionsChange("Shipping")}
                className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              Shipping
            </label>
          </div>
        </div>

        {/* Return Policy */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Return Policy <span className="text-red-500">*</span>
          </label>
          <textarea
            name="summary"
            placeholder="Enter product return policy"
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Summary */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Summary 0 <span className="text-red-500">*</span>
          </label>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleInputChange}
            placeholder="Enter product summary min 10 characters, and max 150 characters."
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Product Options */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Options <span className="text-red-500">*</span>
          </label>
          {options.map((option) => (
            <div key={option.id} className="grid md:grid-cols-3 gap-2 mb-2">
              <input
                type="text"
                placeholder="Enter Option 1 type eg. Size, Color, Cap..."
                value={option.type}
                onChange={(e) =>
                  updateOption(option.id, "type", e.target.value)
                }
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="Enter Option 1 value"
                value={option.value}
                onChange={(e) =>
                  updateOption(option.id, "value", e.target.value)
                }
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="Enter Option 1 Price"
                value={option.price}
                onChange={(e) =>
                  updateOption(option.id, "price", e.target.value)
                }
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {options.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeOption(option.id)}
                  className="text-red-500 hover:text-red-700 p-1"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addNewOption}
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-md text-sm font-medium"
          >
            Add New Option
          </button>
        </div>

        {/* Product Key Features */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Key feature 1 <span className="text-red-500">*</span>
          </label>
          {keyFeatures.map((feature) => (
            <div key={feature.id} className="flex items-center gap-2 mb-2">
              <input
                type="text"
                placeholder="Enter Product Key Feature 1"
                value={feature.feature}
                onChange={(e) => updateFeature(feature.id, e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {keyFeatures.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeFeature(feature.id)}
                  className="text-red-500 hover:text-red-700 p-1"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addNewFeature}
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-md text-sm font-medium"
          >
            Add New Feature
          </button>
        </div>

        {/* Product Images */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Images <span className="text-red-500">*</span>
          </label>
          <div className="mb-2">
            <span className="text-sm text-gray-500">Product Thumbnail</span>
            <div className="mt-1">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
              />
            </div>
          </div>

          <button
            type="button"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-md text-sm font-medium"
          >
            Add New Image
          </button>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end space-x-4 pt-6">
          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Reset
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="h-40" />
    </div>
  );
};

export default PromotionForm;
