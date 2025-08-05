import React from "react";
import axiosClient from "../utils/axiosClient";
import { Category } from "../types/category.type";

const useCategory = () => {
    const [ isLoading, setIsLoading ] = React.useState(true);
    const [ categories, setCategories ] = React.useState<Category[]>([]);

    const getCategories = async () => {
        try {
            const { data: response } = await axiosClient('/product/product-category-list');
            setCategories(response.data)
        } catch(error) {
            
        } finally {
            setIsLoading(false);
        }
    }

    React.useEffect(() => {
        getCategories();
    }, [])

    return {
        isLoading,
        categories,
    }
}

export default useCategory;