import React from "react";
import { useAppContext } from "../context/AppContext";
import axiosClient from "../utils/axiosClient";
import toast from "react-hot-toast";
import { Address, BankAccountDetails } from "../types/user.type";
import useCountry from "./useCountry";
import useBank from "./useBank";
import { City, State } from "../types/country.type";
import { useNavigate } from "react-router-dom";

const useProfile = () => {

    const { user, handleSetUser } = useAppContext();

    const [ inputs, setInputs ] = React.useState({
        profile: {
            firstname: user?.firstname,
            lastname: user?.lastname,
            date_of_birth: user?.date_of_birth,
            email: user?.email,
            country_id: user?.country,
            profile_picture: user?.profile_picture,
            phone_number: user?.phone_number,
        },
        bankAccount: {
            bank_id : "",
            country_id: "",
            bank_account_type_id: "",
            account_name : "",
            account_number : "",
            swift_code : "",
            recipient_code : ""
        },
        nextOfKin: {
            full_name: user?.nextOfKin.fullName,
            birth_date: user?.nextOfKin.birthDate,
            address: user?.nextOfKin.address,
            email: user?.nextOfKin.email,
            phone_number: user?.nextOfKin.phoneNumber,
            nationality_id: user?.nextOfKin.nationality,
        },
        address: {
            country_id : "",
            state_id : "",
            city_id : "",
            postal_code : "",
            address : "",
            contact_person : ""
        }
    });
    const [ isLoading, setIsLoading ] = React.useState(false);
    const [ isSaving, setIsSaving ] = React.useState(false);

    const navigate = useNavigate();

    const handleInput = (fieldKey: string, value: any) => {
        const [ parentField, childField ] = fieldKey.split('.');
        setInputs(prev => ({
            ...prev,
            [parentField]: {
                ...prev[parentField],
                [childField]: value,
            },
        }))
    }

    const { countries, getCities, getStates } = useCountry();
    const { getBanks, bankAccountTypes } = useBank();

    const handleUpdateProfile = async () => {
        try {
            setIsLoading(true);

            const formData = new FormData();

            for(const key in inputs.profile) {
                let value = inputs.profile[key];

                if (key === 'profile_picture' && typeof value === 'string' && value) {
                    continue;
                }

                if(key === 'country_id' && isNaN(value)) {
                    continue;
                }

                formData.append(key, value)
            }

            const { data: response } = await axiosClient.post('/user/update-profile', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            let profile_picture: any = inputs.profile.profile_picture

            if (profile_picture instanceof File) {
                profile_picture = URL.createObjectURL(profile_picture);
            }

            handleSetUser({
                ...user!,
                profile_picture: profile_picture,
                date_of_birth: inputs.profile.date_of_birth!,
                firstname: inputs.profile.firstname!,
                lastname: inputs.profile.lastname!,
                email: inputs.profile.email!,
                phone_number: inputs.profile.phone_number!,
            });


            toast.success(response.message);

        } catch(error) {
            toast.error(error.message)
        } finally {
            setIsLoading(false);
        }
    }

    const handleCreateNextOfKin = async () => {
        try {
            setIsSaving(true);

            let nationality_id: string | number | undefined = inputs.nextOfKin.nationality_id;
            
            if(typeof nationality_id === 'string') {
                const country = countries.filter(item => item.country === nationality_id)[0];
                nationality_id = country.countryId;
            }

            const country = countries.filter(item => item.countryId === nationality_id)[0];
            const countryName = country.country;

            const { data: response } = await axiosClient.post('/user/create-next-of-kin', {...inputs.nextOfKin, nationality_id});

            handleSetUser({
                ...user!,
                nextOfKin: {
                    fullName: inputs.nextOfKin.full_name!,
                    birthDate: inputs.nextOfKin.birth_date!,
                    address: inputs.nextOfKin.address!,
                    email: inputs.nextOfKin.email!,
                    phoneNumber: inputs.nextOfKin.phone_number!,
                    nationality: countryName,
                },
            });

            toast.success(response.message);

        } catch(error) {
            toast.error(error.message)
        } finally {
            setIsSaving(false);
        }
    }

    const handleAddBankAccount = async (callback?: () => void) => {
        try {
            setIsSaving(true);

            const { data: response } = await axiosClient.post('user/create-bank-account-detail', inputs.bankAccount);
            
            const banks = await getBanks(Number(inputs.bankAccount.country_id));

            const newBankAccount: BankAccountDetails = {
                id: user!.bankAccountDetails.length + 1,
                bankId: inputs.bankAccount.bank_id,
                bankName: banks?.filter(item => item.bankId === Number(inputs.bankAccount.bank_id))[0].name || '',
                countryId: inputs.bankAccount.country_id,
                countryName: countries.filter(item => item.countryId === Number(inputs.bankAccount.country_id))[0].country,
                bankAccountTypeId: inputs.bankAccount.bank_account_type_id,
                bankAccountType: bankAccountTypes.filter(item => item.bankAccountTypeId === Number(inputs.bankAccount.bank_account_type_id))[0].accountType,
                accountNumber: inputs.bankAccount.account_number,
                accountName: inputs.bankAccount.account_name,
                swiftCode: inputs.bankAccount.swift_code,
                recipientCode: inputs.bankAccount.recipient_code
            }

            handleSetUser({
                ...user!,
                bankAccountDetails: [...user!.bankAccountDetails, newBankAccount]
            });

            toast.success(response.message);

            if(callback) callback();

        } catch(error) {
            toast.error(error.message)
        } finally {
            setIsSaving(false);
        }
    }

    const handleUpdateBankAccount = async (callback: () => void) => {
        try {
            setIsSaving(true);

            const { data: response } = await axiosClient.post('user/update-bank-account-detail', inputs.bankAccount);

            const banks = await getBanks(Number(inputs.bankAccount.country_id));

            const bankAccount = inputs.bankAccount as any;
            const id = bankAccount.id;

            const updatedBankAccount: BankAccountDetails = {
                id,
                bankId: inputs.bankAccount.bank_id,
                bankName: banks?.filter(item => item.bankId === Number(inputs.bankAccount.bank_id))[0].name || '',
                countryId: inputs.bankAccount.country_id,
                countryName: countries.filter(item => item.countryId === Number(inputs.bankAccount.country_id))[0].country,
                bankAccountTypeId: inputs.bankAccount.bank_account_type_id,
                bankAccountType: bankAccountTypes.filter(item => item.bankAccountTypeId === Number(inputs.bankAccount.bank_account_type_id))[0].accountType,
                accountNumber: inputs.bankAccount.account_number,
                accountName: inputs.bankAccount.account_name,
                swiftCode: inputs.bankAccount.swift_code,
                recipientCode: inputs.bankAccount.recipient_code
            }

            handleSetUser({
                ...user!,
                bankAccountDetails: user!.bankAccountDetails.map(item => item.bankId == id ? updatedBankAccount : item)
            });

            toast.success(response.message);

            if(callback) callback();

        } catch(error) {
            toast.error(error.message)
        } finally {
            setIsSaving(false);
        }
    }

    const handleAddAddress = async (callback?: () => void) => {
        try {
            setIsSaving(true);

            const { 
                country_id,
                city_id,
                state_id,
                address,
                contact_person,
                postal_code
             } = inputs.address

            const { data: response } = await axiosClient.post('user/create-address', inputs.address);
            
            const country = countries.filter(item => item.countryId === +country_id)[0]
            const states = await getStates(Number(country_id));
            const cities = await getCities(Number(state_id));

            let state: State | null = null;
            let city: City | null = null;

            if(states) {
                state = states.filter(item => item.stateId === +state_id)[0];
            }

            if(cities) {
                city = cities.filter(item => item.cityId === +city_id)[0];
            }

            const newAddress: Address = {
                id: user!.address.length + 1,
                address,
                country: country.country,
                city: city?.city || '',
                state: state?.state || '',
                postalCode: postal_code,
                contactPerson: contact_person,
                cityId: city_id,
                stateId: state_id,
                countryId: country_id,
            }

            handleSetUser({
                ...user!,
                address: [...user!.address, newAddress]
            });

            toast.success(response.message);

            if(callback) callback();

        } catch(error) {
            toast.error(error.message)
        } finally {
            setIsSaving(false);
        }
    }

    const handleUpdateAddress = async (callback: () => void) => {
        try {
            setIsSaving(true);

            const { 
                country_id,
                city_id,
                state_id,
                address,
                contact_person,
                postal_code
             } = inputs.address

            const { data: response } = await axiosClient.post('user/update-address', inputs.address);

            const country = countries.filter(item => item.countryId === +country_id)[0]
            const states = await getStates(Number(country_id));
            const cities = await getCities(Number(state_id));

            let state: State | null = null;
            let city: City | null = null;
            const { id } = inputs.address as any;

            if(states) {
                state = states.filter(item => item.stateId === +state_id)[0];
            }

            if(cities) {
                city = cities.filter(item => item.cityId === +city_id)[0];
            }

            const updatedAddress: Address = {
                id,
                address,
                country: country.country,
                city: city?.city || '',
                state: state?.state || '',
                postalCode: postal_code,
                contactPerson: contact_person,
                cityId: city_id,
                stateId: state_id,
                countryId: country_id,
            }

            handleSetUser({
                ...user!,
                address: user!.address.map(item => item.id == id ? updatedAddress : item)
            });

            toast.success(response.message);

            if(callback) callback();

        } catch(error) {
            toast.error(error.message)
        } finally {
            setIsSaving(false);
        }
    }

    const handleUpgradeAccount = async () => {
        try {
            setIsSaving(true);

            const { data: response } = await axiosClient.get('/user/upgrade-to-bcc');

            localStorage.setItem('authToken', response.data.token);
            navigate('/bccdashboard');

        } catch(error) {
            toast.error(error.message);
        } finally {
            setIsSaving(false);
        }
    }

    return {
        inputs,
        isLoading,
        isSaving,
        setInputs,
        handleInput,
        handleUpdateProfile,
        handleCreateNextOfKin,
        handleAddBankAccount,
        handleUpdateBankAccount,
        handleAddAddress,
        handleUpdateAddress,
        handleUpgradeAccount,
    }
}

export default useProfile;