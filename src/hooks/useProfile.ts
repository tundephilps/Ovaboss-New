import React from "react";
import { useAppContext } from "../context/AppContext";
import axiosClient from "../utils/axiosClient";
import toast from "react-hot-toast";

const useProfile = () => {

    const { user } = useAppContext();

    const [ inputs, setInputs ] = React.useState({
        firstname: user?.firstname,
        lastname: user?.lastname,
        date_of_birth: user?.dateOfBirth,
        gender: user?.gender,
        email: user?.email,
        // country_id: user?.country,
        profile_picture: user?.profile_picture,
        phone_number: user?.phone_number,
    });
    const [ isLoading, setIsLoading ] = React.useState(false);

    const handleInput = (field: string, value: any) => {
        setInputs(prev => ({
            ...prev,
            [field]: value,
        }))
    }

    const handleUpdateProfile = async () => {
        try {
            setIsLoading(true);

            const formData = new FormData();

            for(const key in inputs) {
                let value = inputs[key];

                if(key === 'profile_picture' && typeof value === 'string' && value) {
                    value = undefined;
                }

                formData.append(key, inputs[key])
            }

            const { data: response } = await axiosClient.post('/user/update-profile', formData);

            toast.success(response.message);

        } catch(error) {
            toast.error(error.message)
        } finally {
            setIsLoading(false);
        }
    }

    return {
        inputs,
        isLoading,
        handleInput,
        handleUpdateProfile,
    }
}

export default useProfile;