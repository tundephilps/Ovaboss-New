import React from "react";
import toast from "react-hot-toast";
import axiosClient from "../utils/axiosClient";

const useReview = () => {
    const [ isLoading, setIsLoading ] = React.useState(false);
    const [ inputs, setInputs ] = React.useState({
        star: 0,
        review: '',
    })

    const handleAddReview = async () => {
        try {
            setIsLoading(true);
            const { data: response } = await axiosClient.post('product/create-product-review', {
                product_id: '',
                ...inputs
            })

            toast.success(response.message);
        } catch(error) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    }
}

export default useReview;