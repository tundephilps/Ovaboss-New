import React from "react";
import axiosClient from "../utils/axiosClient";
import toast from "react-hot-toast";
import { WalletItem } from "../types/wallet.type";

interface Inputs {
    interwallet: {
        amount: number;
        credit_wallet_id: null | number;
    }
}

export type TransferTypes = 'interwallet' | 'business' | 'user';

const useTransferWallet = (wallet: WalletItem) => {
    const [ inputs, setInputs ] = React.useState<Inputs>({
       interwallet: {
            amount: 0,
            credit_wallet_id: null,
        }
    })
    const [ transferType, setTransferType ] = React.useState<TransferTypes>('user');

    const [ isSaving, setIsSaving ] = React.useState(false)

    const handleInput = (field: string, value: string | number) => {
        const [ parent, child ] = field.split('.');
        setInputs(prev => ({
            ...prev,
            [parent]: {
                ...prev[parent],
                [child]: value
            }
        }))
    }

     const handleInterWalletTransfer = async () => {
        try {
            setIsSaving(true);
            const { amount, credit_wallet_id} = inputs.interwallet;

            if(!amount) throw new Error('Enter an amount'); 
            if(isNaN(amount)) throw new Error('Enter a valid amount'); 
            if(!credit_wallet_id) throw new Error('Select wallet to credit'); 

            const { data: response } = await axiosClient.post('/user/inter-pcc-wallet-transfer', { 
                ...inputs.interwallet, 
                debit_wallet_id: wallet.walletId,
                description: 'Inter Wallet Transfer',
            });

            toast.success(response.message);

        } catch(error) {
            toast.error(error.message)
        } finally {
            setIsSaving(false);
        }
    }
    

    return {
        isSaving,
        inputs,
        transferType,
        handleInput,
        handleInterWalletTransfer,
        setTransferType,
    }
}

export default useTransferWallet;