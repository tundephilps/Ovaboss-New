import React from "react";

const AgricultureandFood = () => {
  return (
    <div>
      <div className="py-6 space-y-6">
        <div className="mx-auto pb-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block mb-1 font-semibold">
              Size<span className="text-red-500">*</span>
            </label>
            <select className="w-full border rounded p-2">
              <option>Size</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Colour</label>
            <input
              type="text"
              placeholder="Colour"
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">
              Target Country<span className="text-red-500">*</span>
            </label>
            <select className="w-full border rounded p-2">
              <option>Target country</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Gender</label>
            <select className="w-full border rounded p-2">
              <option>Gender</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">
              Delivery and Collection<span className="text-red-500">*</span>
            </label>
            <select className="w-full border rounded p-2">
              <option>Delivery and collection</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Shipped from</label>
            <select className="w-full border rounded p-2">
              <option>Shipped from</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">
              Target State/Region
            </label>
            <select className="w-full border rounded p-2">
              <option>Target state/region</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">
              Stock Count<span className="text-red-500">*</span>
            </label>
            <select className="w-full border rounded p-2">
              <option>Stock count</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Alcohol Age</label>
            <select className="w-full border rounded p-2">
              <option>Ex: 18+ (Minimum age req...)</option>
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
            <label className="block mb-1 font-semibold">Quantity</label>
            <input
              type="number"
              placeholder="Quantity"
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">
              Package Size (L x W x H cm)
            </label>
            <input
              type="text"
              placeholder="Package size"
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
            <label className="block mb-1 font-semibold">Sale Price (NGN)</label>
            <input
              type="text"
              placeholder="Sale price"
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Sale Start Date</label>
            <input
              type="date"
              placeholder="Start date"
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Sale End Date</label>
            <input
              type="date"
              placeholder="End date"
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">FDA</label>
            <input
              type="text"
              placeholder="Ex: £1467% (Indicates Food..."
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Youtube ID</label>
            <input
              type="text"
              placeholder="Youtube ID"
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">
              Warranty Duration
            </label>
            <select className="w-full border rounded p-2">
              <option>Warranty duration</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Warranty Type</label>
            <select className="w-full border rounded p-2">
              <option>Warranty type</option>
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

export default AgricultureandFood;
