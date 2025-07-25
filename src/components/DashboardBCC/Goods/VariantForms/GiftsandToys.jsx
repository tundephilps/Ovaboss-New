import React from "react";

const GiftsandToys = () => {
  return (
    <div>
      <div className="py-6 space-y-6">
        <div className="mx-auto pb-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Row 1 */}
          <div>
            <label className="block mb-1 font-semibold">
              Size<span className="text-red-500">*</span>
            </label>
            <select className="w-full border rounded p-2">
              <option>Size</option>
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
            </select>
          </div>
          <div>
            <label className="block mb-1 font-semibold">Gender</label>
            <select className="w-full border rounded p-2">
              <option>Gender</option>
            </select>
          </div>

          {/* Row 2 */}
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
            <label className="block mb-1 font-semibold">Sleeve Length</label>
            <select className="w-full border rounded p-2">
              <option>Sleeve Length</option>
            </select>
          </div>

          {/* Row 3 */}
          <div>
            <label className="block mb-1 font-semibold">Age Group</label>
            <select className="w-full border rounded p-2">
              <option>Age group</option>
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
            <label className="block mb-1 font-semibold">
              Stock Count<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Stock count"
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

          {/* Row 4 */}
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
            <input type="date" className="w-full border rounded p-2" />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Sale End Date</label>
            <input type="date" className="w-full border rounded p-2" />
          </div>

          {/* Row 5 */}
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
              Warranty Duration
            </label>
            <input
              type="text"
              placeholder="Warranty duration"
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Main Material</label>
            <select className="w-full border rounded p-2">
              <option>Main material</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-semibold">Material Family</label>
            <select className="w-full border rounded p-2">
              <option>Material family</option>
            </select>
          </div>

          {/* Row 6 */}
          <div>
            <label className="block mb-1 font-semibold">Warranty Type</label>
            <select className="w-full border rounded p-2">
              <option>Warrant type</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-semibold">Modem Option</label>
            <input
              type="text"
              placeholder="Ex: DSL (Type of modem used)"
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Model</label>
            <input
              type="text"
              placeholder="Model"
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

          {/* Row 7 */}
          <div>
            <label className="block mb-1 font-semibold">Toys Features</label>
            <input
              type="text"
              placeholder="Ex: Light-up, Sound effect ..."
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">
              Battery Capacity (mAh)
            </label>
            <input
              type="text"
              placeholder="Ex: 300 (Battery capacity...)"
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Power Type</label>
            <input
              type="text"
              placeholder="Ex: Battery - Power with AC ..."
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">
              Production Country
            </label>
            <input
              type="text"
              placeholder="Ex: China (Country where...)"
              className="w-full border rounded p-2"
            />
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

export default GiftsandToys;
