import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import searchIcon from "../../assets/search-icon0.svg";
import shoppingCartIcon0 from "../../assets/shopping-cart-streamline-outlined-material0.svg";
import arrowBackIcon0 from "../../assets/arrow-back-ios0.svg";
import upButtonIcon from "../../assets/up-button-010.svg";
import downButtonIcon from "../../assets/down-button-010.svg";

{
  /* Media Queries for FAQ, that connect to  MobileCategorySection*/
}
const FrequentlyAskedQuestions = ({ onCategoryChange }) => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 767);
  const [activeCategory, setActiveCategory] = useState("Orders");

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (onCategoryChange) {
      onCategoryChange(activeCategory); // Pass the active category to the callback
    }
  }, [activeCategory, onCategoryChange]);

  {
    /* FAQ Section */
  }
  return (
    <div className="flex flex-col gap-[72px] items-center justify-start relative height-auto mt-[88px] mb-[148px] lg:px-12 px-4">
      <div className="flex flex-col gap-8 items-center justify-start w-[100%] shrink-0 max-w-[1026px] relative">
        <div className="flex flex-col gap-6 items-center justify-start self-stretch shrink-0 relative">
          <div className="text-[#000000] text-center font-['OpenSans-Bold',_sans-serif] text-5xl leading-[30px] font-bold relative self-stretch">
            Frequently Asked Questions
          </div>
          <div className="text-color-grey-400 text-center font-['OpenSans-SemiBold',_sans-serif] text-2xl leading-normal font-semibold relative self-stretch">
            Find quick answers to common questions about orders, payments,
            shipping, returns, and more.
          </div>
        </div>
        <div className="bg-[#FFFFFF] rounded border-solid border-[#202020] border-[0.5px] pl-3 flex flex-row items-center justify-between shrink-0 w-[420px] h-9 min-w-[250px] max-w-[420px] relative overflow-hidden">
          <input
            type="text"
            placeholder="How can we help you?"
            className="bg-[#FFFFFF] text-color-grey-400 text-left font-['OpenSans-Regular',_sans-serif] text-base leading-[167%] font-normal w-[100%] h-full pl-3 pr-3 rounded focus:outline-none"
          />
          <div className="flex items-center justify-center shrink-0 w-[55px] h-9 relative">
            <button
              className="rounded-sm w-[55px] h-9 flex items-center justify-center bg-transparent border-none cursor-pointer"
              aria-label="Search"
            >
              <img
                className="w-[55px] h-9"
                src={searchIcon}
                alt="Search Icon"
              />
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Category */}
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-6">
        <div
          className="lg:col-span-1 col-span-4 bg-[#ffffff] rounded-2xl pt-3 pr-3 pb-3 flex flex-row gap-2.5 items-center justify-start flex-1  relative overflow-hidden"
          style={{ boxShadow: "-2px 0px 10.6px 1px rgba(0, 0, 0, 0.06)" }}
        >
          <div className="flex flex-col whitespace-nowrap gap-0 items-start justify-start flex-1 relative">
            <CategoryItem
              icon={shoppingCartIcon0}
              title="Orders"
              arrowIcon={arrowBackIcon0}
              isActive={activeCategory === "Orders"}
              onClick={() => setActiveCategory("Orders")}
            />
            <CategoryItem
              icon={shoppingCartIcon0}
              title="Payments"
              arrowIcon={arrowBackIcon0}
              isActive={activeCategory === "Payments"}
              onClick={() => setActiveCategory("Payments")}
            />
            <CategoryItem
              icon={shoppingCartIcon0}
              title="Shipping & Delivery"
              arrowIcon={arrowBackIcon0}
              isActive={activeCategory === "Shipping & Delivery"}
              onClick={() => setActiveCategory("Shipping & Delivery")}
            />
            <CategoryItem
              icon={shoppingCartIcon0}
              title="Returns & Refunds"
              arrowIcon={arrowBackIcon0}
              isActive={activeCategory === "Returns & Refunds"}
              onClick={() => setActiveCategory("Returns & Refunds")}
            />
            <CategoryItem
              icon={shoppingCartIcon0}
              title="Sell on Ovaboss"
              arrowIcon={arrowBackIcon0}
              isActive={activeCategory === "Sell on Ovaboss"}
              onClick={() => setActiveCategory("Sell on Ovaboss")}
            />
            <CategoryItem
              icon={shoppingCartIcon0}
              title="Account & Security"
              arrowIcon={arrowBackIcon0}
              isActive={activeCategory === "Account & Security"}
              onClick={() => setActiveCategory("Account & Security")}
            />

            <CategoryItem
              icon={shoppingCartIcon0}
              title="Customer Support"
              arrowIcon={arrowBackIcon0}
              isActive={activeCategory === "Customer Support"}
              onClick={() => setActiveCategory("Customer Support")}
            />
          </div>
        </div>

        {/* FAQ Shipping & Delivery */}
        {activeCategory === "Shipping & Delivery" && (
          <div
            className="lg:col-span-3 col-span-4 bg-[#ffffff] rounded-2xl pt-8 pr-6 pb-8 pl-6 flex flex-col gap-2.5 items-start justify-start self-stretch flex-1 relative overflow-hidden"
            style={{
              boxShadow:
                "var(--default-shadow-box-shadow, -2px 0px 10.6px 1px rgba(0, 0, 0, 0.06))",
            }}
          >
            <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
              <FAQItem
                question="What are the shipping options available?"
                answer={[
                  "We offer standard and express shipping options.",
                  "Shipping times vary based on your location and the selected shipping method.",
                ]}
              />
              <FAQItem
                question="How can I track my order?"
                answer={[
                  "Once your order is shipped, you will receive a tracking number via email.",
                  "Use the tracking number on our website or the courier's website to track your order.",
                ]}
              />
              <FAQItem
                question="What should I do if my order is delayed?"
                answer={[
                  "Check the tracking information for updates.",
                  "If the delay persists, contact our customer support for assistance.",
                ]}
              />
              <FAQItem
                question="Do you ship internationally?"
                answer={[
                  "Yes, we ship to select international locations.",
                  "Shipping costs and delivery times vary based on the destination.",
                ]}
              />
              <FAQItem
                question="Can I change my shipping address after placing an order?"
                answer={[
                  "You can update your shipping address before the order is shipped.",
                  "Contact customer support to request an address change.",
                ]}
              />
            </div>
          </div>
        )}

        {/* FAQ Orders */}
        {activeCategory === "Orders" && (
          <div
            className="lg:col-span-3 col-span-4 bg-[#ffffff] rounded-2xl pt-8 pr-6 pb-8 pl-6 flex flex-col gap-2.5 items-start justify-start self-stretch flex-1 relative overflow-hidden"
            style={{
              boxShadow:
                "var(--default-shadow-box-shadow, -2px 0px 10.6px 1px rgba(0, 0, 0, 0.06))",
            }}
          >
            <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
              <FAQItem
                question="How do I place an order?"
                answer={[
                  "Browse products and add items to your cart.",
                  "Proceed to checkout, enter your shipping details, and select a payment method.",
                  "Confirm your order and receive a confirmation email with tracking details.",
                ]}
              />
              <FAQItem
                question="Can I cancel my order after placing it?"
                answer={[
                  "You can cancel your order before it is shipped.",
                  "Go to your orders page and select the cancel option.",
                  "If the order is already shipped, you may need to initiate a return.",
                ]}
              />
              <FAQItem
                question="Can I order without creating an account?"
                answer={[
                  "Yes, you can place an order as a guest.",
                  "However, creating an account allows you to track your orders and manage returns easily.",
                ]}
              />
              <FAQItem
                question="Why was my order canceled?"
                answer={[
                  "Your order may have been canceled due to payment issues.",
                  "The item may have gone out of stock.",
                  "Contact customer support for more details.",
                ]}
              />
              <FAQItem
                question="How do I modify my order after placing it?"
                answer={[
                  "You can modify your order before it is processed.",
                  "Go to your orders page and select the edit option.",
                  "If the order is already processed, contact customer support for assistance.",
                ]}
              />
            </div>
          </div>
        )}

        {/* FAQ Payments */}
        {activeCategory === "Payments" && (
          <div
            className="lg:col-span-3 col-span-4 bg-[#ffffff] rounded-2xl pt-8 pr-6 pb-8 pl-6 flex flex-col gap-2.5 items-start justify-start self-stretch flex-1 relative overflow-hidden"
            style={{
              boxShadow:
                "var(--default-shadow-box-shadow, -2px 0px 10.6px 1px rgba(0, 0, 0, 0.06))",
            }}
          >
            <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
              <FAQItem
                question="How do I make payment?"
                answer={[
                  "Browse products and add items to your cart.",
                  "Proceed to checkout, enter your shipping details, and select a payment method.",
                  "Confirm your order and receive a confirmation email with tracking details.",
                ]}
              />
              <FAQItem
                question="Can I pay with my local ATM card?"
                answer={[
                  "You can cancel your order before it is shipped.",
                  "Go to your orders page and select the cancel option.",
                  "If the order is already shipped, you may need to initiate a return.",
                ]}
              />
              <FAQItem
                question="Do you accept cash on delivery?"
                answer={[
                  "Yes, you can place an order as a guest.",
                  "However, creating an account allows you to track your orders and manage returns easily.",
                ]}
              />
              <FAQItem
                question="Why is my payment rejected?"
                answer={[
                  "Your order may have been canceled due to payment issues.",
                  "The item may have gone out of stock.",
                  "Contact customer support for more details.",
                ]}
              />
              <FAQItem
                question="How can I Choose BCC or PCC as my payment option?"
                answer={[
                  "You can modify your order before it is processed.",
                  "Go to your orders page and select the edit option.",
                  "If the order is already processed, contact customer support for assistance.",
                ]}
              />
            </div>
          </div>
        )}

        {/* FAQ Returns & Refunds */}
        {activeCategory === "Returns & Refunds" && (
          <div
            className="lg:col-span-3 col-span-4 bg-[#ffffff] rounded-2xl pt-8 pr-6 pb-8 pl-6 flex flex-col gap-2.5 items-start justify-start self-stretch flex-1 relative overflow-hidden"
            style={{
              boxShadow:
                "var(--default-shadow-box-shadow, -2px 0px 10.6px 1px rgba(0, 0, 0, 0.06))",
            }}
          >
            <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
              <FAQItem
                question="How do I make payment?"
                answer={[
                  "Browse products and add items to your cart.",
                  "Proceed to checkout, enter your shipping details, and select a payment method.",
                  "Confirm your order and receive a confirmation email with tracking details.",
                ]}
              />
              <FAQItem
                question="Can I pay with my local ATM card?"
                answer={[
                  "You can cancel your order before it is shipped.",
                  "Go to your orders page and select the cancel option.",
                  "If the order is already shipped, you may need to initiate a return.",
                ]}
              />
              <FAQItem
                question="Do you accept cash on delivery?"
                answer={[
                  "Yes, you can place an order as a guest.",
                  "However, creating an account allows you to track your orders and manage returns easily.",
                ]}
              />
              <FAQItem
                question="Why is my payment rejected?"
                answer={[
                  "Your order may have been canceled due to payment issues.",
                  "The item may have gone out of stock.",
                  "Contact customer support for more details.",
                ]}
              />
              <FAQItem
                question="How can I Choose BCC or PCC as my payment option?"
                answer={[
                  "You can modify your order before it is processed.",
                  "Go to your orders page and select the edit option.",
                  "If the order is already processed, contact customer support for assistance.",
                ]}
              />
            </div>
          </div>
        )}

        {/* FAQ Sell on Ovaboss */}
        {activeCategory === "Sell on Ovaboss" && (
          <div
            className="lg:col-span-3 col-span-4 bg-[#ffffff] rounded-2xl pt-8 pr-6 pb-8 pl-6 flex flex-col gap-2.5 items-start justify-start self-stretch flex-1 relative overflow-hidden"
            style={{
              boxShadow:
                "var(--default-shadow-box-shadow, -2px 0px 10.6px 1px rgba(0, 0, 0, 0.06))",
            }}
          >
            <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
              <FAQItem
                question="How do I make payment?"
                answer={[
                  "Browse products and add items to your cart.",
                  "Proceed to checkout, enter your shipping details, and select a payment method.",
                  "Confirm your order and receive a confirmation email with tracking details.",
                ]}
              />
              <FAQItem
                question="Can I pay with my local ATM card?"
                answer={[
                  "You can cancel your order before it is shipped.",
                  "Go to your orders page and select the cancel option.",
                  "If the order is already shipped, you may need to initiate a return.",
                ]}
              />
              <FAQItem
                question="Do you accept cash on delivery?"
                answer={[
                  "Yes, you can place an order as a guest.",
                  "However, creating an account allows you to track your orders and manage returns easily.",
                ]}
              />
              <FAQItem
                question="Why is my payment rejected?"
                answer={[
                  "Your order may have been canceled due to payment issues.",
                  "The item may have gone out of stock.",
                  "Contact customer support for more details.",
                ]}
              />
              <FAQItem
                question="How can I Choose BCC or PCC as my payment option?"
                answer={[
                  "You can modify your order before it is processed.",
                  "Go to your orders page and select the edit option.",
                  "If the order is already processed, contact customer support for assistance.",
                ]}
              />
            </div>
          </div>
        )}

        {/* FAQ Account & Security */}
        {activeCategory === "Account & Security" && (
          <div
            className="lg:col-span-3 col-span-4 bg-[#ffffff] rounded-2xl pt-8 pr-6 pb-8 pl-6 flex flex-col gap-2.5 items-start justify-start self-stretch flex-1 relative overflow-hidden"
            style={{
              boxShadow:
                "var(--default-shadow-box-shadow, -2px 0px 10.6px 1px rgba(0, 0, 0, 0.06))",
            }}
          >
            <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
              <FAQItem
                question="How do I make payment?"
                answer={[
                  "Browse products and add items to your cart.",
                  "Proceed to checkout, enter your shipping details, and select a payment method.",
                  "Confirm your order and receive a confirmation email with tracking details.",
                ]}
              />
              <FAQItem
                question="Can I pay with my local ATM card?"
                answer={[
                  "You can cancel your order before it is shipped.",
                  "Go to your orders page and select the cancel option.",
                  "If the order is already shipped, you may need to initiate a return.",
                ]}
              />
              <FAQItem
                question="Do you accept cash on delivery?"
                answer={[
                  "Yes, you can place an order as a guest.",
                  "However, creating an account allows you to track your orders and manage returns easily.",
                ]}
              />
              <FAQItem
                question="Why is my payment rejected?"
                answer={[
                  "Your order may have been canceled due to payment issues.",
                  "The item may have gone out of stock.",
                  "Contact customer support for more details.",
                ]}
              />
              <FAQItem
                question="How can I Choose BCC or PCC as my payment option?"
                answer={[
                  "You can modify your order before it is processed.",
                  "Go to your orders page and select the edit option.",
                  "If the order is already processed, contact customer support for assistance.",
                ]}
              />
            </div>
          </div>
        )}

        {/* FAQ Customer Support */}
        {activeCategory === "Customer Support" && (
          <div
            className="lg:col-span-3 col-span-4 bg-[#ffffff] rounded-2xl pt-8 pr-6 pb-8 pl-6 flex flex-col gap-2.5 items-start justify-start self-stretch flex-1 relative overflow-hidden"
            style={{
              boxShadow:
                "var(--default-shadow-box-shadow, -2px 0px 10.6px 1px rgba(0, 0, 0, 0.06))",
            }}
          >
            <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
              <FAQItem
                question="How do I make payment?"
                answer={[
                  "Browse products and add items to your cart.",
                  "Proceed to checkout, enter your shipping details, and select a payment method.",
                  "Confirm your order and receive a confirmation email with tracking details.",
                ]}
              />
              <FAQItem
                question="Can I pay with my local ATM card?"
                answer={[
                  "You can cancel your order before it is shipped.",
                  "Go to your orders page and select the cancel option.",
                  "If the order is already shipped, you may need to initiate a return.",
                ]}
              />
              <FAQItem
                question="Do you accept cash on delivery?"
                answer={[
                  "Yes, you can place an order as a guest.",
                  "However, creating an account allows you to track your orders and manage returns easily.",
                ]}
              />
              <FAQItem
                question="Why is my payment rejected?"
                answer={[
                  "Your order may have been canceled due to payment issues.",
                  "The item may have gone out of stock.",
                  "Contact customer support for more details.",
                ]}
              />
              <FAQItem
                question="How can I Choose BCC or PCC as my payment option?"
                answer={[
                  "You can modify your order before it is processed.",
                  "Go to your orders page and select the edit option.",
                  "If the order is already processed, contact customer support for assistance.",
                ]}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const CategoryItem = ({ icon, title, arrowIcon, isActive, onClick }) => {
  return (
    <div
      className={`pt-5 pr-8 pb-5 flex flex-row gap-3 items-center justify-start self-stretch shrink-0 relative cursor-pointer ${
        isActive
          ? "border-solid border-[#E6AE06] border-l-[5px]"
          : "hover:border-[#E6AE06] hover:border-l-[5px] border-l-[0px]"
      }`}
      onClick={onClick}
      style={{ paddingRight: "20px" }}
    >
      <div className="pt-2.5 pr-6 pb-2.5 pl-6 flex flex-row gap-1.5 items-center justify-start flex-1 relative">
        <img
          className="shrink-0 w-6 h-6 relative overflow-visible"
          src={icon}
          alt={title}
          style={{ transform: "scaleX(-1)" }}
        />
        <div className="text-text-headings text-left font-['OpenSans-SemiBold',_sans-serif] text-xl leading-[26px] font-semibold relative flex items-center justify-start w-[100%]">
          {title}
        </div>
      </div>
      <div
        className="pt-[3px] pb-[3px] flex flex-row gap-2.5 items-center justify-start shrink-0 w-8 h-8 relative overflow-hidden"
        style={{
          transformOrigin: "center",
          transform: "scaleX(-1)",
        }}
      >
        <img
          className="shrink-0 w-[15.2px] h-[26.67px] relative overflow-visible"
          src={arrowIcon}
          alt="Arrow"
          style={{ transform: "scaleX(-1)" }}
        />
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-solid border-color-grey-300 border p-4 flex flex-col gap-4 items-start justify-start self-stretch shrink-0 relative">
      <div className="rounded-tl-md rounded-tr-md border-solid border-color-grey-300 border pt-3 pr-4 pb-3 pl-4 flex flex-col gap-4 items-center justify-center self-stretch shrink-0 relative">
        <div className="flex flex-row gap-3 items-center justify-start self-stretch shrink-0 relative">
          <div className="flex flex-row gap-2.5 items-center justify-start flex-wrap content-center flex-1 relative">
            <div className="text-[#000000] text-left font-['OpenSans-SemiBold',_sans-serif] text-xl leading-[26px] font-semibold relative flex-1">
              {question}
            </div>
          </div>
          <div
            className="flex flex-row gap-0 items-center justify-end shrink-0 w-[52px] max-w-[52px] relative cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <img
              className={`shrink-0 w-[26px] h-[26px] relative overflow-visible ${
                isExpanded ? "hidden" : "block"
              }`}
              style={{ aspectRatio: "1" }}
              src={downButtonIcon}
              alt="Down button"
            />
            <img
              className={`shrink-0 w-[26px] h-[26px] relative overflow-visible ${
                isExpanded ? "block" : "hidden"
              }`}
              style={{ aspectRatio: "1" }}
              src={upButtonIcon}
              alt="Up button"
            />
          </div>
        </div>
      </div>
      {isExpanded && (
        <div className="flex flex-row gap-2.5 items-center justify-center self-stretch shrink-0 relative">
          <div className="text-[#000000] text-left font-['OpenSans-Regular',_sans-serif] text-base leading-[167%] font-normal relative flex-1">
            <ul>
              {answer.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.arrayOf(PropTypes.string).isRequired,
};

CategoryItem.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  arrowIcon: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

FrequentlyAskedQuestions.propTypes = {
  onCategoryChange: PropTypes.func,
};

export default FrequentlyAskedQuestions;
