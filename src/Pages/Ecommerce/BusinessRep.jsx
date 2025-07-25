import React, { useState, useRef, useEffect } from "react";

const MultiSelectDropdown = ({ label, options, selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleOption = (value) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((v) => v !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="block mb-1 font-medium">
        {label}
        <span className="text-red-500">*</span>
      </label>
      <div
        className="border p-2 rounded w-full cursor-pointer bg-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected.length > 0 ? selected.join(", ") : "Select skills"}
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-1 bg-white border w-full rounded shadow max-h-60 overflow-auto">
          {options.map((option) => (
            <label
              key={option}
              className="flex items-center px-3 py-2 hover:bg-gray-100"
            >
              <input
                type="checkbox"
                checked={selected.includes(option)}
                onChange={() => toggleOption(option)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

const BusinessRep = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    ovabossPin: "",
    email: "",
    phone: "",
    country: "Nigeria",
    state: "",
    city: "",
    education: "",
    profession: "",
    skill: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const [selectedSkills, setSelectedSkills] = useState([]);

  const skillOptions = [
    "Sales & Marketing",
    "Public Speaking",
    "Digital Literacy",
    "Social Media Promotion",
    "Community Mobilization",
    "Others ",
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#faf9f9] p-4">
      <div className="py-8">
        <h2 className="text-4xl font-bold text-center mb-2 ">
          Become a Business Representative
        </h2>
        <p className="text-center text-gray-600 mb-6 max-w-3xl">
          Join us as a Business Representative and help us reach more sellers in
          your area. You’ll play a key role in onboarding vendors, spreading
          awareness, and supporting local commerce.
        </p>
      </div>
      <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4 mx-auto text-center">
          Fill in your details
        </h3>
        {/* ✅ Yellow Info Banner */}
        <div className="bg-[#FFF6DA] border border-yellow-300 text-sm text-gray-800 px-4 py-3 rounded-md mb-6 flex items-start gap-2">
          <span className="text-xl">⚠️</span>
          <div>
            <p className="font-semibold">
              To apply, you must enter your Ovaboss PIN.
            </p>
            <p className="text-xs">
              You can find this PIN on your PCC profile after logging into your
              account.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className=" text-xs space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* First Name */}
            <div>
              <label className="block mb-1 font-medium">
                First Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                className="border p-2 w-full rounded"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block mb-1 font-medium">
                Last Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                className="border p-2 w-full rounded"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            {/* Ovaboss PIN */}
            <div>
              <label className="block mb-1 font-medium">
                Ovaboss PIN<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="ovabossPin"
                className="border p-2 w-full rounded"
                value={formData.ovabossPin}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

            {/* Country */}
            <div>
              <label className="block mb-1 font-medium">
                Country<span className="text-red-500">*</span>
              </label>
              <select
                name="country"
                className="border p-2 w-full rounded"
                value={formData.country}
                onChange={handleChange}
                required
              >
                <option value="Nigeria">Nigeria</option>
                <option value="Ghana">Ghana</option>
                <option value="Kenya">Kenya</option>
                {/* Add more countries as needed */}
              </select>
            </div>
            {/* Phone Number */}
            <div>
              <label className="block mb-1 font-medium">
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                className="border p-2 w-full rounded"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* State */}
            <div>
              <label className="block mb-1 font-medium">
                State/Region<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="state"
                className="border p-2 w-full rounded"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>

            {/* City */}
            <div>
              <label className="block mb-1 font-medium">
                City<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="city"
                className="border p-2 w-full rounded"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            {/* Zip Code */}
            <div>
              <label className="block mb-1 font-medium">
                Post/Zip code<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                className="border p-2 w-full rounded"
                required
              />
            </div>

            {/* Education Level */}
            <div>
              <label className="block mb-1 font-medium">
                Education Level<span className="text-red-500">*</span>
              </label>
              <select
                name="education"
                className="border p-2 w-full rounded"
                value={formData.education}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="High School">No Formal Education</option>
                <option value="BSc">Primary School</option>
                <option value="MSc">Secondary School</option>
                <option value="PhD">Bachelor's Degree</option>
                <option value="">Master's Degree</option>
                <option value="">Vocational Training</option>
                <option value="">Others</option>
              </select>
            </div>

            {/* Profession */}
            <div>
              <label className="block mb-1 font-medium">
                Profession<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="profession"
                className="border p-2 w-full rounded"
                value={formData.profession}
                onChange={handleChange}
                required
              />
            </div>

            {/* Skill */}
            <MultiSelectDropdown
              label="Skill"
              options={skillOptions}
              selected={selectedSkills}
              setSelected={setSelectedSkills}
            />
          </div>

          {/* Reason for Applying */}
          <div className="md:col-span-3">
            <label className="block mb-1 font-medium">
              Why do you want to become a Business Rep for Ovaboss?
            </label>
            <textarea
              name="reason"
              rows={4}
              className="border p-2 w-full rounded"
              value={formData.reason}
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-3 mt-4">
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-[#202020] py-2 rounded font-semibold transition"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BusinessRep;
