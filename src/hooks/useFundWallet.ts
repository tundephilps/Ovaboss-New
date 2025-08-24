import React from "react";
import toast from "react-hot-toast";
import axiosClient from "../utils/axiosClient";

const useFundWallet = () => {
    const [ isLoading, setIsLoading ] = React.useState(false);

    const handleFundWallet = async (amount: number, wallet_id: number) => {
        try {
            setIsLoading(true);
            const { data: response } = await axiosClient.post('user/pcc-wallet-funding', { amount, wallet_id });
            window.open(response.data.redirect_url, "_blank", "noopener,noreferrer");
        } catch(error) {
            toast.error(error instanceof Error ? error.message : 'Something went wrong initializing transaction');
        } finally {
            setIsLoading(false)
        }
    }

    return {
        isLoading,
        handleFundWallet,
    }
}

export default useFundWallet;