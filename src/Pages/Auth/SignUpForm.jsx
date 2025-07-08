import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaCheck, FaTimes } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import Logo from "../../assets/Logo.png";
import { Link, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Loading from "../../components/Loading";
import useCountry from "../../hooks/useCountry";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [ selectedCountry, setSelectedCountry ] = useState({});

  const { user_type } = useParams();

  const { inputs, isLoading, handleInput, handleRegister } = useAuth();
  const { isLoading: isLoadingCountries, countries } = useCountry();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handlePassword = (password) => {
    let passwordError = null;

    if (!/(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
      passwordError = "The password field must contain at least one uppercase and one lowercase letter.";
    } else if (!/[a-zA-Z]/.test(password)) {
      passwordError = "The password field must contain at least one letter.";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      passwordError = "The password field must contain at least one symbol.";
    }

    handleInput('signup.password', password);
    setPasswordError(passwordError);

  }

  const handleChangeCountry = (country) => {
    const parsedCountry = JSON.parse(country);
    setSelectedCountry(parsedCountry);
    handleInput("signup.country_id", parsedCountry.countryId);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#faf9f9] p-4">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-xs p-6">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={Logo} />
        </div>

        {/* Sign Up Heading */}
        <h1 className="text-2xl font-bold text-center text-[#181818] mb-2">
          Sign Up
        </h1>
        <p className="text-xs text-center text-[#181818] font-bold mb-4">
          Please enter your details to create an account
        </p>

        {/* Form */}
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
            <div className="col-span-1 space-y-4">
              {/* First Name */}
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-xs font-medium text-gray-700 mb-1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter your first name"
                  value={inputs.signup.firstname}
                  onChange={e => handleInput('signup.firstname', e.target.value)}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter your email"
                  value={inputs.signup.email}
                  onChange={e => handleInput('signup.email', e.target.value)}
                />
              </div>

              {/* Country */}
              <div>
                <label
                  htmlFor="country"
                  className="block text-xs font-medium text-gray-700 mb-1"
                >
                  Country
                </label>
                <div className="relative">
                  <select
                    onChange={e => handleChangeCountry(e.target.value)}
                    id="country"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md appearance-none"
                  >
                    <option value="" selected disabled>Select Country</option>
                    {countries.map((item, key) => (
                      <option value={JSON.stringify(item)} key={key}>{ item.country }</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
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
                    className={`w-full px-3 py-2 border rounded-md ${
                      passwordError ? "border-red-300" : "border-gray-500"
                    }`}                    
                    placeholder="••••••••"
                    value={inputs.signup.password}
                    onChange={e => handlePassword(e.target.value)}
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

            <div className="space-y-4">
              {/* Last Name */}
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-xs font-medium text-gray-700 mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter your last name"
                  value={inputs.signup.lastname}
                  onChange={e => handleInput('signup.lastname', e.target.value)}
                />
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>

                <div className="flex items-center space-x-2">
                  <span className="px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700">
                    {selectedCountry.telCode}
                  </span>

                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="080 xxx xxxx"
                    value={inputs.signup.phone_number}
                    onChange={(e) => handleInput('signup.phone_number', e.target.value)}
                  />
                </div>
              </div>


              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-xs font-medium text-gray-700 mb-1"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="••••••••"
                    value={inputs.signup.password_confirmation}
                    onChange={e => handleInput('signup.password_confirmation', e.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    {showConfirmPassword ? (
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
          <div className="mt-2 mb-4">
            <p className="text-xs text-gray-500">Minimum of 8 characters</p>
            {passwordError && (
              <p className="text-xs text-red-500 mt-1">
                <FaTimes className="inline mr-1" />
                {passwordError}
              </p>
            )}
          </div>

          {/* Sign Up Button */}
          <button
            onClick={e => handleRegister(e, user_type)}
            type="submit"
            className="w-full bg-[#E6AE06] hover:bg-yellow-600 text-[#202020] py-2 rounded-md font-medium mt-4"
          >
            {isLoading ? <Loading/> : "Sign Up"}
          </button>

          {/* OR Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-500 text-xs">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Sign Up with Google */}
          <button
            type="button"
            className="w-full bg-white border border-gray-300 text-gray-700 py-2.5 rounded-md font-medium flex justify-center items-center"
          >
            <FcGoogle size={20} className="mr-2" />
            Sign up with Google
          </button>

          {/* Already have an account */}
          <p className="text-xs text-center mt-6 text-[#808080]">
            Already have an account?{" "}
            <Link to="/Signin" className="text-[#1a1a1a] font-semibold">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
