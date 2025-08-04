import React from "react";
import { useAppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import axiosClient from "../utils/axiosClient";
import { FullProduct } from "../types/product.type";
import toast from "react-hot-toast";
import { Cart, UseCart } from "../types/cart.type";

let fetchedCarts: Cart[] = [];

const useCart = ({ shouldGetCart }: UseCart = {}) => {
    const [ isLoading, setIsLoading ] = React.useState(false);
    const [ isSaving, setIsSaving ] = React.useState(false);
    const [ carts, setCarts ] = React.useState<Cart[]>([]);

    const { setTotalCarts } = useAppContext();

    const getAllCarts = async () => {
        try {
            setIsLoading(true);
            if(fetchedCarts.length) {
                setCarts(fetchedCarts);
                return;
            }

            const { data: response } = await axiosClient.get('/product/list-cart');
            setCarts(response.data);
            fetchedCarts = response.data as Cart[];
        } catch(error) {

        } finally {
            setIsLoading(false);
        }
    }

    const handleRemoveCart = async (product_id: number, variant_id: number) => {
        try {
            setIsSaving(true);
            const { data: response } = await axiosClient.post('/product/remove-from-cart', {
                product_id,
                variant_id,
            });

            setCarts(prev => prev.filter(item => item.productId !== product_id && item.variantDetails.id !== variant_id));
            setTotalCarts(prev => prev - 1);
            toast.success(response.message);
        } catch(error) {
            toast.error(error.message);
        } finally {
            setIsSaving(false);
        }
    }

    const handleAddToCart = async (productId: number | string, selectedVariant?: number) => {
        try {
            setIsSaving(true);
            if(!selectedVariant) {
                throw new Error('Select a variant');
            }

            const { data: response } = await axiosClient.post('/product/add-to-cart', {
                product_id: productId,
                variant_id: selectedVariant,
            });
            setTotalCarts(prev => prev + 1);
            toast.success(response.message);
        } catch(error) {
            toast.error(error.message);
        } finally {
            setIsSaving(false);
        }
    }

    React.useEffect(() => {
        if(shouldGetCart) getAllCarts();
    }, [])

    return {
        isLoading,
        isSaving,
        carts,
        handleAddToCart,
        handleRemoveCart,
    }
}

export default useCart;