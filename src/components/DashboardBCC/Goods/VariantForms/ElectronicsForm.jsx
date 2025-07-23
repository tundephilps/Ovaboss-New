import React from "react";

const ElectronicsForm = () => {
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
            <label className="block mb-1 font-semibold">Age Group</label>
            <select className="w-full border rounded p-2">
              <option>Age group</option>
            </select>
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

          <div>
            <label className="block mb-1 font-semibold">System Memory</label>
            <select className="w-full border rounded p-2">
              <option>Ex: 16 GB | 16 GB memory...</option>
            </select>
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
            <label className="block mb-1 font-semibold">Main Material</label>
            <input
              type="text"
              placeholder="Main material"
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Material Family</label>
            <select className="w-full border rounded p-2">
              <option>Material family</option>
            </select>
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

          <div>
            <label className="block mb-1 font-semibold">Medium Option</label>
            <select className="w-full border rounded p-2">
              <option>Ex: CDL | Type of medium ex...</option>
            </select>
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

          <div>
            <label className="block mb-1 font-semibold">CPU Class</label>
            <input
              type="text"
              placeholder="Ex: Advantech all processor ca..."
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">
              Display Size (inch)
            </label>
            <select className="w-full border rounded p-2">
              <option>Ex: 15.6 inch | Original...</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">
              Production Country
            </label>
            <select className="w-full border rounded p-2">
              <option>Ex: China/Country where...</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Display Features</label>
            <select className="w-full border rounded p-2">
              <option>Ex: Anti - Glare Special fe...</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">
              Display Resolution
            </label>
            <select className="w-full border rounded p-2">
              <option>Ex: 1920 x 1080 | Standar...</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Drive Type</label>
            <select className="w-full border rounded p-2">
              <option>Ex: SSD | Type storage de...</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">
              Graphics Memory (GB)
            </label>
            <input
              type="text"
              placeholder="Ex: 8GB|Amount of memory..."
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">
              Graphics Processor
            </label>
            <input
              type="text"
              placeholder="Ex: RTX4060|Name of graphics c..."
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Voltage</label>
            <input
              type="text"
              placeholder="Ex: 110V|Input voltage..."
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Plug Type</label>
            <select className="w-full border rounded p-2">
              <option>Ex: UK Plug | Type of plug...</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Panel Type</label>
            <select className="w-full border rounded p-2">
              <option>Ex: LCD | Type of display panel</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Power Type</label>
            <select className="w-full border rounded p-2">
              <option>Ex: Battery - Power with AC...</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Camera Feature</label>
            <select className="w-full border rounded p-2">
              <option>Ex: Image Stabilization | Ca...</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Mount Type</label>
            <select className="w-full border rounded p-2">
              <option>Ex: Wall Mount | Type of...</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">
              Storage Capacity (GB)
            </label>
            <input
              type="text"
              placeholder="Ex: 1 TB HDD + 256 GB SSD (7..."
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">System Memory</label>
            <select className="w-full border rounded p-2">
              <option>Ex: 16 GB | 16 GB memory...</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Lense Type</label>
            <select className="w-full border rounded p-2">
              <option>Ex: Zoom lens | Type of len...</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Sensor Type</label>
            <select className="w-full border rounded p-2">
              <option>Ex: CMOS | Type of image...</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Battery Type</label>
            <select className="w-full border rounded p-2">
              <option>Ex: Lithium-ion | Type of b...</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Ventilation Type</label>
            <select className="w-full border rounded p-2">
              <option>Ex: Filterless ventillation | cle...</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Optical Zoom</label>
            <select className="w-full border rounded p-2">
              <option>Ex: 55X | Level of optical...</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Processor Type</label>
            <select className="w-full border rounded p-2">
              <option>Ex: Intel Core i7 | Operatin...</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">CPU Manufacturer</label>
            <select className="w-full border rounded p-2">
              <option>Ex: Intel (Manufacturer...</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">
              Battery Capacity (mAh)
            </label>
            <input
              type="text"
              placeholder="Ex: 5000mAh (batteryType+..."
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

export default ElectronicsForm;
