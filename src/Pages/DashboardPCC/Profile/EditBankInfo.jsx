import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoChevronDown } from "react-icons/io5";
import useProfile from "../../../hooks/useProfile";
import useCountry from "../../../hooks/useCountry";
import { useAppContext } from "../../../context/AppContext";
import Loading from "../../../components/Loading";
import BankAccountTable from "../../../components/DashboardPCC/Profile/BankAccountTable";
import AddressTable from "../../../components/DashboardPCC/Profile/AddressTable";
import AddBankAccountModal from "../../../components/DashboardPCC/Profile/AddBankAccountModal";
import AddAddressModal from "../../../components/DashboardPCC/Profile/AddAddressModal";


const EditBankInfo = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [ isModalOpan , setModalOpen] = useState(false);
  const [ isAddressModalOpan , setAddressModalOpen] = useState(false);
  const [ isAddBankAccount , setIsAddBankAccount] = useState(true);
  const [ isAddAddress , setIsAddAddress] = useState(true);
  

  const { 
    isSaving, 
    inputs, 
    handleInput, 
    setInputs,
    handleCreateNextOfKin, 
    handleAddBankAccount,
    handleUpdateBankAccount, 
    handleAddAddress,
    handleUpdateAddress,
  } = useProfile();
  const { countries } = useCountry();
  const { user } = useAppContext();


  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const openBankAccountModal = () => {
    setInputs(prev => ({
      ...prev,
      address: {
        id: undefined,
        bank_id : "",
        country_id: "",
        bank_account_type_id: "",
        account_name : "",
        account_number : "",
        swift_code : "",
        recipient_code : ""
      }
    }))
    setIsAddBankAccount(true);
    setModalOpen(true);
  }

  const openAddressModal = () => {
    setInputs(prev => ({
      ...prev,
      address: {
        id: undefined,
        country_id : "",
        state_id : "",
        city_id : "",
        postal_code : "",
        address : "",
        contact_person : ""
      }
    }))
    setIsAddAddress(true);
    setAddressModalOpen(true);
  }

  const bankAccountCallback = () => setModalOpen(false);
  const addressCallback = () => setAddressModalOpen(false);

  const isNextOfKinDisabled = false;

  return (
    <div className=" bg-[#faf9f9] overflow-y-auto">
      <div className="py-6 px-4">
        <h1 className="font-bold text-2xl">Profile</h1>
        <p className="text-xs text-[#687280] ">
          Dashboard{" "}
          <span className="text-yellow-500"> › {"  "} Personal Profile </span>{" "}
          <span className="text-yellow-500"> › {"  "} Edit </span>{" "}
        </p>
      </div>

      {/* Notice */}
      <div className="w-[80vw] mx-4 mb-6 bg-[#FFFBEB]  border-[#FFECB2] border p-4 rounded-md flex items-center">
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <span className="w-5 h-5 text-amber-400 rounded-full  flex items-center justify-center text-xs font-bold">
              <AiOutlineInfoCircle />
            </span>
          </div>
          <p className="text-sm text-gray-700">
            <span className="font-medium">Note:</span> Please fill Next of Kin
            details <span className="text-blue-700 font-medium">Correctly</span>
            .
          </p>
        </div>
      </div>

      <div className="mx-4  bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold pb-2 mb-6 border-b ">
          Personal Details 2
        </h2>
       <div className="w-full flex justify-end mb-2">
          <button
            onClick={openBankAccountModal}
            className="px-6 py-2 text-white font-medium rounded bg-yellow-500 hover:bg-yellow-600 cursor-pointer"
          >
            Add Bank Account
          </button>
        </div>

        <AddBankAccountModal 
          isOpen={isModalOpan} 
          onClose={() => setModalOpen(false)} 
          onSubmit={isAddBankAccount ? handleAddBankAccount : handleUpdateBankAccount}
          inputs={inputs}
          handleInput={handleInput}
          callback={bankAccountCallback}
          isLoading={isSaving}
          isAddBankAccount={isAddBankAccount}
        />
        <BankAccountTable
          setModalOpen={setModalOpen} 
          setInputs={setInputs}
          setIsAddBankAccount={setIsAddBankAccount}
        />

        <div className="w-full flex justify-end mt-5 mb-2">
          <button
            onClick={openAddressModal}
            className="px-6 py-2 text-white font-medium rounded bg-yellow-500 hover:bg-yellow-600 cursor-pointer"
          >
            Add Address
          </button>
        </div>

        <AddAddressModal 
          isOpen={isAddressModalOpan} 
          onClose={() => setAddressModalOpen(false)} 
          onSubmit={isAddAddress ? handleAddAddress : handleUpdateAddress}
          inputs={inputs}
          handleInput={handleInput}
          callback={addressCallback}
          isLoading={isSaving}
          isAddAddress={isAddAddress}
        />
        <AddressTable
          setModalOpen={setAddressModalOpen} 
          setInputs={setInputs}
          setIsAddAddress={setIsAddAddress}
        />

        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          {/* Form Section */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 w-full">
            {/* Left Column - Basic Information */}
            <div>
              {/* <h2 className="text-xs font-semibold text-gray-400 mb-5 uppercase tracking-wider">
                Bank Information
              </h2>

              <div className="mb-5">
                <label className="block  text-xs mb-1">
                  Account Holder's Name
                </label>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                />
              </div> */}

              {/* <div className="mb-5">
                <label className="block  text-xs mb-1">Account Type</label>
                <div className="relative">
                  <input
                    type=""
                    name="dob"
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm appearance-none"
                  />

                </div>
              </div> */}

              {/* <div className="mb-5">
                <label className="block  text-xs mb-1">Bank Name</label>
                <div className="relative">
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm appearance-none"
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                  <IoChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div> */}

              <h2 className="text-xs font-semibold text-gray-400 mt-8 mb-5 uppercase tracking-wider">
                Next of kin
              </h2>

              <div className="mb-5">
                <label className="block  text-xs mb-1">Full Name</label>
                <input
                  name="fullname"
                  onChange={e => handleInput("nextOfKin.full_name", e.target.value)}
                  value={inputs.nextOfKin.full_name}
                  disabled={isNextOfKinDisabled}
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                />
              </div>

              <div className="mb-5">
                <label className="block  text-xs mb-1">Date of birth</label>
                <input
                  type="date"
                  name="postalCode"
                  onChange={e => handleInput("nextOfKin.birth_date", e.target.value)}
                  value={inputs.nextOfKin.birth_date}
                  disabled={isNextOfKinDisabled}
                  placeholder="Enter phone number"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                />
              </div>

              <div className="mb-5">
                <label className="block  text-xs mb-1">Phone Number</label>
                <input
                  name="postalCode"
                  onChange={e => handleInput("nextOfKin.phone_number", e.target.value)}
                  value={inputs.nextOfKin.phone_number}
                  disabled={isNextOfKinDisabled}
                  placeholder="Enter phone number"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                />
              </div>
              
            </div>

            {/* Right Column - Contact Information */}
            <div>
              {/* <div className="mb-5 pt-9">
                <label className="block  text-xs mb-1">Account Number</label>
                <input
                  name="Account Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                  placeholder="Enter account number"
                />
              </div>

              <div className="mb-5">
                <label className="block  text-xs mb-1">Swift/Sort Code</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your Swift Code"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                />
              </div>

              <div className="mb-5">
                <label className="block  text-xs mb-1">Country</label>
                <input
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                />
              </div> */}

              <div className="mb-5 mt-[70px]">
                <label className="block  text-xs mb-1">Email Address</label>
                <input
                  type="email"
                  onChange={e => handleInput("nextOfKin.email", e.target.value)}
                  value={inputs.nextOfKin.email}
                  disabled={isNextOfKinDisabled}
                  placeholder="Enter email Address"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-white"
                />
              </div>

              <div className="mb-5">
                <label className="block  text-xs mb-1">
                  Nationality
                </label>
                <div className="flex gap-2">
                  <select
                    disabled={isNextOfKinDisabled}
                    onChange={e => handleInput("nextOfKin.nationality_id", Number(e.target.value))}
                    className="w-full border border-gray-300 rounded-l px-3 py-2 text-sm bg-white"
                  >
                    {countries.map((item, key) => (
                      <option value={item.countryId} key={key} selected={item.country === inputs.nextOfKin.nationality_id}>{item.country}</option>
                    ))}
                  </select>
                </div>
              </div>

               <div className="mb-5">
                <label className="block  text-xs mb-1">Address</label>
                <input
                  name="postalCode"
                  onChange={e => handleInput("nextOfKin.address", e.target.value)}
                  value={inputs.nextOfKin.address}
                  disabled={isNextOfKinDisabled}
                  placeholder="Enter address"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                />
              </div>

            </div>
          </div>
        </div>

        {!isNextOfKinDisabled && 
          <div className="mt-6 text-right mb-48 w-full">
            <div className="flex flex-row items-center justify-between w-full">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="privacy-terms"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 border-gray-300 rounded accent-gray-500 cursor-pointer"
                />
                <label
                  htmlFor="privacy-terms"
                  className="ml-2 text-sm text-gray-700 cursor-pointer"
                >
                  I read and accept the{" "}
                  <a
                    href="#"
                    className="text-indigo-600 font-medium hover:text-indigo-500"
                  >
                    Privacy Terms and Conditions
                  </a>
                </label>
              </div>

              <button
                onClick={handleCreateNextOfKin}
                disabled={!isChecked || isSaving}
                className={`ml-4 px-6 py-2 text-white font-medium rounded ${
                  isChecked
                    ? "bg-yellow-500 hover:bg-yellow-600 cursor-pointer"
                    : "bg-yellow-400 opacity-80 cursor-not-allowed"
                }`}
              >
                {isSaving ? <Loading/> : 'Submit'}
              </button>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default EditBankInfo;
