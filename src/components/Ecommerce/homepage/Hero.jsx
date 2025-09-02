import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Promo1 from "../../../assets/Promo1.png";

import Promo4 from "../../../assets/Promo4.jpg";
import Promo5 from "../../../assets/Promo5.jpeg";
import Promo6 from "../../../assets/Promo6.jpeg";

import Promo7 from "../../../assets/Promo7.jpeg";
import Promo8 from "../../../assets/Promo8.jpeg";
import Promo9 from "../../../assets/Promo9.jpeg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      alt: "Madness Sale - Nothing But Net Savings",
      content: (
        <div className="flex items-center h-full">
          <img src={Promo4} className="object-cover " />
        </div>
      ),
    },

    {
      id: 2,
      alt: "Tech Deals - Limited Time Offer",
      content: (
        <div className="flex items-center h-full">
          <img src={Promo6} className="object-cover " />
        </div>
      ),
    },
    {
      id: 3,
      alt: "Tech Deals - Limited Time Offer",
      content: (
        <div className="flex items-center h-full">
          <img src={Promo1} className="object-cover " />
        </div>
      ),
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative w-full min-h-[75vh] lg:block hidden ">
      <div className="grid lg:grid-cols-4 grid-cols-1 h-[60vh]  lg:p-12 p-4 ">
        <div className="col-span-3 h-full">
          {/* Main large swiper */}
          <div className="relative overflow-hidden rounded-lg shadow-lg h-[60vh]">
            <div
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  className={`min-w-full flex items-center  relative`}
                >
                  {slide.content}
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2"
              aria-label="Previous slide"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2"
              aria-label="Next slide"
            >
              <FaChevronRight />
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentSlide ? "bg-white" : "bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-1  h-[60vh] ">
          {/* Thumbnail side images */}
          <div className=" w-full h-full flex flex-col justify-center space-y-0 md:flex hidden">
            {slides.map((slide, index) => (
              <div
                key={`thumb-${slide.id}`}
                onClick={() => goToSlide(index)}
                className={`h-full w-full rounded overflow-hidden cursor-pointer border-2 ${
                  index === currentSlide
                    ? "border-yellow-400"
                    : "border-transparent"
                }`}
              >
                <div
                  className={`w-full h-full  flex items-center justify-center p-1`}
                >
                  {index === 1 && (
                    <div className="relative w-full h-full rounded-md">
                      <img src={Promo7} />
                    </div>
                  )}

                  {index === 0 && (
                    <div className="text-center">
                      <img src={Promo8} />
                    </div>
                  )}

                  {index === 2 && (
                    <div className="text-center text-white text-xs">
                      <img src={Promo9} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
