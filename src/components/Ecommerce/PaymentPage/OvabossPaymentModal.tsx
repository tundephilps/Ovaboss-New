// components/ConfirmCardPaymentModal.jsx
import React from "react";
import Logo from "../../../assets/Logo.png";

import WalletImage from "../../../assets/Wallet.svg";
import { useAppContext } from "../../../context/AppContext";
import { CartWithQuantity } from "../../../types/cart.type";
import { numberFormat } from "../../../utils";
import { WalletItem } from "../../../types/wallet.type";

interface OvabossPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  wallet: WalletItem
}

const OvabossPaymentModal = ({ isOpen, onClose, onConfirm, wallet }: OvabossPaymentModalProps) => {
  if (!isOpen) return null;

  const { checkoutItems } = useAppContext();

  const totalPrice = checkoutItems.reduce((total, item: CartWithQuantity) => total + +item.variantDetails.price * (item.quantity || 1), 0)
  const totalPriceFormatted = numberFormat(totalPrice, 2);
  const balanceAfterTransaction = +wallet.balance - +totalPrice;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#E6F2E6] p-6 rounded-lg w-[90%] max-w-2xl shadow-lg text-center">
        <div className="mb-4">
          <img
            src={wallet.walletDashIcon} // Update this to your actual logo
            alt="Ovaboss Logo"
            className="mx-auto h-10"
          />
        </div>
        <h2 className="text-xl font-semibold mb-2">Confirm Your Payment</h2>
        <p className="text-gray-600 text-sm mb-6">
          Please review the transaction details before confirming
        </p>
        <div className="p-4 rounded mb-4 bg-white space-y-4">
          <div className="bg-[#FFF9E6] border border-yellow-200 inline-flex w-full items-center justify-between px-2 py-4 rounded-xl">
            <div className="text-start">
              <p className="font-semibold text-lg">Wallet Balance</p>
              <p className="text-2xl font-bold">£{numberFormat(wallet.balance)}</p>
            </div>
            <img src={WalletImage} />
          </div>

          {balanceAfterTransaction  < 0 ? (
            <div className="p-3 rounded-md bg-red-50 border border-red-200 flex items-center gap-2">
              <svg
                className="w-5 h-5 text-red-500 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L4.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <p className="text-sm text-red-700">
                Insufficient balance in your <span className="font-semibold">{wallet.walletName}</span> account.
              </p>
            </div>
          ) : (
            <>
              <div className="bg-[#E6F2E6] border border-yellow-200 inline-flex w-full items-center justify-between px-2 py-4 rounded-xl">
                <div className="text-start">
                  <p className="font-semibold text-lg">Amount to be Debited</p>
                  <p className="text-2xl font-bold text-green-400">£{totalPriceFormatted}</p>
                </div>
                <img src={WalletImage} />
              </div>

              <div className="bg-[#FFF9E6] border border-yellow-200 inline-flex w-full items-center justify-between px-2 py-4 rounded-xl">
                <div className="text-start">
                  <p className="font-semibold text-lg">Balance After Transaction</p>
                  <p className="text-2xl font-bold">£{numberFormat(+wallet.balance - +totalPrice, 2)}</p>
                </div>
                <img src={WalletImage} />
              </div>
            </>
          )}
        </div>
        <div className="flex justify-center gap-4">
          <button
            className="border border-yellow-500 text-yellow-600 px-4 py-2 rounded"
            onClick={onClose}
          >
            Close
          </button>
          {balanceAfterTransaction  > 0 &&
            <button
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              onClick={onConfirm}
            >
              Confirm Payment
            </button>
          }
        </div>
      </div>
    </div>
  );
};

export default OvabossPaymentModal;
