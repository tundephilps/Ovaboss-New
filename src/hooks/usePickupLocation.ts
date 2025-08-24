import React from 'react';
import { PickupLocation, PickupLocationInput } from '../types/pickup-location.type';
import axiosClient from '../utils/axiosClient';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';
import { camelToSnake } from '../utils';

const usePickupLocation = () => {
    const defaultInput = {
        business_id: 0,
        description: '',
        full_address: '',
        phone: '',
        pick_up_time: '',
        title: '',
    }
    const [ isLoading, setIsLoading ] = React.useState(true);
    const [ isSaving, setIsSaving ] = React.useState(false);
    const [ pickupLocations, setPickupLocations ] = React.useState<PickupLocation[]>([]);
    const [ inputs, setInputs ] = React.useState<PickupLocationInput>(defaultInput);
    const [ modalVisible, setModalVisible ] = React.useState<'ADD' | 'UPDATE' | null>(null);

    const { selectedBusinessAccount } = useAppContext();

    const handleInput = (field: keyof typeof inputs, value: string | number) => {
        setInputs(prev => ({
            ...prev,
            [field]: value,
        }))
    }

    const getPickupLocations = async () => {
        try {
            setIsLoading(true);
            const { data: response } = await axiosClient.get(`user/business/list-pick-up-locations?businessId=${selectedBusinessAccount?.id}`);
            setPickupLocations(response.data)
        } catch(error) {

        } finally {
            setIsLoading(false);
        }
    }

    const validateInputs = () => {
        const {
            id,
            description,
            full_address,
            phone,
            pick_up_time,
            title,
        } = inputs;

        if(!title) throw new Error('Enter title');
        if(!phone) throw new Error('Enter phone number');
        if(!pick_up_time) throw new Error('Enter pickup time');
        if(!full_address) throw new Error('Enter full address');
        if(!description) throw new Error('Enter description');

        return {
            ...inputs,
            id,
            business_id: id ? undefined : selectedBusinessAccount?.id,
        };
    }

    const handleAddPickupLocation = async () => {
        try {
            setIsSaving(true);
            const inputs = validateInputs();

            const { data: response } = await axiosClient.post('user/business/create-pick-up-location', inputs);
            await getPickupLocations();

            setModalVisible(null);
            toast.success(response.message);
        } catch(error) {
            toast.error(error instanceof Error ? error.message : 'Something went wrong adding pickup location');
        } finally {
            setIsSaving(false);
        }
    }

    const handleUpdatePickupLocation = async () => {
        try {
            setIsSaving(true);
            const inputs = validateInputs();

            const { data: response } = await axiosClient.post('user/business/update-pick-up-location', inputs);
            await getPickupLocations();

            setModalVisible(null);
            toast.success(response.message);
        } catch(error) {
            toast.error(error instanceof Error ? error.message : 'Something went wrong updating pickup location');
        } finally {
            setIsSaving(false);
        }
    }

    const handleDeletePickupLocation = async (id: number) => {
        try {
            setIsSaving(true);
            const { data: response } = await axiosClient.get(`user/business/delete-pick-up-location?pickUpLocationId=${id}`);

            setPickupLocations(prev => prev.filter(item => item.id !== id));
            setModalVisible(null);
            toast.success(response.message);
        } catch(error){
            toast.error(error instanceof Error ? error.message : 'Something went wrong deleting pickup location');
        } finally {
            setIsSaving(false);
        }
    }

    const handleOpenModal = (type: 'ADD' | 'UPDATE', data?: PickupLocation) => {
        setModalVisible(type);
        if(type === 'UPDATE' && data) {
            // convert keys from camelCase to snake_case
            const transformed = Object.entries(data).reduce((acc, [key, value]) => {
                const snakeKey = camelToSnake(key) as keyof typeof inputs;
                (acc as any)[snakeKey] = value;
                return acc;
            }, {} as PickupLocationInput);
            setInputs({...transformed, full_address: data.address});
            return;
        }

        setInputs(defaultInput)
    }

    React.useEffect(() => {
        getPickupLocations();
    }, [selectedBusinessAccount])

    return {
        isLoading,
        isSaving,
        modalVisible,
        pickupLocations,
        inputs,
        setModalVisible,
        handleInput,
        handleAddPickupLocation,
        handleUpdatePickupLocation,
        handleDeletePickupLocation,
        handleOpenModal,
    }
}

export default usePickupLocation;