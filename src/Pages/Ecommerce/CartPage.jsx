import { useState } from "react";
import React from "react";

import { HiMinus, HiPlus, HiOutlineTrash } from "react-icons/hi";
import { BiChevronRight } from "react-icons/bi";
import { BsExclamationCircle } from "react-icons/bs";
import Product1 from "../../assets/Product1.png";
import EmptyCart from "../../components/Ecommerce/CartPage/EmptyCart";
import { Link } from "react-router-dom";

// Placeholder for product image;

export default function ShoppingCart() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Apple iPad Pro 12.7-inch 12.9 Liquid Retina XDR display",
      color: "Blue",
      price: 496.37,
      originalPrice: 650.0,
      discount: "20%",
      inStock: true,
      quantity: 1,
      image: Product1,
      tag: "Best seller",
      deliveryOption: "pickup", // New property for delivery option
    },
    {
      id: 2,
      name: "WEMARK Digital Rechargeable Cordless Hair Clipper",
      color: "Black",
      price: 496.37,
      originalPrice: 650.0,
      discount: "20%",
      inStock: true,
      quantity: 1,
      image: Product1,
      deliveryOption: "delivery", // Set to delivery
    },
    {
      id: 3,
      name: "Apple iPad Pro 12.7-inch 12.9 Liquid Retina XDR display",
      color: "Blue",
      price: 496.37,
      originalPrice: 650.0,
      discount: "20%",
      inStock: true,
      quantity: 1,
      image: Product1,
      deliveryOption: "delivery", // Set to delivery
    },
    {
      id: 4,
      name: "Apple iPad Pro 12.7-inch 12.9 Liquid Retina XDR display",
      color: "Blue",
      price: 496.37,
      originalPrice: 650.0,
      discount: "20%",
      inStock: true,
      quantity: 1,
      image: Product1,
      tag: "Only 2 left",
      deliveryOption: "pickup", // New property for delivery option
    },
  ]);

  // State to track selected items
  const [selectedItems, setSelectedItems] = useState({});

  // Check if all items are selected
  const allSelected =
    items.length > 0 && items.every((item) => selectedItems[item.id]);

  // Handle select all toggle
  const handleSelectAll = () => {
    if (allSelected) {
      // If all selected, deselect all
      setSelectedItems({});
    } else {
      // Select all items
      const newSelectedItems = {};
      items.forEach((item) => {
        newSelectedItems[item.id] = true;
      });
      setSelectedItems(newSelectedItems);
    }
  };

  // Handle individual item selection
  const handleSelectItem = (id) => {
    setSelectedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Toggle delivery option
  const toggleDeliveryOption = (id) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              deliveryOption:
                item.deliveryOption === "pickup" ? "delivery" : "pickup",
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
    // Also remove from selected items
    const newSelectedItems = { ...selectedItems };
    delete newSelectedItems[id];
    setSelectedItems(newSelectedItems);
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getSelectedCount = () => {
    return Object.values(selectedItems).filter(Boolean).length;
  };

  const getTotalPrice = () => {
    return items
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const getSelectedTotalPrice = () => {
    return items
      .filter((item) => selectedItems[item.id])
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const getTotalDiscount = () => {
    return items
      .reduce(
        (total, item) =>
          total + (item.originalPrice - item.price) * item.quantity,
        0
      )
      .toFixed(2);
  };

  const getSelectedTotalDiscount = () => {
    return items
      .filter((item) => selectedItems[item.id])
      .reduce(
        (total, item) =>
          total + (item.originalPrice - item.price) * item.quantity,
        0
      )
      .toFixed(2);
  };

  const breadcrumbs = [
    { text: "Home", url: "/" },
    { text: "Shopping Cart", url: "/Fatima" },
  ];

  return (
    <div className="bg-[#faf9f9] min-h-screen">
      {/* Bread Crumb */}
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
        <div className="lg:col-span-3 col-span-5 p-4 shadow-md bg-white rounded">
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              className="mr-3 scale-150 accent-yellow-500 cursor-pointer"
              checked={allSelected}
              onChange={handleSelectAll}
            />
            <h2 className="text-xl font-semibold">
              Cart ({items.length}){" "}
              {getSelectedCount() > 0 && (
                <span className="text-yellow-500 text-base">
                  | {getSelectedCount()} selected
                </span>
              )}
            </h2>
          </div>

          {items.map((item) => (
            <div
              key={item.id}
              className={`mb-6 pb-6 border-b ${
                selectedItems[item.id] ? "bg-yellow-50" : ""
              }`}
            >
              <div className="flex flex-col sm:flex-row lg:space-y-0 space-y-4">
                {/* Item Selection */}
                <div className="flex items-start sm:items-center mr-2">
                  <input
                    type="checkbox"
                    className="mt-2 lg:pb-6 mr-3  scale-150 accent-yellow-500 cursor-pointer"
                    checked={!!selectedItems[item.id]}
                    onChange={() => handleSelectItem(item.id)}
                  />
                </div>

                {/* Product Image */}
                <div className="relative mr-4 mb-4 sm:mb-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-28 h-28 object-cover rounded"
                  />
                  {item.tag && (
                    <span className="absolute top-0 left-0 bg-yellow-500 text-white text-xs px-1 py-0.5 rounded-tr rounded-bl">
                      {item.tag}
                    </span>
                  )}
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <div className="inline-flex items-center justify-between w-full">
                    <h3 className="font-medium text-lg mb-1">{item.name}</h3>
                    <span className="font-bold text-lg">
                      £{item.price.toFixed(2)}
                    </span>
                  </div>

                  <div className="inline-flex items-center justify-between w-full">
                    <p className="text-gray-600 mb-1">Color: {item.color}</p>
                    <div className="flex items-center">
                      <span className="text-gray-500 line-through ml-2">
                        £{item.originalPrice.toFixed(2)}
                      </span>
                      <span className="ml-2 bg-red-100 text-red-600 px-1 rounded text-xs">
                        -{item.discount}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex flex-col">
                      <p className="text-xs text-gray-800">
                        Only 18 items left
                      </p>
                      <p className="text-xs">
                        {item.deliveryOption === "pickup" ? (
                          <span className="text-orange-500">
                            This Product can only be picked up
                          </span>
                        ) : (
                          <span
                            className="text-blue-500"
                            onClick={() => toggleDeliveryOption(item.id)}
                          >
                            This Product can be Delivered
                          </span>
                        )}
                      </p>
                    </div>

                    <div className="flex items-center">
                      <button
                        className="border rounded-l p-1"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        <HiMinus className="text-gray-600" />
                      </button>
                      <input
                        type="text"
                        value={item.quantity}
                        readOnly
                        className="border-t border-b w-8 text-center"
                      />
                      <button
                        className="border rounded-r p-1"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <HiPlus className="text-gray-600" />
                      </button>
                    </div>
                  </div>

                  <button
                    className="flex items-center text-red-600 font-semibold mt-4"
                    onClick={() => removeItem(item.id)}
                  >
                    <HiOutlineTrash className="mr-1" />
                    <span>Remove</span>
                  </button>
                </div>
              </div>
            </div>
          ))}

          {items.length === 0 && <EmptyCart />}
        </div>

        {/* Right side - Order Summary */}
        <div className="lg:col-span-2 col-span-5 self-start p-4 shadow-md bg-white rounded">
          <div className="p-4 rounded">
            <div className="inline-flex items-center justify-between w-full">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <h2 className="text-xl font-semibold mb-4">
                {getSelectedCount() > 0 ? getSelectedCount() : items.length}{" "}
                {getSelectedCount() === 1 ? "Item" : "Items"}
              </h2>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Items Total</span>
              <span>
                £
                {getSelectedCount() > 0
                  ? getSelectedTotalPrice()
                  : getTotalPrice()}
              </span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Item(s) Discount</span>
              <span>
                -£
                {getSelectedCount() > 0
                  ? getSelectedTotalDiscount()
                  : getTotalDiscount()}
              </span>
            </div>
            <div className="border-t pt-4 mb-4">
              <div className="flex justify-between items-center font-bold">
                <span>Total</span>
                <span className="text-2xl">
                  £
                  {getSelectedCount() > 0
                    ? getSelectedTotalPrice()
                    : getTotalPrice()}
                </span>
              </div>
              <div className="text-xs text-yellow-500 mt-1">
                (Including delivery charges)
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full">
              <button className="border w-full whitespace-nowrap border-yellow-500 text-yellow-500 py-2 px-4 rounded hover:bg-yellow-50 font-medium">
                Continue Shopping
              </button>

              <Link to="/Checkout">
                <button
                  className={`${
                    getSelectedCount() > 0 || items.length > 0
                      ? "bg-yellow-500"
                      : "bg-gray-300"
                  } w-full text-white py-2 px-4 whitespace-nowrap rounded hover:bg-yellow-600 font-medium flex items-center justify-center`}
                  disabled={getSelectedCount() === 0 && items.length === 0}
                >
                  Proceed to Checkout
                  <BiChevronRight className="ml-1" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
