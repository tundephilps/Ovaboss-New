import React from "react";
import Logo from "../../assets/Logo.png";
import Success from "../../assets/Success.gif";
import Failure from "../../assets/error.gif";
import { useNavigate, useSearchParams } from "react-router-dom";
import useWallets from "../../hooks/useWallets";
import { initialCheckoutData, useAppContext } from "../../context/AppContext";
import { formatDate, numberFormat } from "../../utils";
import { CartWithQuantity } from "../../types/cart.type";
import { WalletItem } from "../../types/wallet.type";
import useCart from "../../hooks/useCart";

const PaymentStatus = () => {
	const [wallet, setWallet] = React.useState<WalletItem>({} as WalletItem)
	const [searchParams] = useSearchParams();
	const status = searchParams.get("status");
	const trxRef = searchParams.get("trxRef");

	const isSuccessful = status === "success";

	const { checkoutItems, checkoutData, setCheckoutData, setCheckoutItems } = useAppContext();
	const { isLoading, wallets } = useWallets();
	const { removeAllCartItems } = useCart();

	const navigate = useNavigate();

	const shouldGoBack = !checkoutItems || checkoutItems.length === 0 || !checkoutData || !status || !trxRef;

	React.useEffect(() => {
		if (shouldGoBack) {
			navigate('/')
		} else {
			setCheckoutItems([])
			setCheckoutData(initialCheckoutData)
			removeAllCartItems();
		}
	}, [])

	React.useEffect(() => {
		const { wallet_id } = checkoutData;

		const allWallets = [...wallets.bcc, ...wallets.pcc];
		const wallet = allWallets.find(item => item.walletId === wallet_id);
		if (wallet) {
			setWallet(wallet);
		}

	}, [wallets])

	if (shouldGoBack) {
		return;
	}

	const totalPrice = numberFormat(checkoutItems.reduce((total, item: CartWithQuantity) => total + +item.variantDetails.price * (item.quantity || 1), 0), 2);

	return (
		<div className="relative inset-0 z-50 flex items-center justify-center my-5">
			<div
				className={`rounded-lg shadow-lg p-6 w-full max-w-2xl mx-4 relative ${isSuccessful ? "bg-[#E6F2E6]" : "bg-[#FDECEC]"
					}`}
			>
				<div className="text-center space-y-2">
					{/* Logo */}
					<img src={Logo} alt="Ovaboss Logo" className="mx-auto w-32" />

					{/* Status Image */}
					<img
						src={isSuccessful ? Success : Failure}
						alt={isSuccessful ? "Payment Success" : "Payment Failed"}
						className="mx-auto w-32 h-32  rounded-full"
					/>

					{/* Title */}
					<h2
						className={`text-2xl font-bold ${isSuccessful ? "text-green-700" : "text-red-700"
							}`}
					>
						{isSuccessful
							? "Payment Successful 🎉"
							: "Oops! Payment Couldn't Be Completed 😔"}
					</h2>

					{/* Subtitle */}
					<p className="text-xs text-gray-600 pb-6">
						{isSuccessful
							? "Great! Your transaction has been completed successfully."
							: "Something went wrong. Your payment could not be processed. Please try again or contact support."}
					</p>

					{/* Transaction details for success */}
					{isSuccessful && (
						<div className="bg-white p-4 rounded shadow text-left text-sm relative">
							<div className="px-2 py-1 -top-4 right-[43%] bg-[#FFD700] text-[10px] absolute rounded-full">
								Transaction Details
							</div>
							<div className="grid grid-cols-2 gap-4">
								<div>
									<p className="text-gray-500">Total Amount</p>
									<p className="font-semibold text-black">£{totalPrice}</p>
								</div>
								<div>
									<p className="text-gray-500">Order ID</p>
									<p className="font-semibold text-black">{trxRef}</p>
								</div>
								<div>
									<p className="text-gray-500">Payment Method</p>
									<p className="font-semibold text-black">
										{checkoutData.payment_method === 'CARD' ? (
											'Card'
										) : (
											<>
												{wallet.walletName} Ovaboss wallet
											</>
										)}
									</p>
								</div>
								<div>
									<p className="text-gray-500">Transaction Time</p>
									<p className="font-semibold text-black">
										{formatDate(Date())}
									</p>
								</div>
							</div>
						</div>
					)}

					{/* Action buttons */}
					<div className="flex justify-center space-x-2">
						{isSuccessful ? (
							<button className="px-4 py-2 border border-yellow-400 text-gray-700 rounded hover:bg-gray-100">
								Share Receipt
							</button>
						) : (
							<button onClick={() => navigate('/shoppingcart')} className="px-4 py-2 border border-red-400 text-red-700 rounded hover:bg-red-50">
								Try Again
							</button>
						)}

						<button onClick={() => navigate('/')} className="px-4 py-2 bg-yellow-500 text-white hover:text-black rounded hover:bg-yellow-600">
							Back to Home
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaymentStatus;
