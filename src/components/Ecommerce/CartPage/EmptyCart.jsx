import React from "react";
import emptyBoxImage from "../../../assets/Box.png"; // Import the local image
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 max-w-md mx-auto text-center">
      {/* Empty box image */}
      <img src={emptyBoxImage} alt="Empty Box" className="w-20 h-16 mb-6" />

      {/* Empty cart message */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Your cart is empty
      </h2>

      {/* Suggestion text */}
      <p className="text-gray-600 mb-8">
        Find something you love and add it to your cart!
      </p>

      {/* Shop button */}
      <Link className="w-full" to="/">
        <button className="w-full bg-yellow-500 text-white py-3 font-medium rounded hover:bg-yellow-600 transition-colors">
          Start Shopping
        </button>
      </Link>
    </div>
  );
};

export default EmptyCart;
