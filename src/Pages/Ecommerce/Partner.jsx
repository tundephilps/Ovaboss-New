import React, { useState } from "react";
import Upload from "../../assets/Upload.png";

const Partner = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    partnershipType: "",
    country: "Nigeria",
    phoneNumber: "",
    request: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#faf9f9] p-4">
      <div className="py-8">
        <h2 className="text-4xl font-bold text-center mb-2 ">
          Partner with Us
        </h2>
        <p className="text-center text-gray-600 mb-6 max-w-3xl">
          Whether you're a brand, investor, or event partner, we're open to
          meaningful collaborations. Let us know how you'd like to work with us.
        </p>
      </div>
      <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4 mx-auto text-center">
          Fill in your details
        </h3>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs"
        >
          {/* Full Name */}
          <div>
            <label className="block mb-1 font-medium">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              className="border p-2 w-full rounded"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Business Name */}
          <div>
            <label className="block mb-1 font-medium">Business Name</label>
            <input
              type="text"
              name="businessName"
              className="border p-2 w-full rounded"
              value={formData.businessName}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              className="border p-2 w-full rounded"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Partnership Type */}
          <div>
            <label className="block mb-1 font-medium">
              Partnership Type<span className="text-red-500">*</span>
            </label>
            <select
              name="partnershipType"
              className="border p-2 w-full rounded"
              value={formData.partnershipType}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="brand">Branding</option>
              <option value="event">Promotion / Event</option>
              <option value="investor">Investment / Business Proposal</option>
              <option value="event">Publication</option>
              <option value="event">Franchise</option>
            </select>
          </div>

          {/* Country */}
          <div>
            <label className="block mb-1 font-medium">Country</label>
            <select
              name="country"
              className="border p-2 w-full rounded"
              value={formData.country}
              onChange={handleChange}
            >
              <option value="Nigeria">Nigeria</option>
              <option value="Ghana">Ghana</option>
              <option value="Kenya">Kenya</option>
              {/* Add more countries if needed */}
            </select>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="+2348060000000"
              className="border p-2 w-full rounded "
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>

          {/* Describe Your Request */}
          <div className="md:col-span-1">
            <label className="block mb-1 font-medium">
              Describe Your Request
            </label>
            <textarea
              name="request"
              placeholder="Type Here"
              rows={4}
              className="border p-2 w-full rounded"
              value={formData.request}
              onChange={handleChange}
            />
          </div>

          {/* Upload Document */}
          <div>
            <label className="block mb-1 font-medium">Upload Document</label>
            <div className="border border-dashed bg-[#FFF9E6] border-yellow-400 flex items-center justify-center text-center text-sm text-yellow-600 p-4 rounded cursor-pointer h-full">
              <label className="w-full h-full items-center justify-center flex flex-col">
                <input
                  type="file"
                  name="file"
                  accept="application/pdf"
                  onChange={handleChange}
                  className="hidden"
                />
                <img src={Upload} />
                Drag, Drop or Browse
                <br />
                <span className="text-[10px] text-gray-500 block mt-1">
                  Supported format: PDF | Max size: 2MB
                </span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-[#202020] py-2 rounded font-semibold transition"
            >
              Submit Proposal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Partner;
