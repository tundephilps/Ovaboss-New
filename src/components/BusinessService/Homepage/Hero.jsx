import React from "react";
import workerImage from "../../../assets/Hero2.png"; // adjust the path as needed

const Hero = () => {
  return (
    <div className="bg-[#fff6da] py-10 px-4 rounded-xl max-w-7xl mx-auto relative">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Left Section: Text Box */}
        <div className="bg-white p-6 rounded-lg shadow max-w-sm absolute left-12 top-8 hidden lg:block">
          <h2 className="text-xl font-bold mb-2">Get more Creative</h2>
          <p className="text-gray-600 text-sm">
            Ovaboss Business Service is a network of independent creatives,
            connecting you with the talent and tools to get work underway
          </p>
        </div>

        {/* Center: Image */}
        <div className="mx-auto">
          <img
            src={workerImage}
            alt="Worker assembling furniture"
            className="rounded-lg w-full h-full mx-auto"
          />
        </div>

        {/* Right Section: How it works */}
        <div className="bg-white p-6 rounded-lg shadow max-w-sm absolute right-12 bottom-10 hidden lg:block">
          <h3 className="text-xl font-bold mb-4">How it works</h3>
          <ol className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="w-6 h-6 flex items-center justify-center bg-purple-500 text-white rounded-full mr-3 text-xs font-bold">
                1
              </span>
              Chose a Tasker by price and skills.
            </li>
            <li className="flex items-start">
              <span className="w-6 h-6 flex items-center justify-center bg-orange-400 text-white rounded-full mr-3 text-xs font-bold">
                2
              </span>
              Schedule a Tasker as early as today.
            </li>
            <li className="flex items-start">
              <span className="w-6 h-6 flex items-center justify-center bg-green-500 text-white rounded-full mr-3 text-xs font-bold">
                3
              </span>
              Chat, pay, tip and review all in one place.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Hero;
