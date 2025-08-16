import { FaChevronDown } from "react-icons/fa";
import useTransferWallet, { TransferTypes } from "../../../hooks/useTransferWallet";
import { WalletItem } from "../../../types/wallet.type";
import Loading from "../../Loading";

interface TransferToWalletProps {
  wallets: WalletItem[],
  wallet: WalletItem,
}

export default function TransferToWallet({ wallets, wallet }: TransferToWalletProps) {
  const { isSaving, transferType, setTransferType, handleInput, handleInterWalletTransfer } = useTransferWallet(wallet);

  const handleTransfer = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault(); 
    if(transferType === 'interwallet') {
      handleInterWalletTransfer();
    }

  }

  return (
    <div className="mx-auto bg-white  p-6 space-y-6">
      <h2 className="text-lg font-semibold border-b pb-2">
        Personal Inter-Wallet Transfer
      </h2>

      <p className="text-sm font-medium text-gray-600">User to user Transfer</p>

      <form className="space-y-4">
        {/* From Wallet */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            From <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={`Personal ${wallet.walletName} Wallet`}
            disabled
            className="w-full border rounded px-3 py-2 text-sm bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Transfer Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Transfer Type <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              className="w-full border rounded px-3 py-2 text-sm appearance-none pr-8"
              defaultValue={transferType}
              onChange={e => setTransferType(e.target.value as TransferTypes)}
            >
              <option value="" disabled>
                Select Transfer Type
              </option>
              <option value="user">User to User Transfer</option>
              <option value="interwallet">Personal inter wallet Transfer</option>
              <option value="business">User to Business Transfer</option>
            </select>
            <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm pointer-events-none" />
          </div>
        </div>

        {/* Transfer To */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Transfer To <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              className="w-full border rounded px-3 py-2 text-sm appearance-none pr-8"
              defaultValue=""
              onChange={(e) => handleInput('interwallet.credit_wallet_id', +e.target.value)}
            >
              <option value="" disabled>
                Select Wallet to Transfer To
              </option>
              {wallets
              .filter(item => item.walletName !== wallet.walletName)
              .map((item, key) => (
                <option value={item.walletId} key={key}>{item.walletName} -${item.balance} </option>
              ))}
            </select>
            <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm pointer-events-none" />
          </div>
        </div>

        {/* Amount */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount
          </label>
          <input
            type="number"
            defaultValue={0}
            className="w-full border rounded px-3 py-2 text-sm"
            onChange={(e) => handleInput('interwallet.amount', e.target.value)}
          />
        </div>

        {/* Submit */}
        <div className="text-right">
          <button
            onClick={e => handleTransfer(e)}
            type="submit"
            className="bg-[#FFD700] text-white px-5 py-2 rounded hover:bg-yellow-600 text-sm font-medium"
          >
            {isSaving ? <Loading/> : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
}
