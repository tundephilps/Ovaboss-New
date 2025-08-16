import React from "react";
import { FaTrashAlt, FaShoppingCart } from "react-icons/fa";
import Product1 from "../../assets/Product1.png";
import { useAppContext } from "../../context/AppContext";
import useWishlist from "../../hooks/useWishlist";
import { numberFormat } from "../../utils";
import Loading from "../../components/Loading";
import EmptyWishlist from "./WishlistEmpty";
import useCart from "../../hooks/useCart";
import { Wishlist as WishlistProps } from "../../types/wishlist.type";

const Wishlist = () => {
  const { wishlists, isSaving: isSavingWishlist, isLoading, handleRemoveWishlist } = useWishlist({ shouldGetWishlist: true });
  const { handleAddToCart, isSaving: isSavingCart } = useCart();
  const { user } = useAppContext();

  const addToCart = async (item: WishlistProps) => {
    const productId = item.productId;
    const variantId = item.variantDetails.id;

    const addedToCart = await handleAddToCart({
      productId,
      variantId,
      cart: item,
    })
    if(addedToCart || !user) handleRemoveWishlist(productId, variantId, false);
  }

  return (
    <div className=" mx-auto my-10 lg:px-12 px-4 py-12 border rounded shadow">
      <h1 className="text-2xl font-bold border-b pb-4 mb-6">
        Wishlist ({wishlists.length})
      </h1>

      {isLoading &&
        <Loading/>
      }
      {wishlists.map((item, key) => (
        <div
          key={key}
          className="flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-4 mb-6"
        >
          <div className="flex gap-4">
            <img
              src={item.productImage}
              alt={item.productName}
              className="w-24 h-24 object-cover rounded"
            />
            <div className="flex flex-col justify-between">
              <h2 className="font-semibold text-xl text-black">
                {item.productName}
              </h2>
              <p className="text-sm text-gray-600">{item.color}</p>

              {item.stockNote && (
                <p className="text-xs text-red-600">{item.stockNote}</p>
              )}
              {item.deliveryNote && (
                <p className="text-xs text-blue-600">{item.deliveryNote}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-4 md:mt-0 md:items-end">
            <span className="text-lg font-bold text-gray-800">
              £{numberFormat(item.variantDetails.price, 2)}
            </span>
            <div>
              <span className="text-sm line-through text-gray-400 ml-2">
                £12,034-dummy
              </span>
              <span className="text-sm text-red-500 ml-2">
                -4%-dummy
              </span>
            </div>
            <div className="flex gap-2 pt-8">
              <button
                className={`flex items-center gap-1 px-3 py-1 text-sm bg-red-100 text-red-600 rounded hover:bg-red-200 ${
                  isSavingWishlist ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={() => handleRemoveWishlist(item.productId, item.variantDetails.id)}
                disabled={isSavingWishlist}
              >
                <FaTrashAlt />
                <span>Remove</span>
              </button>
              <button 
                onClick={() => addToCart(item)} 
                disabled={isSavingCart}
                className={`flex items-center gap-1 px-3 py-1 text-sm bg-yellow-400 text-black rounded hover:bg-yellow-300 ${
                  isSavingCart ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
      {wishlists.length === 0 && !isLoading && <EmptyWishlist />}
    </div>
  );
};

export default Wishlist;
