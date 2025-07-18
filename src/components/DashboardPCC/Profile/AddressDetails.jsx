import React from "react";
import { CiEdit } from "react-icons/ci";
import { FiEdit2, FiPrinter, FiDownload } from "react-icons/fi";
import { MdOutlinePrint } from "react-icons/md";
import { RiDownloadLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import AddressTable from "./AddressTable";

export default function AddressDetails() {
  return (
    <div className="bg-white shadow-sm rounded-lg p-6 w-full  mx-auto ">
      {/* Header */}
      {/* Header */}
      <div className="flex items-center justify-between w-full border-b pb-4">
        <h2 className="text-lg font-semibold ">Address Details</h2>

        <div className="inline-flex gap-2">
          <Link to="/EditBankInfo">
            <div className="border p-2 rounded-md ">
              <CiEdit />
            </div>
          </Link>

          <div className="border p-2 rounded-md">
            <MdOutlinePrint />
          </div>
          <div className="border p-2 rounded-md">
            <RiDownloadLine />
          </div>
        </div>
      </div>

      <AddressTable showEllipse={false}/>

      {/* Details Grid */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 pt-6 text-sm text-gray-700">
        <Detail label="Account Name" value="Fatimah Oladigbolu" />
        <Detail label="Account Number" value="1234567890" />
        <Detail label="Account Type" value="Savings" />
        <Detail label="Bank Name" value="Access Bank" />
        <Detail label="Country" value="Nigeria" />
      </div> */}
    </div>
  );
}

const Detail = ({ label, value }) => (
  <div>
    <span className="block text-gray-400 text-xs">{label}:</span>
    <span className="block font-bold">{value}</span>
  </div>
);
