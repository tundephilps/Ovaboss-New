import React from 'react';
import toast from 'react-hot-toast';
import { useAppContext } from '../context/AppContext';
import axiosClient from '../utils/axiosClient';

const defaultInput = {
    address: '',
    city: '',
    state_code: '',
    postal_code: '',
    country_code: '',
}

export type ShippingFeeAddressFields = keyof typeof defaultInput;

const useShippingFee = () => {
    const [ isLoading, setIsLoading ] = React.useState(false);
    const [ addressId, setAddressId ] = React.useState('');
    const [ inputs, setInputs ] = React.useState(defaultInput);
    const [ section, setSection ] = React.useState<'ADDRESS' | 'PRODUCT'>('ADDRESS');

    const { checkoutItems, setCheckoutData } = useAppContext();

    const handleInput = (type: 'FULL_ADDRESS' | 'ADDRESS_ID', value: string | number, field?: keyof typeof inputs) => {
        if(type === 'ADDRESS_ID') {
            setAddressId(value as string);
            setInputs(defaultInput);
            return;
        }

        if(field) {
            setAddressId('');
            setInputs(prev => ({
                ...prev,
                [field]: value
            }))
        }
       
    }

    const handleGetShippingFee = async () => {
        try {
            setIsLoading(true);
            let payload: any = {};

            if(addressId) {
                payload['customer_address_id'] = addressId;
            } else {
                payload['customer_address'] = inputs;
            }

            payload['products'] = checkoutItems.map(item => ({ id: item.productId, quantity: item.quantity }));

            // const { data: response } = await axiosClient.post('product/get-shipping-rate', payload);
            // console.log(response)

            setCheckoutData(prev => ({
                ...prev,
                shipping_cost: {
                    currency: 'NGN',
                    price: 20,
                },
            }))

            setSection('PRODUCT');

        } catch(error: any) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return {
        isLoading,
        inputs,
        addressId,
        section,
        handleInput,
        handleGetShippingFee,
    }

}

export default useShippingFee;