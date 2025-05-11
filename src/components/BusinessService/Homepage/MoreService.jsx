import More8 from "../../../assets/More8.svg";
import More7 from "../../../assets/More7.svg";
import More6 from "../../../assets/More6.svg";

import More5 from "../../../assets/More5.png";

import More4 from "../../../assets/More4.svg";
import More3 from "../../../assets/More3.svg";
import More2 from "../../../assets/More2.svg";
import More1 from "../../../assets/More1.svg";

const services = [
  { title: "Real Estate", image: More1, bg: "bg-[#d2d5db]" },
  { title: "Education", image: More2, bg: "bg-[#d9d9ff]" },
  { title: "Accounting", image: More3, bg: "bg-[#ffe9d9]" },
  { title: "Hand Craft", image: More4, bg: "bg-[#d9ecd9]" },
  {
    title: "Customer Service",
    image: More5,
    bg: "bg-[#c6e6ff]",
  },
  { title: "Consulting", image: More6, bg: "bg-[#ffd9d9]" },
  {
    title: "Video Production",
    image: More7,
    bg: "bg-[#fff6da]",
  },
  {
    title: "Administration",
    image: More8,
    bg: "bg-[#e5bdff]",
  },
];

const MoreServices = () => {
  return (
    <div className="lg:px-12 mx-auto px-4 py-10">
      <h2 className="text-lg font-semibold mb-6">More Service</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex items-center justify-center py-6 gap-3 p-4 rounded-md ${service.bg}`}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-8 h-8 object-contain"
            />
            <span className="text-sm font-medium text-gray-800">
              {service.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreServices;
