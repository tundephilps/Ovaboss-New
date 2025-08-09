import React from "react";
import toast from "react-hot-toast";
import { useAppContext } from "../context/AppContext";
import { CartWithQuantity } from "../types/cart.type";
import axiosClient from "../utils/axiosClient";

const useCheckout = () => {
    const [ isLoading, setIsLoading ] = React.useState(false);

    const { checkoutData, checkoutItems } = useAppContext();

    const handleCheckout = async () => {
        try {
            setIsLoading(true);

            if(!checkoutData.payment_method) {
                return toast.error('Select a payment method');
            }

            if(checkoutData.payment_method === 'WALLET' && !checkoutData.wallet_id) {
                return toast.error('Select a wallet');
            }

            const payload = {
                ...checkoutData,
                shipping_cost: 20,
                orders: checkoutItems.map((item: CartWithQuantity) => ({
                    amount: item.variantDetails.price,
                    product_name: item.productName,
                    quantity: item.quantity || 1,
                    product_id: String(item.productId),
                    variant_id: String(item.variantDetails.id),
                    weight: '',
                }))
            }

            const { data: response } = await axiosClient.post('product/create-order', payload);

            const url = response.data.redirect_url;
            if(checkoutData.payment_method === 'CARD') {
                window.open(url, "_blank", "noopener,noreferrer");
                return;
            }

            toast.success(response.message);

        } catch(error) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return {
        isLoading,
        handleCheckout,
    }
}

export default useCheckout;