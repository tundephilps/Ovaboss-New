import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-2 rounded-full ${
          currentPage === 1
            ? "text-yellow-100"
            : "text-yellow-500 hover:bg-yellow-100"
        }`}
      >
        <FaChevronLeft />
      </button>

      {[...Array(totalPages)].map((_, idx) => {
        const pageNum = idx + 1;
        const isActive = currentPage === pageNum;

        return (
          <button
            key={pageNum}
            onClick={() => handlePageChange(pageNum)}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              isActive
                ? "bg-yellow-500 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {pageNum}
          </button>
        );
      })}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-full ${
          currentPage === totalPages
            ? "text-gray-200"
            : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
