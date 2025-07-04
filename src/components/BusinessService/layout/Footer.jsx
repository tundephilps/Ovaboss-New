import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Logo from "../../../assets/Logo2.png";
import { BsTwitterX } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-4 lg:px-12  py-10">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo and Contact */}
        <div className="space-y-4">
          <img src={Logo} className="text-white" />
          <div className="text-sm font-semibold">
            Got Question? Call Us 24/7
          </div>

          {/* Social Icons */}
          <div className="flex   space-x-4 mt-4 pt-28">
            <BsTwitterX className="w-6 h-6 cursor-pointer hover:text-yellow-400" />
            <FaFacebookF className="w-6 h-6 cursor-pointer hover:text-yellow-400" />
            <FaYoutube className="w-6 h-6 cursor-pointer hover:text-yellow-400" />
            <FaInstagram className="w-6 h-6 cursor-pointer hover:text-yellow-400" />
          </div>
        </div>

        {/* Customer Care */}
        <div className="space-y-3 text-sm">
          <h3 className="font-bold mb-2">Customer Care</h3>
          <p className="hover:text-yellow-400 text-[#808080] cursor-pointer">
            Contact Us
          </p>
          <p className="hover:text-yellow-400 text-[#808080] cursor-pointer">
            FAQs
          </p>
          <p className="hover:text-yellow-400 text-[#808080] cursor-pointer">
            Latest News & Learning Center
          </p>
        </div>

        {/* Our Company */}
        <div className="space-y-3 text-sm">
          <h3 className="font-bold mb-2">Our Company</h3>
          <p className="hover:text-yellow-400 text-[#808080] cursor-pointer">
            About Us
          </p>
          <p className="hover:text-yellow-400 text-[#808080] cursor-pointer">
            Terms & Conditions
          </p>
          <p className="hover:text-yellow-400 text-[#808080] cursor-pointer">
            Privacy Policy
          </p>
          <p className="hover:text-yellow-400 text-[#808080] cursor-pointer">
            Become a Rep
          </p>
          <p className="hover:text-yellow-400 text-[#808080] cursor-pointer">
            Become Facilitator
          </p>
          <p className="hover:text-yellow-400 text-[#808080] cursor-pointer">
            Partner With Us
          </p>
        </div>

        {/* Make Money on Ovaboss */}
        <div className="space-y-3 text-sm">
          <h3 className="font-bold mb-2">Make Money On Ovaboss</h3>
          <p className="hover:text-yellow-400 text-[#808080] cursor-pointer">
            Become a Ovaboss Affiliate
          </p>
        </div>

        {/* Newsletter */}
        <div className="space-y-4 text-sm">
          <h3 className="font-bold mb-2">Get Latest Deals</h3>
          <p className="text-[#808080] text-xs">
            Our best promotions sent to your inbox
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 text-black rounded-l-md"
            />
            <button className="bg-[#FFD700] text-black px-4 text-xs rounded-r-md font-bold">
              Subscribe
            </button>
          </div>
          <div className="flex items-start space-x-2">
            <input type="checkbox" className="mt-1" />
            <p className="text-xs text-[#808080]">
              I agree to Ovaboss{" "}
              <span className="underline cursor-pointer">
                Privacy and Cookie Policy
              </span>
              . You can unsubscribe from newsletters at any time.{" "}
              <span className="text-yellow-400 underline cursor-pointer">
                I accept the Legal Terms
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
