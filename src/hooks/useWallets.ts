import React from "react";
import axiosClient from "../utils/axiosClient";
import { Wallet } from "../types/wallet.type";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

let fetchedWallet: Wallet | null = null;

const useWallets = ({ shouldGetTransactions = false } = {}) => {
    const [ isLoading, setIsLoading ] = React.useState(true)
    const [ wallets, setWallets ] = React.useState<Wallet>({
        pcc: [],
        bcc: [],
    })

    const { walletName } = useParams();

    const getWallets = async () => {
        try {
            setIsLoading(true);

            if(fetchedWallet) {
                setWallets(fetchedWallet);
                return ;
            }

            const { data: response } = await axiosClient.get('/user/list-wallets');

            setWallets(response.data);
            fetchedWallet = response.data;

        } catch(error) {
            toast.error(error.message)
        } finally {
            setIsLoading(false);
        }
    }

    const getWalletTransactions = async () => {
        try {
            setIsLoading(true);

        } catch(error) {
            toast.error(error.message)
        } finally {
            setIsLoading(false);
        }
    }

    React.useEffect(() => {
        getWallets();
    }, []);

    React.useEffect(() => {
        if(shouldGetTransactions) getWalletTransactions();
    }, [walletName])

    return {
        isLoading,
        wallets,
        walletName,
    }
}

export default useWallets;