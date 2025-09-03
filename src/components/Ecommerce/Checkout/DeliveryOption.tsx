import React, { useState } from "react";
import { useAppContext } from "../../../context/AppContext";
import { Cart } from "../../../types/cart.type";
import { DeliveryOption as DeliveryOptionType } from "../../../types/product.type";

interface DeliveryOptionProps {
	deliveryOptions: DeliveryOptionType[];
	callback?: (deliveryOption: DeliveryOptionType) => void;
	showPickupLocations?: boolean;
	productId?: number;
}

export default function DeliveryOption({ productId, deliveryOptions, showPickupLocations = true, callback }: DeliveryOptionProps) {
	const [selectedValue, setSelectedValue] = useState("");

	const { user, checkoutItems, setCheckoutItems } = useAppContext();

	const handleCheckboxChange = (id: number) => {
		const deliveryOption = deliveryOptions.find(item => item.id === id)!
		setSelectedValue(deliveryOption?.option);
		if(callback) {
			callback(deliveryOption);
		} else {
			setCheckoutItems(prev => prev.map(item => item.productId === productId! ? {...item, delivery_method_id: id} : item))
		}
	};

	return (
		<div>
			<div className="space-y-2">
				<p className="text-sm font-medium text-gray-700 my-5">Select Delivery Option</p>
				{deliveryOptions.map((item, key) => (
					<label
						key={key}
						className="flex items-center space-x-2 rounded-md border border-gray-300 px-3 py-2 shadow-sm cursor-pointer hover:border-yellow-500"
					>
					<input
						type="checkbox"
						value={item.id}
						checked={selectedValue === item.option}
						onChange={() => handleCheckboxChange(item.id)}
						className="h-4 w-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-400"
					/>
					<span className="text-sm text-gray-700">{item.option}</span>
					</label>
				))}
			</div>


			{showPickupLocations && selectedValue.replaceAll(' ', '').toUpperCase() === "PICKUP" && (
				<p>Select pick up location</p>
				// <input
				// 	type="text"
				// 	value={customAddress}
				// 	// onChange={handleCustomInput}
				// 	placeholder="Enter custom address"
				// 	className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"
				// />
			)}
		</div>
	);
}
