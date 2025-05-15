import { useState } from "react";
import PropTypes from "prop-types";
import instagramIcon from "../../assets/instagram0.png";
import xIcon from "../../assets/x0.png";
import navArrowDownIcon from "../../assets/nav-arrow-down0.svg";

const ContactUs = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "🇳🇬 Nigeria",
    phoneNumber: "",
    message: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(formData);
    }
  };
  const countries = ["Nigeria", "Ghana", "Kenya", "South Africa", "Egypt"]; // Add more as needed

  return (
    <div
      className="flex flex-col gap-[22px] items-center justify-start relative mt-[88px] mb-[148px] px-[16px]" // Added 16px padding for both left and right
    >
      <div className="flex flex-col gap-[72px] items-center justify-center w-[100%] shrink-0 max-w-[1255px] relative">
        <div className="flex flex-col gap-6 items-center justify-start w-[100%] shrink-0 max-w-[1026px] relative">
          <div
            className="text-[#000000] text-center font-h1-super-font-family font-bold relative self-stretch"
            style={{ fontSize: "48px" }}
          >
            Contact our team
          </div>
          <div className="text-[#343A40] text-center font-600 text-2xl leading-h-2-semi-line-height font-h-2-semi-font-weight relative self-stretch">
            Need help with your order, payment, returns and more? Reach out via
            email, phone, or social media, and we’ll assist you as soon as
            possible!
          </div>
        </div>
        {/* Form Input */}
        <div className="flex flex-row gap-[98px] items-center justify-center self-stretch shrink-0 relative">
          <div
            className="bg-[#ffffff] rounded-2xl pt-[38px] pr-8 pb-[38px] pl-8 flex flex-row gap-2.5 items-center justify-start flex-1 max-w-[565px] w-[100%] relative overflow-hidden"
            style={{ boxShadow: "-2px 0px 10.6px 1px rgba(0, 0, 0, 0.06)" }}
          >
            <div className="flex flex-col gap-8 items-center justify-start flex-1 relative w-[100%]">
              <div className="flex flex-col gap-3 items-center justify-start shrink-0 w-[354px] relative w-100%">
                <div
                  className="text-text-headings text-center font-headings-h-2-font-family font-bold relative self-stretch"
                  style={{ fontSize: "24px" }}
                >
                  Send us a message
                </div>
              </div>
              <div className="flex flex-col gap-8 items-center justify-start self-stretch shrink-0 relative">
                <div className="flex flex-col gap-1 items-start justify-start self-stretch shrink-0 relative">
                  <div className="flex flex-col gap-5 items-start justify-start self-stretch shrink-0 relative">
                    <div className="flex flex-col gap-[52px] items-start justify-start self-stretch shrink-0 relative">
                      <div className="flex flex-col gap-6 items-start justify-start self-stretch shrink-0 relative">
                        <div className="flex flex-col gap-[21px] items-start justify-center self-stretch shrink-0 relative">
                          <div className="flex flex-col gap-2 items-start justify-start self-stretch shrink-0 relative">
                            <div className="flex flex-row gap-0 items-center justify-start self-stretch shrink-0 relative">
                              <div className="text-text-body text-left font-body-texts-b-1-semibold-font-family text-body-texts-b-1-semibold-font-size leading-body-texts-b-1-semibold-line-height font-body-texts-b-1-semibold-font-weight relative flex-1 flex items-center justify-start">
                                Full Name
                              </div>
                            </div>
                            <div className="rounded-spacing-system-radius-sm border-solid border-[#e3e3e1] border-[1.5px] p-3 flex flex-row gap-3 items-center justify-start self-stretch shrink-0 relative">
                              <div className="flex flex-row gap-3 items-center justify-start flex-1 relative">
                                <input
                                  type="text"
                                  placeholder="Enter your full name"
                                  className="text-text-color-text-grey text-left font-['OpenSans-Regular',_sans-serif] text-base leading-6 font-normal relative flex-1 flex items-center justify-start w-[100%] bg-transparent border-none outline-none"
                                  value={formData.fullName}
                                  onChange={(e) =>
                                    handleInputChange(
                                      "fullName",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 items-start justify-start self-stretch shrink-0 relative">
                            <div className="flex flex-row gap-0 items-center justify-start self-stretch shrink-0 relative">
                              <div className="text-text-body text-left font-body-texts-b-1-semibold-font-family text-body-texts-b-1-semibold-font-size leading-body-texts-b-1-semibold-line-height font-body-texts-b-1-semibold-font-weight relative flex-1 flex items-center justify-start">
                                Email
                              </div>
                            </div>
                            <div className="rounded-spacing-system-radius-sm border-solid border-[#e3e3e1] border-[1.5px] p-3 flex flex-row gap-3 items-center justify-start self-stretch shrink-0 relative">
                              <div className="flex flex-row gap-3 items-center justify-start flex-1 relative">
                                <input
                                  type="email"
                                  placeholder="Enter your email"
                                  className="text-text-color-text-grey text-left font-['OpenSans-Regular',_sans-serif] text-base leading-6 font-normal relative flex-1 flex items-center justify-start w-[100%] bg-transparent border-none outline-none"
                                  value={formData.email}
                                  onChange={(e) =>
                                    handleInputChange("email", e.target.value)
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[21px] items-center justify-start flex-wrap content-center self-stretch shrink-0 relative">
                          <div className="flex flex-col gap-2 items-start justify-start flex-1 min-w-[240px] relative">
                            {/* Label */}
                            <div className="flex flex-row items-center justify-start self-stretch relative">
                              <div className="text-text-body text-left font-semibold text-base leading-6">
                                Country
                              </div>
                            </div>

                            {/* Dropdown */}
                            <div className="rounded-sm border border-[#e3e3e1] p-3 w-full relative">
                              <select
                                value={formData.country}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    country: e.target.value,
                                  })
                                }
                                className="w-full text-[#9ea2ae] text-base font-normal bg-white outline-none appearance-none pr-6"
                              >
                                <option value="">Select a country</option>
                                {countries.map((country, idx) => (
                                  <option key={idx} value={country}>
                                    {country}
                                  </option>
                                ))}
                              </select>

                              {/* Dropdown Arrow Icon */}
                              <img
                                src={navArrowDownIcon}
                                alt="Dropdown"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 items-start justify-start flex-1 min-w-[240px] relative">
                            <div className="flex flex-row gap-0 items-center justify-start self-stretch shrink-0 relative">
                              <div className="text-text-body text-left font-body-texts-b-1-semibold-font-family text-body-texts-b-1-semibold-font-size leading-body-texts-b-1-semibold-line-height font-body-texts-b-1-semibold-font-weight relative flex-1 flex items-center justify-start">
                                Phone Number
                              </div>
                            </div>
                            <div className="rounded-spacing-system-radius-sm border-solid border-[#e3e3e1] border-[1.5px] p-3 flex flex-row gap-3 items-center justify-start self-stretch shrink-0 relative">
                              <div className="flex flex-row gap-3 items-center justify-start flex-1 relative">
                                <input
                                  type="tel"
                                  placeholder="7051431703"
                                  className="text-text-color-text-grey text-left font-['OpenSans-Regular',_sans-serif] text-base leading-6 font-normal relative flex-1 flex items-center justify-start w-[100%] bg-transparent border-none outline-none"
                                  value={formData.phoneNumber}
                                  onChange={(e) =>
                                    handleInputChange(
                                      "phoneNumber",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[21px] items-center justify-start self-stretch shrink-0 relative w-[100%]">
                          <div className="flex flex-col gap-2 items-start justify-start shrink-0  h-[162px] relative w-[100%]">
                            <div className="flex flex-row gap-0 items-center justify-start self-stretch shrink-0 relative">
                              <div className="text-text-body text-left font-body-texts-b-1-semibold-font-family text-body-texts-b-1-semibold-font-size leading-body-texts-b-1-semibold-line-height font-body-texts-b-1-semibold-font-weight relative flex-1 flex items-center justify-start W-[100%]">
                                Message
                              </div>
                            </div>
                            <div className="rounded-spacing-system-radius-sm border-solid border-[#e3e3e1] border-[1.5px] p-3 flex flex-row gap-3 items-start justify-start self-stretch flex-1 relative w-[100%]">
                              <div className="flex flex-row gap-3 items-center justify-start flex-1 relative w-[100%]">
                                <textarea
                                  className="text-text-color-text-grey text-left font-['OpenSans-Regular',_sans-serif] text-base leading-6 font-normal relative flex-1 flex items-center justify-start w-[100%] h-[100%] bg-transparent border-none outline-none resize-none"
                                  placeholder="Leave us a message..."
                                  value={formData.message}
                                  onChange={(e) =>
                                    handleInputChange("message", e.target.value)
                                  }
                                ></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        className="bg-[#E6AE06] rounded-xl pt-3 pr-spacing-padding-s pb-3 pl-spacing-padding-s flex flex-row gap-spacing-gap-xs items-center justify-center w-[100%] shrink-0 max-w-[501px] relative overflow-hidden"
                        style={{ transition: "background-color 0.3s ease" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.backgroundColor = "#CC9A06")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.backgroundColor = "#E6AE06")
                        }
                        onClick={handleSubmit}
                      >
                        <div className="text-neutral-default text-center font-body-texts-b-1-semibold-font-family text-body-texts-b-1-semibold-font-size leading-body-texts-b-1-semibold-line-height font-body-texts-b-1-semibold-font-weight relative flex items-center justify-center">
                          Send message
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Social Media */}
      <div className="flex flex-row gap-4 items-center justify-start shrink-0 relative">
        <img
          className="shrink-0 w-10 h-10 relative cursor-pointer"
          style={{ objectFit: "cover", aspectRatio: "1" }}
          src={instagramIcon}
          alt="Instagram"
        />
        <img
          className="shrink-0 w-10 h-10 relative cursor-pointer"
          style={{ objectFit: "cover", aspectRatio: "1" }}
          src={xIcon}
          alt="X"
        />
      </div>
    </div>
  );
};

ContactUs.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactUs;
