import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Product1 from "../../../assets/Product1.png";

const mockProducts = new Array(4).fill({
  id: crypto.randomUUID(),
  name: "Apple iPad Pro 32.77cm/ 12.9 Liquid Retina XDR display",
  color: "Blue",
  price: 496370,
  image: Product1, // Update to your local image path
});

export default function GenerateOnlineInvoice() {
  const [email, setEmail] = useState("");
  const [products, setProducts] = useState(
    mockProducts.map((p) => ({ ...p, quantity: 1, selected: false }))
  );

  const toggleProduct = (index) => {
    const updated = [...products];
    updated[index].selected = !updated[index].selected;
    setProducts(updated);
  };

  const changeQty = (index, type) => {
    const updated = [...products];
    if (type === "inc") updated[index].quantity += 1;
    else if (updated[index].quantity > 1) updated[index].quantity -= 1;
    setProducts(updated);
  };

  const total = products
    .filter((p) => p.selected)
    .reduce((sum, p) => sum + p.price * p.quantity, 0);

  return (
    <div className="min-h-[120vh] mb-32 mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Create Invoice
      </h2>

      {/* Email Input */}
      <input
        type="email"
        placeholder="Enter Customer Email"
        className="w-full border rounded px-4 py-2 mb-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Search and Filters */}
      <div className="flex flex-wrap gap-4 items-center mb-4">
        <div className="flex flex-1 border rounded overflow-hidden">
          <input
            type="text"
            placeholder="Search Products"
            className="flex-1 px-3 py-2 outline-none"
          />
          <button className="bg-yellow-500 px-4 text-white">
            <FaSearch />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Filter By</span>
          <select className="border rounded px-2 py-1 text-sm">
            <option>Category</option>
          </select>
          <select className="border rounded px-2 py-1 text-sm">
            <option>Sub-category</option>
          </select>
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-sm flex gap-4 items-start"
          >
            <input
              type="radio"
              checked={product.selected}
              onChange={() => toggleProduct(index)}
              className="mt-2"
            />
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-20 object-cover"
            />
            <div className="flex-1">
              <p className="font-semibold text-sm mb-1">{product.name}</p>
              <p className="text-sm mb-1">{product.color}</p>
              <p className="text-xl font-bold text-gray-900 mb-2">
                £{product.price.toLocaleString()}
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => changeQty(index, "dec")}
                  className="border px-2"
                >
                  <AiOutlineMinus />
                </button>
                <span>{product.quantity}</span>
                <button
                  onClick={() => changeQty(index, "inc")}
                  className="border px-2"
                >
                  <AiOutlinePlus />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Total & Generate Button */}
      <div className="flex justify-between items-center mt-6 font-medium">
        <p>
          Total Products ({products.filter((p) => p.selected).length}):{" "}
          <span className="font-bold">£{(total / 10000).toFixed(2)}</span>
        </p>
      </div>

      <button className="w-full bg-yellow-600 text-black font-medium py-3 mt-4 rounded hover:bg-yellow-700">
        Generate Invoice
      </button>
    </div>
  );
}
