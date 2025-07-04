import { FaStar, FaMapMarkerAlt, FaCheckCircle, FaHeart } from "react-icons/fa";
import Top1 from "../../../assets/Top1.png";

import Top2 from "../../../assets/Top2.png";
import Top3 from "../../../assets/Top3.png";
import Top4 from "../../../assets/Top4.png";

import Avatar from "../../../assets/Avatar.png";

import Banner2 from "../../../assets/Banner2.png";

import { CiHeart } from "react-icons/ci";

const services = [
  {
    id: 1,
    image: Top1,
    name: "Jay T. cleaning",
    badge: { text: "Sponsored", color: "bg-[#b0b0ff]" },
    desc: "Professional Cleaning Polishing With a Big Difference",
    price: "From £200",
    rating: 4.5,
    category: "Cleaning",
    location: "Surulere, Lagos",
  },
  {
    id: 2,
    image: Top2,
    name: "Mike Solar",
    badge: { text: "Top Rated", color: "bg-[#ffd180]" },
    desc: "We offer professional installation of all kinds of solar and inverter systems...",
    price: "From £200",
    rating: 4.5,
    category: "Inverter System",
    location: "Surulere, Lagos",
  },
  {
    id: 3,
    image: Top3,
    name: "Jonathan Ajao",
    badge: null,
    desc: "For all kinds of Fumigation and pest control Services such as Mosquitoes...",
    price: "From £200",
    rating: 4.5,
    category: "Fumigation",
    location: "Surulere, Lagos",
  },
  {
    id: 4,
    image: Top4,
    name: "Joy Miranda",
    badge: { text: "Vetted Pro", color: "bg-yellow-200" },
    desc: "Boma catering food services for your wedding events, seminar, Birthday...",
    price: "From £200",
    rating: 4.5,
    category: "Party Event",
    location: "Surulere, Lagos",
  },
];

const TopServices = () => {
  return (
    <div className="lg:px-12 mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Top Professional Service</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="border rounded-md shadow-sm hover:shadow-2xl cursor-pointer overflow-hidden bg-white relative"
          >
            <CiHeart className="absolute text-2xl text-yellow-400 cursor-pointer top-2 right-2" />
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-3 space-y-2">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-3">
                  <img src={Avatar} className="h-8 w-8 rounde-full" />
                  <h3 className="font-semibold text-sm">{service.name}</h3>
                </div>
                {service.badge && (
                  <span
                    className={`text-black text-xs px-2 py-1 rounded ${service.badge.color}`}
                  >
                    {service.badge.text}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600">{service.desc}</p>
              <div className="flex items-center gap-1 text-yellow-500 text-sm">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
                <span className="text-gray-500 ml-1">(785)</span>
              </div>
              <div className="inline-flex items-center justify-between w-full">
                <div className="font-semibold text-sm">{service.price}</div>

                <span>{service.category}</span>
              </div>
              <div className="flex items-center justify-between text-gray-500 text-xs">
                <div className="flex items-center gap-1">
                  <FaMapMarkerAlt />
                  <span>{service.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#FFD700] hover:bg-yellow-600 py-2 cursor-pointer font-semibold px-12 w-fit mx-auto flex items-center justify-center rounded-md mt-12">
        More
      </div>

      <img src={Banner2} className="h-full w-full mt-6" />
    </div>
  );
};

export default TopServices;
