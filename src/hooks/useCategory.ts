import React from "react";
import axiosClient from "../utils/axiosClient";
import { Category, SubCategory } from "../types/category.type";
import { useParams } from "react-router-dom";
import { Product } from "../types/product.type";
import useProduct from "./useProduct";
import { useAppContext } from "../context/AppContext";

let fetchedCategories: Category[] = [];
let fetchedSubCategories: Record<string, SubCategory[]> = {};

const useCategory = () => {
    const [ isLoading, setIsLoading ] = React.useState({
        categories: true,
        subCategories: false,
        products: false,
    });
    const [ categories, setCategories ] = React.useState<Category[]>([]);
    const [ subCategories, setSubCategories ] = React.useState<SubCategory[]>([]);

    const { categoryId } = useParams();
    const { isLoading: isLoadingProduct, allProducts, paginationData, getAllProducts, handlePaginate } = useProduct({ shouldGetCategory: false, shouldGetBusinessCategoryType: false });

    const getCategories = async () => {
        try {
            if(fetchedCategories.length) {
                return setCategories(fetchedCategories);
            }

            const { data: response } = await axiosClient.get('/product/product-category-list');
            setCategories(response.data);
            fetchedCategories = response.data;
        } catch(error) {
            
        } finally {
            setIsLoading(prev => ({
                ...prev,
                categories: false
            }));
        }
    }

    const getSubCategory = async (categoryId: number) => {
        try {
            setIsLoading(prev => ({
                ...prev,
                subCategories: true,
                products: true,
            }));

            if(fetchedSubCategories[categoryId] && fetchedSubCategories[categoryId].length) {
                return setSubCategories(fetchedSubCategories[categoryId]);
            }

            const [ subCategoryData ] = await Promise.all([
                axiosClient.get(`product/product-sub-category-list?categoryId=${categoryId}`),
                getAllProducts({ categoryId })
            ])

            const subCategories: SubCategory[] = subCategoryData.data.data;
            setSubCategories(subCategories);
            fetchedSubCategories[categoryId] = subCategories;
            
            return subCategories;
        } catch(error) {
            return [];
        } finally {
            setIsLoading(prev => ({
                ...prev,
                subCategories: false,
                products: false,
            }));
        }
    }

    const handleProductPaginate = async (page: number) => {
        try {
            setIsLoading(prev => ({
                ...prev,
                products: true
            }));

            handlePaginate(page);

        } catch(error) {

        } finally {
            setIsLoading(prev => ({
                ...prev,
                products: false
            }));
        }
    }

    React.useEffect(() => {
        getCategories();
    }, [])

    React.useEffect(() => {
        if(categoryId) getSubCategory(+categoryId);
    }, [categoryId])

    React.useEffect(() => {
        setIsLoading(prev => ({
            ...prev,
            products: isLoadingProduct.allProducts
        }));
    }, [isLoadingProduct.allProducts])


    return {
        isLoading,
        categories,
        subCategories,
        products: allProducts,
        paginationData,
        getSubCategory,
        handlePaginate: handleProductPaginate,
        getAllProducts,
    }
}

export default useCategory;