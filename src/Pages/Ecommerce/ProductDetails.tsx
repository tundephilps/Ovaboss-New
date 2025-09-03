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
import { decodeHTMLEntity, getAverageRatings, numberFormat } from "../../utils";
import Loading from "../../components/Loading";
import ProductDetailsSkeleton from "../../components/skeletons/ProductDetailsSkeleton";
import {
  ProductFullVariant,
  ProductSubVariant,
} from "../../types/product.type";
import VariantSelector from "../../components/Ecommerce/ProductDetails/VariantSelector";
import DeliveryOption from "../../components/Ecommerce/Checkout/DeliveryOption";

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
    setSelectedDeliveryOption,
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
    { text: "Product Details", url: "/" },
    // { text: "Tablets", url: "/computer-and-gadget/tablets" },
    // {
    //   text: "Apple iPad Pro",
    //   url: "/computer-and-gadget/tablets/apple-ipad-pro",
    // },
    // { text: "Product details", url: "#" },
  ];

  if (isLoading) {
    return <ProductDetailsSkeleton />;
  }

  const colorVariants = productDetails.productVariants.flatMap((variant) =>
    variant.variants.filter((v) => v.variantType === "Color")
  );

  const averageRatings = getAverageRatings(productDetails.productReviews);

  const handleVariantChange = (productVariant: ProductFullVariant) => {
    setProductDetails((prev) => ({
      ...prev,
      mainPrice: +productVariant!.price,
    }));
    setSelectedVariant(productVariant!);
  };

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
              <ImageSlider images={productDetails.productImages} />
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
                <h2 className="text-3xl font-bold">{productDetails.title}</h2>

                <button
                  onClick={
                    productWishlist ? handleRemoveWishlist : handleAddToWishlist
                  }
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
              <div className="border border-[#ff6c01]  rounded  space-y-2">
                <div className="flex justify-between items-center bg-[#ff6c01] p-2">
                  <span className="text-white font-semibold">
                    ⚡ Flash Sales
                  </span>
                  <span className="text-sm text-white">
                    Time left: 10h : 31m : 16s
                  </span>
                </div>
                <div className="flex items-end gap-2 px-2">
                  <span className="text-xl font-bold">
                    {decodeHTMLEntity(productDetails.currencySymbol)}{numberFormat(productDetails.mainPrice)}
                  </span>
                  <span className="line-through text-gray-400 text-sm">
                    {/* £696,000 */}
                  </span>
                  {/* <span className="text-red-500 text-sm">0%</span> */}
                </div>
                {/* <p className="text-xs text-gray-500 p-2">Only 0 items left</p> */}
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
                  ({productDetails.productReviews.length} verified user
                  {productDetails.productReviews.length > 1 ? "s" : ""})
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

              <DeliveryOption 
                deliveryOptions={productDetails.deliveryOptions}
                callback={(deliveryOption) => setSelectedDeliveryOption(deliveryOption)}
                showPickupLocations={false}
              />

              {/* Variations */}
              {/* Variation Available */}
              {!!productDetails.productVariants && (
                <div>
                  <VariantSelector
                    productVariants={productDetails.productVariants}
                    selectedVariantId={selectedVariant?.id ?? null}
                    onSelect={handleVariantChange}
                    currency={decodeHTMLEntity(productDetails.currencySymbol)}
                  />
                </div>
              )}

              {/* Add to Cart */}
              <button
                onClick={productCart ? handleRemoveCart : handleAddToCart}
                // onClick={() => setIsOpen(true)}
                disabled={isSaving.cart || isLoadingCarts}
                className={`w-full mt-4 bg-[#FFD700] hover:bg-yellow-500 text-black py-2 rounded-md font-semibold flex items-center justify-center gap-2 ${
                  isSaving.cart || isLoadingCarts
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                {isSaving.cart ? (
                  <Loading />
                ) : (
                  <>
                    {/* 🛒 Add to cart */}
                    {productCart ? "Remove from cart" : "🛒 Add to cart"}
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

          <Details product={productDetails} />
          <ProductSpecifications product={productDetails} />
          <SponsoredProducts />
          <AlsoLike />
        </div>
        <div className="space-y-6 lg:col-span-1 col-span-4">
          <DeliveryReturns />
          <BusinessInfoCard details={productDetails.businessInformation} />
          <Review reviews={productDetails.productReviews} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
