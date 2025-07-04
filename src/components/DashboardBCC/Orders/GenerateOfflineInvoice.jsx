import { useState } from "react";
import { AiOutlineDelete, AiOutlinePlusCircle } from "react-icons/ai";

export default function GenerateOfflineInvoice() {
  const [email, setEmail] = useState("");
  const [products, setProducts] = useState([
    { name: "", price: 0, quantity: 1, description: "" },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...products];
    updated[index][field] =
      field === "price" || field === "quantity" ? Number(value) : value;
    setProducts(updated);
  };

  const addProduct = () => {
    setProducts([
      ...products,
      { name: "", price: 0, quantity: 1, description: "" },
    ]);
  };

  const removeProduct = (index) => {
    const updated = [...products];
    updated.splice(index, 1);
    setProducts(updated);
  };

  const total = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-2xl min-h-[70vh] mx-auto p-6 rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Create Invoice
      </h2>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">
          Customer Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          placeholder="Enter Customer Email"
          className="w-full border rounded px-3 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <h3 className="text-lg font-medium mb-4">Enter Products</h3>

      {/* Header labels for product grid */}
      <div className="grid grid-cols-5 gap-2 mb-2">
        <div className="col-span-1">
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Product/Service
          </label>
        </div>
        <div className="col-span-1">
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Price
          </label>
        </div>
        <div className="col-span-1">
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Quantity
          </label>
        </div>
        <div className="col-span-2">
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Description
          </label>
        </div>
      </div>

      {products.map((product, index) => (
        <div
          key={index}
          className="grid lg:grid-cols-5 grid-cols-2  gap-2 mb-2 items-end"
        >
          <input
            type="text"
            placeholder="Product/Service"
            className="col-span-1 border rounded px-2 py-1"
            value={product.name}
            onChange={(e) => handleChange(index, "name", e.target.value)}
          />
          <input
            type="number"
            placeholder="0.00"
            className="col-span-1 border rounded px-2 py-1"
            value={product.price}
            onChange={(e) => handleChange(index, "price", e.target.value)}
          />
          <input
            type="number"
            placeholder="1"
            className="col-span-1 border rounded px-2 py-1"
            value={product.quantity}
            onChange={(e) => handleChange(index, "quantity", e.target.value)}
          />
          <div className="inline-flex items-center gap-2 col-span-2">
            <input
              type="text"
              placeholder="Enter Product Description"
              className="flex-1 border rounded px-2 py-1"
              value={product.description}
              onChange={(e) =>
                handleChange(index, "description", e.target.value)
              }
            />
            <button
              onClick={() => removeProduct(index)}
              className="text-red-600 text-xl hover:text-red-800 transition-colors"
              disabled={products.length === 1}
            >
              <AiOutlineDelete />
            </button>
          </div>
        </div>
      ))}

      <button
        onClick={addProduct}
        className="flex items-center text-yellow-600 text-sm font-medium my-3 hover:text-yellow-700 transition-colors"
      >
        <AiOutlinePlusCircle className="mr-1" /> Add Products
      </button>

      <div className="text-right font-medium mb-4">
        Total Products ({products.length}):{" "}
        <span className="font-bold">£{total.toFixed(2)}</span>
      </div>

      <button className="w-full bg-yellow-600 text-black font-medium py-2 rounded hover:bg-yellow-700 transition">
        Generate Invoice
      </button>
    </div>
  );
}
