import React, { useState, useEffect } from "react";
import { FaBolt, FaChevronRight } from "react-icons/fa";
import { MdOfflineBolt } from "react-icons/md";

const FlashSaleCountdown = () => {
  // Initial time: 24 hours (in seconds)
  const [timeRemaining, setTimeRemaining] = useState(24 * 60 * 60);

  useEffect(() => {
    // Update the countdown every second
    const intervalId = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(intervalId);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Convert seconds to hours, minutes, seconds
  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  // Format the time with leading zeros
  const formatTime = (value) => {
    return value.toString().padStart(2, "0");
  };

  return (
    <>
      <div className="w-full bg-[#FFB58099] py-3 px-12 flex items-center justify-between">
        <div className="flex items-center">
          <MdOfflineBolt className="text-orange-500 mr-2" size={24} />
          <span className="font-semibold text-gray-800">Flash Sale</span>
        </div>

        <div className="font-mono">
          Time left:
          <span className="mx-1  font-bold">{hours}h</span>:
          <span className="mx-1  font-bold">{formatTime(minutes)}m </span>:
          <span className="mx-1  font-bold">{formatTime(seconds)}s</span>
        </div>

        <div className="flex items-center text-gray-600 hover:text-gray-800 cursor-pointer">
          <span className="text-sm mr-1">See All</span>
          <FaChevronRight size={12} />
        </div>
      </div>
    </>
  );
};

export default FlashSaleCountdown;
