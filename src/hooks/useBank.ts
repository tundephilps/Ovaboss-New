import React from "react";
import axiosClient from "../utils/axiosClient";
import { Bank, BankAccountType } from "../types/bank.type";

let fetchedBanks: Record<string, Bank[]> = {};
let fetchedBankAccountType: BankAccountType[] | null = null;

const useBank = () => {
    const [ isLoading, setIsLoading ] = React.useState(true);
    const [ bankAccountTypes, setBankAccountTypes ] = React.useState<BankAccountType[]>([]);

    const getBanks = async (countryId: number) => {
        try {
            if(fetchedBanks && fetchedBanks[countryId]) {
                return fetchedBanks[countryId];
            }

            const { data: response } = await axiosClient.get(`/user/list-bank?countryId=${countryId}`);

            fetchedBanks[countryId] = response.data;

            return response.data as Bank[];

        } catch(error) {
            
        } finally {
            setIsLoading(false);
        }
    }

    const getBankAccountType = async () => {
        try {
            if(fetchedBankAccountType) {
                setBankAccountTypes(fetchedBankAccountType);
                return;
            }

            const { data: response } = await axiosClient.get(`/user/list-bank-account-type`);
            setBankAccountTypes(response.data);
            fetchedBankAccountType = response.data;

        } catch(error) {
            
        } finally {
            setIsLoading(false);
        }
    }


    React.useEffect(() => {
        getBankAccountType();
    }, [])

    return {
        isLoading,
        bankAccountTypes,
        getBanks,
    }
}

export default useBank;