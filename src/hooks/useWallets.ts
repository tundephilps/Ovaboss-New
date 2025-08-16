import React from "react";
import axiosClient from "../utils/axiosClient";
import { Wallet, WalletItem } from "../types/wallet.type";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

interface WalletArgs {
    section?: 'pcc' | 'bcc';
    shouldUseCache?: boolean;
    shouldGetWallets?: boolean;
}

let fetchedWallet: Wallet | null = null;

const useWallets = ({ section, shouldUseCache = true, shouldGetWallets = true }: WalletArgs = {}) => {
    const [ isLoading, setIsLoading ] = React.useState(true)
    const [ isLoadingTransactions, setIsLoadingTransactions ] = React.useState(false)
    const [ wallets, setWallets ] = React.useState<Wallet>({
        pcc: [],
        bcc: [],
    })
    const [ transactions, setTransactions ] = React.useState([]);

    const { walletName } = useParams();

    const getWallets = async () => {
        try {
            setIsLoading(true);

            if(fetchedWallet && shouldUseCache) {
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

    const getWalletTransactions = async (wallet: WalletItem) => {
        try {
            setIsLoadingTransactions(true);
           
            const { data: response } = await axiosClient.get(`/user/fetch-wallet?walletId=${wallet.walletId}`);
            setTransactions(response.data.transactions);

        } catch(error) {
            toast.error(error.message)
        } finally {
            setIsLoadingTransactions(false);
        }
    }

    React.useEffect(() => {
        if(shouldGetWallets) getWallets();
    }, []);


    return {
        isLoading,
        isLoadingTransactions,
        transactions,
        wallets,
        walletName,
        getWalletTransactions,
    }
}

export default useWallets;