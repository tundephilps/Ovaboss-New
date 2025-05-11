import React, { useState } from "react";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 50;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto pt-[40vh]">
      <div className="flex items-center justify-center ">
        <button
          onClick={handlePrevious}
          className="flex items-center px-4 py-2 text-gray-400 hover:text-blue-500"
          disabled={currentPage === 1}
        >
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          Previous
        </button>

        <button
          onClick={() => handlePageChange(1)}
          className={`w-8 h-8 flex items-center justify-center mx-1 ${
            currentPage === 1 ? "bg-yellow-500 text-white" : "hover:bg-gray-100"
          }`}
        >
          1
        </button>

        <button
          onClick={() => handlePageChange(2)}
          className={`w-8 h-8 flex items-center justify-center mx-1 ${
            currentPage === 2 ? "bg-yellow-500 text-white" : "hover:bg-gray-100"
          }`}
        >
          2
        </button>

        <button
          onClick={() => handlePageChange(3)}
          className={`w-8 h-8 flex items-center justify-center mx-1 ${
            currentPage === 3 ? "bg-yellow-500 text-white" : "hover:bg-gray-100"
          }`}
        >
          3
        </button>

        <span className="mx-1">...</span>

        <button
          onClick={() => handlePageChange(50)}
          className={`w-8 h-8 flex items-center justify-center mx-1 ${
            currentPage === 50
              ? "bg-yellow-500 text-white"
              : "hover:bg-gray-100"
          }`}
        >
          50
        </button>

        <button
          onClick={handleNext}
          className={`flex items-center px-4 py-2 rounded-md ${
            currentPage === totalPages
              ? "text-white"
              : "bg-[#c0c2c4] text-gray-700 hover:bg-gray-300"
          }`}
          disabled={currentPage === totalPages}
        >
          Next
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
