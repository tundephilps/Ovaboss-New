import useAuth from "../../hooks/useAuth";
import Loading from "../../components/Loading";

import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

const VerifyEmail = () => {
  const { inputs, isLoading, handleInput, handleVerifyEmail } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#faf9f9] p-4">
      <div className="flex justify-center mb-4">
        <img src={Logo} />
      </div>

      <div className="max-w-lg w-full bg-white rounded-lg shadow-xs p-6">
        {/* Logo */}

        {/* Sign Up Heading */}
        <h1 className="text-2xl font-bold text-center text-[#181818] mb-2">
          Verify Email
        </h1>


        {/* Form */}
        <form>
          <div className="grid grid-cols-1 gap-x-4 gap-y-4">
            <div className="col-span-1 space-y-4">
              {/* Email */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="Email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter your email"
                  value={inputs.verifyEmail.email}
                  onChange={e => handleInput("verifyEmail.email", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Sign Up Button */}
          <button
            onClick={handleVerifyEmail}
            type="submit"
            className="w-full bg-[#E6AE06] hover:bg-yellow-600 text-[#202020] py-2 rounded-md font-medium mt-4"
          >
            {isLoading ? <Loading/> : "Send Email OTP"}
          </button>

          {/* Already have an account */}
          <p className="text-xs text-center mt-6 text-[#808080]">
            Return to{" "}
            <Link to="/Signin" className="text-[#1a1a1a] font-semibold">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;
