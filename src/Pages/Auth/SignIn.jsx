import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaCheck, FaTimes } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Loading from "../../components/Loading";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  const { inputs, isLoading, handleInput, handleLogin } = useAuth();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#faf9f9] p-4">
      <div className="flex justify-center mb-4">
        <img src={Logo} />
      </div>

      <div className="max-w-lg w-full bg-white rounded-lg shadow-xs p-6">
        {/* Logo */}

        {/* Sign Up Heading */}
        <h1 className="text-2xl font-bold text-center text-[#181818] mb-2">
          Log In
        </h1>
        <p className="text-xs text-center text-[#181818] font-bold mb-4">
          Welcome back! Please enter your details
        </p>

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
                  value={inputs.login.email}
                  onChange={e => handleInput('login.email', e.target.value)}
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-xs font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="••••••••"
                    value={inputs.login.password}
                    onChange={e => handleInput('login.password', e.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <FaEyeSlash size={16} />
                    ) : (
                      <FaEye size={16} />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Password Requirements */}
          <div className="flex items-center justify-between w-full my-4">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 border-gray-300 rounded text-yellow-500 focus:ring-yellow-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-700"
              >
                Remember me
              </label>
            </div>
            <div>
              <Link
                to="/Resetpassword"
                className="text-sm font-medium text-yellow-500 hover:text-yellow-600"
              >
                Forgot password?
              </Link>
            </div>
          </div>
          {/* Sign Up Button */}

          <button
            onClick={handleLogin}
            type="submit"
            className="w-full bg-[#E6AE06] hover:bg-yellow-600 text-[#202020] py-2 rounded-md font-medium mt-4"
          >
            {isLoading ? <Loading/> : "Log In"}
          </button>

          {/* OR Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-400 text-xs">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Sign Up with Google */}
          <button
            type="button"
            className="w-full bg-white border border-gray-300 text-gray-700 py-2.5 rounded-md font-medium flex justify-center items-center"
          >
            <FcGoogle size={20} className="mr-2" />
            Log in with Google
          </button>

          {/* Already have an account */}
          <p className="text-xs text-center mt-6 text-[#808080]">
            Dont have an account?{" "}
            <Link to="/Signup" className="text-[#1a1a1a] font-semibold">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
