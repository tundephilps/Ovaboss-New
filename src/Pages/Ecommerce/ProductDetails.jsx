import React, { useState } from "react";
import {
  FaStar,
  FaRegStar,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Details from "../../components/Ecommerce/ProductDetails/Details";
import SponsoredProducts from "../../components/Ecommerce/ProductDetails/SponsoredProducts";
import AlsoLike from "../../components/Ecommerce/ProductDetails/AlsoLike";
import Review from "../../components/Ecommerce/ProductDetails/Review";
import Product1 from "../../assets/Product1.png";
import { BsTwitterX } from "react-icons/bs";
import DeliveryReturns from "../../components/Ecommerce/ProductDetails/Delivery";
import BusinessInfoCard from "../../components/Ecommerce/ProductDetails/BusinessInfo";
import LoginModal from "../../components/Ecommerce/ProductDetails/LoginModal";
import OrderOptionsModal from "../../components/Ecommerce/ProductDetails/OrderOptionsModal";
import ImageSlider from "../../components/Ecommerce/ProductDetails/ImageSlider";
import ProductSpecifications from "../../components/Ecommerce/ProductDetails/ProductSpecifications";

const ProductDetails = () => {
  const [isModalOpen, setModalOpen] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const [isOpen, setIsOpen] = useState(false);

  const handleConfirm = (option) => {
    console.log("Selected:", option);
    setIsOpen(false);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const breadcrumbs = [
    { text: "Home", url: "/" },
    { text: "Computer and Gadget", url: "/computer-and-gadget" },
    { text: "Tablets", url: "/computer-and-gadget/tablets" },
    {
      text: "Apple iPad Pro",
      url: "/computer-and-gadget/tablets/apple-ipad-pro",
    },
    { text: "Product details", url: "#" },
  ];

  return (
    <div className="lg:p-10 p-4 bg-[#faf9f9]">
      {/* Bread Crumb */}
      <nav className="w-full pb-4">
        <ol className="flex flex-wrap items-center text-sm text-gray-600">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <li className="mx-1 flex items-center">
                  <span className="text-gray-400">›</span>
                </li>
              )}
              <li>
                <a
                  href={crumb.url}
                  className={`hover:text-gray-800 ${
                    index === breadcrumbs.length - 1
                      ? "font-normal"
                      : "hover:underline"
                  }`}
                >
                  {crumb.text}
                </a>
              </li>
            </React.Fragment>
          ))}
        </ol>
      </nav>

      <div className="grid lg:grid-cols-4 grid-cols-1 gap-6">
        <div className="lg:col-span-3 col-span-4 space-y-6">
          <div className="p-4  rounded-md shadow-md mx-auto flex flex-col md:flex-row gap-6 bg-white">
            {/* Images */}
            <div className="flex flex-col  md:w-1/2">
              <ImageSlider />
              {/* Share Icons */}
              <p className=" pt-12 text-xs">Share With Friends</p>
              <div className="flex items-start justify-start gap-4 py-4">
                <div className="border p-2 rounded-full">
                  <BsTwitterX className="text-gray-600 cursor-pointer" />
                </div>
                <div className="border p-2 rounded-full">
                  <FaFacebookF className="text-blue-600 cursor-pointer" />
                </div>
                <div className="border p-2 rounded-full">
                  <FaWhatsapp className="text-green-600 cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="md:w-1/2 space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold">
                  Apple iPad Pro 32.77cm silicone
                </h2>
                <FaRegHeart className="text-gray-500 cursor-pointer" />
              </div>
              <p className="text-sm">
                Business:{" "}
                <a href="#" className="text-blue-600 underline">
                  Fatimah Technology
                </a>
              </p>

              {/* Flash Sale */}
              <div className="border border-orange-400  rounded  space-y-2">
                <div className="flex justify-between items-center bg-orange-400 p-2">
                  <span className="text-white font-semibold">
                    ⚡ Flash Sales
                  </span>
                  <span className="text-sm text-white">
                    Time left: 10h : 31m : 16s
                  </span>
                </div>
                <div className="flex items-end gap-2 px-2">
                  <span className="text-xl font-bold">£496,370</span>
                  <span className="line-through text-gray-400 text-sm">
                    £696,000
                  </span>
                  <span className="text-red-500 text-sm">-28.7%</span>
                </div>
                <p className="text-xs text-gray-500 p-2">Only 18 items left</p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 text-yellow-400">
                {[...Array(4)].map((_, i) => (
                  <FaStar key={i} />
                ))}
                <FaRegStar />
                <span className="text-gray-600 text-sm ml-2">
                  (179 verified users)
                </span>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex border border-gray-300 rounded">
                  <button
                    className="px-3 py-1 text-lg hover:bg-gray-100 transition-colors"
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-4 py-1 flex items-center justify-center min-w-8">
                    {quantity}
                  </span>
                  <button
                    className="px-3 py-1 text-lg hover:bg-gray-100 transition-colors"
                    onClick={increaseQuantity}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Variations */}
              <div>
                <p>Variation Available</p>
                <div className="flex gap-2 mt-2">
                  {["blue", "green", "yellow", "red", "orange"].map((color) => (
                    <div
                      key={color}
                      className={`w-5 h-5 rounded-sm bg-${color}-500 border cursor-pointer`}
                    />
                  ))}
                </div>
              </div>

              {/* Add to Cart */}
              <button
                // onClick={() => setModalOpen(true)}
                onClick={() => setIsOpen(true)}
                className="w-full mt-4 bg-[#e6ae06] hover:bg-yellow-500 text-black py-2 rounded-md font-semibold flex items-center justify-center gap-2"
              >
                🛒 Add to cart
              </button>

              {/* <LoginModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
              /> */}
              <OrderOptionsModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                onConfirm={handleConfirm}
              />
            </div>
          </div>

          <Details />
          <ProductSpecifications />
          <SponsoredProducts />
          <AlsoLike />
        </div>
        <div className="space-y-6 lg:col-span-1 col-span-4">
          <DeliveryReturns />
          <BusinessInfoCard />
          <Review />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
