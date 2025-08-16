import React from "react";
import ProfileProgressCard from "../../../components/DashboardPCC/Homepage/ProfileProgressCard";
import WalletCard from "../../../components/DashboardPCC/Wallet/WalletCard";
import TransferToWallet from "../../../components/DashboardPCC/Wallet/TransferToWallet";

import TransferToBank from "../../../components/DashboardPCC/Wallet/TransferToBank";
import WalletTab from "../../../components/DashboardPCC/Wallet/WalletTab";

import { FaChevronDown, FaFile, FaFolder } from "react-icons/fa";
import { useState } from "react";
import useWallets from "../../../hooks/useWallets";
import Loading from "../../../components/Loading";
import { useNavigate, useParams } from "react-router-dom";
// import { Wallet } from "../../../types/wallet.type";

const PCCWallet = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Transfer to Wallet");
  // const [ wallet, setWallet ] = useState<Wallet>(null)

  const { wallets, isLoading, isLoadingTransactions, transactions, getWalletTransactions } = useWallets({ section: 'pcc' });
  const navigate = useNavigate();

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
  };

  const { walletName } = useParams();


  // Dummy components for switching content
  // function TransferToWallet() {
  //   return <LAAForm />;
  // }

  // function TransferToBank() {
  //   return <LAAForm2 />;
  // }

  

  const wallet = wallets?.pcc.find(item => item.walletName === walletName);

  React.useEffect(() => {
    if(wallet) getWalletTransactions(wallet)
  }, [wallet])

  if(isLoading) {
    return <Loading/>
  }

  if(!wallet) {
    navigate(-1);
    return;
  }

  // React.useEffect(() => {
  //   const wallet = wallets.pcc.filter(item => item.walletName === walletName)[0];

  //   if(!wallet) {
  //     navigate(-1);
  //     return;
  //   }

  //   setWallet(wallet);

  // }, [])

  return (
    <div className=" bg-[#faf9f9]  overflow-y-auto">
      <div className="py-6 px-4">
        <h1 className="font-bold text-2xl pb-2">Wallet</h1>
        <p className="text-xs text-[#687280] ">
          <span className="text-[#687280]">
            Dashboard › {"  "} All Wallet Transactions{" "}
          </span>{" "}
          <span className="text-yellow-500"> › {"  "} { wallet.walletName } Transactions </span>{" "}
        </p>
        <ProfileProgressCard completedFields={4} totalFields={10} />

        <div className="mx-auto bg-white rounded-xl  p-4 my-6 ">
          <div className="flex justify-between pb-4">
            <p className="text-lg font-semibold">Ovaboss Wallet Details</p>

            {/* Dropdown Button */}
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="bg-gray-100 border border-gray-300 text-xs px-3 py-1 rounded flex items-center gap-2 hover:bg-gray-200"
              >
                <FaFolder />
                <span>{selected}</span>
                <FaChevronDown className="text-xs" />
              </button>

              {open && (
                <div className="absolute right-0 mt-1 w-44 bg-white border rounded shadow-md z-10 text-sm">
                  {["Transfer to Wallet", "Transfer to Bank"].map((option) => (
                    <div
                      key={option}
                      onClick={() => handleSelect(option)}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <WalletCard wallet={wallet}/>

          {/* Dynamic Component Below */}
          {selected === "Transfer to Wallet" && <TransferToWallet wallets={wallets.pcc} wallet={wallet}/>}
          {selected === "Transfer to Bank" && <TransferToBank wallet={wallet}/>}
        </div>
        <WalletTab 
          wallet={wallet}
          transactions={transactions}
          isLoadingTransactions={isLoadingTransactions}
        />
      </div>
    </div>
  );
};

export default PCCWallet;
