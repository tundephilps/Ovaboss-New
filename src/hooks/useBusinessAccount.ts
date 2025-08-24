import React from "react";
import toast from "react-hot-toast";
import axiosClient from "../utils/axiosClient";
import { BusinessAccountDetails, BusinessCategory, BusinessCategoryType, BusinessData, BusinessSalesType, BusinessScale, BusinessType } from "../types/business.type";
import { useAppContext } from "../context/AppContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import useCountry from "./useCountry";

interface InputProps {
    businessAccount: {
        name: string;
        store_name: string;
        country_id: string;
        state_id: string;
        description: string;
        address: string;
        website: string;
        logo: string | File | null;
    },
    businessDetails: {
        business_scale_id: number | null;
        business_category_id: number | null;
        business_category_type_id: number[];
        sale_type_id: number[];
        business_type_id: number[];
    }
}

interface UseBusinessAccountProps {
    shouldGetBusinessData?: boolean;
}

const useBusinessAccount = ({ shouldGetBusinessData = true }: UseBusinessAccountProps = {}) => {
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
            website: '',
            logo: null,
        },
        businessDetails: {
            business_scale_id: null,
            business_category_id: null,
            business_category_type_id: [],
            sale_type_id: [],
            business_type_id: [],
        }
    })
    const [ businessData, setBusinessData ] = React.useState<BusinessData>();

    const { countries, states, isLoadingStates, getStates } = useCountry();
    const { setBusinessAccounts } = useAppContext();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const updateId = searchParams.get("updateId");

    const handleInput = (fieldKey: string, value: any) => {
        const [ parent, child ] = fieldKey.split('.');

        setInputs(prev => ({
            ...prev,
            [parent]: {
                ...prev[parent as keyof InputProps],
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
            website,
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
        // if(!website) throw new Error('Enter address');
        if((!logo || !(logo instanceof File)) && !updateId) throw new Error('Enter business logo');
        if(!business_scale_id) throw new Error('Select business scale');
        if(!business_category_id) throw new Error('Select business category');
        if(!business_category_type_id) throw new Error('Select business category type');
        if(!sale_type_id) throw new Error('Select business sales type');
        if(!business_type_id) throw new Error('Select business type');

        console.log('sale_type_id', sale_type_id)


        const businessAccount = new FormData();
        businessAccount.append('name', name);
        businessAccount.append('store_name', store_name);
        businessAccount.append('country_id', country_id);
        businessAccount.append('state_id', state_id);
        businessAccount.append('description', description);
        businessAccount.append('address', address);
        if(logo && logo instanceof File) {
            businessAccount.append('logo', logo);
        }
        if(website) {
            businessAccount.append('website', website);
        }
        if(updateId) {
            businessAccount.append('business_id', updateId);
        }
        businessAccount.append('business_scale_id', String(business_scale_id));
        businessAccount.append('business_category_id', String(business_category_id));
        business_category_type_id.forEach(id => {
            businessAccount.append('business_category_type_id[]', String(id));
        });
        sale_type_id.forEach(id => {
            businessAccount.append('sale_type_id[]', String(id));
        });
        business_type_id.forEach(id => {
            businessAccount.append('business_type_id[]', String(id));
        });

        return businessAccount
    }

    const handleCreateBusiness = async () => {
        try {
            setIsSaving(true);

            const businessAccount = validateBusinessAccount();

            const { data: businessAccountResponse } = await axiosClient.post(
                'user/business/create-business-account', 
                businessAccount,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );

            const { data: response } = await axiosClient.get('user/business/list-business-account');
            setBusinessAccounts(response.data)

            toast.success(businessAccountResponse.message);

            navigate('/business/all')

        } catch(error) {
            toast.error(error instanceof Error ? error.message : 'Something went wrong')
        } finally {
            setIsSaving(false);
        }
    }

    const handleUpdateBusiness = async () => {
        try {
            setIsSaving(true);

            const businessAccount = validateBusinessAccount();

            return

            const { data: businessAccountResponse } = await axiosClient.post(
                'user/business/update-business-account', 
                businessAccount,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );

            const { data: response } = await axiosClient.get('user/business/list-business-account');
            setBusinessAccounts(response.data)

            toast.success(businessAccountResponse.message);
        } catch(error) {
            toast.error(error instanceof Error ? error.message : 'Something went wrong')
        } finally {
            setIsSaving(false);
        }
    }

    const handleDeleteBusiness = async (id: number) => {
        try {
            setIsSaving(true);

            const { data: response } = await axiosClient.get(`user/business/delete-business-account?businessId=${id}`);

            setBusinessAccounts(prev => prev.filter(item => item.id !== id));
            toast.success(response.message);
            navigate('/business/all');

        } catch(error) {
            toast.error(error instanceof Error ? error.message : 'Something went wrong')
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

    const getBusinessDetails = async () => {
        try {
            setIsLoading(true);
            if(!businessData) return;

            const { data: response } = await axiosClient.get(`user/business/fetch-business-account?businessId=${updateId}`);
            const businessDetails = response.data as BusinessAccountDetails;

            const { 
                address, 
                description, 
                logo, 
                link, 
                name, 
                storeName,
                salesType, 
                businessType,
                businessCategoryType,
                businessSpeciality,
            } = businessDetails;

            const { businessScales, categories } = businessData;

             console.log('business salea type', businessData?.businessTypes);
                console.log('input salea type', businessType);

            const businessScale = businessScales.find(item => item.scale === businessSpeciality.businessScale);
            const businessCategory = categories.find(item => item.category === businessSpeciality.businessCategory);

            await getStates(+address.countryId);

            setInputs({
                businessAccount: {
                    address: address.address,
                    country_id: address.countryId,
                    state_id: address.stateId,
                    description: description || '',
                    logo: logo,
                    website: link || '',
                    name: name,
                    store_name: storeName,
                },
                businessDetails: {
                    business_scale_id: businessScale?.id || 0,
                    business_category_id: businessCategory?.id || 0,
                    business_category_type_id: businessCategoryType.map(item => item.id),
                    sale_type_id: salesType.map(item => item.id),
                    business_type_id: businessType.map(item => item.id),
                }
            })

        } catch(error) {
            navigate('/business/all')
        } finally {
            setIsLoading(false);
        }
    }


    React.useEffect(() => {
		if (updateId) getBusinessDetails();

	}, [businessData])

    React.useEffect(() => {
        if(shouldGetBusinessData) getBusinessData();
    }, [])

    return {
        isLoading,
        isSaving,
        businessData,
        inputs,
        countries,
        states,
        isLoadingStates,
        getStates,
        setInputs,
        handleCreateBusiness,
        handleInput,
        handleArrayInput,
        handleUpdateBusiness,
        handleDeleteBusiness,
    }
}

export default useBusinessAccount;