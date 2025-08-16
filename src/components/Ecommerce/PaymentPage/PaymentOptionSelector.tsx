import { FaRegCreditCard } from "react-icons/fa";

import React, { useState } from "react";
import OvabossPaymentModal from "./OvabossPaymentModal";
import { useAppContext } from "../../../context/AppContext";
import useWallets from "../../../hooks/useWallets";
import { numberFormat } from "../../../utils";
import { WalletItem } from "../../../types/wallet.type";
import { CartWithQuantity } from "../../../types/cart.type";

const PaymentOptionSelector = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ allowedWallets, setAllowedWallets ] = React.useState<WalletItem[]>([]);
  const [ selectedWallet, setSelectedWallet ] = React.useState<WalletItem>({} as WalletItem)

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { checkoutData, checkoutItems, setCheckoutData } = useAppContext();
  const { isLoading, wallets } = useWallets({ shouldUseCache: false });
  
  const handleConfirmPayment = () => {
    // Add your payment logic here
    handleInput('wallet_id', selectedWallet.walletId)
    closeModal();
  };

  const handleInput = (field: keyof typeof checkoutData, value: any) => setCheckoutData(prev => ({
    ...prev,
    [field]: value
  }))

  const totalPrice = checkoutItems.reduce((total, item: CartWithQuantity) => total + +item.variantDetails.price * (item.quantity || 1), 0)

  const getAllowedWallets = () => {
    const allowedWallets = {
      pcc: ['buyon', 'signon', 'laa'],
      bcc: ['sellon', 'bra', 'signon'],
    }

    const allAllowedWallets = Object.entries(wallets).flatMap(([category, walletList]) => {
      const allowedList = allowedWallets[category] || [];

      return walletList
        .filter((wallet) =>
          allowedList.some(
            (allowed) => wallet.walletName.toLowerCase() === allowed.toLowerCase()
          )
        )
        .map((wallet) => ({
          ...wallet,
          walletName: `${category.toUpperCase()} ${wallet.walletName}`,
        }));
    });

    setAllowedWallets(allAllowedWallets);
  }

  const handleWalletChange = (item: WalletItem) => {
    setSelectedWallet(item);
    openModal();
  }

  React.useEffect(() => {
    getAllowedWallets();
  }, [wallets])


  return (
    <div className="">
      {/* Group Header */}
      <div onClick={() => handleInput('payment_method', 'WALLET')} className="flex items-center space-x-2 mb-4 font-semibold cursor-pointer">
        <input type="radio" checked={checkoutData.payment_method === 'WALLET'} readOnly className="accent-yellow-500" />
        <FaRegCreditCard className="text-yellow-500" />
        <span className="text-xl">Pay with Ovaboss Wallet</span>
      </div>

      {/* Wallet Options */}
      {checkoutData.payment_method === 'WALLET' && 
        <div className="space-y-4">

          {allowedWallets.map((item, key) => (
            <label key={key} className="flex items-center justify-between cursor-pointer">
              <div onClick={() => handleWalletChange(item)} className="flex items-center space-x-2">
                <input type="radio" name="wallet" className="accent-yellow-500" disabled={+item.balance < totalPrice}/>
                <span>{item.walletName}</span>
              </div>
              <span className="font-semibold">£{numberFormat(item.balance)}</span>
            </label>
          ))}

        </div>
      }
      <OvabossPaymentModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={handleConfirmPayment}
        wallet={selectedWallet}
      />
    </div>
  );
};

export default PaymentOptionSelector;
