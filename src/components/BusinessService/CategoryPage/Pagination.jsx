import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-2 my-4 mt-12">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`w-8 h-8 flex items-center justify-center rounded-sm text-sm transition-colors ${
            currentPage === page
              ? "border-b-2 border-black text-black"
              : "bg-transparent text-gray-600 hover:bg-gray-100"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={handleNextPage}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white"
      >
        <FaChevronRight size={12} />
      </button>
    </div>
  );
}
