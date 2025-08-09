import React from "react";
import toast from "react-hot-toast";
import axiosClient from "../utils/axiosClient";
import { useParams } from "react-router-dom";

const useReview = () => {
    const [ isLoading, setIsLoading ] = React.useState(false);
    const [ inputs, setInputs ] = React.useState({
        star: '0',
        review: '',
    })

    const { productId } = useParams();

    const handleInput = (field: keyof typeof inputs, value: any) => {
        setInputs(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const handleAddReview = async (callback?: () => void) => {
        try {
            setIsLoading(true);
            const { data: response } = await axiosClient.post('product/create-product-review', {
                product_id: productId,
                ...inputs
            })

            if(callback) callback();
            toast.success(response.message);
        } catch(error) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return {
        isLoading,
        inputs,
        handleInput,
        handleAddReview,
    }
}

export default useReview;