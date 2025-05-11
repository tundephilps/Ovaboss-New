import React, { useState } from "react";
import { FaLock, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { SlHandbag } from "react-icons/sl";
import Product1 from "../../assets/Product1.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import OrderSummary from "../../components/Ecommerce/Checkout/OrderSummary";
import DeliveryAddressForm from "../../components/Ecommerce/Checkout/DeliveryAddressForm";

const pickups = [
  {
    title: "Apple iPad Pro 32.77cm/ 12.9 Liquid Retina XDR display",
    color: "Blue",
    price: "£496,370",
    originalPrice: "£696,000",
    discount: "-28.7%",
    location: "23 Queen Street, Yaba, Lagos",
    phone: "+234 901 234 5678",
    image: Product1, // Replace with actual image path
  },
  {
    title: "Apple iPad Pro 32.77cm/ 12.9 Liquid Retina XDR display",
    color: "Blue",
    price: "£496,370",
    originalPrice: "£696,000",
    discount: "-28.7%",
    location: "12 Allen Avenue, Ikeja, Lagos",
    phone: "+234 813 456 7890",
    image: Product1, // Replace with actual image path
  },
];

// Additional items that will be shown when accordion is expanded
const additionalPickups = [
  {
    title: "WEMARK Digital Rechargeable Cordless Hair Clipper",
    color: "Black",
    price: "£123,450",
    originalPrice: "£150,000",
    discount: "-17.7%",
    location: "45 Marina Street, Victoria Island, Lagos",
    phone: "+234 705 987 6543",
    image: Product1, // Replace with actual image path
  },
  {
    title: "Samsung Galaxy S22 Ultra 6.8-inch Dynamic AMOLED Display",
    color: "Phantom Black",
    price: "£899,990",
    originalPrice: "£999,990",
    discount: "-10.0%",
    location: "78 Admiralty Way, Lekki, Lagos",
    phone: "+234 802 345 6789",
    image: Product1, // Replace with actual image path
  },
];

const breadcrumbs = [
  { text: "Home", url: "/" },
  { text: "Shopping Cart", url: "/ShoppingCart" },
  { text: "Checkout", url: "/Checkout" },
];

const CheckoutPage = () => {
  // State to manage accordion open/closed state
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle accordion
  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-[#faf9f9] min-h-screen">
      {/* BreadCrumb */}
      <nav className="w-full py-6 lg:px-12 px-4">
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

      <div className="grid lg:grid-cols-5 gap-12 grid-cols-1 lg:px-12 px-2 w-full mx-auto pb-12">
        {/* Left side - Cart Items */}
        <div className="lg:col-span-3 col-span-5 space-y-8 ">
          <div className="space-y-4 bg-white rounded">
            <div className="flex items-center space-x-2 p-4 font-semibold text-lg border-b">
              <SlHandbag className="text-yellow-400" />
              <span>Pick-Up Summary</span>
            </div>

            {/* Initial pickup items (always visible) */}
            {pickups.map((item, index) => (
              <div key={`initial-${index}`} className="bg-white p-4">
                {/* Card */}
                <div className="flex space-x-4 border-b pb-4">
                  <img
                    src={item.image}
                    alt="Product"
                    className="w-20 h-20 object-contain"
                  />
                  <div className="flex-1">
                    <div className="inline-flex items-center w-full justify-between">
                      <h3 className="font-semibold">{item.title}</h3>

                      <div className="flex flex-col">
                        <span className="text-lg font-bold">{item.price}</span>
                      </div>
                    </div>
                    <div className="inline-flex justify-between w-full pt-2">
                      <p className="text-xl font-semibold text-gray-600">
                        {item.color}
                      </p>
                      <div className="space-x-4">
                        <span className="text-sm text-gray-400 line-through">
                          {item.originalPrice}
                        </span>

                        <span className="ml-2 bg-red-100 text-red-600 p-1 rounded-full text-xs">
                          {item.discount}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 mt-1"></div>
                    <div className="mt-2 space-y-1 text-sm text-gray-700">
                      <div className="flex items-center space-x-2">
                        <FaMapMarkerAlt className="text-yellow-400" />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaPhone className="text-yellow-400" />
                        <span>{item.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Additional items (shown when expanded) */}
            {isExpanded && (
              <>
                {additionalPickups.map((item, index) => (
                  <div key={`additional-${index}`} className="bg-white p-4">
                    {/* Card */}
                    <div className="flex space-x-4 border-b pb-4">
                      <img
                        src={item.image}
                        alt="Product"
                        className="w-20 h-20 object-contain"
                      />
                      <div className="flex-1">
                        <div className="inline-flex items-center w-full justify-between">
                          <h3 className="font-semibold">{item.title}</h3>

                          <div className="flex flex-col">
                            <span className="text-lg font-bold">
                              {item.price}
                            </span>
                          </div>
                        </div>
                        <div className="inline-flex justify-between w-full pt-2">
                          <p className="text-xl font-semibold text-gray-600">
                            {item.color}
                          </p>
                          <div className="space-x-4">
                            <span className="text-sm text-gray-400 line-through">
                              {item.originalPrice}
                            </span>

                            <span className="ml-2 bg-red-100 text-red-600 p-1 rounded-full text-xs">
                              {item.discount}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 mt-1"></div>
                        <div className="mt-2 space-y-1 text-sm text-gray-700">
                          <div className="flex items-center space-x-2">
                            <FaMapMarkerAlt className="text-yellow-400" />
                            <span>{item.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <FaPhone className="text-yellow-400" />
                            <span>{item.phone}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}

            {/* Accordion toggle button */}
            <div
              className="flex justify-center py-2 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={toggleAccordion}
            >
              <div className="flex flex-col items-center">
                {isExpanded ? (
                  <>
                    <IoIosArrowUp className="text-yellow-500 text-xl" />
                    <span className="text-sm text-gray-500">Show less</span>
                  </>
                ) : (
                  <>
                    <IoIosArrowDown className="text-yellow-500 text-xl" />
                    <span className="text-sm text-gray-500">Show more</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <DeliveryAddressForm />
          </div>
        </div>

        {/* Right side - Order Summary */}
        <div className="lg:col-span-2 col-span-5 self-start p-4 shadow-md bg-white rounded">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
