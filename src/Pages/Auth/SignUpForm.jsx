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
  const [selectedCountry, setSelectedCountry] = useState({});
  const [passwordStrength, setPasswordStrength] = useState(0);

  const { user_type } = useParams();

  const { inputs, isLoading, handleInput, handleRegister } = useAuth();
  const { isLoading: isLoadingCountries, countries } = useCountry();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    const checks = {
      length: password.length >= 8,
      lowercase: /[a-z]/.test(password),
      uppercase: /[A-Z]/.test(password),
      number: /[0-9]/.test(password),
      symbol: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };

    // Count passed checks
    Object.values(checks).forEach((check) => {
      if (check) strength++;
    });

    return { strength, checks };
  };

  const getStrengthColor = (strength) => {
    if (strength <= 2) return "bg-red-500";
    if (strength <= 3) return "bg-yellow-500";
    if (strength <= 4) return "bg-blue-500";
    return "bg-green-500";
  };

  const getStrengthText = (strength) => {
    if (strength <= 2) return "Weak";
    if (strength <= 3) return "Fair";
    if (strength <= 4) return "Good";
    return "Strong";
  };

  const handlePassword = (password) => {
    let passwordError = null;
    const { strength, checks } = calculatePasswordStrength(password);
    setPasswordStrength(strength);

    if (!checks.uppercase || !checks.lowercase) {
      passwordError =
        "The password field must contain at least one uppercase and one lowercase letter.";
    } else if (!checks.symbol) {
      passwordError = "The password field must contain at least one symbol.";
    } else if (!checks.length) {
      passwordError = "The password field must be at least 8 characters long.";
    }

    handleInput("signup.password", password);
    setPasswordError(passwordError);
  };

  const handleChangeCountry = (country) => {
    const parsedCountry = JSON.parse(country);
    setSelectedCountry(parsedCountry);
    handleInput("signup.country_id", parsedCountry.countryId);
  };

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
        <form onSubmit={(e) => handleRegister(e, user_type)}>
          <div className="space-y-4">
            {/* First Name and Last Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  onChange={(e) =>
                    handleInput("signup.firstname", e.target.value)
                  }
                  required
                />
              </div>

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
                  onChange={(e) =>
                    handleInput("signup.lastname", e.target.value)
                  }
                  required
                />
              </div>
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
                onChange={(e) => handleInput("signup.email", e.target.value)}
                required
              />
            </div>

            {/* Country - Full Width */}
            <div>
              <label
                htmlFor="country"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                Country
              </label>
              <div className="relative">
                <select
                  onChange={(e) => handleChangeCountry(e.target.value)}
                  id="country"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md appearance-none"
                  required
                >
                  <option value="" selected disabled>
                    Select Country
                  </option>
                  {countries.map((item, key) => (
                    <option value={JSON.stringify(item)} key={key}>
                      {item.country}
                    </option>
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
                  onChange={(e) =>
                    handleInput("signup.phone_number", e.target.value)
                  }
                  required
                />
              </div>
            </div>

            {/* Password and Confirm Password Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    onChange={(e) => handlePassword(e.target.value)}
                    required
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
                    onChange={(e) =>
                      handleInput(
                        "signup.password_confirmation",
                        e.target.value
                      )
                    }
                    required
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

            {/* Password Strength Meter */}
            {inputs.signup.password && (
              <div className="mt-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-600">
                    Password Strength:
                  </span>
                  <span
                    className={`text-xs font-medium ${
                      passwordStrength <= 2
                        ? "text-red-500"
                        : passwordStrength <= 3
                        ? "text-yellow-500"
                        : passwordStrength <= 4
                        ? "text-blue-500"
                        : "text-green-500"
                    }`}
                  >
                    {getStrengthText(passwordStrength)}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${getStrengthColor(
                      passwordStrength
                    )}`}
                    style={{ width: `${(passwordStrength / 5) * 100}%` }}
                  ></div>
                </div>

                {/* Password Requirements Checklist */}
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs">
                  <div
                    className={`flex items-center ${
                      inputs.signup.password.length >= 8
                        ? "text-green-600"
                        : "text-gray-500"
                    }`}
                  >
                    {inputs.signup.password.length >= 8 ? (
                      <FaCheck className="mr-1" />
                    ) : (
                      <FaTimes className="mr-1" />
                    )}
                    8+ characters
                  </div>
                  <div
                    className={`flex items-center ${
                      /[a-z]/.test(inputs.signup.password)
                        ? "text-green-600"
                        : "text-gray-500"
                    }`}
                  >
                    {/[a-z]/.test(inputs.signup.password) ? (
                      <FaCheck className="mr-1" />
                    ) : (
                      <FaTimes className="mr-1" />
                    )}
                    Lowercase letter
                  </div>
                  <div
                    className={`flex items-center ${
                      /[A-Z]/.test(inputs.signup.password)
                        ? "text-green-600"
                        : "text-gray-500"
                    }`}
                  >
                    {/[A-Z]/.test(inputs.signup.password) ? (
                      <FaCheck className="mr-1" />
                    ) : (
                      <FaTimes className="mr-1" />
                    )}
                    Uppercase letter
                  </div>
                  <div
                    className={`flex items-center ${
                      /[0-9]/.test(inputs.signup.password)
                        ? "text-green-600"
                        : "text-gray-500"
                    }`}
                  >
                    {/[0-9]/.test(inputs.signup.password) ? (
                      <FaCheck className="mr-1" />
                    ) : (
                      <FaTimes className="mr-1" />
                    )}
                    Number
                  </div>
                  <div
                    className={`flex items-center ${
                      /[!@#$%^&*(),.?":{}|<>]/.test(inputs.signup.password)
                        ? "text-green-600"
                        : "text-gray-500"
                    }`}
                  >
                    {/[!@#$%^&*(),.?":{}|<>]/.test(inputs.signup.password) ? (
                      <FaCheck className="mr-1" />
                    ) : (
                      <FaTimes className="mr-1" />
                    )}
                    Special character
                  </div>
                </div>
              </div>
            )}

            {/* Password Error */}
            {passwordError && (
              <p className="text-xs text-red-500 mt-1">
                <FaTimes className="inline mr-1" />
                {passwordError}
              </p>
            )}

            {/* Referral Code */}
            <div>
              <label
                htmlFor="referralCode"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                Referral Code
              </label>
              <input
                type="text"
                id="referralCode"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter Referral Code"
              />
            </div>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#E6AE06] hover:bg-yellow-600 text-[#202020] py-2 rounded-md font-medium mt-6"
          >
            {isLoading ? <Loading /> : "Sign Up"}
          </button>
          <div className="flex items-center gap-2 mt-6 text-[10px] text-[#808080]">
            <input type="checkbox" id="terms" className="mt-1" required />
            <label htmlFor="terms" className="leading-snug">
              By clicking the signup button, I agree to the{" "}
              <Link
                to="/TermsofService"
                className="text-[#E6AE06] font-semibold"
              >
                Terms
              </Link>{" "}
              and acknowledge the{" "}
              <Link
                to="/PrivacyPolicy"
                className="text-[#E6AE06] font-semibold"
              >
                Privacy Policy
              </Link>
              .
            </label>
          </div>
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
