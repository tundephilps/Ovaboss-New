import React from "react";
import toast from "react-hot-toast";
import axiosClient from "../utils/axiosClient";
import { BusinessCategory, BusinessCategoryType, BusinessData, BusinessSalesType, BusinessScale, BusinessType } from "../types/business.type";
import { useAppContext } from "../context/AppContext";

interface InputProps {
    businessAccount: {
        name: string;
        store_name: string;
        country_id: string;
        state_id: string;
        description: string;
        address: string;
        logo: string | File | null;
    },
    businessDetails: {
        business_id: number | null;
        business_scale_id: number | null;
        business_category_id: number | null;
        business_category_type_id: number[];
        sale_type_id: number[];
        business_type_id: number[];
    }
}

const useBusinessAccount = () => {
    const [ isLoading, setIsLoading ] = React.useState(false);
    const [ isSaving, setIsSaving ] = React.useState(false);
    const [ inputs, setInputs ] = React.useState<InputProps>({
        businessAccount: {
            name: '',
            store_name: '',
            country_id: '',
            state_id: '',
            description: '',
            address: '',
            logo: null
        },
        businessDetails: {
            business_id: null,
            business_scale_id: null,
            business_category_id: null,
            business_category_type_id: [],
            sale_type_id: [],
            business_type_id: [],
        }
    })
    const [ businessData, setBusinessData ] = React.useState<BusinessData>()
    const { setBusinessAccounts } = useAppContext();

    const handleInput = (fieldKey: string, value: any) => {
        const [ parent, child ] = fieldKey.split('.');

        setInputs(prev => ({
            ...prev,
            [parent]: {
                ...prev[parent],
                [child]: value
            }
        }))
    }

   const handleArrayInput = (field: keyof typeof inputs.businessDetails, value: number) => {
        setInputs(prev => {
            const currentArray = prev.businessDetails[field] as number[];
            const updatedArray = currentArray.includes(value)
                ? currentArray.filter(item => item !== value)
                : [...currentArray, value];

            return {
                ...prev,
                businessDetails: {
                    ...prev.businessDetails,
                    [field]: updatedArray
                }
            };
        });
    };


    const validateBusinessAccount = () => {
        const { 
            name,
            store_name,
            country_id,
            state_id,
            description,
            address,
            logo,
        } = inputs.businessAccount;
        const { 
            business_scale_id,
            business_category_id,
            business_category_type_id,
            sale_type_id,
            business_type_id,
        } = inputs.businessDetails;

        if(!name) throw new Error('Enter business name');
        if(!store_name) throw new Error('Enter store name');
        if(!country_id) throw new Error('Select country');
        if(!state_id) throw new Error('Select state');
        if(!description) throw new Error('Enter description');
        if(!address) throw new Error('Enter address');
        if(!logo || !(logo instanceof File)) throw new Error('Enter business logo');
        if(!business_scale_id) throw new Error('Select business scale');
        if(!business_category_id) throw new Error('Select business category');
        if(!business_category_type_id) throw new Error('Select business category type');
        if(!sale_type_id) throw new Error('Select business sales type');
        if(!business_type_id) throw new Error('Select business type');

        const businessAccount = new FormData();
        businessAccount.append('name', name);
        businessAccount.append('store_name', store_name);
        businessAccount.append('country_id', country_id);
        businessAccount.append('state_id', state_id);
        businessAccount.append('description', description);
        businessAccount.append('address', address);
        businessAccount.append('logo', logo);

        return {
            businessAccount,
            businessDetails: inputs.businessDetails
        }
    }

    const handleCreateBusiness = async () => {
        try {
            setIsSaving(true);

            const { businessAccount, businessDetails } = validateBusinessAccount();

            const { data: businessAccountResponse } = await axiosClient.post(
                'user/business/create-business-account', 
                businessAccount,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );

            const business_id = businessAccountResponse.data.businessId;

            const { data: businessDetailsResponse } = await axiosClient.post('user/business/create-business-details', {
                ...businessDetails,
                business_id
            });

            const { data: response } = await axiosClient.get('user/business/list-business-account');
            setBusinessAccounts(response.data)

            toast.success(businessDetailsResponse.message);

        } catch(error) {
            toast.error(error.message)
        } finally {
            setIsSaving(false);
        }
    }

    const getBusinessData = async () => {
        try {
            setIsLoading(true);

            const [ 
                categoryData,
                categoryTypeData,
                saleTypeData,
                businessScaleData,
                businessTypeData,
            ] = await Promise.all([
                axiosClient.get('user/list-business-category'),
                axiosClient.get('user/list-business-category-type'),
                axiosClient.get('user/list-sale-type'),
                axiosClient.get('user/list-business-scale'),
                axiosClient.get('user/list-business-type'),
            ]);

            const categories: BusinessCategory[] = categoryData.data.data;
            const categoryTypes: BusinessCategoryType[] = categoryTypeData.data.data;
            const salesTypes: BusinessSalesType[] = saleTypeData.data.data;
            const businessScales: BusinessScale[] = businessScaleData.data.data;
            const businessTypes: BusinessType[] = businessTypeData.data.data;

            setBusinessData({
                categories,
                categoryTypes,
                salesTypes,
                businessScales,
                businessTypes,
            })

        } catch(error) {

        } finally {
            setIsLoading(false);
        }
    }

    React.useEffect(() => {
        getBusinessData();
    }, [])

    return {
        isLoading,
        isSaving,
        businessData,
        inputs,
        handleCreateBusiness,
        handleInput,
        handleArrayInput,
    }
}

export default useBusinessAccount;