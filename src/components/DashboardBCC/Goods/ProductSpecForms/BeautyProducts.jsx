import React from "react";

const BeautyProducts = () => {
  return (
    <div>
      <div className="py-6 space-y-6">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-1 font-medium">
              Package Size (L x W x H cm)
            </label>
            <input
              type="text"
              placeholder="Package size"
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Main Material</label>
            <input
              type="text"
              placeholder="Main material"
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Material Family</label>
            <select className="border p-2 rounded w-full text-gray-500">
              <option>Material family</option>
            </select>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-1 font-medium">Warranty Duration</label>
            <select className="border p-2 rounded w-full text-gray-500">
              <option>Warranty duration</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium">Warranty Type</label>
            <select className="border p-2 rounded w-full text-gray-500">
              <option>Warrant type</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium">Youtube ID</label>
            <input
              type="text"
              placeholder="Youtube ID"
              className="border p-2 rounded w-full"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-1 font-medium">Certification</label>
            <input
              type="text"
              placeholder="Ex: E14679G (Indicate Food and Drug Age...)"
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Model</label>
            <input
              type="text"
              placeholder="Model"
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Production Country</label>
            <select className="border p-2 rounded w-full text-gray-500">
              <option>Ex: China</option>
            </select>
          </div>
        </div>

        {/* Row 4 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-1 font-medium">Product line</label>
            <input
              type="text"
              placeholder="Ex: E14679G (Indicate Food and Drug Age...)"
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">FDA</label>
            <input
              type="text"
              placeholder="Model"
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Hair Type</label>
            <select className="border p-2 rounded w-full text-gray-500">
              <option>Ex: Striaght, Curly, etc </option>
            </select>
          </div>
        </div>

        {/* Row 5 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-1 font-medium">Skin Type</label>
            <input
              type="text"
              placeholder="Ex: E14679G (Indicate Food and Drug Age...)"
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Volume</label>
            <input
              type="text"
              placeholder="Model"
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Season</label>
            <select className="border p-2 rounded w-full text-gray-500">
              <option>Ex: Striaght, Curly, etc </option>
            </select>
          </div>
        </div>

        {/* "What is in the box" Section */}
        <div>
          <label className="block mb-1 font-medium">What is in the box</label>
          <div className="border rounded">
            <textarea
              rows="3"
              className="w-full p-2 text-sm outline-none"
              placeholder="Ex: Lightweight design - Noise cancellation - 20-hour battery life - Wireless connectivity"
            ></textarea>
          </div>
        </div>

        {/* "Product Warranty" Section */}
        <div>
          <label className="block mb-1 font-medium">Product Warranty</label>
          <div className="border rounded">
            <textarea
              rows="3"
              className="w-full p-2 text-sm outline-none"
              placeholder="Ex: 1 year limited warranty [address and terms...]"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautyProducts;
