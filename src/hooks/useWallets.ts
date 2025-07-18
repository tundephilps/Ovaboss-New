import React from "react";
import axiosClient from "../utils/axiosClient";
import { Wallet } from "../types/wallet.type";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

interface WalletArgs {
    shouldGetTransactions?: boolean;
    section?: 'pcc' | 'bcc'
}

let fetchedWallet: Wallet | null = null;

const useWallets = ({ shouldGetTransactions = false, section }: WalletArgs = {}) => {
    const [ isLoading, setIsLoading ] = React.useState(true)
    const [ isLoadingTransactions, setIsLoadingTransactions ] = React.useState(false)
    const [ wallets, setWallets ] = React.useState<Wallet>({
        pcc: [],
        bcc: [],
    })
    const [ transactions, setTransactions ] = React.useState([])

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
            setIsLoadingTransactions(true);
            if(!fetchedWallet || !section) {
                return toast.error('Could not get wallet, please try again');
            }

            const wallet = fetchedWallet[section].filter(item => item.walletName === walletName)[0];
            if(!wallet) {
                return toast.error('Wallet was not found');
            }

            const { data: response } = await axiosClient.get(`/user/fetch-wallet?walletId=${wallet.walletId}`);
            setTransactions(response.data.transactions);

        } catch(error) {
            toast.error(error.message)
        } finally {
            setIsLoadingTransactions(false);
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
        isLoadingTransactions,
        transactions,
        wallets,
        walletName,
    }
}

export default useWallets;