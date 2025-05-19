import { useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

// Replace these with actual images (import or URLs)
import Biz1 from "../../../assets/Product1.png";

import Biz2 from "../../../assets/Product1.png";
import Biz3 from "../../../assets/Product1.png";
import Biz4 from "../../../assets/Product1.png";
import Biz5 from "../../../assets/Product1.png";

const images = [Biz1, Biz2, Biz3, Biz4, Biz5];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full  mx-auto">
      {/* Main image with navigation */}
      <div className="relative">
        <img
          src={images[currentIndex]}
          alt={`Main view ${currentIndex}`}
          className="w-full h-[380px] object-cover rounded-md"
        />

        {/* Prev Button */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow"
        >
          <MdArrowBackIosNew />
        </button>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow"
        >
          <MdArrowForwardIos />
        </button>
      </div>

      {/* Thumbnail Images */}
      <div className="flex gap-2 mt-4 overflow-auto">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Thumbnail ${i}`}
            onClick={() => setCurrentIndex(i)}
            className={`lg:w-full w-20 h-20 object-cover border rounded cursor-pointer transition ${
              i === currentIndex ? "ring-2 ring-yellow-500" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}
