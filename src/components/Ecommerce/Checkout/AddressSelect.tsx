import React, { useState } from "react";
import { useAppContext } from "../../../context/AppContext";

export default function AddressSelect({ productId }: { productId: number }) {
	const [selectedValue, setSelectedValue] = useState("");
	const [customAddress, setCustomAddress] = useState("");

	const { user, checkoutItems, setCheckoutItems } = useAppContext();

	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value;
		setSelectedValue(value);

		// send to your handler (only if not "other")
		if (value !== "other") {
			handleInput(value);
		}
	};

	const handleCustomInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCustomAddress(e.target.value);
		handleInput(e.target.value);
	};

	const handleInput = (address: string) => {
		setCheckoutItems(prev => prev.map(item => item.productId === productId ? { ...item, address } : item))
	}

	React.useEffect(() => {
		checkoutItems.forEach(item => {
			if(item.productId === productId) {
				const isExisitingAddress = user?.address.map(address => address.address === item.address);
				if(isExisitingAddress) {
					setSelectedValue(item.address);
				} else {
					setCustomAddress(item.address);
				}
			}
		})
	}, [])

	return (
		<div>
			<select
				value={selectedValue}
				onChange={handleSelectChange}
				className="w-full rounded-md border border-gray-300 bg-white px-3 py-3 text-sm text-gray-700 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"
			>
				<option value="">Select Address</option>
				{user?.address.map((item, key) => (
					<option key={key} value={item.address}>
						{item.address}
					</option>
				))}
				<option value="other">Other</option>
			</select>

			{selectedValue === "other" && (
				<input
					type="text"
					value={customAddress}
					onChange={handleCustomInput}
					placeholder="Enter custom address"
					className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"
				/>
			)}
		</div>
	);
}
