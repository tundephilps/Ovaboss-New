import React from "react";
import BreadCrumb from "../../components/BusinessService/BusinessDetails/BreadCrumb";
import { MdLocationOn, MdAccessTime, MdChat, MdFlag } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import {
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";

import { FaStar, FaCircle } from "react-icons/fa";
import Logo from "../../assets/BusinessLogo.png";

import Biz1 from "../../assets/Biz1.png";
import ImageSlider from "../../components/BusinessService/BusinessDetails/ImageSlider";
import BrowsingHistory from "../../components/BusinessService/CategoryPage/BrowsingHistory";

const BussinessDetails = () => {
  return (
    <div className="bg-[#faf9f9] py-8">
      <BreadCrumb />

      <div className="grid lg:grid-cols-5 gap-12 grid-cols-1 lg:px-10 px-2 w-full mx-auto pb-12">
        {/* Left side - Cart Items */}
        <div className="lg:col-span-3 col-span-5 space-y-8 p-4 shadow-md bg-white rounded">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            Get your dynamic well designed Logo, flyers, banners, poster, photo
            editing and printing service
          </h2>

          <div className="flex items-center mt-2">
            <img src={Logo} className="rounded-full mr-4" />

            <div>
              <p className="font-medium text-gray-700">Creative Service</p>
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  <FaStar size={12} />
                  <FaStar size={12} />
                  <FaStar size={12} />
                  <FaStar size={12} />
                  <FaStar size={12} />
                </div>
                <span className="text-xs text-gray-500 ml-1">
                  (295 reviews)
                </span>
              </div>
            </div>
          </div>

          {/* Slider */}
          <ImageSlider />

          {/* About Section */}
          <div>
            <h2 className="text-base font-bold mb-2">About this Business</h2>
            <p>
              welcome to our gig “best Minimalist logo design for your business”
              we are offering a high quality minimalist logo design in this gig.
              logo will be vector which means it is printable on any large scale
              also usable on web media. Vector quality is the best of the best
              quality in the world these are made on illustrator and we are the
              expert and we know what your business actually needs, I made
              creative logos which will made your brand identity to grow your
              business.
            </p>
          </div>

          {/* Why Us Section */}
          <div>
            <h2 className="text-base font-bold mb-2">WHY US!</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>we are 1 stop solution for your all design needs.</li>
              <li>we will make your logo and business stand out.</li>
              <li>100% satisfied clients around the globe.</li>
              <li>
                we are responsible for any maintenance just for free even after
                order completion.
              </li>
              <li>we provide vector logos that are super best quality.</li>
              <li>24/7 available for any assistance.</li>
            </ul>
          </div>

          {/* Share Section */}
          <div className="flex items-center gap-4">
            <span className="font-semibold text-gray-700">Share</span>
            <div className="flex gap-3 text-lg">
              <FaXTwitter className="text-black hover:text-gray-700 cursor-pointer" />
              <FaFacebook className="text-blue-600 hover:text-blue-800 cursor-pointer" />
              <FaInstagram className="text-pink-500 hover:text-pink-600 cursor-pointer" />
              <FaWhatsapp className="text-green-500 hover:text-green-600 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Right side - Order Summary */}
        <div className="lg:col-span-2 col-span-5 space-y-4">
          <div className="self-start p-4 shadow-md bg-white rounded">
            {/* Business Info */}
            <div>
              <h2 className="font-semibold text-gray-800 text-xl">
                📁 Business Info
              </h2>
              <div className="flex items-center gap-2 text-gray-600 mt-2">
                <MdLocationOn className="text-lg" />
                <span>Surulere, Lagos</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 mt-1">
                <MdAccessTime className="text-lg" />
                <span>Monday - Sunday, 9:00am - 5:00pm</span>
              </div>
            </div>
          </div>

          <div className="self-start p-4 shadow-md bg-white rounded">
            {/* Creative Service */}
            <div>
              <h2 className="font-semibold text-gray-800 text-xl">
                🎨 Creative Service
              </h2>
              <div className="flex items-center gap-2 text-gray-600 mt-2">
                <FaCheckCircle className="text-green-500" />
                <span>Typically replies within a day</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 mt-1">
                <span>📅 1y 4m on Ovaboss</span>
              </div>
              <button className="bg-[#e6a606] hover:bg-yellow-500 w-full mt-3 text-black font-semibold py-2 px-4 rounded-md flex items-center justify-center gap-2">
                <IoChatbubbleEllipsesOutline />
                Start Chat
              </button>
            </div>
          </div>
          <div className="self-start p-4 shadow-md bg-white rounded">
            {/* Report & Frame */}
            <div className="">
              <button className="text-[#ff0000] border border-[#ff0000] hover:bg-red-100 mx-auto rounded-md py-3 px-12 w-full text-center justify-center text-xs flex items-center gap-1 font-medium">
                <MdFlag className="text-base" />
                Report Abuse
              </button>
            </div>
          </div>

          <div className="self-start p-4 shadow-md bg-white rounded">
            {/* Safety Tips */}
            <div className="border-t border-gray-200 pt-2">
              <h2 className="font-semibold text-gray-800">🛡️ Safety tips</h2>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-sm">
                <li>Check feedback to make sure the contact is reliable</li>
                <li>Agree on the scope of work and remuneration</li>
                <li>Meet in person at a safe public place</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <BrowsingHistory />
    </div>
  );
};

export default BussinessDetails;
