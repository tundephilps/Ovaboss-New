import { Link } from "react-router-dom";
import Profile from "../../../assets/Profile.jpg";

export default function BusinessInfoCard() {
  return (
    <div className="bg-white p-4 rounded-md shadow-md mx-auto">
      {/* Top Right Button */}
      <button className="absolute top-2 right-2 bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded">
        View Business store
      </button>

      <div className="inline-flex items-center justify-between w-full mb-2 border-b pb-2">
        <h3 className="font-semibold ">Business Info</h3>

        <Link to="/BusinessPage">
          <div className="text-xs p-2 bg-[#ffd1b0] rounded-sm cursor-pointer">
            View Business Store
          </div>
        </Link>
      </div>

      {/* Business Profile */}
      <div className="flex items-center gap-3 mb-2">
        <img
          src={Profile}
          alt="Fatimah Technology"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-[#0000ff] font-semibold cursor-pointer hover:underline">
            Fatimah Technology
          </p>
          <p className="text-sm text-gray-600">3 Years of Selling on Ovaboss</p>
        </div>
      </div>

      {/* Contact Button */}
      <Link to="/BusinessPage">
        {" "}
        <button className="w-full mt-4 bg-[#e6ae06] hover:bg-yellow-600 text-black font-semibold py-2 rounded">
          Contact Business
        </button>
      </Link>
    </div>
  );
}
