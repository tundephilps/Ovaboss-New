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
import { useParams } from "react-router-dom";
import useProductDetails from "../../hooks/useProductDetails";
import { getAverageRatings, numberFormat } from "../../utils";
import Loading from "../../components/Loading";
import ProductDetailsSkeleton from "../../components/skeletons/ProductDetailsSkeleton";
import { ProductFullVariant, ProductSubVariant } from "../../types/product.type";

const ProductDetails = () => {
  const [isModalOpen, setModalOpen] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const { productId } = useParams();

  const {
    productDetails, 
    isLoading, 
    isSaving,
    productCart,
    productWishlist,
    selectedVariant, 
    isLoadingCarts,
    isLoadingWishlists,
    quantity,
    setQuantity,
    setProductDetails,
    setSelectedVariant, 
    handleAddToCart,
    handleRemoveCart, 
    handleAddToWishlist,
    handleRemoveWishlist, 
  } = useProductDetails();

  const handleConfirm = (option: any) => {
    // console.log("Selected:", option);
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

  if(isLoading) {
    return <ProductDetailsSkeleton/>;
  }

  const colorVariants = productDetails.productVariants.flatMap(variant =>
    variant.variants.filter(v => v.variantType === "Color")
  );

  const averageRatings = getAverageRatings(productDetails.productReviews);

  const handleVariantChange = (productVariant: ProductFullVariant) => {
    setProductDetails(prev => ({
      ...prev,
      main_price: +productVariant!.price
    }))
    setSelectedVariant(productVariant!)
  }

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
              <ImageSlider images={productDetails.productImages}/>
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
                  {productDetails.title}
                </h2>

                <button
                  onClick={ productWishlist ? handleRemoveWishlist : handleAddToWishlist}
                  disabled={isSaving.wishlist || isLoadingWishlists}
                >
                  {productWishlist ? (
                    <FaHeart className="text-red-500" />
                  ) : (
                    <FaRegHeart className="text-gray-500" />
                  )}
                </button>

              </div>
              <p className="text-sm">
                Business:{" "}
                <a href="#" className="text-blue-600 underline">
                  {productDetails?.businessInformation?.storeName}
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
                  <span className="text-xl font-bold">£{numberFormat(productDetails.main_price)}</span>
                  <span className="line-through text-gray-400 text-sm">
                    {/* £696,000 */}
                  </span>
                  <span className="text-red-500 text-sm">0%</span>
                </div>
                <p className="text-xs text-gray-500 p-2">Only 0 items left</p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 text-yellow-400">
                {[...Array(averageRatings)].map((_, i) => (
                  <FaStar key={i} />
                ))}
                {[...Array(5 - averageRatings)].map((_, i) => (
                  <FaRegStar key={i} />
                ))}
                <span className="text-gray-600 text-sm ml-2">
                  ({productDetails.productReviews.length} verified user{productDetails.productReviews.length > 1 ? 's' : ''})
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
              {/* Variation Available */}
              {!!productDetails.productVariants &&
                <div>
                  <p className="text-sm font-medium text-gray-700">Variation Available</p>

                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 mt-3">
                    {productDetails.productVariants.map((item, key) => {
                      const isSelected = selectedVariant.id === item.id;

                      const isColorVariant = item.variants.find(variant => variant.variantType?.toLowerCase() === 'color')

                      return (
                        <label
                          key={key}
                          className={[
                            "group relative flex items-center gap-3 rounded-xl border p-3 cursor-pointer",
                            "shadow-sm hover:shadow transition",
                            isSelected
                              ? "ring-2 ring-yellow-500 border-yellow-400 bg-yellow-50"
                              : "border-gray-200 bg-white hover:border-gray-300"
                          ].join(" ")}
                        >
                          {/* Radio (screen-reader accessible) */}
                          <input
                            type="radio"
                            name={`variant-${item.id}`}
                            className="sr-only"
                            checked={isSelected}
                            onChange={() => handleVariantChange(item)}
                          />

                          {/* Optional color swatch */}
                          {isColorVariant && (
                            <span
                              className="h-8 w-8 rounded-full border border-gray-200 shrink-0"
                              style={{ background: isColorVariant.variant }}
                              aria-hidden="true"
                            />
                          )}

                          {/* Variant text */}
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-gray-900 truncate">
                              £{numberFormat(item.price, 2)}
                            </p>
                            <p className="text-xs text-gray-500">{item.stock} Left</p>
                          </div>

                          {/* Custom radio indicator */}
                          <span
                            className={[
                              "ml-auto h-5 w-5 rounded-full border flex items-center justify-center",
                              isSelected ? "bg-yellow-500 border-yellow-500" : "border-gray-300"
                            ].join(" ")}
                            aria-hidden="true"
                          >
                            {isSelected && <span className="h-2.5 w-2.5 rounded-full bg-white" />}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              }

              {/* Add to Cart */}
              <button
                onClick={productCart ? handleRemoveCart : handleAddToCart}
                // onClick={() => setIsOpen(true)}
                disabled={isSaving.cart || isLoadingCarts}
                className={`w-full mt-4 bg-[#FFD700] hover:bg-yellow-500 text-black py-2 rounded-md font-semibold flex items-center justify-center gap-2 ${
                  isSaving.cart || isLoadingCarts ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSaving.cart ? <Loading/> : (
                  <>
                    {/* 🛒 Add to cart */}
                    {productCart ? 'Remove from cart' : '🛒 Add to cart'}
                  </>
                )}
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

          <Details product={productDetails}/>
          <ProductSpecifications product={productDetails}/>
          <SponsoredProducts />
          <AlsoLike />
        </div>
        <div className="space-y-6 lg:col-span-1 col-span-4">
          <DeliveryReturns />
          <BusinessInfoCard details={productDetails.businessInformation}/>
          <Review reviews={productDetails.productReviews}/>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
