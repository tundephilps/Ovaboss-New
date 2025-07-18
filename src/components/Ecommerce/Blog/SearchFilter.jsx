import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchFilter = () => {
  const [email, setEmail] = useState("");
  const [activeCategory, setActiveCategory] = useState("Platform News");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "Platform News",
    "Business Tips",
    "Platform Guides",
    "Events",
  ];

  const handleSubscribe = () => {
    // Handle subscription logic here
    console.log("Subscribing email:", email);
    setEmail("");
  };

  const handleSearch = () => {
    // Handle search logic here
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="w-full ">
      {/* Header Section */}
      <div className="pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Ovaboss News & Learning Centre
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Explore platform updates, success stories, and helpful guides to grow
          your business
        </p>

        {/* Email Subscription */}
        <div className="flex max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            required
          />
          <button
            onClick={handleSubscribe}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-3 rounded-r-md transition-colors duration-200"
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* Navigation and Search Section */}
      <div className=" text-sm">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Category Navigation */}
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-medium mr-4">Category</span>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                      activeCategory === category
                        ? "bg-yellow-400 text-black"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Blog"
                  className="w-64 px-4 py-2 pr-12 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
                <button
                  onClick={handleSearch}
                  className="absolute right-0 top-0 h-full px-3 bg-yellow-400 hover:bg-yellow-500 rounded-r-md transition-colors duration-200"
                >
                  <FaSearch className="w-5 h-5 text-black" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
