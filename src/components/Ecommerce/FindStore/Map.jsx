import React from "react";
import { useState } from "react";
import { FaStore } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Map = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="w-full h-full flex items-end justify-start relative">
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0"
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3110543484995!2d3.3495040999999994!3d6.6082167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9232998db68f%3A0x91893a3306d7b561!2s123%20Obafemi%20Awolowo%20Wy%2C%20Allen%2C%20Ikeja%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1747599553947!5m2!1sen!2sng"
        loading="lazy"
      ></iframe>

      <div className=" mb-40 ml-24 flex items-center justify-center bg-gray-100">
        {isVisible ? (
          <div className="bg-white rounded-xl shadow-md p-4 w-80 relative">
            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 text-black hover:text-gray-600"
            >
              <IoMdClose size={18} />
            </button>

            {/* Header */}
            <div className="flex items-start mb-2">
              <div className="bg-[#E6AE06] p-2 rounded-md mr-3">
                <FaStore className="text-white" />
              </div>
              <div>
                <h2 className="font-semibold text-black">
                  Ovaboss Ikeja Centre
                </h2>
                <p className="text-sm text-gray-700">
                  123 Awolowo Way, Ikeja, Lagos, Nigeria.
                </p>
              </div>
            </div>

            {/* Directions Button */}
            <button className="bg-[#E6AE06] text-black px-4 py-2 rounded-md hover:bg-yellow-500">
              Directions
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsVisible(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Show Location Card
          </button>
        )}
      </div>
    </div>
  );
};

export default Map;
