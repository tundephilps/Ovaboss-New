import React from "react";

import Wallet1 from "../../../assets/Wallet11.png";

import Wallet2 from "../../../assets/Wallet22.png";
import Wallet3 from "../../../assets/Wallet33.png";

import Wallet4 from "../../../assets/Wallet44.png";
import { numberFormat } from "../../../utils";

// WalletCard Component
const WalletCard = ({ walletName, walletDashIcon, reserved, balance, global, ie }) => {
  return (
    <div className="bg-gradient-to-br from-yellow-50 to-white rounded-xl shadow-md  w-full ">
      <div className="p-4 flex flex-col gap-2">
        <div className="inline-flex items-center  w-full justify-between pb-6">
          <img src={walletDashIcon} alt={walletName} className="h-20 object-cover" />
          <div className="text-2xl font-bold text-right text-gray-800 flex flex-col">
            <span className="text-gray-400">{walletName}</span>£{numberFormat(balance, 2)}
          </div>
        </div>
      </div>
      <div className="bg-black text-white  text-xs flex justify-between px-4 py-2 font-semibold rounded-b-xl">
        <div className="flex-col">
          <p> Global: </p>
          <span>{global}</span>
        </div>

        <div className="flex-col">
          <p>IE: </p>
          <span>{ie}</span>
        </div>
      </div>
    </div>
  );
};

// Main Wallets Component
const Wallets = ({ wallets }) => {
  return (
    <div className="py-6 w-full">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 ">
        {wallets.map((wallet, idx) => (
          <WalletCard key={idx} {...wallet} />
        ))}
      </div>
    </div>
  );
};

export default Wallets;
