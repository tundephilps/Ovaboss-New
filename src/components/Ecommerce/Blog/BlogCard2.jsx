import React from "react";

const BlogCard2 = () => {
  return (
    <div className="bg-white rounded-lg grid grid-cols-3 p-2 shadow-lg overflow-hidden">
      {/* Hero Image */}
      <div className="relative h-full bg-gradient-to-br from-blue-100 to-blue-200">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
          alt="Business handshake meeting"
          className="w-full h-48  object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="px-4 col-span-2">
        {/* Date */}
        <p className="text-sm text-gray-500 mb-2">July 8, 2025</p>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
          Ovaboss Partners with Lagos Business Hub
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-[10px] leading-relaxed mb-4">
          Ovaboss has entered a strategic partnership with Lagos Business Hub to
          empower over 1,000 small businesses by the end of 2025.
        </p>

        {/* Read More Button */}
        <div className="pt-2">
          <button className="bg-wgite hover:bg-gray-400 border-[#202020] border rounded-full text-[#202020] text-xs font-medium px-4 py-2  transition-colors duration-200">
            News
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard2;
