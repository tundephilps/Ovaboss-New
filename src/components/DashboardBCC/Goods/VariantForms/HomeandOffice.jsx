import React from "react";

const HomeandOffice = () => {
  return (
    <div>
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
          <label className="block mb-1 font-semibold">Color</label>
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
          </select>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Power Type</label>
          <select className="w-full border rounded p-2">
            <option>Sleeve Length</option>
          </select>
        </div>

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
          <label className="block mb-1 font-semibold">Stock Count</label>
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

        <div>
          <label className="block mb-1 font-semibold">
            Package Size (L x W x H cm)
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Global price"
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Model</label>
          <input
            type="text"
            placeholder="Sale price"
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Warranty Type</label>
          <input type="date" className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Material Family</label>
          <input type="date" className="w-full border rounded p-2" />
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
  );
};

export default HomeandOffice;
