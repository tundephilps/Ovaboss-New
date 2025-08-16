import React from "react";
import { FaHeart } from "react-icons/fa";
import Love from "../../assets/Love.png";
import { useNavigate } from "react-router-dom";

const EmptyWishlist = () => {
  const navigate = useNavigate();

  return (
    <div className="lg:px-12 px-4 mx-auto my-20 px-4 text-center">
      <h1 className="text-xl font-semibold border-b pb-4 text-left">
        Wishlist (0)
      </h1>

      <div className="flex flex-col items-center justify-center mt-10">
        <div className="bg-gray-100 p-6 rounded-full mb-6">
          <img src={Love} className="text-yellow-400 text-6xl" />
        </div>
        <h2 className="text-lg font-semibold mb-2">
          You haven’t saved an item yet!
        </h2>
        <p className="text-sm text-gray-600 max-w-md mx-auto mb-6">
          Found something you love? Tap the heart icon to save it to your
          wishlist! All your favorites will appear here.
        </p>
        <button onClick={() => navigate('/')} className="bg-yellow-400 hover:bg-yellow-500 text-sm font-semibold text-black px-5 py-2 rounded">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default EmptyWishlist;
