import { useState, useRef, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import Loading from "../../components/Loading";

export default function OTPInput() {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputRefs = useRef([]);
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);

  const { inputs, isLoading, isSaving, handleValidateOtp, handleResendOtp } = useAuth();

  // Handle input change
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < 5) {
        inputRefs.current[index + 1]?.focus();
      }

      if (index === 5 && newOtp.every((d) => d !== "")) {
        handleSubmit(newOtp.join(""));
      }
    }
  };

  // Handle backspace navigation
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index] === "") {
        inputRefs.current[index - 1]?.focus();
      } else {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }
  };

  // Handle paste
  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, 6);
    if (/^\d{6}$/.test(pasteData)) {
      const newOtp = pasteData.split("");
      setOtp(newOtp);
      inputRefs.current[5]?.focus();
      handleSubmit(pasteData);
    }
  };

  // Submit OTP
  const handleSubmit = (otpValue) => {
    handleValidateOtp(otpValue);
  };

  // Countdown timer for resend
  useEffect(() => {
    let timer;

    if (countdown > 0) {
      setCanResend(false);
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else {
      setCanResend(true);
    }

    return () => clearInterval(timer);
  }, [countdown]);

  // Resend OTP logic
  const handleResendOTP = async () => {
    // Replace this with your actual resend logic
    await handleResendOtp();
    setOtp(Array(6).fill(""));
    inputRefs.current[0]?.focus();
    setCountdown(60);
    setCanResend(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Enter OTP</h2>

      <div
        className="flex gap-3"
        onPaste={handlePaste}
        style={isLoading ? { opacity: 0.3 } : null}
      >
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            inputMode="numeric"
            maxLength={1}
            className="w-12 h-14 text-center text-xl border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (inputRefs.current[index] = el)}
          />
        ))}
      </div>

      {isLoading && <Loading />}

      <div className="mt-6 text-sm text-gray-600">
        {canResend ? (
          <button
            onClick={handleResendOTP}
            className="text-yellow-600 font-medium hover:underline"
          >
            {isSaving ? <Loading/> : 'Resend OTP'}
          </button>
        ) : (
          <span>
            Resend available in {countdown} second{countdown !== 1 ? "s" : ""}
          </span>
        )}
      </div>
    </div>
  );
}
