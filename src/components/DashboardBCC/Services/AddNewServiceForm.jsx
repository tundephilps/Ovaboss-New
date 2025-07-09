import { useState } from "react";
import { FaBold, FaItalic, FaListUl, FaListOl } from "react-icons/fa";

export default function AddNEwServiceForm() {
  const [images, setImages] = useState(new Array(6).fill(null));
  const [form, setForm] = useState({
    name: "",
    category:
      "Design & Creative, Development & IT, Writing & Content, Digital Marketing, Customer Service, Business & Consulting, Pet Services, Fashion and Tailoring ",
    subCategory: "",
    price: "",
    country: "",
    state: "",
    url: "",
    description: "",
    whyChoose: "",
  });

  const handleImageChange = (index, event) => {
    const newImages = [...images];
    newImages[index] = URL.createObjectURL(event.target.files[0]);
    setImages(newImages);
  };

  const updateForm = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className=" mx-auto px-4 py-6 bg-white">
      <h2 className="text-xl font-semibold mb-4">Service Information</h2>

      {/* Images */}
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 mb-4">
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

      {/* Input Fields */}
      <div className="grid sm:grid-cols-3 gap-4 mb-4">
        <div className="flex flex-col ">
          <label className="text-xs pb-1">
            Name <span className="text-red-700">*</span>{" "}
          </label>
          <input
            placeholder="Ex: Nexus Bedside Refrigerator (NX-65) - Silver"
            className="border rounded px-3 py-2 col-span-3 sm:col-span-1"
            value={form.name}
            onChange={(e) => updateForm("name", e.target.value)}
          />
        </div>

        <div className="flex flex-col ">
          <label className="text-xs pb-1">
            Category <span className="text-red-700">*</span>{" "}
          </label>
          <select
            className="border rounded px-3 py-2"
            value={form.category}
            onChange={(e) => updateForm("category", e.target.value)}
          >
            <option>Category</option>
          </select>
        </div>

        <div className="flex flex-col ">
          <label className="text-xs pb-1">
            Sub Category <span className="text-red-700">*</span>{" "}
          </label>
          <select
            className="border rounded px-3 py-2"
            value={form.subCategory}
            onChange={(e) => updateForm("subCategory", e.target.value)}
          >
            <option>Sub-Category</option>
          </select>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-4 mb-4">
        <div className="flex flex-col ">
          <label className="text-xs pb-1">
            Price <span className="text-yellow-500">(NGN) </span>
            <span className="text-red-700">*</span>{" "}
          </label>
          <input
            type="number"
            placeholder="Price"
            className="border rounded px-3 py-2"
            value={form.price}
            onChange={(e) => updateForm("price", e.target.value)}
          />
        </div>

        <div className="flex flex-col ">
          <label className="text-xs pb-1">
            Target Country <span className="text-red-700">*</span>{" "}
          </label>
          <select
            className="border rounded px-3 py-2"
            value={form.country}
            onChange={(e) => updateForm("country", e.target.value)}
          >
            <option>Target Country</option>
          </select>
        </div>

        <div className="flex flex-col ">
          <label className="text-xs pb-1">Target State/Region</label>
          <select
            className="border rounded px-3 py-2"
            value={form.state}
            onChange={(e) => updateForm("state", e.target.value)}
          >
            <option>Target state/region</option>
          </select>
        </div>

        <div className="flex flex-col ">
          <label className="text-xs pb-1">
            Service URL <span className="text-red-700">*</span>{" "}
          </label>
          <input
            type="url"
            placeholder="https://www.ovaboss.com/service/"
            className="border rounded px-3 py-2 "
            value={form.url}
            onChange={(e) => updateForm("url", e.target.value)}
          />
        </div>
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="text-xs pb-1">
          Service Descripton <span className="text-red-700">*</span>{" "}
        </label>
        <div className="flex items-center gap-2 pt-3 text-gray-500 text-sm">
          <FaBold />
          <FaItalic />
          <FaListUl />
          <FaListOl />
        </div>
        <textarea
          rows={5}
          className="w-full border rounded px-3 py-2 text-sm"
          placeholder="Include only product-related info. Write clearly and concisely..."
          value={form.description}
          onChange={(e) => updateForm("description", e.target.value)}
        />
      </div>

      {/* Why Choose Us */}
      <div>
        <label className="text-xs ">
          Why Choose Us? <span className="text-red-700">*</span>{" "}
        </label>
        <div className="flex items-center gap-2 pt-3 text-gray-500 text-sm">
          <FaBold />
          <FaItalic />
          <FaListUl />
          <FaListOl />
        </div>
        <textarea
          rows={5}
          className="w-full border rounded px-3 py-2 text-sm"
          placeholder="Key features in bullet points..."
          value={form.whyChoose}
          onChange={(e) => updateForm("whyChoose", e.target.value)}
        />
      </div>

      <div className="inline-flex justify-end gap-4 w-full mt-12">
        <div className="p-2 border-2 rounded-md px-6 text-sm cursor-pointer hover:bg-gray-200">
          Reset
        </div>
        <div className="p-2 border rounded-md px-6 text-sm cursor-pointer bg-[#FFD700] hover:bg-yellow-600">
          Submit
        </div>
      </div>
    </div>
  );
}
