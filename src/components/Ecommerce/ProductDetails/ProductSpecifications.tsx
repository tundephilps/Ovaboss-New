import React from "react";
import { FullProduct } from "../../../types/product.type";

const ProductSpecifications = ({ product }: { product: FullProduct }) => {
  return (
    <div className="mx-auto lg:p-6 p-4 bg-white">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Product Specifications
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Key Features */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4 border-b pb-2">
            Highlights
          </h3>
          
          <p className="text-gray-700 mb-4">
            {product.highlights}
          </p>
        </div>

        {/* What's in the box */}
        {/* <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4 border-b pb-2">
            What's in the box
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              iPad Pro (12.9-inch)
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              USB-C Charge Cable (1 meter)
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              20W USB-C Power Adapter
            </li>
          </ul>
        </div> */}

        {/* Specifications */}
        {/* <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4 border-b pb-2">
            Specifications
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>
                <span className="font-medium">SKU:</span> AP044MP7VA04CNAFAMZ
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>
                <span className="font-medium">Product Line:</span> VEE VEE
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>
                <span className="font-medium">Model:</span> IPAD 10 256GB WIFI
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>
                <span className="font-medium">Weight (kg):</span> 0.5
              </span>
            </li>
          </ul>
        </div> */}

        {/* Warranty */}
        {/* <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4 border-b pb-2">
            Warranty
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              1-year limited warranty for hardware defects
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              90 days of complimentary technical support
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Optional AppleCare+ extends coverage and includes accidental
              damage protection (extra cost)
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default ProductSpecifications;
