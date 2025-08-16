import React from "react";
import { FaTrashAlt, FaShoppingCart } from "react-icons/fa";
import Product1 from "../../assets/Product1.png";

const Wishlist = () => {
  const products = [
    {
      id: 1,
      name: "Apple iPad Pro 32.77cm/ 12.9 Liquid Retina XDR display",
      color: "Blue",
      image: Product1, // Replace with real image
      price: 496370,
      originalPrice: 696000,
      discount: 28.7,
      stockNote: "Only 8 items left!",
      deliveryNote: "This Product can only be picked up",
    },
    {
      id: 2,
      name: "WMARK Digital Rechargeable Cordless Hair Clipper",
      color: "Black",
      image: Product1, // Replace with real image
      price: 496370,
      originalPrice: 696000,
      discount: 28.7,
      stockNote: "In Stock",
      deliveryNote: "Delivery",
    },
    // Add more items if needed
  ];

  return (
    <div className=" mx-auto my-10 lg:px-12 px-4 py-12 border rounded shadow">
      <h1 className="text-2xl font-bold border-b pb-4 mb-6">
        Wishlist ({products.length})
      </h1>

      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-4 mb-6"
        >
          <div className="flex gap-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-24 object-cover rounded"
            />
            <div className="flex flex-col justify-between">
              <h2 className="font-semibold text-xl text-black">
                {product.name}
              </h2>
              <p className="text-sm text-gray-600">{product.color}</p>
              {product.stockNote && (
                <p className="text-xs text-red-600">{product.stockNote}</p>
              )}
              {product.deliveryNote && (
                <p className="text-xs text-blue-600">{product.deliveryNote}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-4 md:mt-0 md:items-end">
            <span className="text-lg font-bold text-gray-800">
              £{product.price.toLocaleString()}
            </span>
            <div>
              <span className="text-sm line-through text-gray-400 ml-2">
                £{product.originalPrice.toLocaleString()}
              </span>
              <span className="text-sm text-red-500 ml-2">
                -{product.discount}%
              </span>
            </div>
            <div className="flex gap-2 pt-8">
              <button className="flex items-center gap-1 px-3 py-1 text-sm bg-red-100 text-red-600 rounded hover:bg-red-200">
                <FaTrashAlt /> Remove
              </button>
              <button className="flex items-center gap-1 px-3 py-1 text-sm bg-yellow-400 text-black rounded hover:bg-yellow-300">
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
