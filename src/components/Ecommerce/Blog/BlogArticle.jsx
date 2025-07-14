import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { BsDot } from "react-icons/bs";

const BlogArticle = () => {
  return (
    <div className=" p-4 md:p-8">
      {/* Tag */}
      <p className="text-sm text-yellow-600 font-medium mb-2">News</p>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold mb-2">
        Ovaboss Partners with Lagos Business Hub to Empower Local Entrepreneurs
      </h1>

      {/* Author Info */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <FaUserCircle className="mr-2 text-lg" />
        <span className="mr-1">Fatimah Oladipupo</span>
        <BsDot />
        <span>June 25, 2025</span>
      </div>

      {/* Image */}
      <img
        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        alt="Ovaboss Partnership"
        className="w-full h-80 rounded-lg mb-6"
      />

      {/* Intro Paragraph */}
      <p className="text-gray-700 mb-4 leading-relaxed">
        We’re excited to announce a new partnership between Ovaboss and the
        Lagos Business Hub, aimed at equipping over 1,000 small and medium-sized
        businesses in Lagos State with the tools and visibility they need to
        thrive in today’s digital economy.
      </p>
      <p className="text-gray-700 mb-4 leading-relaxed">
        This collaboration is part of our broader mission to empower
        entrepreneurs across Nigeria and the UK by connecting them to customers,
        opportunities, and resources — all in one place.
      </p>

      {/* Section Title */}
      <h2 className="text-xl font-semibold mt-6 mb-4 text-gray-800">
        What this partnership means
      </h2>

      {/* Partnership Benefits List */}
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>
          <strong>🆓 Free</strong> product listing support
        </li>
        <li>📘 Business development resources and tutorials</li>
        <li>💸 Discounted seller verification packages</li>
        <li>📢 Promotion via featured vendor campaigns</li>
      </ul>

      {/* Final Note */}
      <p className="text-gray-700 mt-4 leading-relaxed">
        In addition, Ovaboss will run on-site onboarding sessions and digital
        training workshops in selected LGAs, helping traders transition from
        offline to online selling with ease.
      </p>
    </div>
  );
};

export default BlogArticle;
