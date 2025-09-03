import React, { useState } from "react";
import { FaLock, FaMapMarkerAlt, FaPhone, FaShippingFast } from "react-icons/fa";
import { SlHandbag } from "react-icons/sl";
import Product1 from "../../assets/Product1.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import OrderSummary from "../../components/Ecommerce/Checkout/OrderSummary";
import DeliveryAddressForm from "../../components/Ecommerce/Checkout/DeliveryAddressForm";
import { useAppContext } from "../../context/AppContext";
import { numberFormat } from "../../utils";
import { Address } from "../../types/user.type";
import { Cart } from "../../types/cart.type";
import { useNavigate } from "react-router-dom";
import DeliveryOption from "../../components/Ecommerce/Checkout/DeliveryOption";
import Loading from "../../components/Loading";
import useShippingFee from "../../hooks/useShippingFee";

const breadcrumbs = [
  { text: "Home", url: "/" },
  { text: "Shopping Cart", url: "/ShoppingCart" },
  { text: "Checkout", url: "/Checkout" },
];

const CheckoutPage = () => {
  // State to manage accordion open/closed state
  const [isExpanded, setIsExpanded] = useState(false);
  const [addressId, setAddressId] = React.useState('');

  const { checkoutItems, checkoutData, user, setCheckoutData } = useAppContext();
  const {
    section,
    isLoading: isLoadingShippingFee,
    inputs: shippingFeeInput,
    handleInput: handleShippingFeeInput,
    handleGetShippingFee
  } = useShippingFee();

  const navigate = useNavigate();

  // Toggle accordion
  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  const handleInput = (field: keyof typeof checkoutData, value: any) => {
    setCheckoutData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleAddressChange = (value: string) => {
    if (value !== 'other') {
      handleShippingFeeInput('ADDRESS_ID', value)
    }

    setAddressId(value);
  }

  React.useEffect(() => {
    if (checkoutItems.length === 0) {
      navigate('/ShoppingCart');
    }
  }, [])

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
                  className={`hover:text-gray-800 ${index === breadcrumbs.length - 1
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

          {section === 'ADDRESS' &&
            <div className="space-y-4">
              {checkoutItems.map((item: Cart, index) => (
                  <div key={`initial-${index}`} className="bg-white p-4">
                    {/* Card */}
                    <div className="flex space-x-4 border-b pb-4">
                      <img
                        src={item.productImage}
                        alt="Product"
                        className="w-20 h-20 object-contain"
                      />
                      <div className="flex-1">
                        <div className="inline-flex items-center w-full justify-between">
                          <h3 className="font-semibold">{item.productName}</h3>

                          <div className="flex flex-row items-center justify-center gap-3">
                            <span className="text-lg font-bold text-gray-900">
                              £{numberFormat(item.price, 2)}
                            </span>
                            <span className="px-2 py-0.5 text-sm font-medium bg-gray-100 text-gray-700 rounded">
                              x{item.quantity || 1}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              <select
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  handleAddressChange(e.target.value)
                }
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-3 text-sm text-gray-700 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"
              >
                <option value="">Select Address</option>
                {user?.address.map((item, key) => (
                  <option key={key} value={item.id}>
                    {item.address}
                  </option>
                ))}
                <option value="other">Other</option>
              </select>

              {!!addressId &&
                <DeliveryAddressForm
                  addressId={addressId}
                  handleInput={(field, value) => handleShippingFeeInput('FULL_ADDRESS', field, value)}
                />
              }
            </div>
          }

          {section === 'PRODUCT' && 
            <div>
              <div className="space-y-4 bg-white rounded">
                <div className="flex items-center space-x-2 p-4 font-semibold text-lg border-b">
                  <SlHandbag className="text-yellow-400" />
                  <span>Pick-Up Summary</span>
                </div>

                {/* Initial pickup items (always visible) */}
                {checkoutItems.map((item: Cart, index) => (
                  <div key={`initial-${index}`} className="bg-white p-4">
                    {/* Card */}
                    <div className="flex space-x-4 border-b pb-4">
                      <img
                        src={item.productImage}
                        alt="Product"
                        className="w-20 h-20 object-contain"
                      />
                      <div className="flex-1">
                        <div className="inline-flex items-center w-full justify-between">
                          <h3 className="font-semibold">{item.productName}</h3>

                          <div className="flex flex-row items-center justify-center gap-3">
                            <span className="text-lg font-bold text-gray-900">
                              £{numberFormat(item.price, 2)}
                            </span>
                            <span className="px-2 py-0.5 text-sm font-medium bg-gray-100 text-gray-700 rounded">
                              x{item.quantity || 1}
                            </span>
                          </div>

                        </div>
                        <div className="inline-flex justify-between w-full pt-2">
                          <p className="text-xl font-semibold text-gray-600">
                            {item.variantDetails?.variants.find(item => item?.key?.toLowerCase() === 'color')?.value || ''}
                          </p>
                          {/* <div className="space-x-4">
                          <span className="text-sm text-gray-400 line-through">
                            {item.originalPrice}-dummy
                          </span>

                          <span className="ml-2 bg-red-100 text-red-600 p-1 rounded-full text-xs">
                            {item.discount}-dummy
                          </span>
                        </div> */}
                        </div>
                        <div className="flex items-center space-x-2 mt-1"></div>
                        <div className="mt-2 space-y-1 text-sm text-gray-700">
                          <div className="flex items-center space-x-2">
                            <FaMapMarkerAlt className="text-yellow-400" />
                            <span>{item.location}location-dummy</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <FaPhone className="text-yellow-400" />
                            <span>{item.phone}-phone-dmmy</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <DeliveryOption deliveryOptions={item.deliveryOptions}/>
                  </div>
                ))}

                {/* Accordion toggle button */}
                {/* <div
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
              </div> */}
              </div>

            </div>
          }
        </div>
        {/* Right side - Order Summary */}
        <div className="lg:col-span-2 col-span-5 self-start p-4 shadow-md bg-white rounded">
          <OrderSummary 
            handleGetShippingFee={handleGetShippingFee}
            isLoadingShippingFee={isLoadingShippingFee}
          />
        </div>
      </div>

    </div>
  );
};

export default CheckoutPage;
