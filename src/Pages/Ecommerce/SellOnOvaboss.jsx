import React from "react";
import Hero from "../../assets/Hero.png";

import Sell1 from "../../assets/Sell1.svg";

import Sell2 from "../../assets/Sell2.svg";
import Sell3 from "../../assets/Sell3.svg";
import Sell4 from "../../assets/Sell4.svg";
import Sell5 from "../../assets/Sell5.svg";
import Sell6 from "../../assets/Sell6.svg";
import {
  FaBullhorn,
  FaHeadset,
  FaMoneyBillWave,
  FaUsers,
  FaLock,
  FaRocket,
} from "react-icons/fa";
import HowItWorks from "../../components/Ecommerce/SellOnOvaboss/HowItWorks";

const features = [
  {
    icon: <img src={Sell1} className="text-yellow-500 text-3xl mb-2" />,
    title: "Marketing & Promotions",
    desc: "Get more sales with ads and special offers.",
  },
  {
    icon: <img src={Sell2} className="text-yellow-500 text-3xl mb-2" />,
    title: "Seller Support",
    desc: "Get help whenever you need it",
  },
  {
    icon: <img src={Sell3} className="text-yellow-500 text-3xl mb-2" />,
    title: "Affordable Fees",
    desc: "Enjoy low commission rates and no hidden charges.",
  },
  {
    icon: <img src={Sell4} className="text-yellow-500 text-3xl mb-2" />,
    title: "Massive Customer Reach",
    desc: "Gain access to thousands/ millions of potential buyers.",
  },
  {
    icon: <img src={Sell5} className="text-yellow-500 text-3xl mb-2" />,
    title: "Secure Payments",
    desc: "Get paid quickly and securely.",
  },
  {
    icon: <img src={Sell6} className="text-yellow-500 text-3xl mb-2" />,
    title: "Easy Setup",
    desc: "Start selling in minutes with a simple registration process.",
  },
];

const SellOnOvaboss = () => {
  return (
    <div>
      {/* Hero */}
      <div className="relative w-full h-screen">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 z-10 bg-cover bg-no-repeat bg-center h-full "
          style={{ backgroundImage: `url(${Hero})` }}
        >
          {/* Dark overlay to improve text readability */}
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        {/* Content container */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-white text-center">
          <h1 className="text-3xl md:text-6xl font-bold mb-3">
            Grow Your Business, Sell With Us Today
          </h1>

          <p className="max-w-2xl mb-8 text-sm md:text-2xl">
            Join thousands of sellers and reach millions of customers. List your
            products, make sales, and grow your business easily.
          </p>

          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-6 py-2 rounded transition-colors">
            Start selling now
          </button>
        </div>
      </div>

      {/* Why Sell */}
      <section className="py-16 px-4 text-center bg-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Why sell on Ovaboss?
        </h2>
        <p className="text-[#000000] mb-10 max-w-2xl mx-auto">
          Selling on Ovaboss gives you access to millions of customers, secure
          payments, and the tools you need to grow your business.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border items-center justify-center flex flex-col rounded-lg p-6 shadow-sm hover:shadow-md transition"
            >
              {feature.icon}
              <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <HowItWorks />
    </div>
  );
};

export default SellOnOvaboss;
